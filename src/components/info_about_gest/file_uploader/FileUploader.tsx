import React, { useState } from 'react';
import './FileUploader.css'

type FileUploaderProps = {
  onSubmit: () => void;
  onFileRemove:() => void
  onFileSubmit?: () => void;
};

const FileUploader: React.FC<FileUploaderProps> = ({ onFileRemove}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file && file.type === "image/jpeg") {
      setSelectedFile(file);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    onFileRemove()
    console.log("File removed")
  };


  return (
      <div className="file-uploader">
        {selectedFile ? (
            <div>
              <ul className='file_name'>
                <li>
                  <p className='icon_name'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.91667 12.25C2.59583 12.25 2.32108 12.1357 2.09242 11.907C1.86375 11.6783 1.74961 11.4038 1.75 11.0833V2.91667C1.75 2.59583 1.86433 2.32108 2.093 2.09242C2.32167 1.86375 2.59622 1.74961 2.91667 1.75H11.0833C11.4042 1.75 11.6789 1.86433 11.9076 2.093C12.1363 2.32167 12.2504 2.59622 12.25 2.91667V11.0833C12.25 11.4042 12.1357 11.6789 11.907 11.9076C11.6783 12.1363 11.4038 12.2504 11.0833 12.25H2.91667ZM2.91667 11.0833H11.0833V2.91667H2.91667V11.0833ZM3.5 9.91667H10.5L8.3125 7L6.5625 9.33333L5.25 7.58333L3.5 9.91667Z" fill="#8E8E8E"/>
                    </svg>
                    {selectedFile.name}
                  </p>
                </li>
                <li>
                  <button onClick={handleFileRemove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M3.30878 13.3088C3.30878 13.6988 3.46372 14.0729 3.73951 14.3487C4.01529 14.6245 4.38934 14.7794 4.77937 14.7794H10.6617C11.0517 14.7794 11.4258 14.6245 11.7016 14.3487C11.9774 14.0729 12.1323 13.6988 12.1323 13.3088V4.48529H3.30878V13.3088ZM4.77937 5.95588H10.6617V13.3088H4.77937V5.95588ZM10.2941 2.27941L9.55878 1.54411H5.88231L5.14702 2.27941H2.57349V3.75H12.8676V2.27941H10.2941Z" fill="#E54600"/>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
        ) : (
            <form method="post" encType='multipart/form-data'>
              <label className='input-file'>
                <input type="file" onChange={handleFileChange} accept="image/jpeg" />
                <span>Upload photo</span>
              </label>
            </form>
        )}
      </div>
  );
};

export default FileUploader;
