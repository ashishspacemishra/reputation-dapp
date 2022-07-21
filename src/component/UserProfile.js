import teamIcon from "../assets/teamIcon.svg";
import serviceIcon from "../assets/serviceIcon.svg";
import monthlyStrength from "../assets/monthlyStrength.svg";
import ongoingTasks from "../assets/ongoingTasks.svg";
import progress from "../assets/progress.svg";
import profileImage1 from "../assets/profileImage1.svg";
import line from "../assets/line.svg";
import myActivity from "../assets/myActivity.svg";
import level1Image from "../assets/level1Image.svg";
import level2Image from "../assets/level2Image.svg";
import level3Image from "../assets/level3Image.svg";
import level4Image from "../assets/level4Image.svg";
import userGraph from "../assets/userGraph.jpeg";
import React from "react";

const UserProfile = () => {

    const UserInfo = () => {
        return (
            <div className={"userInfoBox"} style={{marginRight:40}}>
                <div className={"yourProfile"}>Your Profile</div>
                <div>
                    <img src={profileImage1} style={{paddingBottom:5, paddingTop:30}}/>
                </div>
                <div className={"infoText4"}>
                    Selena
                </div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={teamIcon} style={{padding:10}}/>
                    <div style={{paddingRight:30, paddingTop:13}}>
                        <div className={"infoText6"}>2</div>
                        <div className={"infoText5"}>Teams</div>
                    </div>
                    <img src={serviceIcon} style={{padding:10}}/>
                    <div style={{paddingTop:13, justifyContent:"left", alignItems:"flex-start"}}>
                        <div className={"infoText6"} style={{opacity: 0.5}}>5</div>
                        <div className={"infoText5"}>Services</div>
                    </div>
                </div>
            </div>
        );
    }

    const UserStrengthPoints = () => {
        return (
            <div>
                <div className={"userStrengthPoints"}>
                    <div style={{paddingTop:20, paddingLeft:60}}>
                        <div className={"strengthPointsText"}>Your Strength Points</div>
                        <div className={"strengthPointsText"} style={{paddingTop:20, fontSize:40, fontWeight:600}}>238</div>
                    </div>
                    <div style={{paddingTop:40, paddingLeft:80}}>
                        <div style={{display:"flex", fontSize:14}}>
                            <div style={{textAlign:"left", paddingRight:110}}>Level 2</div>
                            <div style={{textAlign:"right", color: "#FBAA0E"}}>Level 3</div>
                        </div>
                        <div><img src={progress} style={{width:200}}/></div>
                        <div style={{display:"flex", fontSize:10}}>
                            <div style={{textAlign:"left", paddingRight:160}}>200</div>
                            <div style={{textAlign:"right"}}>300</div>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div>
                        <div className={"recentStrength"}>
                            <div style={{paddingTop:15}}>
                                <img src={monthlyStrength} />
                            </div>
                            <div className={"infoText1"}>Strength points earned last month</div>
                            <div className={"infoText2"}>25</div>
                        </div>
                        <div className={"recentStrength"}>
                            <div style={{paddingTop:20}}>
                                <img src={ongoingTasks} />
                            </div>
                            <div className={"infoText1"}>Ongoing tasks</div>
                            <div className={"infoText2"}>17</div>
                        </div>
                    </div>
                    <div>
                        <div className={"strengthGraphText"}>
                            Strength points earnings
                        </div>
                        <div style={{paddingLeft:10}}>
                        <img src={userGraph} style={{height:290, width:480}}/>
                        </div>
                        {/*<div className={"strengthGraph"}>*/}
                        {/*    <img src={userGraph} style={{width:450, height:245}}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }

    const LevelsInfo = () => {
        return (
            <div className={"levelsInfoBox"} style={{marginRight:40, paddingTop:30}}>
                <div className={"line"}><img src={line} style={{height:650}}/></div>
                <div>
                    <LevelDetail levelNo={1} source={level1Image} taskName={"New member"} taskDetail={"Participate to bounty"} spPoints={100} opa={1}/>
                    <LevelDetail levelNo={2} source={level2Image} taskName={"Member"} taskDetail={"Participate and create projects"} spPoints={250} opa={1}/>
                    <LevelDetail levelNo={3} source={level3Image} taskName={"Veteran"} taskDetail={"Treasury voting rights"} spPoints={750} opa={0.5}/>
                    <LevelDetail levelNo={4} source={level4Image} taskName={"Advisor"} taskDetail={"Admin rights"} spPoints={2500} opa={0.3}/>
                </div>
            </div>
        );
    }

    const LevelDetail = ({levelNo, source, taskName, taskDetail, spPoints, opa}) => {
        return (
            <div className={"activeLevelBox"} style={{opacity:opa}}>
                <div className={"activeLevel"}>
                    <div style={{paddingTop:20, color: "#D26F38", fontWeight:700}}>Level {levelNo}</div>
                </div>
                <div style={{paddingLeft:30, paddingRight:10}}><img src={source}/></div>
                <div style={{width:150}}>
                    <div className={"levelTaskInfo"} style={{fontWeight:700}}>{taskName}</div>
                    <div className={"levelTaskInfo"}>{taskDetail}</div>
                </div>
                <div className={"spInfo"} style={{width:150}}>{spPoints} SP</div>
            </div>
        );
    }

    const UnlockPoints = () => {
        return (
                <div className={"unlockPointsBox"}>
                    <div className={"strengthGraphText"} style={{margin:0, padding:0, width:250}}>
                        Get more points to unlock next level:
                    </div>
                    <div className={"unlockBlock"}>
                        <button className={"pointsButtons"} style={{width:120, height:40}}>Staking</button>
                        <div className={"infoText3"}>+ 12 SP the 21/10/22</div>
                        <button className={"blueButton"} style={{width:60, height:40}}>Stake</button>
                    </div>
                    <div className={"unlockBlock"}>
                        <button className={"pointsButtons"} style={{width:120, height:40}}>Achievements</button>
                        <div className={"infoText3"}>&nbsp;&nbsp;&nbsp;3 projects ongoing &nbsp;&nbsp;&nbsp;
                            + 24 SP when achieved</div>
                        <button className={"blueButton"} style={{width:60, height:40}}>Tasks</button>
                    </div>
                    <div className={"unlockBlock"}>
                        <button className={"pointsButtons"} style={{width:120, height:40}}>Projects</button>
                        <div className={"infoText3"}>&nbsp;&nbsp;&nbsp;1 project ongoing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            + 24 SP when achieved</div>
                        <button className={"blueButton"} style={{width:60, height:40}}>New</button>
                    </div>
                </div>
        );
    }

    return (
        <div>
        <div id="projectInfo" className={"projectInfoCN"}>
            <UserInfo />
            <UserStrengthPoints />
        </div>
        <div id="projectInfo2" className={"projectInfoCN"}>
            <LevelsInfo />
            <UnlockPoints />
        </div>
        <div id="projectInfo3" className={"projectInfoCN"}>
            <img src={myActivity} />
        </div>
        </div>
    );
}

export default UserProfile;