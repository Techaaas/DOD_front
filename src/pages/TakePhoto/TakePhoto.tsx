import React, {FC, useCallback, useRef, useState} from 'react';
import Webcam from "react-webcam";
import './TakePhoto.css'
import {useNavigate} from 'react-router-dom';

interface TakePhotoProps {
  onFileSubmitTakePhoto?: (img: string | null) => void;
  onFileSelectionTakePhoto?: (select: boolean) => void
}

const TakePhoto: FC<TakePhotoProps> = ({onFileSubmitTakePhoto, onFileSelectionTakePhoto}) => {
  const [img, setImg] = useState<string | null>(null);
  const webcamRef = useRef<Webcam | null>(null);
  const navigate = useNavigate();

  const videoConstraints = {
    width: {min: 600},
    height: {min: 600},
    facingMode: {exact: "environment"}
  };

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc: string | null = webcamRef.current.getScreenshot();
      setImg(imageSrc);
    }
  }, [webcamRef]);

  const handleSubmit = () => {
    if (onFileSubmitTakePhoto) {
      onFileSubmitTakePhoto(img)
    }
    if (onFileSelectionTakePhoto) {
      onFileSelectionTakePhoto(true)
    }
    navigate(-1);
  };


  return (
      <div>
        <div className='container'>
          {img === null ? (
              <div>
                <div className='camera'>
                  <Webcam
                      audio={false}
                      height={360}
                      width={360}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      videoConstraints={videoConstraints}
                  />
                </div>
                <button className='button_take_photo' onClick={capture}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                    <path
                        d="M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35Z"
                        fill="#40BA21"/>
                  </svg>
                  <svg className='icon_photo' xmlns="http://www.w3.org/2000/svg" width="28" height="25"
                       viewBox="0 0 28 25" fill="none">
                    <g clipPath="url(#clip0_147_225)">
                      <path
                          d="M24.8572 2.49213H20.4544L17.9127 -0.285645H9.5794L7.03773 2.49213H2.63496C1.89824 2.49213 1.1917 2.78479 0.67077 3.30573C0.149836 3.82666 -0.142822 4.5332 -0.142822 5.26991V21.9366C-0.142822 22.6733 0.149836 23.3798 0.67077 23.9008C1.1917 24.4217 1.89824 24.7144 2.63496 24.7144H24.8572C25.5939 24.7144 26.3004 24.4217 26.8214 23.9008C27.3423 23.3798 27.635 22.6733 27.635 21.9366V5.26991C27.635 4.5332 27.3423 3.82666 26.8214 3.30573C26.3004 2.78479 25.5939 2.49213 24.8572 2.49213ZM24.8572 21.9366H2.63496V5.26991H8.25996L10.8016 2.49213H16.6905L19.2322 5.26991H24.8572V21.9366ZM13.7461 6.6588C11.9043 6.6588 10.1379 7.39044 8.8356 8.69278C7.53327 9.99512 6.80162 11.7615 6.80162 13.6032C6.80162 15.445 7.53327 17.2114 8.8356 18.5137C10.1379 19.816 11.9043 20.5477 13.7461 20.5477C15.5878 20.5477 17.3542 19.816 18.6565 18.5137C19.9589 17.2114 20.6905 15.445 20.6905 13.6032C20.6905 11.7615 19.9589 9.99512 18.6565 8.69278C17.3542 7.39044 15.5878 6.6588 13.7461 6.6588ZM13.7461 17.7699C12.641 17.7699 11.5812 17.3309 10.7998 16.5495C10.0184 15.7681 9.5794 14.7083 9.5794 13.6032C9.5794 12.4982 10.0184 11.4384 10.7998 10.657C11.5812 9.87556 12.641 9.43658 13.7461 9.43658C14.8511 9.43658 15.9109 9.87556 16.6923 10.657C17.4737 11.4384 17.9127 12.4982 17.9127 13.6032C17.9127 14.7083 17.4737 15.7681 16.6923 16.5495C15.9109 17.3309 14.8511 17.7699 13.7461 17.7699Z"
                          fill="#ECECEC"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_147_225">
                        <rect width="28" height="25" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className='button_close'>
                  {/* Добавьте кнопку закрытия */}
                  Close
                </button>
              </div>
          ) : (
              <div>
                <img className='camera_shot' src={img} alt="screenshot"/>
                <button className='button_retake_photo' onClick={() => setImg(null)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                    <path
                        d="M8.4734 14.6003C8.21738 14.8562 7.87021 15 7.50821 15C7.14621 15 6.79903 14.8562 6.54302 14.6003L0.399675 8.45695C0.143742 8.20094 -3.43323e-05 7.85376 -3.43323e-05 7.49176C-3.43323e-05 7.12976 0.143742 6.78258 0.399675 6.52657L6.54302 0.383225C6.8005 0.134545 7.14535 -0.00305748 7.50329 5.24521e-05C7.86124 0.00316334 8.20365 0.146738 8.45677 0.399855C8.70988 0.652972 8.85346 0.995378 8.85657 1.35333C8.85968 1.71127 8.72208 2.05612 8.4734 2.3136L4.77783 6.12657L17.7471 6.12657C18.1092 6.12657 18.4564 6.2704 18.7125 6.52643C18.9685 6.78245 19.1123 7.12969 19.1123 7.49176C19.1123 7.85383 18.9685 8.20107 18.7125 8.45709C18.4564 8.71311 18.1092 8.85695 17.7471 8.85695L4.77783 8.85695L8.4734 12.6699C8.72933 12.9259 8.8731 13.2731 8.8731 13.6351C8.8731 13.9971 8.72933 14.3443 8.4734 14.6003Z"
                        fill="#FFF"/>
                  </svg>
                  Retake
                </button>
                <button className='button_submit_photo' onClick={handleSubmit}>Submit</button>
              </div>
          )}
        </div>
      </div>
  );
};

export default TakePhoto;