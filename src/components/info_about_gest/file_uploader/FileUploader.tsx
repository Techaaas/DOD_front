import React, {useEffect, useState} from 'react';
import './FileUploader.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import { setPassportFile, setStatementFile } from "@/store/Slice/guestFileState";
import Image from "next/image";

type FileUploaderProps = {
  type: 'statement' | 'passport';
  onSelected: (select: boolean) => void;
  onSubmit: () => void
  onFileRemove: () => void
  onFileSelected: () => void;
};

export const FileUploader: React.FC<FileUploaderProps> = ({type, onFileRemove, onFileSelected, onSelected}) => {
  const dispatch = useDispatch();
  const statementFile = useSelector((state: RootState) => state.file.statementFile);
  const passportFile = useSelector((state: RootState) => state.file.passportFile);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (type === 'statement' && statementFile) {
      setSelectedFile(statementFile);
    } else if (type === 'passport' && passportFile) {
      setSelectedFile(passportFile);
    }
  }, [statementFile, passportFile, type]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file && file.type === "image/jpeg") {
      setSelectedFile(file);
      onFileSelected();
      onSelected(true);
      if (type === 'statement') {
        dispatch(setStatementFile(file));
      } else if (type === 'passport') {
        dispatch(setPassportFile(file));
      }

    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    onFileRemove();
    onSelected(false);
    console.log('File removed');
    if (type === 'statement') {
      dispatch(setStatementFile(null));
    } else if (type === 'passport') {
      dispatch(setPassportFile(null));
    }
  };


  return (
      <div className="file-uploader">
        {selectedFile ? (
            <div>
              <div className='file_name'>
                <span>
                  <section>
                    <p className='icon_name'>
                      <Image src="/Img_icon.svg"
                             alt="img"
                             className="img_icon"
                             width={14}
                             height={14}/>
                      {selectedFile.name.length > 20 ? `${selectedFile.name.slice(0, 20)}...` : selectedFile.name}
                    </p>
                  </section>
                  <section className="file_buttons">
                    <button onClick={handleFileRemove}>
                      <Image src="/Trash_icon.svg"
                             alt="trash"
                             className="trash_icon"
                             width={15}
                             height={15}/>
                    </button>
                  </section>
                </span>
              </div>
            </div>
        ) : (
            <form method="post" encType='multipart/form-data'>
              <label className='input-file'>
                <input type="file" onChange={handleFileChange} accept="image/jpeg"/>
                <Image src="/Upload_icon.svg"
                       alt="up"
                       className="upload_icon"
                       width={12}
                       height={12}/>
                Upload photo
              </label>
            </form>
        )}
      </div>
  );
};

