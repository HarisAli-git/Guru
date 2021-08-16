import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Fetch_proj_Mongo} from './RESTapi_caller'

class Main extends Component {

    constructor(props)
    {
        super(props);

        this.state={
            Projects: [],
        };

    }

    render(){

    if  (this.props.value == 0)
{
    return (<div>
        <div class="container" className="cont1">
        <div class="container" className="b-h">
            <div class="container" className="b-h1">
                <h2 className="b-h1e">Results</h2>
            </div>
            <div class="container" classNamw="b-h2">
                <h2 className="b-h2e">Sort By</h2>
            </div>
        </div>
        </div>
        <div class="container" className="b-co">
        <div>{<Display course={this.state.Projects}></Display>}</div>
        </div>
        </div>)
}

}

componentDidMount() {
    console.log("Mongo Project_Mounted!!!");
    this.FetchProjects();
}

FetchProjects() {
    Fetch_proj_Mongo().then((response) => {
        console.log(response.data);
        this.setState({Projects: response.data});
    });
    return [];
}

};

function Display(param) {
    let a1 = param.course;
    let a2 = a1.map((mycourses) => (
        <div class="container-fluid" className="open-cont">
        <div class="container" className="course-cont">
        <img className="course-img" src = {mycourses.img_src}></img>
        <div className="cpc">
            <p className="cp">{mycourses.title}</p>
            <p className="cp-l">{mycourses.Location}</p>
            <p className="cp1">{mycourses.Description}</p>
        </div>
        </div>

        <div class="container" className="tabs-b-cour">
        <nav class="tab-nav">
            <button type="button" className="tabcb">
                    <i data-icon="" className="tabcbi"></i> 
                    <p class="but-tit">More Services</p> 
                    </button>
                <button type="button" className="tabcb">
                    <i data-icon="" className="tabcbi"></i> 
                    <p className="but-tit">Portfolio</p> 
                    </button>
                <button type="button" className="tabcb">
                    <i data-icon="" className="tabcbi"></i> 
                    <p className="but-tit">Performance</p> 
                    </button>
                <button type="button" className="tabcb">
                    <i data-icon="" className="tabcbi"></i> 
                    <p className="but-tit">About</p> 
                    </button>
            </nav>
        </div>
        </div>
    ))

    return <ul>{a2}</ul>;
}

function upMenu()
{
    <div classNameName="cont1">
        <div classNameName="b-h">
            <div classNameName="b-h1">
                <h2 classNameName="b-h1e">Results</h2>
            </div>
            <div classNameNamw="b-h2">
                <h2 classNameName="b-h2e">Sort By</h2>
            </div>
        </div>
    </div>
}



export default Main;