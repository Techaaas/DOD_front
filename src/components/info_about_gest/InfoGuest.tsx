import React, {FC} from 'react';
import './InfoGuest.css'
interface InfoGuestProps{
  visible: boolean
  name: string
  surname: string
}

const InfoGuest: FC<InfoGuestProps> = ({visible, surname, name}) => {
  if (!visible) return null
  return (
      <div className='info_guest'>
        <div className='info_guest-dialog' onClick={e => e.stopPropagation()}>
          <div className='info_guest-header'>
            <div className='info_guest-title'>Participant form</div>
          </div>
          {/*Весь контент в сплывающем окне*/}
          <ul className='info_guest-body'>
            <li className='info_guest-name'>
              <div className='info_guest-name-title'>Participant name</div>
              <div className='info_guest-name-content'>{name}</div>
            </li>
            <li className='info_guest-surname'>
              <div className='info_guest-surname-title'>Participant surname</div>
              <div className='info_guest-surname-content'>{surname}</div>
            </li>
            <li className='info_guest-statement'>
              <div className='info_guest-statement-title'>Copy of statement <span>*</span></div>
              <div className='info_guest-statement-content'>
                {/*Галочка для выбора между тем есть ли у посетителя копия документа или нет*/}
                <ul className='Yes_No'>
                  <li>
                      <input type={"radio"} className='radio' id='radio-1'/>
                      <label htmlFor='radio-1'>Yes</label>
                  </li>
                  <li>
                    <input type={"radio"} className='radio' id='radio-2'/>
                    <label htmlFor='radio-2'>No</label>
                  </li>
                </ul>
                {/*Создание фото или загрузка его на сайт*/}
                <ul className='Upload_Take_Photo'>
                  <li>
                    <input type={"file"} id='file-1'/>
                  </li>
                  <li>
                    <button>Take photo</button>
                  </li>
                </ul>
              </div>
            </li>
            <li className='info_guest-passport'>
              <div className='info_guest-passport-title'>Copy of passport <span>*</span></div>
              <div className='info_guest-passport-content'>
                <ul className='Yes_No'>
                  <li>
                    <input type={"radio"} className='radio' id='radio-1'/>
                    <label htmlFor='radio-1'>Yes</label>
                  </li>
                  <li>
                    <input type={"radio"} className='radio' id='radio-2'/>
                    <label htmlFor='radio-2'>No</label>
                  </li>
                </ul>
                <ul className='Upload_Take_Photo'>
                  <li>
                    <input type={"file"} id='file-2'/>
                  </li>
                  <li>
                    <button>Take photo</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/*Кнопка подтверждения*/}
          <button>Submit</button>
        </div>
      </div>
  );
};

export default InfoGuest;