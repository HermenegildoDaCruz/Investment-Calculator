import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleChange(inputIdentifier, newValue) {
    const value = Number(newValue)
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: value,
      }
    })
  }
  const inputIsValid = userInput.duration > 0
  return (
    <>
        <Header></Header>
        <UserInput userInputData={userInput} handleChange={handleChange}></UserInput>
        {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
        {inputIsValid && <Results userInput={userInput}></Results>}
    </>
  )
}

export default App
