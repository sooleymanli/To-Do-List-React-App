import React, { Component } from 'react'
import Form from './Form'
import List from './List'
import Footer from './Footer'
import MyContext from '../ContextLang'
class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.nameAddToList = this.nameAddToList.bind(this)
        this.nameDeleteFromList = this.nameDeleteFromList.bind(this)
        this.reset = this.reset.bind(this)


        this.state = {
            list: [
                { name: "Fuad", operatorNum: "050", tel: "999 33 66" },
                { name: "Fərid", operatorNum: "051", tel: "641 14 55" },
                { name: "Şamil", operatorNum: "051", tel: "966 33 34" },
                { name: "Nəzir", operatorNum: "055", tel: "555 60 85" },
                { name: "Murad", operatorNum: "050", tel: "666 00 50" },
                { name: "Cavid", operatorNum: "050", tel: "600 40 50" }
            ],
            count: 6,
            alertType: this.props.alertfunc
        };
    }

    nameDeleteFromList(index) {
        let array = [...this.state.list]; 
        array.splice(index, 1)
        this.setState({ list: array, count: this.state.count - 1 });

    }
    nameAddToList(value) {
        this.setState({ list: [value, ...this.state.list], count: this.state.count + 1 })

    }

    reset() {
        this.setState({ list: [], count: 0 })

    }

    static contextType = MyContext



    render() {
        document.title = this.context.title

        return (

            <div className="main-todolist">

                <Form func={this.nameAddToList} alertfunc={this.state.alertType} list={this.state} />
                <List list={this.state} func={this.nameDeleteFromList} />
                <Footer count={this.state.count} reset={this.reset} />
            </div>
        )
    }
}
export default ToDoList
