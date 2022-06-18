import { FaThList } from 'react-icons/fa'
import { Handle,position } from 'react-flow-renderer';
import UpdaterNode from './updater1';


const Node = () =>{

  return( [
    {
      id: '1',
      type: 'UpdaterNode',
      data: { label: <div><span><FaThList />  1</span></div> },
      position: { x: 250, y: 25 },
    },
  
    {
      id: '2',
      type: 'UpdaterNode2',
      // you can also pass a React component as a label
      data: { label: <div><span><FaThList />  2</span></div>  },
      position: { x: 100, y: 125 },
    } 
  ]
   );

}


export default Node;
  