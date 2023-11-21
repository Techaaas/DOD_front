import React, {useState, useEffect} from 'react';
import './QrScan.css';
import {Html5Qrcode} from "html5-qrcode";
import InfoGuest from "../InfoGuest/InfoGuest";
import {Outlet} from 'react-router-dom';

function QrScan() {
  const [isEnabled, setEnabled] = useState(true);
  // const [qrMessage, setMessage] = useState("");
  const [showInfoGuest, setShowInfoGuest] = useState(false);
  const toggleInfoGuest = () => {
    setShowInfoGuest(!showInfoGuest);
    setEnabled(true);
  };
  useEffect(() => {
    const config = {fps: 10, qrbox: {width: 200, height: 200}}
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
      <>
        <div className={`textScan ${showInfoGuest ? 'blur-background' : ''}`}>Scan the QR</div>
        <div className={`qrScanner ${showInfoGuest ? 'blur-background' : ''}`}>
          <div id="qrCodeContainer"></div>
        </div>
        {showInfoGuest && (
            <div className="info-guest-container">
              <InfoGuest onClose={toggleInfoGuest}/>
            </div>
        )}
        <Outlet/>
      </>
  );

}

export default QrScan;
