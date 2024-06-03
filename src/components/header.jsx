import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin"; // Import TextPlugin

import "./header.css";

gsap.registerPlugin(MotionPathPlugin, TextPlugin);

const welcomeMessages = {
  1: "Congratulations,",
  2: "John & Angel!",
  3: "Your Students & TA's",
  4: "2024 June UCF Coding Bootcamp",
};

const Header = () => {
  useEffect(() => {
    // Pop the cork animation
    gsap.to(".cork", {
      duration: 0.5,
      x: -100,
      ease: "power2.out",
    });

    // Create bubbles animation
    createBubbles();

    // Animations for congrats texts
    animateCongrats(".congratsText1");
    animateCongrats(".congratsText2");
    animateCongrats(".congratsText3");
    animateCongrats(".congratsText4");
  }, []);

  function createBubbles() {
    const bubbleContainer = document.querySelector(".bubbles");
    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      bubbleContainer.appendChild(bubble);
      const bubbleSize = gsap.utils.random(10, 30);
      gsap.set(bubble, {
        width: bubbleSize,
        height: bubbleSize,
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        position: "absolute",
        bottom: -50,
        left: gsap.utils.random(0, window.innerWidth),
      });
      animateBubble(bubble);
    }
  }

  function animateBubble(bubble) {
    gsap.to(bubble, {
      duration: gsap.utils.random(3, 5),
      y: -window.innerHeight,
      ease: "power1.out",
      onComplete: () => {
        bubble.remove();
        createBubble();
      },
    });

    gsap.to(bubble, {
      duration: gsap.utils.random(2, 4),
      x: gsap.utils.random(-100, 100),
      rotation: gsap.utils.random(-360, 360),
      ease: "sine.inOut",
    });
  }

  function createBubble() {
    const bubbleContainer = document.querySelector(".bubbles");
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubbleContainer.appendChild(bubble);

    const bubbleSize = gsap.utils.random(10, 30);
    gsap.set(bubble, {
      width: bubbleSize,
      height: bubbleSize,
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      position: "absolute",
      bottom: -50,
      left: gsap.utils.random(0, window.innerWidth),
    });

    animateBubble(bubble);
  }

  function animateCongrats(selector) {
    const congratsText = document.querySelector(selector);
    const parentElement = congratsText.parentElement;
    gsap.set(parentElement, { opacity: 0 }); // Hide the entire congrats container initially

    const contentArray = welcomeMessages[selector.slice(-1)].split("");
    let characterAnimationDelay = 0;

    contentArray.forEach((textElement, index) => {
      const span = document.createElement("span");
      span.textContent = textElement;
      span.style.display = "inline-block";
      span.style.opacity = 0; // Hide each character initially
      congratsText.appendChild(span);
      // Start animating the character after a delay
      gsap.to(span, {
        opacity: 1, // Gradually reveal the character
        delay: characterAnimationDelay,
      });

      // Increment the delay for revealing the next character
      characterAnimationDelay += 0.1; // Adjust the delay as needed
    });

    gsap.to(parentElement, { opacity: 1 }); // Show the entire congrats container after setting up animations
  }

  return (
    <div className='container'>
      <div className='bottle'>
        <div className='cork'></div>
        <div className='neck'></div>
        <div className='body'></div>
        <div className='label'>J&A</div>
      </div>
      <div className='congrats'>
        <h2
          className='text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight congratsText1'
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          {welcomeMessages[1]}
        </h2>
        <h2
          className='text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight congratsText2'
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          {welcomeMessages[2]}
        </h2>
        <div className='signature'>
          <div>Heart</div>

          <div className='sig-text'>
            <h2
              className='text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight congratsText3'
              style={{ opacity: 0, transform: "translateY(50px)" }}
            >
              {welcomeMessages[3]}
            </h2>
            <h2
              className='text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight congratsText4'
              style={{ opacity: 0, transform: "translateY(50px)" }}
            >
              {welcomeMessages[4]}
            </h2>
          </div>
        </div>
      </div>
      <div className='bubbles'></div>
    </div>
  );
};

export default Header;
