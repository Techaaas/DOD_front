import {FC, ReactElement} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

interface IMainLayout {
    children: ReactElement | null;
}

const menu = [
    {
        link: '/',
        text: 'Main'
    },
    {
        link: '/about',
        text: 'About'
    },
    {
        link: '/other',
        text: 'Other'
    },
    {
        link: '/qr',
        text: 'QR Scan'
    }
] as const;

/**
 * MainLayout
 * @returns {ReactElement}
 */

const MainLayout: FC<IMainLayout> = ({children}: IMainLayout): ReactElement => {
    return (
        <>
            <header className='header'>
                <ul>
                    {menu.map((el) => (
                        <li key={el.text}><Link to={el.link} children={el.text}/></li>
                    ))}
                </ul>
            </header>
            <main children={children}/>
            <footer>
                Some footer
            </footer>
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.element,
};

export default MainLayout;
