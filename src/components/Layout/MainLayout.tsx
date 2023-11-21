import React, {FC, ReactElement} from 'react';
import PropTypes from 'prop-types';
// import {Link} from "react-router-dom";
import './MainLayout.css'

interface IMainLayout {
  children: ReactElement | null;
}

// const menu = [
//     {
//         link: '/',
//         text: 'Main'
//     },
//     {
//         link: '/about',
//         text: 'About'
//     },
//     {
//         link: '/other',
//         text: 'Other'
//     },
//     {
//         link: '/qr',
//         text: 'QR Scan'
//     }
// ] as const;

/**
 * MainLayout
 * @returns {ReactElement}
 */

const MainLayout: FC<IMainLayout> = ({children}: IMainLayout): ReactElement => {
  return (
      <div className='layout'>
        <header className='header'>
          {/*<ul>*/}
          {/*    {menu.map((el) => (*/}
          {/*        <li key={el.text}><Link to={el.link} children={el.text}/></li>*/}
          {/*    ))}*/}
          {/*</ul>*/}
          <div className="logoText">DOD</div>
        </header>
        <main children={children}/>
      </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
