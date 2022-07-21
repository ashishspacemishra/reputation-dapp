import './App.css';
import React, { Component }  from "react";
import LoginBar from "./component/LoginBar";
import Sidebar from "./component/Sidebar";
import ProjectHeader from "./component/ProjectHeader";
import ProjectInfo from "./component/ProjectInfo";
import ProjectGov from "./component/ProjectGov";
import UserProfile from "./component/UserProfile";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isUserLoggedIn: false,
            accountAddress: '',
            displayAddress: ''
        }
    }

    LoginMetamask = async (accountAddress) => {
        this.setState({
            isUserLoggedIn: true,
            accountAddress: accountAddress,
            displayAddress: this.getDisplayAddress(accountAddress)
        });
        console.log(this.state);
    }

    LogoutMetamask = async () => {
        this.setState({
            isUserLoggedIn: false,
            accountAddress: '',
            displayAddress: ''
        });
        console.log(this.state);
    }

    getDisplayAddress = (address) => {
        if (address === null || address === "") {return "";}
        return (address.substring(0, 5) + "..." +
            address.substr(address.length - 3, 3)).toUpperCase();
    }

    updateChainToPolygon = async (currentChainId) => {
        const polygonChainId = "0x13881"; //Polygon Testnet
        console.log(currentChainId);
        if (currentChainId !== polygonChainId) {
            console.log("switchNetwork");
            // await Moralis.enableWeb3();
            // await Moralis.switchNetwork(polygonChainId);
        }
    }

    renderPage = (props) => {
        if (props.page === "HOME") {
            return (
                <div>
                    <Sidebar/>
                    <div style={{paddingTop:100}}>
                        <ProjectHeader />
                    </div>
                    <ProjectInfo />
                </div>
            );
        } else if (props.page === "USER_DETAIL") {
            return (
                <div>
                    <Sidebar/>
                    <div style={{paddingTop:100}}>
                        <ProjectHeader />
                    </div>
                    <UserProfile />
                </div>
            );
        }
        return (
            <div></div>
        );
    }

    render() {
      return (
        <div className="App">
          <LoginBar isUserLoggedIn={this.state.isUserLoggedIn} displayAddress={this.getDisplayAddress(this.state.accountAddress)}
                    onLoginButtonClick={this.LoginMetamask} onLogoutButtonClick={this.LogoutMetamask}
          />
            {/*{ this.state.isUserLoggedIn &&*/}
            {/*  <div>*/}
            {/*    <Sidebar/>*/}
            {/*    <div style={{paddingTop:100}}>*/}
            {/*        <ProjectHeader />*/}
            {/*    </div>*/}
            {/*    <ProjectInfo />*/}
            {/*    <ProjectGov />*/}
            {/*  </div>*/}
            {/*}*/}
            {this.state.isUserLoggedIn && this.renderPage(this.props)}
        </div>
      );
    }
}

export default App;
