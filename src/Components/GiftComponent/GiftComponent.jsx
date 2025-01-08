import React, { useState } from 'react'
import surprise from '../../assets/imgs/surprise.png'
import giftImage from "../../assets/imgs/gift.svg"
import "./GiftComponent.css"
import Swal from 'sweetalert2';

export default function GiftComponent() {
    const [showMessage, setShowMessage] = useState(false);

    const handleGiftClick = () => {
        setShowMessage(true);
        Swal.fire({
            imageUrl: surprise,
            imageWidth: 200,
            imageAlt: "gift image",
            title: "Congratulations!",
            text: "You’ve won $50 as a reward for signing up!",
            background: "#333333",
            customClass: {
                title: "custom-title",
                confirmButton: "custom-confirm-btn",
            },
            scrollbarPadding: false,
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
                `
            }
        })
    };

    if (showMessage === true) {
        localStorage.setItem("isNewUser", "false");
    }
    return (
        <>
            <img
                src={giftImage}
                alt="gift image"
                className="gift-icon"
                onClick={handleGiftClick} />
        </>
    )
}
