import { useState, useEffect } from 'react';
import './DigitalClock.module.css';

// Function to create a DigitalClock component
function Section11() {

  // State to store the current time
  const [time, setTime] = useState(
    new Date()
  );
  // State to store the background color
  const [background, setBackground] = useState('');

  // Function to generate a random background color
  useEffect(() => {
    // Function to generate a random background color
    const generateRandomBackground = () => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setBackground(randomColor);
    };

    // Call the function to generate a random background when component mounts or new date renders
    generateRandomBackground();

    // Clean up function (optional)
    return () => {
      clearInterval(generateRandomBackground);
    };
  }, [time]);

  // Function to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Function to format the time
  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    return `${panZero(hours)}:${panZero(minutes)}:${panZero(seconds)} ${meridiem}`;
  }

  // Function to pad a number with a 0 if it is less than 10
  function panZero(number) {
    return (number < 10 ? '0' : '') + number;
  }


  // Function to return the component
  return (
    <>
      <div style={{ background, minHeight: '100vh', minWidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="clock-container" >
          <div className="clock">
            <span>{formatTime()}</span>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the DigitalClock component
export default Section11;
