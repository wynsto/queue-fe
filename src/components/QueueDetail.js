import React from 'react';
import QRCode from 'qrcode.react';
import {
    useParams
} from "react-router-dom";

const QueueDetail = ()=> {
    let { id } = useParams();
    const value = window.location.href
    return <div>
        <h5>{id}</h5>
        <QRCode value={value}/>
    </div>;
}

export default QueueDetail;