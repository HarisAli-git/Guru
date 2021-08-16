import { render } from "@testing-library/react";
import React, { Component } from "react";


class Main1 extends Component {

    constructor(props)
    {
        super(props);

        this.state={

            Web: [
                {
                title: "Web & Design",
                cat: "Web and Design",
                Description: "NIX Solutions provides unique design services. Combine your ideas with our technical expertise and compliance with the latest market demands and you will have a best-selling recipe for your business!",
                Location: "Lahore, Punjab, Pakistan",
                img_src: "https://res.cloudinary.com/gurucom/image/upload/f_auto/pimg/0/538/538436/iPad-White-Angle-1-1030x-ns_eab2c04e-c83d-4a4b-ac47-4d01a85f1373.jpg"
            },
            {
                title: "Graphic Designing",
                cat: "Web and Design",
                Description: "Need designs that speak for themselves? MicroArts is what you've been looking for! We offer the best graphics design packages for all kind of clients. Please review our complete graphics design price",
                Location: "Karachi, Sindh, Pakistan",
                img_src: "https://res.cloudinary.com/gurucom/image/upload/f_auto/pimg/0/935/935279/Logo-Design-1_303cffa1-63e1-4b6d-8594-023345263710.jpg"
            },
            {
                title: "Web Design, Boarding and Graphics",
                cat: "Web and Design",
                Description: "At Colan Infotech Pvt Ltd, we combine the best of design aesthetics with the power of modern technology to offer you a stunning and fully functional website. Our highly qualified and experienced teams…",
                Location: "Dhaka, Dhaka, Bangladesh",
                img_src: "https://res.cloudinary.com/gurucom/image/upload/f_auto/pimg/1/720/1720700/Valetapp_12f37302-fe62-48dc-b616-f92b210ac1dc.png"
            }
        ],
            Writing: [
            {
                title: "Creative, Content and Technical Writing",
                Description: "Specialise in Content writing, creative writing, technical writing, research writing, business proposal writing, marketing strategies writing, Résumé and Cover letter writing, motivational writing, pr…",
                Location: "Karachi, Sindh, Pakistan",
                img_src: "https://res.cloudinary.com/gurucom/image/upload/f_auto/pimg/2/673/2673655/michal-parzuchowski-Nh4Sxasye24-unsplash762954ee-14f9-4bd8-a150-29f3586fcc7a.jpg",
            },
            
            {
                title: "eBook Writing (Fiction)",
                Description: "I have been a professional eBook writer for the past 6 years and have been writing on various genres including crime, mystery, drama, adventure, romance, western and stories for children. I completely…",
                Location: "Lahore, Punjab, Pakistan",
                img_src: "https://res.cloudinary.com/gurucom/image/upload/f_auto/pimg/3/155/3155722/hqdefault_325b2686-7a19-41ed-8e86-8f735a44257c.jpg",
            },
            
        ],
    };

    }

    render(){

    if  (this.props.value == 1)
    {
        return <div>{<Display course={this.state.Web}></Display>}</div>
    }
    
    if  (this.props.value == 2)
    {
        return <div>{<Display course={this.state.Writing}></Display>}</div>
    }

}
};

function Display(param) {
    let a1 = param.course;
    let a2 = a1.map((mycourses) => (
        <div className="course-cont">
        <img className="course-img" src = {mycourses.img_src}></img>
        <div className="cpc">
            <p className="cp">{mycourses.title}</p>
            <p className="cp1">{mycourses.Description}</p>
        </div>
        </div>
    ))

    return <ul>{a2}</ul>;
}

export default Main1;

/*import {courses} from "./myjason";

function Main() {
    return( 
        <div className="cont">
        <div className="b-h">
            <div className="b-h1">
                <h2>Results</h2>
            </div>
            <div classNamw="b-h2">
                <h2>Sort By</h2>
            </div>
        </div>
        <div className="stock-container">
        {courses.map((courses, key) => {
        return (
        <div>
            <div key={key}>
              {
              courses.name +
                " , " +
                courses.Location +
                " ," +
                courses.stockPrice +
                ", " +
                courses.Information}
            </div>
        </div>
        )
    })};
        </div>
        </div>
    )
}
*/
