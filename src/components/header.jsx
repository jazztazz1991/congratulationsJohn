import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin"; // Import TextPlugin

import "./header.css";

gsap.registerPlugin(MotionPathPlugin, TextPlugin);

const welcomeMessages = {
  1: `Congratulations,`,
  2: `John & Angel!`,
  3: `Your Students & TA's`,
  4: `2024 June UCF Coding Bootcamp`,
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

    // Create a main timeline for congrats texts animations
    const timeline = gsap.timeline();
    // Animations for congrats texts in sequence
    const totalDuration = Object.keys(welcomeMessages).reduce(
      (total, key) => total + welcomeMessages[key].length * 0.2,
      0
    );

    let delay = 0;
    Object.keys(welcomeMessages).forEach((key) => {
      timeline.add(
        animateCongrats(`.congratsText${key}`, welcomeMessages[key]),
        delay
      );
      delay += welcomeMessages[key].length * 0.1;
    });
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

  function animateCongrats(selector, message) {
    const congratsText = document.querySelector(selector);
    const parentElement = congratsText.parentElement;

    // Clear existing content to avoid duplicates
    congratsText.innerHTML = "";

    gsap.set(parentElement, { opacity: 0 }); // Hide the entire congrats container initially

    const contentArray = message.split("");
    let characterAnimationDelay = 0;

    const timeline = gsap.timeline(); // Create a timeline for character animations

    // Show the parent element
    timeline.to(parentElement, { opacity: 1 });

    contentArray.forEach((textElement, index) => {
      const span = document.createElement("span");
      span.textContent = textElement;
      span.style.display = "inline-block";
      span.style.opacity = 0; // Hide each character initially
      timeline.to(congratsText, { opacity: 1 });
      congratsText.appendChild(span);

      // Start animating the character after a delay
      timeline.to(
        span,
        {
          opacity: 1, // Gradually reveal the character
          duration: 0.8, // Set a short duration for the animation
        },
        index * 0.08
      ); // Use absolute position to create delay between character animations

      // Increment the delay for revealing the next character
      characterAnimationDelay += 0.001; // Adjust the delay as needed
    });

    return timeline; // Return the timeline to chain it in the main timeline
  }

  return (
    <div className='container'>
      <div className='bottle'>
        <div className='cork'></div>
        <div className='neck'></div>
        <div className='body'></div>
        <div className='label'>J & A</div>
      </div>
      <div className='congrats'>
        <h2
          className='text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight congratsText1'
          style={{ opacity: 0, transform: "translateY(50px)" }}
        ></h2>
        <h2
          className='text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight congratsText2'
          style={{ opacity: 0, transform: "translateY(50px)" }}
        ></h2>
        <div className='signature'>
          <div>Heart</div>

          <div className='sig-text'>
            <h2
              className='text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight congratsText3'
              style={{ opacity: 0, transform: "translateY(50px)" }}
            ></h2>
            <h2
              className='text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight congratsText4'
              style={{ opacity: 0, transform: "translateY(50px)" }}
            ></h2>
          </div>
        </div>
      </div>
      <div className='bubbles'></div>
    </div>
  );
};

export default Header;
