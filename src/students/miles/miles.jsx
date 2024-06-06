import { useState } from "react";
import "./miles.css";
import confetti from "canvas-confetti";

function Miles() {
  const [isExploding, setIsExploding] = useState(false);
  const handleCongratulationClick = () => {
    setIsExploding(true);
    confetti({
      force: 0.6,
      duration: 2200,
      particleCount: 100,
      width: 1000,
      height: 300,
      zIndex: 500,
      colors: ["#9A0023", "#FF003C", "#AF739B", "#FAC7F3", "#F7DBF4"],
    });
    setTimeout(() => setIsExploding(false), 2200);
  };

  return (
    <div>
      <h2>Miles</h2>

      <h1 className='congrats-miles' onClick={handleCongratulationClick}>
        Congratulations John!!!
      </h1>
      {isExploding && <h1 className='wild'>BE WILD!</h1>}
      <div className='confetti-wrapper'></div>
    </div>
  );
}

export default Miles;
