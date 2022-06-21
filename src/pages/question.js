import React from 'react';
import Nav from "../components/nav";
import RightSideBar from '../components/rightsidebar';
import LeftSideBar from '../components/leftsidebar';



const Questionpage = () => {
    return (
        <div className="flowpage">
            <Nav />
            <LeftSideBar />
            <RightSideBar />
        </div>
    );
}

export default Questionpage;