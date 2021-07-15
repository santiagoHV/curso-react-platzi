import React from "react";
import image404 from '../images/404error.svg'

const NotFound = () => {
    return (
        <div>
            <img src={image404} className={''} alt={'Image 404 not found'}/>
        </div>
    )
}

export default NotFound