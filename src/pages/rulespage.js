import Navbar from "../components/Navbar";
import Flow from "../renderer/flow";
import React from 'react';
import Leftrules from "../components/leftrules";


const Rules = () => {
    return (
        <div className="rulepage">
            <Navbar />
            <Leftrules />
            <article className="flow">
                <Flow />
            </article>
          
        </div>
    );
}

export default Rules;
