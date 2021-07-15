import React from "react";
import Navbar from "./Navbar";

const Layaut = (props) => {
    return (
        <React.Fragment >
            <Navbar />
            {props.children}
        </React.Fragment>
    )
}

export default Layaut