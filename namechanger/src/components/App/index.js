import React, {useState, useEffect} from 'react'
import View from '../View'
import Change from '../Change'
import './style.css'

export default function App() {
    const [isVisible, setVisible] = useState(true)
    const [background, setBackground] = useState('white')
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(" http://localhost:3000/users.json")
            .then(response => response.json())
            .then(users => {
                setUsers(users.users)
            })
    }, [])

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

    const deleteClick = username => {
        setUsers(users.filter(element => element.username !== username))
    }

    return (
        <div className="wrapper">
            <div className="column">
                <div className="div-message" style={{background: background}}>User is saved!</div>
                <div className="card">
                    <h1 className="title">Name</h1>
                    { isVisible ? <View onClick = {handleClick} onDeleteClick = {deleteClick} users = {users} /> : <Change onClick = {handleClick} /> }
                </div>
            </div>
        </div>
    )
}