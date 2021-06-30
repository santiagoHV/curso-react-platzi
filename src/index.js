import React from "react";
import ReactDOM from "react-dom"

import Badge from "./components/Badge";

const name = 'santiago'
const element = <h1>Hello desde react {name}</h1>
const container = document.getElementById('app')

// ReactDOM.render(__que__,__donde__)
ReactDOM.render(element, container)




//sin jsx

// const element2 = React.createElement('h1',{},'hola sin jsx')
//
// ReactDOM.render(element2, container)