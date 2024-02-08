'use client'

import React, {useEffect, useState} from 'react';
import './qr_scan.css';
import {Html5Qrcode} from "html5-qrcode";
import {InfoGuest} from "@/components/info_about_gest/main_func";
import {Alata} from "next/font/google";
import { useDispatch, useSelector } from 'react-redux';
import {setEnabledAction, toggleInfoGuestAction, toggleCameraAction} from '@/store/Action/actionQrPage';
const alata = Alata({weight: '400', subsets: ['latin']})


function QrScan() {
  const dispatch = useDispatch();
  const { isEnabled, showInfoGuest } = useSelector((state: any) => state.qrScan);
  const [isCameraEnabled, setIsCameraEnabled] = useState(true);
  const toggleInfoGuest = () => {
    dispatch(toggleInfoGuestAction());
    dispatch(setEnabledAction(true));
  };


  useEffect(() => {
    const config = {fps: 20, qrbox: {width: 200, height: 200}}
    const scanQr = new Html5Qrcode("qrCodeContainer");

    const qrScannerStop = () => {
      if (scanQr && scanQr.isScanning) {
        console.log("Stopping QR code scanner...");
        scanQr.stop()
            .then(() => console.log("QR code scanner stopped successfully"))
            .catch((error) => console.error("Error stopping QR code scanner:", error));
      }
    }
    const qrSuccess = () => {
      console.log("QR code scanned successfully");
      dispatch(toggleInfoGuestAction());
      dispatch(setEnabledAction(false));

      if (isCameraEnabled) {
        scanQr.clear(); // Очистите камеру
        setIsCameraEnabled(false);
        dispatch(toggleCameraAction());
        console.log("Camera disabled");
      }
    }

    if (isEnabled && isCameraEnabled) {
      dispatch(toggleCameraAction());
      scanQr.start({facingMode: "environment"}, config, qrSuccess, undefined)
    } else {
      qrScannerStop()
    }

    return (() => {
      qrScannerStop();
    })
  }, [dispatch, isEnabled, isCameraEnabled]);

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