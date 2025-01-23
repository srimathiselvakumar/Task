import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const textBoxRef = useRef(null); // Ref for the text box
  const timerIdRef = useRef(null); // Ref for the timer ID
  const [countdown, setCountdown] = useState(10); // State for the countdown
  const [isTimeUp, setIsTimeUp] = useState(false); // State to show "Time's Up"

  // Focus the text box
  const focusTextBox = () => {
    if (textBoxRef.current) {
      textBoxRef.current.focus();
    }
  };

  // Start the timer
  const startTimer = () => {
    if (timerIdRef.current) return; // Prevent multiple timers

    timerIdRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(timerIdRef.current);
          timerIdRef.current = null;
          setIsTimeUp(true);
          return 0;
        }
      });
    }, 1000);
  };

  // Stop the timer
  const stopTimer = () => {
    if (timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  };

  // Reset the timer
  const resetTimer = () => {
    stopTimer();
    setCountdown(10);
    setIsTimeUp(false);
  };

  return (
    <div className="container">
      <h1>Magical Timer and Input Box</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Type here..."
          ref={textBoxRef}
          onFocus={() => setIsTimeUp(false)}
        />
        <button onClick={focusTextBox}>Focus Box</button>
      </div>
      <div className="timer-section">
        <p id="timer-display">{countdown}</p>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={resetTimer}>Reset Timer</button>
        {isTimeUp && <p id="time-up-message">Time’s Up!</p>}
      </div>
    </div>
  );
}

export default App;
