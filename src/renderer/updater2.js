import { useCallback } from 'react';
import { FaThList } from 'react-icons/fa'
import { Handle, Position } from 'react-flow-renderer';



function UpdaterNode2() {
    
    return (
      <div className="updater-node">

       
       <label htmlFor="text"><FaThList className='icon2'/>  2</label>
        <Handle type="source" position={Position.Right} id="a" />
        <Handle type="target" position={Position.Left} id="b" />
      </div>

    );
  }

export default UpdaterNode2;
