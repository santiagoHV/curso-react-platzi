import React from "react";
import ReactDOM from "react-dom"

// import Badge from "./components/Badge";
import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import App from './app'

const container = document.getElementById('app')

ReactDOM.render(
    <App/>,
    container
)




//sin jsx

// const element2 = React.createElement('h1',{},'hola sin jsx')
//
// ReactDOM.render(element2, container)