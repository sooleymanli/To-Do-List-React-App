import React, { Component } from 'react'
import ToDoList from './components/ToDoList'
import ChangeLanguage from './components/ChangeLanguage'
import Alert from './components/Alerts'
import './App.css'
import MyContext from './ContextLang'
import { LanguagesList } from './ContextLang'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      danger: "none",
      success: "none",
      dangertel:"none",
      dangername:"none",
      languages: LanguagesList.az
    }

  }


  languageChange = (e) => {
    if (e === "az") {
      this.setState({ languages: LanguagesList.az })
      
    }
    else if (e === "en") {
      this.setState({ languages: LanguagesList.en })

    }
    else if (e === "ru") {
      this.setState({ languages: LanguagesList.ru })

    }
  }

  alertChange = (type) => {
    if (type === "success") {
      this.setState({ success: "flex" })
      setTimeout(() => {
        this.setState({ success: "none" })

      }, 4000)
    } else if (String(type) === "danger") {

      this.setState({ danger: "flex" })
      setTimeout(() => {
        this.setState({ danger: "none" })

      }, 4000)}
      else if (String(type) === "dangertel") {

        this.setState({ dangertel: "flex" })
      
        setTimeout(() => {
          this.setState({ dangertel: "none" })
  
        }, 4000)
  
      }

      else if (String(type) === "dangername") {

        this.setState({ dangername: "flex" })
      
        setTimeout(() => {
          this.setState({ dangername: "none" })
  
        }, 4000)
  
      }

     else { }

  }

 
  render() {
    return (
      <MyContext.Provider value={this.state.languages}>
        <div className="main">

          <Alert type={this.state} />
          <div className="app">
            <h2>{this.state.languages.header}</h2>
            <ChangeLanguage changeLanguage={this.languageChange} />
            <ToDoList alertfunc={this.alertChange} />
          </div>
        </div>
      </MyContext.Provider>)
  };
}

export default App;

