import {FC, ReactElement} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

interface IErrorPage {
    children?: ReactElement | null;
}

/**
 * ErrorPage
 * @returns {ReactElement}
 */

const ErrorPage: FC<IErrorPage> = ({children}: IErrorPage): ReactElement => {
    return (
        <div className="content--center page--error">
            <div className="text--center">
                <h1>404</h1>
                {children && <q children={children}/>}
                <div>
                    <Link to="/" children="Go to main page"/>
                </div>
            </div>
        </div>
    );
};

ErrorPage.propTypes = {
    children: PropTypes.element,
};

export default ErrorPage;
