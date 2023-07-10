import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
  { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 25 } },
  { id: '2', type: 'default', data: { label: 'Have Tokens?' }, position: { x: 250, y: 125 } },
  { id: '3', type: 'default', data: { label: 'Interact with Smart Contract' }, position: { x: 250, y: 225 } },
  { id: '4', type: 'default', data: { label: 'Approval Requested?' }, position: { x: 250, y: 325 } },
  { id: '5', type: 'default', data: { label: 'Is Contract Trusted/Audited?' }, position: { x: 250, y: 425 } },
  { id: '6', type: 'default', data: { label: 'Approve Exact Tokens' }, position: { x: 250, y: 525 } },
  { id: '7', type: 'output', data: { label: 'Operation Performed' }, position: { x: 250, y: 625 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e5-6', source: '5', target: '6', animated: true },
  { id: 'e6-7', source: '6', target: '7', animated: true },
];

const BasicFlowChart = () => {
  return (
    <div style={{ height: "900px", width: "1200px" }}>
      <ReactFlow elements={elements} />
    </div>
  );
};

export default BasicFlowChart;
