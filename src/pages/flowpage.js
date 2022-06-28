import Navbar from "../components/Navbar";
import RightSideBar from "../components/rightsidebar";
import Flow from "../renderer/flow";
import React from 'react';
import '../style/flowpage.css';


const Flowpage = () => {
    return (
        <div className="flowpage">
            <Navbar />
            <div className="contents">
                <div className="flow">
                    <Flow />
                </div>
                <RightSideBar />
            </div>
        </div>
    );
}

export default Flowpage;

