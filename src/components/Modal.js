import React from 'react';
import ReactDOM from 'react-dom'
import './styles/Modal.css'

const Modal = (props) => {
    if(props.isOpen) {
        return ReactDOM.createPortal(
            <div className={'Modal'}>
                <div className={'Modal__container'}>
                    <button
                        className={'Modal__close-button'}
                        onClick={props.onClose}>
                        X
                    </button>
                    {props.children}
                </div>
            </div>,
            document.getElementById('modal')
        )
    }
    return null

}

export default Modal;