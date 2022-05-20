// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  
  // const [error, setError] = React.useState(null)
  // const userNameRef = React.useRef(null)
  
  // const handleSubmit = function (event) {
  //   event.preventDefault()
  //   const userNameValue = event.target.elements.userNameInput?.value
  //   console.log("userNameValue: ", userNameValue)
  //   console.log("userNameRef.current.value: ", userNameRef.current.value)

  //   onSubmitUsername(userNameRef.current.value)
  // }

  // const handleChange = function (event) {
  //   const value = event.target.value
  //   const isValid = value === value.toLowerCase()
  //   setError(isValid ? null : "Username needs to be lowercase")
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor='userNameInput'>Username:</label>
  //       <input type="text" id="userNameInput" ref={userNameRef} onChange={handleChange}/>
  //       <div role="alert">{error}</div>
  //     </div>
  //     <button type="submit" disabled={Boolean(error)}>Submit</button>
  //   </form>
  // )

  // extra controlled input

  const [userName, setUserName] = React.useState("")

  const handleSubmit = function (event) {
    event.preventDefault()
    onSubmitUsername(userName)
  }

  const handleChange = function (event) {
    const value = event.target.value
    setUserName(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userName'>Username:</label>
        <input type="text" value={userName} id="userName" onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
