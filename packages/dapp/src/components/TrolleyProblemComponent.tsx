import React, { useState } from 'react';
type Status = "idle" | "approve" | "pending" | "success" | "failure"
import {
  buyToken,
} from "../services/token.service"

const TrolleyProblemComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [transactionStatus, setTransactionStatus] = useState<Status>("idle");
  const [lastTransactionHash, setLastTransactionHash] = useState("")

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleBuySubmit = async (e: React.FormEvent) => {
    console.log("Buy")
    e.preventDefault()
    try {
      setTransactionStatus("pending")

      console.log("Buy")
      const result = await buyToken()
      console.log(result)

      setLastTransactionHash(result.transaction_hash)
      setTransactionStatus("pending")
    } catch (e) {
      console.error(e)
      setTransactionStatus("idle")
    }
  }


  const getTrolleyPosition = () => {
    if (selectedOption === 'option1') {
      return '60%';
    } else if (selectedOption === 'option2') {
      return '76%';
    } else {
      return '0';
    }
  };



  return (
    <>
    <div className="diagram" data-v-bc056712 style={{
      textAlign: 'center',
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '75px',
      width: '100%',
      aspectRatio: '2.15/1',
      maxWidth: 'calc(min(105vh, 80vw, 1100px))',
      pointerEvents: 'none',
    }}>
      <img src="/absurd-trolley-problems/track.svg" className="track" style={{
        position: 'absolute',
        top: '50%',
        maxWidth: '100%',
        left: '0',
        width: '100%',
        transform: 'translateY(-50%)'
      }} />
      <img src="/absurd-trolley-problems/five-guys.svg" className="option1" style={{
        position: 'absolute',
        top: '50%',
        left: '60%',
        transform: 'translateY(-19%)',
        maxWidth: '21%',
        zIndex: '3',
        transition: 'transform .15s ease-in-out',
      }} />
      <img src="/absurd-trolley-problems/splat.svg" className="splat1" style={{ display: 'none' }} />
      <img src="/absurd-trolley-problems/one-guy.svg" className="option2" style={{
        position: 'absolute',
        top: '50%',
        left: '76%',
        transform: 'translateY(-158%)',
        maxWidth: '10%',
        transition: 'transform .15s ease-in-out',
      }} />
      <img src="/absurd-trolley-problems/splat.svg" className="splat2" style={{ display: 'none' }} />
      <img src="/absurd-trolley-problems/you.svg" className="you" style={{
        position: 'absolute',
        top: '60%',
        transform: 'translateY(-30%)',
        left: '14%',
        maxWidth: '14%',
      }} />
      <img data-v-bc056712="" src="/absurd-trolley-problems/you-pull.svg" className="you"  style={{
        position: 'absolute',
        top: '60%',
        transform: 'translateY(-30%)',
        left: '14%',
        maxWidth: '14%',
        display: 'none',
      }} />
      <div className="trolley-wrapper trolley-option0 trolley">
        <img src="/absurd-trolley-problems/trolley.svg" className="trolley" style={{
          position: 'absolute',
          width: '100%',
          left: getTrolleyPosition(),
          top: '50%',
          maxWidth: '26%',
          transform: 'translateY(-144%)',
          transformOrigin: 'center center',
          zIndex: '5',
        }} />
      </div>
      <img src="/absurd-trolley-problems/explosion.svg" className="explosion" style={{ display: 'none' }} />
    </div>
            <div>
            <p>
              You are about to approve a token for a contract. This is a risky operation. Are you sure you want to proceed?
            </p>
            <button onClick={handleBuySubmit} >Yes, I understand the risks</button>
            <button onClick={() => handleOptionClick('option2')}>No, I don't understand the risks</button>
              </div>
              </>
  );
};

export default TrolleyProblemComponent;
