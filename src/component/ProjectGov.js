import level2Image from "../assets/level2Image.svg";
import Line3 from "../assets/Line3.svg";
import profileImage1 from "../assets/profileImage1.svg";
import teamIcon from "../assets/teamIcon.svg";
import serviceIcon from "../assets/serviceIcon.svg";
import React from "react";
import progress from "../assets/progress.svg";
import  { useNavigate } from "react-router-dom";

const ProjectGov = () => {

    let navigate = useNavigate();

    const navigateFunc = (e, pageUrl) => {
        if (pageUrl !== undefined) {
            const abc = (window.location.href + pageUrl);
            console.log(abc);
            navigate(pageUrl);
        }
    }
    const Points = () => {
        return (
            <div className={"points"}>
                <div className={"pointsText"} style={{paddingTop:10, paddingLeft:20, paddingBottom:50}}>
                    <div>Upgrade your level by gaining points</div>
                    <div>Join projects, make achivements, get rewards for that and access to more features.</div>
                </div>
                <div className={"pointsStyle"}>
                    <div>
                        <button className={"pointsButtons"} style={{width:120}}>Stake</button>
                        <div className={"pointsSText"}>up to 10 points / months</div>
                    </div>
                    <div style={{paddingRight:20, paddingLeft:20}}>
                        <button className={"pointsButtons"} style={{width:170}}>Achievements</button>
                        <div className={"pointsSText"}>Complete bounties and gain  points</div>
                    </div>
                    <div>
                        <button className={"pointsButtons"} style={{width:200}}>Launch a project</button>
                        <div className={"pointsSText"}>Gain 100 pt if your project is accepted</div>
                        <div className={"pointsSText"}> by the community</div>
                    </div>
                </div>
            </div>
        );
    }

    const Achievements = () => {
        return (
            <div className={"achievements"} >
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{paddingRight:50, paddingTop:10}}>
                        <img src={profileImage1} style={{height:80, width:80}}/>
                    </div>
                    <div style={{paddingRight:50, paddingTop:30}}>
                        <button className={"blueButton"} style={{width:120, height:40}} onClick={(e) => navigateFunc(e, "/userDetail")}>
                            My board
                        </button>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{paddingTop:40}}><img src={teamIcon} style={{padding:10}}/></div>
                    <div style={{paddingRight:20, paddingTop:55}}>
                        <div className={"infoText6"}>2</div>
                        <div className={"infoText5"}>Teams</div>
                    </div>
                    <div style={{paddingTop:40}}><img src={serviceIcon} style={{padding:10}}/></div>
                    <div style={{paddingRight:20, paddingTop:55, justifyContent:"left", alignItems:"flex-start"}}>
                        <div className={"infoText6"} style={{opacity: 0.5}}>5</div>
                        <div className={"infoText5"}>Services</div>
                    </div>
                    <div>
                        <div className={"infoText5"} style={{paddingBottom:5}}>Member</div>
                        <div><img src={level2Image} style={{height:70, width:70}}/></div>
                    </div>
                </div>
                <div style={{paddingTop:10, justifyContent:"center"}}>
                    <div style={{display:"flex", fontSize:16, fontWeight:700}}>
                        <div style={{textAlign:"left", paddingRight:190, paddingLeft:35}}>Level 2</div>
                        <div style={{textAlign:"right", color: "#FBAA0E"}}>Level 3</div>
                    </div>
                    <div><img src={progress} style={{width:300, paddingLeft:10}}/></div>
                </div>
            </div>
        );
    }

    const LevelDetails = () => {
        return (
            <div className={"levelDetails"} >
                <div style={{display:"flex", justifyContent:"center", paddingTop:20}}>
                    <LevelBox levelNo={1} opa={1} />
                    <LevelBox levelNo={2} opa={1} />
                    <LevelBox levelNo={3} opa={0.5} />
                    <LevelBox levelNo={4} opa={0.5} />
                </div>
                <div>
                    <img src={Line3}/>
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <LevelText taskName={"New member"} taskDetail={"Participate to bounty and taking"} opa={1}/>
                    <LevelText taskName={"Member"} taskDetail={"Participate and create projects"} opa={1}/>
                    <LevelText taskName={"Veteran"} taskDetail={"Treasury voting rights"} opa={0.5}/>
                    <LevelText taskName={"Advisor"} taskDetail={"Admin rights"} opa={0.5}/>
                </div>
            </div>
        );
    }

    const LevelBox = ({levelNo, opa}) => {
        return (
            <div className={"activeLevelBox"} style={{opacity:opa, padding:"10px 80px"}}>
                <div className={"activeLevel"}>
                    <div style={{paddingTop:20, color: "#D26F38", fontWeight:700}}>Level {levelNo}</div>
                </div>
            </div>
        );
    }

    const LevelText = ({taskName, taskDetail, opa}) => {
        return (
            <div className={"activeLevelBox"} style={{opacity:opa, padding:"10px 70px"}}>
                <div style={{width:120}}>
                    <div className={"levelTaskInfo"} style={{fontWeight:700}}>{taskName}</div>
                    <div className={"levelTaskInfo"}>{taskDetail}</div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className={"projectGovText"}>
                Project governance
            </div>
            <div id="projectInfo" className={"projectInfoCN"} style={{marginTop:10}}>
                <Points />
                <Achievements />
            </div>
            <div id="projectInfo" className={"projectInfoCN"} style={{marginTop:10}}>
                <LevelDetails />
            </div>
        </div>
    );
}

export default ProjectGov;