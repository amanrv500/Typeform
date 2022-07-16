import { useCallback } from 'react';
import { FaThList } from 'react-icons/fa'
import { Handle, Position } from 'react-flow-renderer';
import { CgTranscript } from 'react-icons/cg';
import { GoCheck } from 'react-icons/go';
import { IoIosQuote } from 'react-icons/io';

const QuestionNode = ({data}) => {
    
    return (
      <div className='border p-2 rounded shadow-sm' style={{heigth:"40px",width:"80px"}}>
            {(() => {
                if (true) {
                    return (
                        <>
                        <Handle type="target" position={Position.Right} />
                         <span className="d-flex">
                                <span className="rounded px-1 d-flex align-items-center me-2" style = {{backgroundColor:"#379CFB"}}>
                                    <CgTranscript/>
                                </span>
                                <span>
                                    {data.label}
                                    {data.qtype}
                                </span>
                        </span>
                        <Handle type="source" position={Position.Left} />
                        </>
                    )
                } 
                // else if (props.questionShow === 2) {
                //     return (
                //         <Handle type="target" position={Position.Right} />
                //         <span className="d-flex">
                //                 <span className="rounded px-1 d-flex align-items-center me-2" style = {{backgroundColor:"#D65C99"}}>
                //                     <GoCheck/>
                //                 </span>
                //                 Multiple Choice
                //         </span>
                //         <Handle type="source" position={Position.Left} />
                //     )
                // } 
                // else if (props.questionShow === 3) {
                //     return (
                //         <Handle type="target" position={Position.Right} />
                //         <span className="d-flex">
                //                 <span className="rounded px-1 d-flex align-items-center me-2" style = {{backgroundColor:"#FBA137"}}>
                //                     <IoIosQuote/>
                //                 </span>
                //                 Statement
                //         </span>
                //         <Handle type="source" position={Position.Left} />
                //     )
                // }
            })()}
      </div>
    );
  }

export default QuestionNode;
