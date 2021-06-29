import React, { Component } from 'react'
import './Form.css'
import clickAudio from '../audio/click.mp3'
import MyContext from '../ContextLang'

let audio = new Audio(clickAudio);
let listArray = [];
let listArrayNames=[];
class Form extends Component {

    constructor(props) {
        super(props);
        this.clickAddButton = this.clickAddButton.bind(this)
        this.changeInput = this.changeInput.bind(this)
        this.toggleNum = this.toggleNum.bind(this)
        this.selectNum = this.selectNum.bind(this)
        this.onInput = this.onInput.bind(this)

        this.state = {
            name: "",
            tel: "",
            operatorNum: "050",
            alerttype: "",
            class: "nums",
            selectedNumColor: "#a07575",
            nameBorder: "none",
            telBorder: "none"
        };
    };



    clickAddButton = (v) => {
        if (this.props.list.list.length === 0) {
            if (this.state.name === "" || this.state.tel === "") {
                this.props.alertfunc("danger")
            }
            else {
                this.props.alertfunc("success")
                this.props.func(v);
                this.setState({
                    name: "",
                    tel: "",
                    operatorNum: "050",
                    nameBorder: "none",
                    telBorder: "none"
                });
            }

        }else {


            this.props.list.list.map((e) => {
                listArray.push(`${e.operatorNum} ${e.tel}`)
                listArrayNames.push(e.name)
            })
           


            if(listArray.indexOf(`${this.state.operatorNum} ${this.state.tel.substr(0, 3)} ${this.state.tel.substr(3, 2)} ${this.state.tel.substr(5, 2)}`) !== -1) {
                this.setState({ telBorder: "1px solid #d83b29" })
                this.props.alertfunc("dangertel")
            }
           
            else if(listArrayNames.indexOf(this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1).toLowerCase()) !==-1){
                this.setState({ nameBorder: "1px solid #d83b29" })
                this.props.alertfunc("dangername")

            }


            else{
                 
                
                if (this.state.name === "" || this.state.tel === ""){

                    this.props.alertfunc("danger")
                }

                else {
                    this.props.func(v);
                    this.props.alertfunc("success")
                    this.setState({
                        name: "",
                        tel: "",
                        operatorNum: "050",
                        nameBorder: "none",
                        telBorder: "none"
                    });
                }
    
            }
          

        }


        audio.play();
    }

    selectNum(num) {
        this.setState({ selectedNumColor: "#000" })
        this.setState({ operatorNum: num })
        this.toggleNum()
    }

    onInput(name) {
        if (name === "name") {
            this.setState({ nameBorder: "1px solid #d83b29" })

        }

        else if (name === "tel") {
            this.setState({ telBorder: "1px solid #d83b29" })
        }

    }
    changeInput = (e) => {
        if (e.target.name === "name") {
            if (e.target.value.length < 3) {
                this.setState({ nameBorder: "1px solid #d83b29" })
            } else {
                this.setState({ nameBorder: "1px solid #55eb0f" })

            }

        } else if (e.target.name === "tel") {
            if (e.target.value.length < 7) {
                this.setState({ telBorder: "1px solid #d83b29" })
            } else {
                this.setState({ telBorder: "1px solid #55eb0f" })

            }
        }



        this.setState({
            [e.target.name]: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()
        });






    }

    toggleNum() {

        if (this.state.class === "nums") {
            this.setState({
                class: "nums-new"
            })
        } else {
            this.setState({
                class: "nums"
            })
        }


    }
    static contextType = MyContext

    render() {

        return (
            <div className="form">
                <div className="form-input">
                    <input name="name" id="name" placeholder={this.context.nameInput} autoComplete="off" onChange={this.changeInput.bind()} value={this.state.name} style={{ border: this.state.nameBorder }} onClick={this.onInput.bind(this, "name")} />
                    <div className="input-tel">
                        <div className="operator-num">

                            <div className="select-num">
                                <div className="selected-num" style={{ color: this.state.selectedNumColor }}>{this.state.operatorNum}</div>
                                <div className="arrow" onClick={this.toggleNum}><i className="fas fa-chevron-down"></i></div>
                            </div>

                            <div className={this.state.class}>

                                <div onClick={this.selectNum.bind(this, "050")} >050</div>
                                <div onClick={this.selectNum.bind(this, "051")} >051</div>
                                <div onClick={this.selectNum.bind(this, "055")} >055</div>
                                <div onClick={this.selectNum.bind(this, "099")} >099</div>
                                <div onClick={this.selectNum.bind(this, "070")} >070</div>
                                <div onClick={this.selectNum.bind(this, "077")} >077</div>
                                <div onClick={this.selectNum.bind(this, "012")} >012</div>

                            </div>

                        </div>
                        <input name="tel" id="tel" type="number" placeholder="XXX-XX-XX" autoComplete="off" onChange={this.changeInput.bind()} value={this.state.tel.substr(0, 7)} style={{ border: this.state.telBorder }} onClick={this.onInput.bind(this, "tel")} />

                    </div>
                </div>
                <div className="form-button">
                    <button name="add" id="add" type="submit" title={this.context.add} onClick={this.clickAddButton.bind(this, { name: this.state.name, tel: `${this.state.tel.substr(0, 3)} ${this.state.tel.substr(3, 2)} ${this.state.tel.substr(5, 2)}`, operatorNum: this.state.operatorNum })} >
                        <i className="fas fa-plus"></i>
                    </button>
                </div>

            </div>

        )
    }
}

export default Form;