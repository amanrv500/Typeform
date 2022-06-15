import { FaThList } from 'react-icons/fa'

export default [
    {
      id: '1',
      type: 'input',
      data: { label: <div><span><FaThList />  1</span></div> },
      position: { x: 250, y: 25 },
    },
  
    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <div><span><FaThList />  2</span></div>  },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      data: { label: <div><span><FaThList />  3</span></div>  },
      position: { x: 250, y: 250 },
    },
    {
        id: '4',
        data: { label: <div><span><FaThList />  4</span></div> },
        position: { x: 300, y: 350 },
      },
      {
        id: '5',
        data: { label: <div><span><FaThList />  5</span></div>  },
        position: { x: 400, y: 450 },
      }
  ];
  