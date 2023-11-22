'use client'

import React, {FC, useState} from 'react';
import './InfoGuest.css'
import ButtonStatements from "../button_statement/ButtonStatements";
import ButtonPassport from "../button_passport/ButtonPassport";
import axios from 'axios';
import data from '../../../data/info_guest.json'

interface InfoGuestProps {
  onClose: () => void;
}

const InfoGuest: FC<InfoGuestProps> = ({onClose}) => {

  const [isStatementSelected, setIsStatementSelected] = useState(() => false);
  const [isPassportSelected, setIsPassportSelected] = useState(() => false);
  const [isButtonStatementVisible, setIsButtonStatementVisible] = useState(false);
  const [isButtonPassportVisible, setIsButtonPassportVisible] = useState(false);
  const [isStatementFileSelected, setIsStatementFileSelected] = useState(false);
  const [isPassportFileSelected, setIsPassportFileSelected] = useState(false);
  const [editableName, setEditableName] = useState(data.name);
  const [editableSurname, setEditableSurname] = useState(data.surname);
  const [tempName, setTempName] = useState(editableName);
  const [tempSurname, setTempSurname] = useState(editableSurname);


  const handleConfirmChanges = () => {
    console.log('File submitted');
    setEditableName(tempName);
    setEditableSurname(tempSurname);
    console.log(tempName)
    const updatedData = {
      name: tempName,
      surname: tempSurname
    };
    axios.post('https://your-server.com/update', updatedData)
        .then(response => {
          // Обработка успешного ответа
          console.log('Data updated successfully', response);
        })
        .catch(error => {
          // Обработка ошибки
          console.error('Error updating data', error);
        });
  };

  const handleStatementSelection = (selected: boolean) => {
    setIsStatementSelected(selected);
    setIsButtonStatementVisible(selected); // Установите видимость кнопок
  };

  const handlePassportSelection = (selected: boolean) => {
    setIsPassportSelected(selected);
    setIsButtonPassportVisible(selected); // Установите видимость кнопок
  };
  const handleStatementFileSelect = (selected: boolean) => {
    setIsStatementFileSelected(selected);
  };

  const handlePassportFileSelect = (selected: boolean) => {
    setIsPassportFileSelected(selected);
  };


  return (
      <div>
        <div className='info_guest'>
          <div className='info_guest-dialog'>
            <div className='info_guest-header'>
              <div className='info_guest-title'>Participant form</div>
              <button onClick={onClose} className="close-button">X</button>
            </div>
            {/*Весь контент в сплывающем окне*/}
            <div className='info_guest-body'>
              <section className='info_guest-name'>
                <div className='info_guest-name-title'>Participant name</div>
                <input className='info_guest-name-content'
                       type="text"
                       value={tempName}
                       onChange={(e) => setTempName(e.target.value)}
                />
              </section>
              <section className='info_guest-surname'>
                <div className='info_guest-surname-title'>Participant surname</div>
                <input className='info_guest-surname-content'
                       type="text"
                       value={tempSurname}
                       onChange={(e) => setTempSurname(e.target.value)}
                />
              </section>
              <section className='info_guest-statement'>
                <div className='info_guest-statement-title'>Copy of statement <span>*</span></div>
                <div className='info_guest-statement-content'>
                  {/*Галочка для выбора между тем есть ли у посетителя копия документа или нет*/}
                  <div className='Yes_No'>
                    <div>
                      <input
                          type="radio"
                          className='radio'
                          id='radio-1-statement'
                          name='statement-choice'
                          checked={!isStatementSelected}
                          onChange={() => handleStatementSelection(false)}
                          disabled={isStatementFileSelected}
                      />
                      <label htmlFor='radio-1-statement'>Yes</label>
                    </div>
                    <div>
                      <input
                          type="radio"
                          className='radio'
                          id='radio-2-statement'
                          name='statement-choice'
                          checked={isStatementSelected}
                          onChange={() => handleStatementSelection(true)}
                          disabled={isStatementFileSelected}
                      />
                      <label htmlFor='radio-2-statement'>No</label>
                    </div>
                  </div>
                  {/*Создание фото или загрузка его на сайт*/}
                  <div className={`upload_take_photo slide-in-out ${isButtonStatementVisible ? 'show' : ''}`}>
                    <ButtonStatements onFileSubmitStatement={handleConfirmChanges}
                                      onFileSelectionStatement={handleStatementFileSelect}/>
                  </div>
                </div>
              </section>
              <section className='info_guest-passport'>
                <div className='info_guest-passport-title'>Copy of passport <span>*</span></div>
                <div className='info_guest-passport-content'>
                  <div className='Yes_No'>
                    <div>
                      <input
                          type="radio"
                          className='radio_button'
                          id='radio-1-passport'
                          name='passport-choice'
                          checked={!isPassportSelected}
                          onChange={() => handlePassportSelection(false)}
                          disabled={isPassportFileSelected}
                      />
                      <label htmlFor='radio-1-passport'>Yes</label>
                    </div>
                    <div>
                      <input
                          type="radio"
                          className='radio_button'
                          id='radio-2-passport'
                          name='passport-choice'
                          checked={isPassportSelected}
                          onChange={() => handlePassportSelection(true)}
                          disabled={isPassportFileSelected}
                      />
                      <label htmlFor='radio-2-passport'>No</label>
                    </div>
                  </div>
                  <div className={`upload_take_photo slide-in-out ${isButtonPassportVisible ? 'show' : ''}`}>
                    <ButtonPassport onFileSubmitPassport={handleConfirmChanges}
                                    onFileSelectionPassport={handlePassportFileSelect}/>
                  </div>
                </div>
              </section>
              {/*Кнопка подтверждения*/}
              <button className='button_submit' onClick={handleConfirmChanges}>Submit</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default InfoGuest;