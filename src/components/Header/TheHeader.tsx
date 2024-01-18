'use client'
import './TheHeader.css';
import { Audiowide } from "next/font/google";
import Link from "next/link";
import React, { useState } from 'react';
import userData from '@/data/info_user.json'; // Путь к вашему JSON-файлу

const audio = Audiowide({ weight: '400', subsets: ['latin'] });


const TheHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const isAuthPage = typeof window !== 'undefined' && window.location.pathname === '/auth';
  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  if (isAuthPage) return (
      <header>
        <Link href={'/qr'}>
          <button className={audio.className}>DOD</button>
        </Link>
      </header>
  );
  return (
      <header>
        <Link href={'/qr'}>
          <button className={audio.className}>DOD</button>
        </Link>
        <div className={`user-dropdown ${dropdownVisible ? 'active' : ''}`}>
          <button onClick={handleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
              <path d="M24.1666 21.1458C24.6321 21.1461 25.0797 21.3254 25.4165 21.6466C25.7534 21.9678 25.9538 22.4063 25.9762 22.8712C25.9985 23.3362 25.8412 23.7919 25.5367 24.1439C25.2322 24.496 24.8039 24.7174 24.3406 24.7624L24.1666 24.7708H4.83331C4.36784 24.7706 3.9203 24.5913 3.58343 24.2701C3.24656 23.9489 3.04617 23.5104 3.0238 23.0454C3.00144 22.5805 3.15879 22.1248 3.46327 21.7727C3.76776 21.4206 4.19601 21.1992 4.65931 21.1543L4.83331 21.1458H24.1666ZM24.1666 12.6875C24.6474 12.6875 25.1084 12.8784 25.4483 13.2184C25.7882 13.5583 25.9791 14.0193 25.9791 14.5C25.9791 14.9807 25.7882 15.4417 25.4483 15.7816C25.1084 16.1215 24.6474 16.3125 24.1666 16.3125H4.83331C4.35261 16.3125 3.89159 16.1215 3.55168 15.7816C3.21177 15.4417 3.02081 14.9807 3.02081 14.5C3.02081 14.0193 3.21177 13.5583 3.55168 13.2184C3.89159 12.8784 4.35261 12.6875 4.83331 12.6875H24.1666ZM24.1666 4.22916C24.6474 4.22916 25.1084 4.42012 25.4483 4.76003C25.7882 5.09994 25.9791 5.56095 25.9791 6.04166C25.9791 6.52236 25.7882 6.98338 25.4483 7.32329C25.1084 7.6632 24.6474 7.85416 24.1666 7.85416H4.83331C4.35261 7.85416 3.89159 7.6632 3.55168 7.32329C3.21177 6.98338 3.02081 6.52236 3.02081 6.04166C3.02081 5.56095 3.21177 5.09994 3.55168 4.76003C3.89159 4.42012 4.35261 4.22916 4.83331 4.22916H24.1666Z" fill="#ECECEC"/>
            </svg>
          </button>
          {dropdownVisible && (
              <div className="dropdown-content">
                <div className="center-email">
                  <p>{userData.email}</p> {/* Почта пользователя из JSON-файла */}
                </div>
                <div className="dropdown-links">
                  <Link className='list' href="/">
                    <span>
                      Guest list
                    </span>
                  </Link>
                  <Link className='log_out' href="/">
                    <span>
                      Log out
                    </span>
                  </Link>
                </div>
              </div>
          )}
        </div>
      </header>
  );
};

export { TheHeader };



