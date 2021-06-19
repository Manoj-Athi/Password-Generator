import React from 'react'
import '../App.css'

const NumOfChars = ({ setNumOfChars }) => {
    return (
        <div className='container'>
            <h3>Enter number of characters needed</h3>
            <div className="btn-container">
                <button type="button" onClick={() => {setNumOfChars(4)}}>4</button>
                <button type="button" onClick={() => {setNumOfChars(8)}}>8</button>
                <button type="button" onClick={() => {setNumOfChars(12)}}>12</button>
                <button type="button" onClick={() => {setNumOfChars(16)}}>16</button>
            </div>
        </div>
    )
}

export default NumOfChars
