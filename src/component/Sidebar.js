import lomads from "../assets/lomads_sq.svg";
import projects from "../assets/projects.svg";
import myBoard from "../assets/myBoard.svg";
import salena from "../assets/salena.svg";
import logout from "../assets/logout.svg";

const Sidebar = ({onMenuIconClick}) => {

    return (
        <div id="sidebar" className={"sidebarCN"}>
            <img src={lomads} className={"sidebarImage"} />
            <img src={projects} className={"sidebarImage"} />
            <img src={myBoard} className={"sidebarImage"} />
            <img src={salena} className={"sidebarImage"} />
            <img src={logout} className={"sidebarImage"} />
        </div>
    );
}

export default Sidebar;