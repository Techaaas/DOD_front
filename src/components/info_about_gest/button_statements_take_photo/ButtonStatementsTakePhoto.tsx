import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setStatementImage} from "@/store/Slice/guestImgState";
import Link from "next/link";
import './ButtonStatementsTakePhoto.css'

interface ButtonTakePhotoProps {
  type: 'statement' | 'passport';
  onFileReceived: (fileName: string, fileData: string | null) => void; // Функция вызывается, когда файл получен
  onFileRemoved: () => void;
  onSelected: (select: boolean) => void;
}

const ButtonStatementsTakePhoto: React.FC<ButtonTakePhotoProps> = ({ type, onFileReceived, onFileRemoved, onSelected}) => {
  const dispatch = useDispatch();
  const statementImage = useSelector((state: RootState) => state.image.statementImage);
  const passportImage = useSelector((state: RootState) => state.image.passportImage);

  const [imageData, setImageData] = useState<string | null>(null);


  useEffect(() => {
    const currentImage = type === 'statement' ? statementImage : passportImage;
    if (currentImage) {
      const imageName = `image_${new Date().toISOString()}.jpg`;
      setImageData(imageName);
      onFileReceived(imageName, currentImage);
    }
  }, [statementImage, passportImage, type, onFileReceived]);



  const handleFileRemove = () => {
    setImageData(null);
    onFileRemoved();
    onSelected(false)
    dispatch(setStatementImage(null));
  };

  return (
      <div>
        {!imageData ? (
            <Link href={"qr/photo_stat"} className='take_photo_statement'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                      d="M11.5 3.16667H9.65083L8.58333 2H5.08333L4.01583 3.16667H2.16667C1.85725 3.16667 1.5605 3.28958 1.34171 3.50838C1.12292 3.72717 1 4.02391 1 4.33333V11.3333C1 11.6428 1.12292 11.9395 1.34171 12.1583C1.5605 12.3771 1.85725 12.5 2.16667 12.5H11.5C11.8094 12.5 12.1062 12.3771 12.325 12.1583C12.5438 11.9395 12.6667 11.6428 12.6667 11.3333V4.33333C12.6667 4.02391 12.5438 3.72717 12.325 3.50838C12.1062 3.28958 11.8094 3.16667 11.5 3.16667ZM11.5 11.3333H2.16667V4.33333H4.52917L5.59667 3.16667H8.07L9.1375 4.33333H11.5V11.3333ZM6.83333 4.91667C6.05979 4.91667 5.31792 5.22396 4.77094 5.77094C4.22396 6.31792 3.91667 7.05978 3.91667 7.83333C3.91667 8.60688 4.22396 9.34875 4.77094 9.89573C5.31792 10.4427 6.05979 10.75 6.83333 10.75C7.60688 10.75 8.34875 10.4427 8.89573 9.89573C9.44271 9.34875 9.75 8.60688 9.75 7.83333C9.75 7.05978 9.44271 6.31792 8.89573 5.77094C8.34875 5.22396 7.60688 4.91667 6.83333 4.91667ZM6.83333 9.58333C6.3692 9.58333 5.92409 9.39896 5.5959 9.07077C5.26771 8.74258 5.08333 8.29746 5.08333 7.83333C5.08333 7.3692 5.26771 6.92408 5.5959 6.5959C5.92409 6.26771 6.3692 6.08333 6.83333 6.08333C7.29746 6.08333 7.74258 6.26771 8.07077 6.5959C8.39896 6.92408 8.58333 7.3692 8.58333 7.83333C8.58333 8.29746 8.39896 8.74258 8.07077 9.07077C7.74258 9.39896 7.29746 9.58333 6.83333 9.58333Z"
                      fill="#ECECEC"/>
                </svg>
                Take photo
            </Link>
        ) : (
            <div className="file-info">
              <span>
                  <section>
                    <p className='icon_name_stat'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                            d="M2.91667 12.25C2.59583 12.25 2.32108 12.1357 2.09242 11.907C1.86375 11.6783 1.74961 11.4038 1.75 11.0833V2.91667C1.75 2.59583 1.86433 2.32108 2.093 2.09242C2.32167 1.86375 2.59622 1.74961 2.91667 1.75H11.0833C11.4042 1.75 11.6789 1.86433 11.9076 2.093C12.1363 2.32167 12.2504 2.59622 12.25 2.91667V11.0833C12.25 11.4042 12.1357 11.6789 11.907 11.9076C11.6783 12.1363 11.4038 12.2504 11.0833 12.25H2.91667ZM2.91667 11.0833H11.0833V2.91667H2.91667V11.0833ZM3.5 9.91667H10.5L8.3125 7L6.5625 9.33333L5.25 7.58333L3.5 9.91667Z"
                            fill="#8E8E8E"/>
                      </svg>
                      {imageData.length > 20 ? `${imageData.slice(0, 20)}...` : imageData}
                    </p>
                  </section>
                  <section className="file_buttons">
                    <button onClick={handleFileRemove}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                            d="M3.30878 13.3088C3.30878 13.6988 3.46372 14.0729 3.73951 14.3487C4.01529 14.6245 4.38934 14.7794 4.77937 14.7794H10.6617C11.0517 14.7794 11.4258 14.6245 11.7016 14.3487C11.9774 14.0729 12.1323 13.6988 12.1323 13.3088V4.48529H3.30878V13.3088ZM4.77937 5.95588H10.6617V13.3088H4.77937V5.95588ZM10.2941 2.27941L9.55878 1.54411H5.88231L5.14702 2.27941H2.57349V3.75H12.8676V2.27941H10.2941Z"
                            fill="#E54600"/>
                      </svg>
                    </button>
                  </section>
                </span>
            </div>
        )}
      </div>
  );
};

export default ButtonStatementsTakePhoto;
