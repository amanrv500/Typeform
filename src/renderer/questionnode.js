import { useCallback } from 'react';
import { FaThList } from 'react-icons/fa'
import { Handle, Position } from 'react-flow-renderer';
import { CgTranscript } from 'react-icons/cg';
import { GoCheck } from 'react-icons/go';
import '../style/questionnode.css';
import {HiPlusCircle} from 'react-icons/hi';
import { IoIosQuote } from 'react-icons/io';

const handleStyle = { right: 0  };

const QuestionNode = ({data}) => {
    
    return (
      <div className=' p-2 rounded shadow-sm flw-brd'>
            {(() => {
                if (data.qtype === 'Text') {
                    return (
                        <>
                            <Handle type="target" position={Position.Left} />
                            <span className="d-flex">
                                    <span className="rounded px-1 d-flex align-items-center me-2" style = {{backgroundColor:"#379CFB"}}>
                                        <CgTranscript/>
                                    </span>
                                    <span>
                                        {data.label}
                                    </span>
                            </span>
                            <Handle type="source" position={Position.Right} className='d-flex align-items-center'>
                                <HiPlusCircle />
                            </Handle>
                        </>
                    )
                }
                else if (data.qtype === 'MultipleChoice') {
                    return (
                        <>
                            <Handle type="target" position={Position.Left} />
                            <span className="d-flex">
                                <span className="rounded px-1 d-flex align-items-center me-2" style = {{backgroundColor:"#D65C99"}}>
                                    <GoCheck/>
                                </span>
                                <span>
                                    {data.label}
                                </span>
                            </span>
                            <Handle type="source" position={Position.Right} />
                        </>
                    )
                } 
                else if (data.qtype === 'Statement') {
                    return (
                        <>
                            <Handle type="target" position={Position.Left} />
                            <span className="d-flex">
                                    <span className="rounded px-1 d-flex align-items-center me-2" style = {{backgroundColor:"#FBA137"}}>
                                        <IoIosQuote/>
                                    </span>
                                    <span>
                                        {data.label}
                                    </span>
                            </span>
                            <Handle type="source" position={Position.Right} />
                        </>
                    )
                }
            })()}
      </div>
    );
  }

export default QuestionNode;
