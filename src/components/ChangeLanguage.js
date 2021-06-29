import React, { Component } from 'react'
import './ChangeLanguage.css'
import clickAudio from '../audio/click.mp3'

let audio = new Audio(clickAudio);

class ChangeLanguage extends Component {

    constructor(props) {
        super(props);
        this.showLangs = this.showLangs.bind(this);
        this.state = {
            class: "languages",
            lang: "AZ"
        };
        this.selectLang = this.selectLang.bind(this)


    }

    selectLang(e) {
        this.setState({ lang: e.toUpperCase() })
        this.showLangs()
        this.props.changeLanguage(e)
        audio.play()

    }



    showLangs() {
        if (this.state.class === "languages") {
            this.setState({
                class: "languages-new"
            })
        }
        else {
            this.setState({
                class: "languages"
            })
        }

    }
    render() {
        return (
            <div className="language-body">
                <div className="select-language">
                    <div className="language-name">{this.state.lang}</div>
                    <div className="arrow" onClick={this.showLangs}><i className="fas fa-chevron-down"></i></div>

                </div>
                <div className={this.state.class}>
                    <div onClick={this.selectLang.bind(this, "az")}>AZ</div>
                    <div onClick={this.selectLang.bind(this, "en")}>EN</div>
                    <div onClick={this.selectLang.bind(this, "ru")}>RU</div>

                </div>
            </div>
        )
    }
}

export default ChangeLanguage