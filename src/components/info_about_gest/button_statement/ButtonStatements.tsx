import React, {useEffect, useState} from 'react';
import FileUploader from '../file_uploader/FileUploader'; // Adjust the import path as necessary
import './ButtonStatments.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import { setStatementFile} from "@/store/Slice/guestFileState";
import ButtonStatementsTakePhoto from "@/components/info_about_gest/button_statements_take_photo/ButtonStatementsTakePhoto";
import {setStatementImage} from "@/store/Slice/guestImgState";

interface ButtonStatementsProps {
  onFileSelectionStatement: (select: boolean) => void;
  onFileSubmitStatement: () => void
  onImgSelectionStatement: (select: boolean) => void;
}

const ButtonStatements: React.FC<ButtonStatementsProps> = ({onFileSubmitStatement, onFileSelectionStatement, onImgSelectionStatement}) => {

  const dispatch = useDispatch();
  const selectedFile = useSelector((state: RootState) => state.file.statementFile);
  const selectedPhotoStat = useSelector((state: RootState) => state.image.statementImage)

  const [showUploadStatement, setShowUpload] = useState(true);
  const [showTakePhotoStatement, setShowTakePhoto] = useState(true);

  useEffect(() => {
    // Если файл был загружен, обновите видимость кнопок
    if (selectedFile) {
      setShowUpload(true);
      setShowTakePhoto(false);

    }
    else if (selectedPhotoStat) {
      setShowUpload(false);
      setShowTakePhoto(true);
    }
    else {
      setShowUpload(true);
      setShowTakePhoto(true);
    }
  }, [selectedFile, onFileSelectionStatement]);


  const handleFileRemoved = () => {
    dispatch(setStatementFile(null)); // Очистите состояние файла в Redux
    setShowUpload(true);
    setShowTakePhoto(true);
    console.log("showUpload:", showUploadStatement);
    console.log("showTakePhoto:", showTakePhotoStatement);
  };

  const handleTakePhotoRemoved = () => {
    dispatch(setStatementImage(null));
    setShowUpload(true);
    setShowTakePhoto(true);
  }
  const handleFileSelected = () => {
    setShowTakePhoto(false);
    onFileSelectionStatement(true);
  };

  const handleTakePhoto = () =>{
    setShowUpload(false)
    onFileSelectionStatement(true)
  }

  return (
      <div>
        <div className='buttons_statement'>
          {showUploadStatement && (
              <div>
                <FileUploader type="statement" onSubmit={onFileSubmitStatement}
                              onFileRemove={handleFileRemoved}
                              onFileSelected={handleFileSelected}
                              onSelected={onFileSelectionStatement}/>
              </div>
          )}
          {showTakePhotoStatement && (
              <div>
                <button>
                  <ButtonStatementsTakePhoto onSelected={onImgSelectionStatement} type='statement' onFileReceived={handleTakePhoto} onFileRemoved={handleTakePhotoRemoved}/>
                </button>
              </div>
          )}
        </div>
      </div>
  );
};

export default ButtonStatements;
