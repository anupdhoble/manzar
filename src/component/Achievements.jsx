import React, { Component } from 'react'
import "../styles/achievements.css";
import trophy from "../assets/trophy.jpg";
import amazon from "../assets/amazon.png";
import vmware from "../assets/vmware.png";
import gold from "../assets/gold.png";
import byjus from "../assets/byjus.svg";
import money from "../assets/grants.png";
import placement from "../assets/placement.png";

export default class achievements extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="heading">Achievements🏆</div>
                    <div className="cards">
                        <div className="box">
                            <p className="card_head">International<br />journals</p>
                            <p className="card_no">380+</p>
                        </div>
                        <div className="box">
                            <p className="card_head">Placement</p>
                            <p className="card_no">96% +</p>
                        </div>
                        <div className="box">
                            <p className="card_head">Highest Package</p>
                            <p className="card_no">33.6L</p>
                        </div>
                        <div className="box">
                            <p className="card_head">HIghest Grant</p>
                            <p className="card_no">1Cr+</p>
                        </div>
                    </div>

                </div>
                <div className="container_content">
                    <div className="box2">
                        <div className="left">
                            <img src={trophy} width={"150px"} alt="" />
                        </div>
                        <div className="right">
                            <p className="content_title ct1">Awards</p>
                            <ul className="box_content bc1">
                                <li>Student Team of Computer Science and Engineering named “NEW_WORLD_ORDER”
                                    participated in the Grand Finale of Smart India Hackathon 2020 [Software Edition].
                                </li>
                                <li>
                                    The team was adjudged WINNER OF SIH-2020 for the solution “ReMedize” offered by
                                    Government of Uttarakhand, India.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="box2">
                        <div className="left">
                            <p className="content_title ct2">Grants</p>
                            <ul className="box_content bc2">
                                <p>The CSE Department was offered various grants with a funding amount of at least Rs. 25 lakhs
                                    under the Principle Investigator Dr. M.B. Chandak.
                                </p>
                                <li>Financials support for execution of Vishvesvaraya PhD Scheme for Electronics and IT
                                    for 2015-16

                                </li>
                                <li>
                                    Role of ICT in Developing Smart University
                                </li>
                                <li>
                                    Development of coal quality exploration technique
                                </li>
                                
                            </ul>
                        </div>
                        <div className="right">
                            <img src={money} width={"150px"} alt="" />
                        </div>
                    </div>
                    <div className="box2">
                        <div className="left">
                            <img src={placement} width={"140px"} alt="" />
                        </div>
                        <div className="right">
                            <p className="content_title ct1">Placements</p>
                            <ul className="box_content bc1 complogobox">
                                <p>Placed in top companies including</p>
                                <div className='complogos'>
                                    <img width={"150rem"}src={amazon} alt="" />
                                    <img width={"200rem"} src={vmware} alt="" />
                                    <img width={"50rem"} src={gold} alt="" />
                                    <img width={"50rem"} src={byjus} alt="" />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
