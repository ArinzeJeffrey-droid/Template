import React from 'react'
import Navbar from '../components/nav-bar/Navbar'
import ActivityPage from "./Activity"
import EarnPage from './EarnPage'
import WalletPage from "./WalletPage"
import HomePage from "./HomePage"
import { Switch, Route, BrowserRouter, Link } from "react-router-dom"
import AccountPage from "./AccountPage"
import Notification from "./Notification"




const ContainerPage = () => {
    return (
    <BrowserRouter>
        <div className="main-content">
            <Navbar/>
            <div className="body-content">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/activity" component={ActivityPage}/>
                        <Route path="/earn" component={EarnPage}/>
                        <Route path="/wallet" component={WalletPage}/>
                        <Route path="/account" component={AccountPage}/>
                        <Route path="/notification" component={Notification}/>
                    </Switch>
            </div>
            <footer className="footer">
                <Link to="/" className="flex pl-1"> 
                    <span className="fas fa-home"></span>
                    Home
                </Link>
                <Link to="/activity" className="flex"> 
                    <span className="fas fa-list-alt"></span>
                    Activity
                </Link>                
                <Link to="/wallet" className="flex"> 
                    <span className="fas fa-wallet"></span>
                    Wallet
                </Link>                
                <Link to="/earn" className="flex pr-1"> 
                    <span className="fas fa-store"></span>
                    Earn
                </Link>
            </footer>
        </div>
    </BrowserRouter>

    );
}

export default ContainerPage;