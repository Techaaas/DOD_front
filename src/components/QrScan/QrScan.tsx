import React, {useState, useEffect} from 'react';
import './QrScan.css';
import {Html5Qrcode} from "html5-qrcode";

function QrScan() {
    const [isEnabled, setEnabled] = useState(true);
    const [qrMessage, setMessage] = useState("");
    useEffect(() => {
        const config = {fps: 10, qrbox: {width: 200, height: 200}}
        const scanQr = new Html5Qrcode("qrCodeContainer");

        const qrScannerStop = () => {
            if (scanQr && scanQr.isScanning) {
                scanQr.stop()
                .then(() => console.log("AAAAAAA"))
                    .catch(() => console.log("BBBBB"))
            }
        }

        const qrSuccess = (decodedText: string) => {
            setMessage(decodedText);
            setEnabled(false);
        }

        if (isEnabled) {
            scanQr.start({facingMode: "environment"}, config, qrSuccess, undefined)
        } else {
            qrScannerStop()
        }

        return(() => {
            qrScannerStop();
        })
    }, [isEnabled]);

    return (
        <>
            <div className="textScan"> Scan the QR</div>
        <div className="qrScanner">
            <div id="qrCodeContainer"></div>
            {qrMessage && <div className="qr-message">{qrMessage}</div>}
        </div>
    </>
            );
}

export default QrScan;