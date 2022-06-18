import React , {createContext, useContext} from 'react';
 
import Notecontext from './noteContext';

const Notestate = (props) => {
    
    return (
        <Notecontext.Provider>
           {props.children}
        </Notecontext.Provider>
    )
}

export default Notestate;
