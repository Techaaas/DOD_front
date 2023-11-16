import React, {FC, useState} from 'react';
import './InfoGuest.css'
import ButtonStatements from "./button_statement/ButtonStatements";
import ButtonPassport from "./button_passport/ButtonPassport";
interface InfoGuestProps{
  visible: boolean
  name: string
  surname: string
}

const InfoGuest: FC<InfoGuestProps> = ({visible, surname, name}) => {

  const [isStatementSelected, setIsStatementSelected] = useState(false);
  const [isPassportSelected, setIsPassportSelected] = useState(false);
  if (!visible) return null;

  const handleStatementSelection = (selected: boolean) => {
    setIsStatementSelected(selected);
  };

  const handlePassportSelection = (selected: boolean) => {
    setIsPassportSelected(selected);
  };


  const handleSubmit = () => {
    console.log('File submitted');
  };





  return (
      <div className='info_guest' style={{ display: visible ? 'block' : 'none' }}>
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
                    <input
                        type="radio"
                        className='radio'
                        id='radio-1-statement'
                        name='statement-choice'
                        checked={isStatementSelected}
                        onChange={() => handleStatementSelection(true)}
                    />
                    <label htmlFor='radio-1-statement'>Yes</label>
                  </li>
                  <li>
                    <input
                        type="radio"
                        className='radio'
                        id='radio-2-statement'
                        name='statement-choice'
                        checked={!isStatementSelected}
                        onChange={() => handleStatementSelection(false)}
                    />
                    <label htmlFor='radio-2-statement'>No</label>
                  </li>
                </ul>
                {/*Создание фото или загрузка его на сайт*/}
                <ul className='upload_take_photo'>
                  <ButtonStatements
                      onFileSubmitStatement={handleSubmit}
                  />
                </ul>
              </div>
            </li>
            <li className='info_guest-passport'>
              <div className='info_guest-passport-title'>Copy of passport <span>*</span></div>
              <div className='info_guest-passport-content'>
                <ul className='Yes_No'>
                  <li>
                    <input
                        type="radio"
                        className='radio_button'
                        id='radio-1-passport'
                        name='passport-choice'
                        checked={isPassportSelected}
                        onChange={() => handlePassportSelection(true)}
                    />
                    <label htmlFor='radio-1-passport'>Yes</label>
                  </li>
                  <li>
                    <input
                        type="radio"
                        className='radio_button'
                        id='radio-2-passport'
                        name='passport-choice'
                        checked={!isPassportSelected}
                        onChange={() => handlePassportSelection(false)}
                    />
                    <label htmlFor='radio-2-passport'>No</label>
                  </li>
                </ul>
                <ul className='upload_take_photo'>
                  <ButtonPassport
                      onFileSubmitPassport={handleSubmit}
                  />
                </ul>
              </div>
            </li>
            {/*Кнопка подтверждения*/}
            <button className='button_submit' onClick={handleSubmit}>Submit</button>
          </ul>
        </div>
      </div>
  );
};

export default InfoGuest;