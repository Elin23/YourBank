import React from 'react'
import TransIcon from '../../assets/imgs/Home_icons/Vector2.png'
import './TransactionBox.css'
export default function TransactionBox({ name, amount, opacityClass, key }) {
    return (
        <>
            <div className={`es-trans-box ${opacityClass}`} id={key}>
                <div className="es-trans-box-left">
                    <div className="es-icon">
                        <img src={TransIcon} alt="Transaction Icon" />
                    </div>
                    <div className="es-tran-details">
                        <span className='fw-300'>Transaction</span>
                        <span className='fw-400'>{name}</span>
                    </div>
                </div>
                <div className="es-trans-box-right fw-500">
                    {amount}
                </div>
            </div>
        </>
    )
}
