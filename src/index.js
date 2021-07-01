import React from "react";
import ReactDOM from "react-dom"

import Badge from "./components/Badge";
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const name = 'santiago'
const element = <h1>Hello desde react {name}</h1>
const container = document.getElementById('app')

// ReactDOM.render(__que__,__donde__)
ReactDOM.render(
    <Badge
        firstName={'Santiago'}
        lastName={'Herrera'}
        degree={'Systems Engineer'}
        instagram={'SantiagoHerreraVelas'}
        avatarURL={'https://s.gravatar.com/avatar/c7f27e6daff1ea880fd6555131306781?s=80'}
    />,
    container
)




//sin jsx

// const element2 = React.createElement('h1',{},'hola sin jsx')
//
// ReactDOM.render(element2, container)