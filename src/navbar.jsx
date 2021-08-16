import React, {Component} from "react"
import AppMain from "./App";
import SignUp from "./SignUp";
import './FilterBar.css'
import './footer.css'
import './SignUp.css'
import App from './App';
import FilterBar from './FilterBar';
import Footer from './footer'
import Enav from "./enav";
import './nav.css'

class Navbar extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            flag: false,
        };
    }

    render(){

        if (this.state.flag == true && this.props.value == 0)
        {
            return <div>{<AppMain value="1"></AppMain>}</div>;
        }

        else if (this.props.value == 0)
        {
            return (
          <div>
         <div className="App border-bottom">
      <div class="row pt-4 pb-4">
        <div class="col-lg-4 col-12">
          <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-white">
            <div class="container-fluid">
              <a class="navbar-brand " href="#">
                <img
                  class=" p-50"
                  src="https://www.dropbox.com/s/66u3eo218ap1bil/Guru.PNG?raw=1"
                />
              </a>
             
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                  <li class="nav-item nav">
                    <a
                      class="nav-link disabled text-dark "
                    >
                      Find Freelancer
                    </a>
                  </li>
                  <li class="nav-item nav ">
                    <a
                      class="nav-link disabled text-dark "
                    >
Find Jobs
                    </a>
                  </li>
                  <li class="nav-item nav ">
                    <a
                      class="nav-link disabled text-dark "
                    >
                      About                    </a>
                  </li>
                  <li class="nav-item  nav">
                    <a
                      class="nav-link disabled text-dark "
                    >
                      Solutions                    </a>
                  </li>
                </ul>
               
              </div>

              <div class="collapse navbar-collapse bar" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <button type="button" class="btn btn-primary explore">
                  Post a Job
                </button>
                  <li class="nav-item nav ">
                   
                      <button className="SignUPRend" onClick={() => {
                                     this.SignUpClick();}}>Login</button>
                   </li>
                  <li class="nav-item nav">
                    <a
                      class="nav-link disabled text-dark "
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                     SignUp
                    </a>
                  </li>
                 </ul>
                
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
         
    <FilterBar></FilterBar>
    <Footer></Footer>
    </div>
         )
        }
        

        else if (this.props.value == 1){
        return(
            <div>
                <Enav></Enav>
            </div>
        );
    }      
    }


    SignUpClick()
    {
        console.log("Inside SignUp call");
        this.setState({flag: true});
    }

}




export default Navbar;
