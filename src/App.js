import React,{ useState } from 'react'
import './App.css'
import NumOfChars from './components/NumOfChars'
import Form from './components/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import copy from 'copy-to-clipboard'
// import DisplayPass from './components/DisplayPass'

const App = () => {

  var numOfChars = 0
  const [ password, setPassword ] = useState('')

  const setNumOfChars = (num) => {
    numOfChars = num
    // console.log(numOfChars)
  }

  const alphSmall = "abcdefghijklmnopqrstuvwxyz"
  const alphCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "1234567890"
  const symbols = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?"

  const convertString = (lower, upper, num, symbol) => {
    var string = ''
    if(lower){
      string += alphSmall
    }
    if(upper){
      string += alphCaps
    } 
    if(num){
      string += numbers
    } 
    if(symbol){
      string += symbols
    }
    return string
  }

  const generatePassword = (lower, upper, num, symbol) => {

    var pass = ''
    var string = convertString(lower, upper, num, symbol)

    if(numOfChars === 0){
      alert("Enter number of characters needed")
    }
    else{
      for(let i = 0; i < numOfChars; ++i){
        pass += string.charAt(Math.round(Math.random() * string.length))
      }
    }

    //let time = Date().toLocaleString()
    //const obj = { pass, time }
    //setPasswords([...passwords, obj])
    setPassword(pass)
  }

  const copyToClipboard = () => {
    copy(password)
    alert(`Copied text ${password}`)
  }

  return (
    <div className="App">
      <h1 className='title'>PASSWORD GENERATOR</h1>
      <NumOfChars setNumOfChars={setNumOfChars}/>
      <Form generatePassword={generatePassword}/>
      <div className='display-pass'>
        <h2 className="pass">{ password }</h2>
        <h2 className='copy'><FontAwesomeIcon icon={ faCopy } onClick={copyToClipboard}/></h2>
      </div>
    </div>
  )
}

export default App

