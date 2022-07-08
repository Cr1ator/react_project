import React from 'react';
import Header from './components/Header';
import Image from './components/Image';
import logo from "./img/logo.jpg"

class App extends React.Component {
    helpText = "Help text"
    render() {
        return (<div className='name'>
        <Header title="Шапка сайта"/>
        <h1>{this.helpText}</h1>
        <input placeholder={this.helpText}
            onClick={this.inputClick} onMouseEnter={this.mouseOver} />
        <p>{this.helpText === "Help text!" ? "Yes" : "No"}</p>
        <Image image={logo}/>
    </div>)
    }

    inputClick() {console.log("click")}
    mouseOver() {console.log("mouseOver")}
}

export default App

