
import achievements from "../assets/achievements.svg";
import levels from "../assets/levels.svg";
import React from "react";

const ProjectGov = () => {

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
                <img src={achievements} />
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
            <div style={{paddingLeft:50, paddingTop:20}}>
                <img src={levels} />
            </div>
        </div>
    );
}

export default ProjectGov;