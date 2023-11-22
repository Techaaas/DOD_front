'use client'

import React, {useState, useEffect} from 'react';
import './qr_scan.css';
import {Html5Qrcode} from "html5-qrcode";
import InfoGuest from "../../components/info_about_gest/main_func/InfoGuest";
import {Alata} from "next/font/google";
const alata = Alata({weight: '400', subsets: ['latin']})
function QrScan() {
  const [isEnabled, setEnabled] = useState(true);
  // const [qrMessage, setMessage] = useState("");
  const [showInfoGuest, setShowInfoGuest] = useState(false);
  const toggleInfoGuest = () => {
    setShowInfoGuest(!showInfoGuest);
    setEnabled(true);
  };
  useEffect(() => {
    const config = {fps: 20, qrbox: {width: 200, height: 200}}
    const scanQr = new Html5Qrcode("qrCodeContainer");

    const qrScannerStop = () => {
      if (scanQr && scanQr.isScanning) {

        scanQr.stop()
            .then(() => console.log("Qr code scanned"))
            .catch(() => console.log("Error: Qr code not scanned"))
      }
    }

    const qrSuccess = () => {
      // setMessage(decodedText);
      setShowInfoGuest(true); // Показываем InfoGuest
      setEnabled(false);
    }

    if (isEnabled) {
      scanQr.start({facingMode: "environment"}, config, qrSuccess, undefined)
    } else {
      qrScannerStop()
    }

    return (() => {
      qrScannerStop();
    })
  }, [isEnabled]);

  return (
      <div className={alata.className}>
        <div className={alata.className}>
          <div className={`textScan ${showInfoGuest ? 'blur-background' : ''}`}>Scan the QR!</div>
        </div>
        <div className={`qrScanner ${showInfoGuest ? 'blur-background' : ''}`}>
          <div id="qrCodeContainer"></div>
        </div>
        {showInfoGuest && (
            <div className="info-guest-container">
              <InfoGuest onClose={toggleInfoGuest}/>
            </div>
        )}
      </div>
  );

}

export default QrScan;