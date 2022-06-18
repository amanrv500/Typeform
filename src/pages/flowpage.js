import Navbar from "../components/Navbar";
import Aside from "../components/aside";
import Flow from "../renderer/flow";
import React from 'react';


const Flowpage = () => {
    return (
        <div className="flowpage">
            <Navbar />
            <article className="flow">
                <Flow />
            </article>
           <Aside />
        </div>
    );
}

export default Flowpage;