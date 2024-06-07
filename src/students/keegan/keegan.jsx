import { gsap } from "gsap";
import "./keegan.css";
const handleClick = (e) => {
  const coinContainer = document.createElement("div");
  const container = document.querySelector(".wedding-congrats");
  coinContainer.classList.add("coin-container");
  coinContainer.style.zIndex = 5000;
  coinContainer.style.left = `48%`;
  coinContainer.style.bottom = `15%`;
  coinContainer.style.position = "relative";

  container.appendChild(coinContainer);

  const x = e.clientX;
  const y = e.clientY;

  for (let i = 0; i < 30; i++) {
    const coin = document.createElement("div");
    coin.classList.add("coin");
    coin.style.left = `${x}px;`;
    coin.style.top = `${y}px;`;
    coinContainer.appendChild(coin);

    gsap.fromTo(
      coin,
      {
        x: 50,
        y: 0,
        opacity: 1,
        scale: 1,
      },
      {
        x: () => Math.random() * window.innerWidth - window.innerWidth / 2,
        y: () => Math.random() * window.innerHeight - window.innerHeight / 2,
        opacity: 0,
        scale: 0.5,
        duration: 2,
        ease: "power3.out",
        onComplete: () => coin.remove(),
      }
    );
  }

  setTimeout(() => coinContainer.remove(), 2000); // Cleanup after animation
};
function Keegan() {
  return (
    <div className='wedding-congrats' onClick={handleClick}>
      <div className='keegan-text'>
        <h1>Congratulations, John & Angel!</h1>
        <p className='first-el'>
          Wishing you a lifetime of happiness together!
        </p>
        <p>Remember money is the 5th element!</p>
        <p className='name'>Keegan</p>
      </div>
    </div>
  );
}

export default Keegan;
