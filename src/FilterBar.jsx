import React, {Component} from "react"
import Main from './main'

class FilterBar extends Component
{
        constructor(props){
                super(props);

                this.state ={
                        currentNumber: 0,
                }
        }
        
        render()
        {
        
                return(<div>
        <div className="cont">
        <ul className="menu">
        <li><a href="#" className="menu-11">Any Category</a>
        <ul>
        <li><button onClick={() => {
            this.pdClick();
          }}>Programming and Development</button></li>
        <li><button  onClick={() => {
            this.daClick();
          }}>Design and Art</button></li>
        <li><button  onClick={() => {
            this.wtClick();
          }}>Writing and Translation</button></li>
        <li><button  onClick={() => {
            this.asClick();
          }}>Administrative and Secterial</button></li>
        <li><button  onClick={() => {
            this.bfClick();
          }}>Business and Finance</button></li>
        <li><button  onClick={() => {
            this.smClick();
          }}>Sales and Marketing</button></li>
        <li><button  onClick={() => {
            this.eaClick();
          }}>Engineering and Architecture</button></li>
        
        <li><button onClick={() => {
            this.etClick();
          }}>Education and Training</button></li>
        
        </ul>
        </li>
        <li>
                <div className="Scont">
                        <input type="text" placeholder="Search Freelancers" name="search"></input>
        </div>
        </li>
        <li><a href="#" className="menu-1">Location</a>
        <ul>
        <li><button onClick={() => {
            this.kraClick();
          }}>Karachi, Sindh, Pakistan</button></li>
        <li><button onClick={() => {
            this.lhrClick();
          }}>Lahore, Punjab, Pakistan</button></li>
        <li><button onClick={() => {
            this.dhaClick();
          }}>Dhaka, Dhaka, Bangladesh</button></li>
        <li><button onClick={() => {
            this.delClick();
          }}>New Delhi, Delhi, India</button></li>
        <li><button onClick={() => {
            this.kolClick();
          }}>Kolkata, West Bengal, India</button></li>
        </ul>
        </li>
        <li><a href="#" className="menu-1">Filters</a></li>
        </ul>
        </div>
        <Main value="0"></Main></div>
        );

        
        }
        pdClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        daClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        wtClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        asClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        bfClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        smClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        eaClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        etClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        kraClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        lhrClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        dhaClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        delClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
        kolClick()
        {
                let y = 0;
                this.setState({ currentNumber: y });
        }
}

export default FilterBar;
