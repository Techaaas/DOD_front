import React, {useState} from 'react';
import FileUploader from '../file_uploader/FileUploader'; // Adjust the import path as necessary
import './ButtonStatments.css';
import { useNavigate } from 'react-router-dom';

type ButtonStatementsProps = {
  onFileSubmitStatement: () => void;
  onFileSelectionStatement: (select: boolean) => void
};

const ButtonStatements: React.FC<ButtonStatementsProps> = ({onFileSubmitStatement, onFileSelectionStatement}) => {

  const [showUploadStatement, setShowUpload] = useState(true);
  const [showTakePhotoStatement, setShowTakePhoto] = useState(true);
  const navigate = useNavigate();
  const handleTakePhotoClick = () => {
    setShowUpload(false);
    navigate('/take_photo')
  };

  const handleFileRemoved = () => {
    setShowUpload(true);
    setShowTakePhoto(true);
    console.log("showUpload:", showUploadStatement);
    console.log("showTakePhoto:", showTakePhotoStatement);
  };
  const handleFileSelected = () => {
    setShowTakePhoto(false);
  };

  return (
      <div>
        <div className='buttons_statement'>
          {showUploadStatement && (
              <div>
                <FileUploader onSubmit={onFileSubmitStatement}
                              onFileRemove={handleFileRemoved}
                              onFileSelected={handleFileSelected}
                              onSelected={onFileSelectionStatement}/>
              </div>
          )}
          {showTakePhotoStatement && (
              <div onClick={handleTakePhotoClick}>
                <button className='take_photo_passport'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                        d="M11.5 3.16667H9.65083L8.58333 2H5.08333L4.01583 3.16667H2.16667C1.85725 3.16667 1.5605 3.28958 1.34171 3.50838C1.12292 3.72717 1 4.02391 1 4.33333V11.3333C1 11.6428 1.12292 11.9395 1.34171 12.1583C1.5605 12.3771 1.85725 12.5 2.16667 12.5H11.5C11.8094 12.5 12.1062 12.3771 12.325 12.1583C12.5438 11.9395 12.6667 11.6428 12.6667 11.3333V4.33333C12.6667 4.02391 12.5438 3.72717 12.325 3.50838C12.1062 3.28958 11.8094 3.16667 11.5 3.16667ZM11.5 11.3333H2.16667V4.33333H4.52917L5.59667 3.16667H8.07L9.1375 4.33333H11.5V11.3333ZM6.83333 4.91667C6.05979 4.91667 5.31792 5.22396 4.77094 5.77094C4.22396 6.31792 3.91667 7.05978 3.91667 7.83333C3.91667 8.60688 4.22396 9.34875 4.77094 9.89573C5.31792 10.4427 6.05979 10.75 6.83333 10.75C7.60688 10.75 8.34875 10.4427 8.89573 9.89573C9.44271 9.34875 9.75 8.60688 9.75 7.83333C9.75 7.05978 9.44271 6.31792 8.89573 5.77094C8.34875 5.22396 7.60688 4.91667 6.83333 4.91667ZM6.83333 9.58333C6.3692 9.58333 5.92409 9.39896 5.5959 9.07077C5.26771 8.74258 5.08333 8.29746 5.08333 7.83333C5.08333 7.3692 5.26771 6.92408 5.5959 6.5959C5.92409 6.26771 6.3692 6.08333 6.83333 6.08333C7.29746 6.08333 7.74258 6.26771 8.07077 6.5959C8.39896 6.92408 8.58333 7.3692 8.58333 7.83333C8.58333 8.29746 8.39896 8.74258 8.07077 9.07077C7.74258 9.39896 7.29746 9.58333 6.83333 9.58333Z"
                        fill="#ECECEC"/>
                  </svg>
                  Take photo
                </button>
              </div>
          )}
        </div>
      </div>
  );
};

export default ButtonStatements;
