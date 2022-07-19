import imageFest from "../assets/imageFest.svg";
import proposeProject from "../assets/proposeProject.svg";

const ProjectHeader = () => {

    return (
        <div id="projectHeader" className={"projectHeaderCN"}>
            <img src={imageFest} style={{padding:10}}/>
            <div className={"projectHeader"}>Paris Film Festival</div>
            <img src={proposeProject} style={{padding:15}}/>
        </div>
    );
}

export default ProjectHeader;