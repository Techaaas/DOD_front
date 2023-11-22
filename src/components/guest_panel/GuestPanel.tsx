import React, {useState} from 'react';
import './guestPanel.css'

/* connects to the components/pages/GuesList/GuestList */

interface GuestCard {
    name: string;
    surname: string;
    children?: React.ReactNode;
    approved: boolean;
}

/* Approved - variable to check if the student already here*/
const GuestPanel: React.FC<GuestCard> = ({name, surname, children, approved}) => {
    if (approved) {
        return (<div className="guestPanelApproved">
                {name} {surname}
                <div className="approvedMark">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_154_3)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.22391 12.3152 9.87721 11.0962 11.0962C9.87721 12.3152 8.22391 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5ZM6.12907 9.282L9.87133 4.60373L9.19533 4.06293L6.00427 8.05047L3.744 6.1672L3.18933 6.8328L6.12907 9.28287V9.282Z"
                                  fill="#40BA21"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_154_3">
                                <rect width="13" height="13" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="textApproved">Approved</div>
                </div>
            </div>
        )
    } else {
        return (<div className="guestPanel">
                {name} {surname}
            </div>
        )
    }
}

export default GuestPanel;