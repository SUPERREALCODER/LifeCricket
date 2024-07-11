


// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function App() {
   const [selectedButton, setSelectedButton] = useState(null);
  const [counters, setCounters] = useState({});
  const [counter, ball] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:5000');
      const initialCounters = {};
      const initialBalls = {};
      result.data.forEach(({ button_name, counter_value, ball_value }) => {
        initialCounters[button_name] = counter_value;
        initialBalls[button_name] = ball_value;
      });
      setCounters(initialCounters);
      ball(initialBalls);
    }
    fetchData();
  }, []);

  const balls = (buttonName) => {
    ball((prevCounters) => {
      const newCounters = { ...prevCounters, [buttonName]: prevCounters[buttonName] + 1 };
      saveCounter(buttonName, counters[buttonName], newCounters[buttonName]);
      return newCounters;
    });
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const incrementCounter = (buttonName) => {
    setCounters((prevCounters) => {
      const newCounters = { ...prevCounters, [buttonName]: prevCounters[buttonName] + 1 };
      saveCounter(buttonName, newCounters[buttonName], counter[buttonName]);
      return newCounters;
    });
  };

  const incrementTwocounter = (buttonName) => {
    setCounters((prevCounters) => {
      const newCounters = { ...prevCounters, [buttonName]: prevCounters[buttonName] + 2 };
      saveCounter(buttonName, newCounters[buttonName], counter[buttonName]);
      return newCounters;
    });
  };

  const incrementThreecounter = (buttonName) => {
    setCounters((prevCounters) => {
      const newCounters = { ...prevCounters, [buttonName]: prevCounters[buttonName] + 3 };
      saveCounter(buttonName, newCounters[buttonName], counter[buttonName]);
      return newCounters;
    });
  };

  const incrementFourcounter = (buttonName) => {
    setCounters((prevCounters) => {
      const newCounters = { ...prevCounters, [buttonName]: prevCounters[buttonName] + 4 };
      saveCounter(buttonName, newCounters[buttonName], counter[buttonName]);
      return newCounters;
    });
  };

  const incrementSixcounter = (buttonName) => {
    setCounters((prevCounters) => {
      const newCounters = { ...prevCounters, [buttonName]: prevCounters[buttonName] + 6 };
      saveCounter(buttonName, newCounters[buttonName], counter[buttonName]);
      return newCounters;
    });
  };

  const incrementNo = (buttonName) => {
    setCounters((prevCounters) => {
      const newCounters = { ...prevCounters, [buttonName]: prevCounters[buttonName] + 1 };
      saveCounter(buttonName, newCounters[buttonName], counter[buttonName]);
      return newCounters;
    });
  };

  const saveCounter = async (buttonName, counterValue, ballValue) => {
   
  console.log(buttonName);
  console.log(counterValue);
  console.log(ballValue);
    
    try {
      await axios.post('http://localhost:5000/counters', {
        butto: buttonName,
        counto: counterValue,
        ballo: ballValue
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      
      {!selectedButton && (
        <div>
          <h1>Matches🏏Going on</h1>

          <button className="place match" onClick={() => handleButtonClick('Place')}>Place</button>
          <button className="a match" onClick={() => handleButtonClick('Home')}>Home</button>
          <button className="s match" onClick={() => handleButtonClick('Bodhon')}>Bodhon</button>
          <button className="d match" onClick={() => handleButtonClick('Persona')}>Persona</button>
          <button className="j match" onClick={() => handleButtonClick('Mount')}>Mount</button>
          <button className="k match" onClick={() => handleButtonClick('Kolkata')}>Kolkata</button>
          <button className="l match" onClick={() => handleButtonClick('Japan')}>Japan</button>
          <button className="l match" onClick={() => handleButtonClick('Trours')}>Trours</button>
        </div>
      )}
      {selectedButton === 'Place' && (
        <div>
          <h1>Trours 🆚 Questions&Perception</h1>
          <button className="back" onClick={() => setSelectedButton(null)}>Back</button>
          <h2>Trours: {counters[selectedButton]}</h2>
          <h3>({counter[selectedButton]})</h3>
          <div>
            
            
            <button onClick={() => {incrementCounter(selectedButton);balls(selectedButton);}}>1 Run</button>
            <button onClick={() => {incrementTwocounter(selectedButton);balls(selectedButton);}}>2 Run</button>
            <button onClick={() => {incrementThreecounter(selectedButton);balls(selectedButton);}}>3 Run</button>
            <button onClick={() => {incrementFourcounter(selectedButton);balls(selectedButton);}}>4 Run</button>
            <button onClick={() => {incrementSixcounter(selectedButton);balls(selectedButton);}}>6 Run</button>
            <button onClick={() => incrementCounter(selectedButton)}>Wide</button>
            <button onClick={() => {incrementNo(selectedButton)}}>No Ball</button>
            
          </div>
          {/* Add more buttons specific to 'Place' */}
        </div>
      )}
      {selectedButton === 'Home' && (
        <div>
          <h1>Trours 🆚 Competition</h1>
          <button className="back" onClick={() => setSelectedButton(null)}>Back</button>
          <h2>Trours: {counters[selectedButton]}</h2>
          <h3>({counter[selectedButton]})</h3>
          <div>
            
            
            
          <button onClick={() => {incrementCounter(selectedButton);balls(selectedButton);}}>1 Run</button>
            <button onClick={() => {incrementTwocounter(selectedButton);balls(selectedButton);}}>2 Run</button>
            <button onClick={() => {incrementThreecounter(selectedButton);balls(selectedButton);}}>3 Run</button>
            <button onClick={() => {incrementFourcounter(selectedButton);balls(selectedButton);}}>4 Run</button>
            <button onClick={() => {incrementSixcounter(selectedButton);balls(selectedButton);}}>6 Run</button>
            <button onClick={() => incrementCounter(selectedButton)}>Wide</button>
            <button onClick={() => {incrementNo(selectedButton)}}>No Ball</button>
          </div>
          
        </div>
      )}
      {selectedButton === 'Bodhon' && (
        <div>
          <h1>Trours 🆚 Traditional</h1>
          <button className="back" onClick={() => setSelectedButton(null)}>Back</button>
          <h2>Trours: {counters[selectedButton]}</h2>
          <h3>({counter[selectedButton]})</h3>
          <div>
            
            
           
          <button onClick={() => {incrementCounter(selectedButton);balls(selectedButton);}}>1 Run</button>
            <button onClick={() => {incrementTwocounter(selectedButton);balls(selectedButton);}}>2 Run</button>
            <button onClick={() => {incrementThreecounter(selectedButton);balls(selectedButton);}}>3 Run</button>
            <button onClick={() => {incrementFourcounter(selectedButton);balls(selectedButton);}}>4 Run</button>
            <button onClick={() => {incrementSixcounter(selectedButton);balls(selectedButton);}}>6 Run</button>
            <button onClick={() => incrementCounter(selectedButton)}>Wide</button>
            <button onClick={() => {incrementNo(selectedButton)}}>No Ball</button>
          </div>
          
        </div>
      )}
      {selectedButton === 'Persona' && (
        <div>
          <h1>Trours 🆚 Idiots</h1>
          <button className="back" onClick={() => setSelectedButton(null)}>Back</button>
          <h2>Trours: {counters[selectedButton]}</h2>
          <h3>({counter[selectedButton]})</h3>
          <div>
            
            
            
          <button onClick={() => {incrementCounter(selectedButton);balls(selectedButton);}}>1 Run</button>
            <button onClick={() => {incrementTwocounter(selectedButton);balls(selectedButton);}}>2 Run</button>
            <button onClick={() => {incrementThreecounter(selectedButton);balls(selectedButton);}}>3 Run</button>
            <button onClick={() => {incrementFourcounter(selectedButton);balls(selectedButton);}}>4 Run</button>
            <button onClick={() => {incrementSixcounter(selectedButton);balls(selectedButton);}}>6 Run</button>
            <button onClick={() => incrementCounter(selectedButton)}>Wide</button>
            <button onClick={() => {incrementNo(selectedButton)}}>No Ball</button>
          </div>
          
        </div>
      )}
       {selectedButton === 'Mount' && (
        <div>
          <h1>Trours 🆚 Difficulty</h1>
          <button className="back" onClick={() => setSelectedButton(null)}>Back</button>
          <h2>Trours: {counters[selectedButton]}</h2>
          <h3>({counter[selectedButton]})</h3>
          <div>
            
            
           
          <button onClick={() => {incrementCounter(selectedButton);balls(selectedButton);}}>1 Run</button>
            <button onClick={() => {incrementTwocounter(selectedButton);balls(selectedButton);}}>2 Run</button>
            <button onClick={() => {incrementThreecounter(selectedButton);balls(selectedButton);}}>3 Run</button>
            <button onClick={() => {incrementFourcounter(selectedButton);balls(selectedButton);}}>4 Run</button>
            <button onClick={() => {incrementSixcounter(selectedButton);balls(selectedButton);}}>6 Run</button>
            <button onClick={() => incrementCounter(selectedButton)}>Wide</button>
            <button onClick={() => {incrementNo(selectedButton)}}>No Ball</button>
          </div>
          
        </div>
      )}
       {selectedButton === 'Kolkata' && (
        <div>
          <h1>Trours 🆚 Nobody</h1>
          <button className="back" onClick={() => setSelectedButton(null)}>Back</button>
          <h2>Trours: {counters[selectedButton]}</h2>
          <h3>({counter[selectedButton]})</h3>
          <div>
            
            
           
          <button onClick={() => {incrementCounter(selectedButton);balls(selectedButton);}}>1 Run</button>
            <button onClick={() => {incrementTwocounter(selectedButton);balls(selectedButton);}}>2 Run</button>
            <button onClick={() => {incrementThreecounter(selectedButton);balls(selectedButton);}}>3 Run</button>
            <button onClick={() => {incrementFourcounter(selectedButton);balls(selectedButton);}}>4 Run</button>
            <button onClick={() => {incrementSixcounter(selectedButton);balls(selectedButton);}}>6 Run</button>
            <button onClick={() => incrementCounter(selectedButton)}>Wide</button>
            <button onClick={() => {incrementNo(selectedButton)}}>No Ball</button>
          </div>
          
        </div>
      )}
       {selectedButton === 'Japan' && (
        <div>
          <h1>Trours 🆚 No</h1>
          <button className="back" onClick={() => setSelectedButton(null)}>Back</button>
          <h2>Trours: {counters[selectedButton]}</h2>
          <h3>({counter[selectedButton]})</h3>
          <div>
            
            
           
          <button onClick={() => {incrementCounter(selectedButton);balls(selectedButton);}}>1 Run</button>
            <button onClick={() => {incrementTwocounter(selectedButton);balls(selectedButton);}}>2 Run</button>
            <button onClick={() => {incrementThreecounter(selectedButton);balls(selectedButton);}}>3 Run</button>
            <button onClick={() => {incrementFourcounter(selectedButton);balls(selectedButton);}}>4 Run</button>
            <button onClick={() => {incrementSixcounter(selectedButton);balls(selectedButton);}}>6 Run</button>
            <button onClick={() => incrementCounter(selectedButton)}>Wide</button>
            <button onClick={() => {incrementNo(selectedButton)}}>No Ball</button>
          </div>
          
        </div>
      )}
       {selectedButton === 'Trours' && (
        <div>
          <h1>Trours 🆚 Bullshit</h1>
          <button className="back" onClick={() => setSelectedButton(null)}>Back</button>
          <h2>Trours: {counters[selectedButton]}</h2>
          <h3>({counter[selectedButton]})</h3>
          <div>
            
            
            
          <button onClick={() => {incrementCounter(selectedButton);balls(selectedButton);}}>1 Run</button>
          <button onClick={() => {incrementTwocounter(selectedButton);balls(selectedButton);}}>2 Run</button>
          <button onClick={() => {incrementThreecounter(selectedButton);balls(selectedButton);}}>3 Run</button>
          <button onClick={() => {incrementFourcounter(selectedButton);balls(selectedButton);}}>4 Run</button>
          <button onClick={() => {incrementSixcounter(selectedButton);balls(selectedButton);}}>6 Run</button>
          <button onClick={() => incrementCounter(selectedButton)}>Wide</button>
          <button onClick={() => {incrementNo(selectedButton)}}>No Ball</button>
          </div>
          
        </div>
      )}
    </div>
  );
}



   
  




