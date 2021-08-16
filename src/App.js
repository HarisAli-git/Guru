import React, {Component} from "react"
import ReactDOM from 'react-dom';
import './index.css';
import './nav.css'
import './header.css'
import './FilterBar.css'
import './footer.css'
import './main.css'
import './SignUp.css'
import './enav.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar';
import Header from './header';
import FilterBar from './FilterBar';
import Main from './main'
import Footer from './footer'
import ListTester from './listtester';
import SignUp from './SignUp'

class AppMain extends Component {

  constructor(props)
  {
      super(props);
      this.state = {
      };
  }    
  
  render(){  
  
  if (this.props.value == 1){
  return(
    <div>
    <Navbar value="1"></Navbar>
    </div>
  )
  }
  else
  {
    return(
    <div>
    <Navbar value="0"></Navbar>
  </div>
    )
  }
}
};

export default AppMain;
