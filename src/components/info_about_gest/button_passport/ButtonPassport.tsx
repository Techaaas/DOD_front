import React, {useEffect, useState} from 'react';
import FileUploader from '../file_uploader/FileUploader'; // Adjust the import path as necessary
import './ButtonPassport.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setPassportFile, setStatementFile} from "@/store/Slice/guestFileState";
import ButtonPassportTakePhoto from "@/components/info_about_gest/button_passport_take_photo/ButtonPassportTakePhoto";

type ButtonPassportProps = {
  onFileSubmitPassport: () => void;
  onFileSelectionPassport: (select: boolean) => void
};


const ButtonPassport: React.FC<ButtonPassportProps> = ({onFileSubmitPassport, onFileSelectionPassport}) => {

  const dispatch = useDispatch();
  const selectedFile = useSelector((state: RootState) => state.file.passportFile);
  const selectedPhotoPass = useSelector((state: RootState) => state.image.passportImage)

  const [showUploadPassport, setShowUpload] = useState(true);
  const [showTakePhotoPassport, setShowTakePhoto] = useState(true);

  useEffect(() => {
    // Если файл был загружен, обновите видимость кнопок
    if (selectedFile) {
      setShowUpload(true);
      setShowTakePhoto(false);

    }
    else if (selectedPhotoPass) {
      setShowUpload(false);
      setShowTakePhoto(true);
    }
    else {
      setShowUpload(true);
      setShowTakePhoto(true);
    }
  }, [selectedFile, onFileSelectionPassport]);


  const handleTakePhotoRemoved = () => {
    dispatch(setStatementFile(null));
    setShowUpload(true);
    setShowTakePhoto(true);
  }
  const handleFileSelected = () => {
    setShowTakePhoto(false);
    onFileSelectionPassport(true); // или setShowUpload(false), в зависимости от того, какая кнопка должна скрываться
  };
  const handleFileRemoved = () => {
    dispatch(setPassportFile(null)); // Очистите состояние файла в Redux
    setShowUpload(true);
    setShowTakePhoto(true);
    setTimeout(() => {
      console.log("showUpload:", showUploadPassport);
      console.log("showTakePhoto:", showTakePhotoPassport);
    }, 0);
  };

  const handleTakePhoto = () =>{
    setShowUpload(false)
    onFileSelectionPassport(true)
  }


  return (
      <div className='buttons_passport'>
        {showUploadPassport && (
            <div>
              <FileUploader type="passport" onSubmit={onFileSubmitPassport} onFileRemove={handleFileRemoved}
                            onFileSelected={handleFileSelected} onSelected={onFileSelectionPassport}/>
            </div>
        )}
        {showTakePhotoPassport && (
            <div>
              <button>
                <ButtonPassportTakePhoto onSelected={onFileSelectionPassport} type='statement' onFileReceived={handleTakePhoto} onFileRemoved={handleTakePhotoRemoved}/>
              </button>
            </div>
        )}
      </div>
  );
};

export default ButtonPassport;
