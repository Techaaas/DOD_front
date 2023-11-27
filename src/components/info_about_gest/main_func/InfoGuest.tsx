'use client'

import React, {FC, useEffect, useState} from 'react';
import './InfoGuest.css'
import ButtonStatements from "../button_statement/ButtonStatements";
import ButtonPassport from "../button_passport/ButtonPassport";
import axios from 'axios';
import {Alata} from "next/font/google";
import {useDispatch, useSelector} from "react-redux";
import {RootState, AppDispatch} from "@/store/store";
import {setStatementSelection, setPassportSelection, setName, setSurname} from '@/store/Slice/guestInfoPageState';
import {setPassportImage, setStatementImage} from "@/store/Slice/guestImgState";
interface InfoGuestProps {
  onClose: () => void;
}

const alata = Alata({weight: '400', subsets: ['latin']})

const InfoGuest: FC<InfoGuestProps> = ({onClose}) => {

  const [isButtonStatementVisible, setIsButtonStatementVisible] = useState(false);
  const [isButtonPassportVisible, setIsButtonPassportVisible] = useState(false);
  const [isStatementFileSelected, setIsStatementFileSelected] = useState(false);
  const [isImgSelectionStatement, setIsImgSelectionStatement] = useState(false)
  const [isImgPassportStatement, setIsImgPassportStatement] = useState(false)
  const [isPassportFileSelected, setIsPassportFileSelected] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isStatementSelected, isPassportSelected, name, surname } = useSelector((state: RootState) => state.infoGuest);
  const [tempName, setTempName] = useState(name);
  const [tempSurname, setTempSurname] = useState(surname);

  useEffect(() => {
    setIsButtonStatementVisible(isStatementSelected);
    setIsButtonPassportVisible(isPassportSelected);
  }, [isStatementSelected, isPassportSelected]);


  useEffect(() => {
    // Обновление состояния Redux данными из JSON при монтировании компонента
    const savedName = localStorage.getItem(name);
    const savedSurname = localStorage.getItem(surname);
    if (savedName) setTempName(savedName);
    if (savedSurname) setTempSurname(savedSurname);
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
    localStorage.setItem(name, e.target.value);
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempSurname(e.target.value);
    localStorage.setItem(surname, e.target.value);
  };

  const handleStatementSelection = (selected: boolean) => {
    dispatch(setStatementSelection(selected));
    setIsButtonStatementVisible(selected);
  };

  const handlePassportSelection = (selected: boolean) => {
    dispatch(setPassportSelection(selected));
    setIsButtonPassportVisible(selected);
  };
  const handleStatementFileSelect = (selected: boolean) => {
    setIsStatementFileSelected(selected);
  };

  const handlePassportFileSelect = (selected: boolean) => {
    setIsPassportFileSelected(selected);
  };

  const handleStatementImgSelected = (selected: boolean) => {
    dispatch(setStatementImage(null));
    handleStatementFileSelect(false)
    setIsImgSelectionStatement(selected);
  };

  const handlePassportImgSelected = (selected: boolean) => {
    dispatch(setPassportImage(null));
    handlePassportFileSelect(false)
    setIsImgPassportStatement(selected);
  };

  const handleConfirmChanges = () => {
    // Обновление глобального состояния Redux
    dispatch(setName(tempName));
    dispatch(setSurname(tempSurname));

    // Отправка данных на сервер
    const updatedData = {
      name: tempName,
      surname: tempSurname
    };

    axios.post('https://your-server.com/update', updatedData)
        .then(response => {
          console.log('Data updated successfully', response);
        })
        .catch(error => {
          console.error('Error updating data', error);
        });

    // Очистка localStorage после подтверждения
    localStorage.removeItem(name);
    localStorage.removeItem(surname);
  };


  return (
      <div className={alata.className}>
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
                       onChange={handleNameChange}
                />
              </section>
              <section className='info_guest-surname'>
                <div className='info_guest-surname-title'>Participant surname</div>
                <input className='info_guest-surname-content'
                       type="text"
                       value={tempSurname}
                       onChange={handleSurnameChange}
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
                          disabled={isStatementFileSelected || isImgSelectionStatement}
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
                          disabled={isStatementFileSelected && isImgSelectionStatement}
                      />
                      <label htmlFor='radio-2-statement'>No</label>
                    </div>
                  </div>
                  {/*Создание фото или загрузка его на сайт*/}
                  <div className={`upload_take_photo slide-in-out ${isButtonStatementVisible ? 'show' : ''}`}>
                    <ButtonStatements onImgSelectionStatement={handleStatementImgSelected}
                                      onFileSubmitStatement={handleConfirmChanges}
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
                          disabled={isPassportFileSelected || isImgPassportStatement}
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
                          disabled={isPassportFileSelected && isImgPassportStatement}
                      />
                      <label htmlFor='radio-2-passport'>No</label>
                    </div>
                  </div>
                  <div className={`upload_take_photo slide-in-out ${isButtonPassportVisible ? 'show' : ''}`}>
                    <ButtonPassport onImgSelectionStatement={handlePassportImgSelected}
                                    onFileSubmitPassport={handleConfirmChanges}
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