import { useCallback } from 'react';
import { FaThList } from 'react-icons/fa'
import { Handle, Position } from 'react-flow-renderer';



function UpdaterNode() {
    
    return (
      <div className="updater-node">
        <label htmlFor="text"><FaThList className='icon3' /> 1 </label>
        <Handle type="source" position={Position.Right} />
      </div>
    );
  }

export default UpdaterNode;
