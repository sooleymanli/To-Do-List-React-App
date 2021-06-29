import React, { Component } from 'react'
import './List.css'
import deleteAudio from '../audio/click.mp3'
import MyContext from '../ContextLang'
let deleteA = new Audio(deleteAudio)
class List extends Component {

    constructor(props) {
        super(props);
        this.clickDeleteFromList = this.clickDeleteFromList.bind(this)

    }
    clickDeleteFromList = (index) => {
        deleteA.play()
        this.props.func(index);
    

    }


    static contextType = MyContext

    render() {

        return (
            <div className="list-body">
                <ul>
                    {this.props.list.list.map((e, index) => {
                        return (
                            <li key={e.tel} >
                                {console.log(index)}
                                <span className="li-name">{e.name}</span>
                                <span className="li-phone">{e.operatorNum} {e.tel}</span>
                                <span className="li-delete" title={this.context.delete} onClick={this.clickDeleteFromList.bind(this, index)}><i className="fas fa-trash"></i></span>

                            </li>


                        )
                    })



                    }


                </ul>
            </div>
        )
    }
}

export default List;