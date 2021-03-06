import { render } from "@testing-library/react";
import React, { Component } from "react";
import Enav from './enav'
import fb from './fb.png'
import li from './linkedin.png'
import gog from './google.png'

import {loginUser_Mongoo} from "./RESTapi_caller";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

            email: '',
            pass: '',
            Res: '',
        };
    }

    render() {
        return (
            <div>
                <div>
                    <div className="main-cs">
                        <div className="main-cslayout">
                            <div className="leftside">
                                <p className="maincs-para">
                                    Grow With Guru
                                </p>
                                <div className="SignUpLogo">
                                    <svg width="119px" height="106px" viewBox="0 0 119 106" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="3-99.9%-customer-satisgfaction" transform="translate(-239.000000, -260.000000)" fill="#fff" fill-rule="nonzero">
                                                <g id="Group-3">
                                                    <g id="customer-review" transform="translate(239.000000, 260.000000)">
                                                        <path d="M94,78 C86.2790364,78 80,71.7728565 80,64.1157025 C80,56.4585485 86.2790364,50 94,50 C101.720964,50 108,56.4585485 108,64.1157025 C108,71.7728565 101.720964,78 94,78 Z" id="Path" fill="#F6A96C" />
                                                        <path d="M94,79 C94,79 88.8643951,78.2763172 85.3159027,75.5381989 C81.7403908,72.7792316 80,68.7247129 80,64.3739978 C80,60.0232827 82.032575,55.7378006 85.6083527,52.9401309 C89.5401917,49.8638806 94,50.0009171 94,50.0009171 C94,50.0009171 94,79 94,79 Z" id="Path" fill="#FED2A4" />
                                                        <path d="M94.3319284,78 C89.0176024,78 84.135986,79.7454428 80.1261517,82.6338542 L75,94.2440105 L83.8596338,106 L119,106 L119,102.5 C119,88.9694011 107.826825,78 94.3319284,78 Z" id="Path" fill="#32DDF9" />
                                                        <path d="M25,78 C17.2790364,78 11,71.7728565 11,64.1157025 C11,56.4585485 17.2790364,50 25,50 C32.7209636,50 39,56.4585485 39,64.1157025 C39,71.7728565 32.7209636,78 25,78 Z" id="Path" fill="#FFBD86" />
                                                        <path d="M95.4957505,35 C94.4058984,35 93.317147,34.5798917 92.4870978,33.7385605 L87.2458992,28.4331602 C85.5847003,26.7516122 85.5847003,24.0248082 87.2458992,22.3432604 C88.9070982,20.6617124 91.6009049,20.6617124 93.2621039,22.3432604 L95.4957505,24.604268 L103.736795,16.2611608 C105.397994,14.5796131 108.091801,14.5796131 109.754101,16.2611608 C111.4153,17.9427086 111.4153,20.6695129 109.754101,22.3510606 L98.5033024,33.7385605 C97.6732534,34.5798917 96.5845021,35 95.4957505,35 Z" id="Path" fill="#FFDA2D" />
                                                        <path d="M109.77289,16.2619343 C108.137826,14.5793552 105.486402,14.5793552 103.851338,16.2619343 L96,24.3414357 L96,35 C96.9827718,34.9364434 97.9492903,34.5238827 98.7001842,33.7500523 L109.77289,22.3555688 C111.409037,20.6729898 111.409037,17.9445133 109.77289,16.2619343 Z" id="Path" fill="#FDBF00" />
                                                        <path d="M22.4955798,35 C21.4068165,35 20.3180532,34.5798917 19.4879951,33.7385605 L14.2467386,28.4331602 C12.5844205,26.7516122 12.5844205,24.0248082 14.2467386,22.3432604 C15.9079558,20.6617124 18.6017921,20.6617124 20.2630097,22.3432604 L22.4955798,24.604268 L30.737816,16.2611608 C32.3990336,14.5796131 35.0928696,14.5796131 36.7540868,16.2611608 C38.4153044,17.9427086 38.4153044,20.6695129 36.7540868,22.3510606 L25.5042659,33.7385605 C24.6731067,34.5798917 23.5843434,35 22.4955798,35 Z" id="Path" fill="#FFDA2D" />
                                                        <path d="M36.7382707,16.2650375 C35.0559653,14.5783208 32.3279326,14.5783208 30.6456269,16.2650375 L23,23.9307123 L23,35 C23.8584328,34.859161 24.6834202,34.4601165 25.34564,33.7961605 L36.7382707,22.3736568 C38.4205764,20.6869402 38.4205764,17.9517541 36.7382707,16.2650375 Z" id="Path" fill="#FDBF00" />
                                                        <path d="M58.4957508,20 C57.4058983,20 56.317147,19.5799148 55.4870981,18.7386305 L50.2458992,13.4335259 C48.5847003,11.7520718 48.5847003,9.02541947 50.2458992,7.34396542 C51.9070982,5.66139686 54.6009048,5.66139686 56.2621041,7.34396542 L58.4957508,9.60373279 L66.7378959,1.26109054 C68.3990952,-0.420363514 71.0929018,-0.420363514 72.7541008,1.26109054 C74.4152997,2.94365909 74.4152997,5.66919692 72.7541008,7.35176547 L61.5033027,18.7386305 C60.6732534,19.5788006 59.5845021,20 58.4957508,20 L58.4957508,20 Z" id="Path" fill="#FFDA2D" />
                                                        <path d="M72.7573673,1.27825382 C71.1005236,-0.426084607 68.4137796,-0.426084607 66.7569357,1.27825382 L60,8.22888295 L60,20 C60.5599672,19.788793 61.086995,19.4556057 61.5360666,18.9936609 L72.7573673,7.45182205 C74.4142109,5.74635396 74.4142109,2.98259225 72.7573673,1.27825382 Z" id="Path" fill="#FDBF00" />
                                                        <path d="M25,79 C25,79 19.8643951,78.2763172 16.3159027,75.5381989 C12.7403908,72.7792316 11,68.7247129 11,64.3739978 C11,60.0232827 13.032575,55.7378006 16.6083527,52.9401309 C20.5401917,49.8638806 25,50.0009171 25,50.0009171 C25,50.0009171 25,79 25,79 Z" id="Path" fill="#FED2A4" />
                                                        <path d="M24.7807064,78 C11.2241916,78 0,88.9694011 0,102.5 L0,106 L35.3008176,106 L44,95.5 L39.0513469,82.6347656 C35.0232036,79.7454428 30.1192977,78 24.7807064,78 Z" id="Path" fill="#84ECF7" />
                                                        <path d="M60,43 C52.3,43 46,49.2479339 46,56.8842975 C46,64.5206612 52.3,71 60,71 C67.7,71 74,64.5206612 74,56.8842975 C74,49.2479339 67.7,43 60,43 Z" id="Path" fill="#FED2A4" />
                                                        <path d="M84,95.2 L84,106 L36,106 L36,95.2 C36,90.3043749 37.3714286,85.84 39.6348215,81.9521874 C43.8857143,74.8234374 51.4285714,70 60,70 C68.5714286,70 76.1142857,74.8234374 80.3651785,81.9521874 C82.6285714,85.84 84,90.3043749 84,95.2 Z" id="Path" fill="#537983" />
                                                        <path d="M60,71 L60,43 C67.7,43 74,49.2479339 74,56.8842975 C74,64.5206612 67.7,71 60,71 Z" id="Path" fill="#F6A96C" />
                                                        <path d="M84,95.2 L84,106 L59,106 L59,70 C67.9285714,70 75.7857143,74.8234374 80.2137276,81.9521874 C82.5714286,85.84 84,90.3043749 84,95.2 Z" id="Path" fill="#3E5959" />
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <p className="su-l-p1">99% Customer Satisfaction</p>
                                <p className="su-l-p2">Based on paid invoices</p>
                            </div>
                            <div className="rightside">
                                <p className="rightcs-para">
                                    Log In
                                </p>
                                <div className="below-s">
                                    <img width="48" height="48" src={fb}></img>
                                    <img width="48" height="48" src={li}></img>
                                    <img width="48" height="48" src={gog}></img>
                                </div>
                                <div className="SignUpC">       
                                    <form onSubmit={(event) => {
                                        console.log(this.state.pass);
                                        console.log(this.state.email);
                                        console.log("Form Submit Called");
                                        event.preventDefault();
                                        loginUser_Mongoo({ email: this.state.email, pass: this.state.pass }).then(response => {
                                            console.log(response.data)
                                        }).catch(error => { console.log(error) });
                                    }}>
                                        <input type="text" id="email" name="email" placeholder="Email" className="em" value={this.state.Email}
                                            onChange={(event) => { this.setState({ email: event.target.value }) }}></input><br></br><br></br>
                                        <input type="password" id="password" name="password" placeholder="Password" className="em" value={this.state.Password}
                                            onChange={(event) => { this.setState({ pass: event.target.value }) }}></input><br></br><br></br>
                                        <input type="checkbox" id="c1" name="c1" className="c1" value="Check"></input>
                                        <label for="c1" className="c1-l">I agree to the Privacy Policy, Terms of service and IP policy.</label>
                                        <input type="submit" className="s-su" value="Submit"></input></form>
                                    <p className="Res-su"> {this.state.Res} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;

