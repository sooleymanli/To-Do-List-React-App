import React, { Component } from 'react';
import './Footer.css';
import clearRAudio from '../audio/clear.mp3'
import MyContext from '../ContextLang'

let clearAudio = new Audio(clearRAudio)
class Footer extends Component {

    onClick = () => {
        clearAudio.play()
        this.props.reset()
    }

    static contextType = MyContext

    render() {




        return (
            <div className="footer">




                <div className="footer-body">
                    <div className="footer-text"><span>{this.context.bottom} <strong>{this.props.count}</strong></span></div>
                    <div className="footer-clear"><button title={this.context.clear} onClick={this.onClick}>{this.context.clear}</button></div>
                </div>
            </div>
        )
    }
}

export default Footer;