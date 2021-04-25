import React from 'react'
import "./preview.styles.css"


const Preview = () => {
    return ( 
        <div className="container preview-container">
            <h1 className="text-center">Wallet Balance</h1>
            <h3 className="text-center">Token Balance:</h3>
            <h3 className="text-center">Naira Balance:</h3>
        </div>
    );
}

export default Preview;