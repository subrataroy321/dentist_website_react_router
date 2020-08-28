import React from 'react';
import smiles from './smiles.png'

function SmileGallery() {
    return(
        <div>
            <h2>You are at Smile Galary</h2>
            <img src={smiles} />
        </div>
    )
}

export default SmileGallery;