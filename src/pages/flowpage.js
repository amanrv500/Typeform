import Navbar from "../components/Navbar";
import RightSideBar from "../components/rightsidebar";
import Flow from "../renderer/flow";
import React from 'react';


const Flowpage = () => {
    return (
        <div className="flowpage">
            <Navbar />
            <article className="flow">
                <Flow />
            </article>
           <RightSideBar />
        </div>
    );
}

export default Flowpage;