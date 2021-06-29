import React, { Component } from 'react'
import MyContext from '../ContextLang';

class Alerts extends Component {
    static contextType = MyContext
    render() {
        return (
            <div className="alerts">

                <div className="alert-danger" style={{ display: this.props.type.danger }}>
                    <div>
                        <i className="fas fa-exclamation"></i>  <span> {this.context.alertdanger} </span>
                    </div>
                </div>

                <div className="alert-success" style={{ display: this.props.type.success }}>
                    <div>
                        <i className="fas fa-check"></i>  <span>{this.context.alertsucces} </span>
                    </div>
                </div>

                <div className="alert-danger-tel" style={{ display: this.props.type.dangertel }}>
                    <div>
                        <i className="fas fa-check"></i>  <span>{this.context.dontusenumber}</span>
                    </div>
                </div>


                <div className="alert-danger-name" style={{ display: this.props.type.dangername }}>
                    <div>
                        <i className="fas fa-check"></i>  <span>{this.context.dontusename}</span>
                    </div>
                </div>
            </div>

        )
    }
}

export default Alerts;