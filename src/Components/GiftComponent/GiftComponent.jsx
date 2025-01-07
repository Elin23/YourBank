import React, { useState } from 'react'
// import gift from '../../assets/imgs/'
export default function GiftComponent() {
    const [showMessage, setShowMessage] = useState(false);

    const handleGiftClick = () => {
        setShowMessage(true);
    };
    if(showMessage === true){
        localStorage.setItem("isNewUser", "false");
    }
    return (
        <>
        
        </>
    )
}
