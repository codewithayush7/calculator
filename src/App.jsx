import { useState } from 'react';
import Header from "./components/header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput]=useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  const inputIsValid=userInput.duration>=1;

  function handleChange(initialIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [initialIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid&&
        (<p className="center">Please enter a duration greater than zero</p>)}
      {inputIsValid&&<Result input={userInput} />}
    </>
  )
}

export default App
