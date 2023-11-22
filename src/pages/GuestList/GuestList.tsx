import React from 'react';
import GuestPanel from "../../components/guest_panel/GuestPanel"
import './GuestList.css'


const GuestList = () => {

    /* Here will be putted data from JSON (or QR code)*/
    let name: string = "";
    let surname: string = "";
    let approved: boolean = true;

    /* Here will be generated the card of the guest*/
    return (
        <GuestPanel name={name} surname={surname} approved={approved}>
        </GuestPanel>
    );
};

export default GuestList;