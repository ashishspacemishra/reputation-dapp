import ourProjects from "../assets/ourProjects.svg";
import projectInfo from "../assets/projectInfo.svg";

const ProjectInfo = () => {

    const OurProjects = () => {
        return (
            <div className={"projectInfoBox"} style={{marginRight:40}}>
                <img src={ourProjects} style={{padding:10}}/>
            </div>
        );
    }

    const OngoingProjects = () => {
        return (
            <div className={"projectInfoBox"} style={{width:560}}>
                <img src={projectInfo} style={{padding:25}}/>
            </div>
        );
    }

    return (
        <div id="projectInfo" className={"projectInfoCN"}>
            <OurProjects />
            <OngoingProjects />
        </div>
    );
}

export default ProjectInfo;