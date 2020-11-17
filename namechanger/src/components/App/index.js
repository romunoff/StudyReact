import React, {useState} from 'react'
import View from '../View'
import Change from '../Change'
import './style.css'

export default function App() {
    const [isVisible, setVisible] = useState(true)
    const [background, setBackground] = useState('white')

    const handleClick = () => {
        if (isVisible) {
            setVisible(!isVisible)
        } else {
            setBackground('#47e2a1')
            setTimeout(() => {
                setBackground('white')
            }, 2000)
            setTimeout(() => {
                setVisible(!isVisible)
            }, 4000)
        }
    }

    const deleteClick = () => {
        alert("User is deleted")
    }

    return (
        <div className="wrapper">
            <div className="column">
                <div className="div-message" style={{background: background}}>User is saved!</div>
                <div className="card">
                    <h1 className="title">Name</h1>
                    { isVisible ? <View onClick = {handleClick} onDeleteClick = {deleteClick} /> : <Change onClick = {handleClick} /> }
                </div>
            </div>
        </div>
    )
}