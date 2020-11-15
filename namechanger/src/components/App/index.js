import React, {Component} from 'react'
import View from '../View'
import Change from '../Change'
import './style.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: true,
            background: 'white'
        }

        this.handleClick = this.handleClick.bind(this)
        this.deleteClick = this.deleteClick.bind(this)
    }

    handleClick = () => {
        if (this.state.isVisible) {
            this.setState({
                isVisible: !this.state.isVisible
            })
        } else {
            this.setState({
                background: '#47e2a1'
            })
            setTimeout(() => {
                this.setState({
                    background: 'white'
                })
            }, 2000)
            setTimeout(() => {
                this.setState({
                    isVisible: !this.state.isVisible,

                })
            }, 4000)
        }
    }

    deleteClick = () => {
        alert("User is deleted")
    }

    render() {
        const isVisible = this.state.isVisible
        let element = null
        if (isVisible) {
            element = <View onClick = {this.handleClick} onDeleteClick = {this.deleteClick} />
            /*setTimeout(() => {
                this.setState({
                    background: 'white'
                })
            }, 0)*/
        } else {
            element = <Change onClick = {this.handleClick} />
            /*setTimeout(() => {
                this.setState({
                    background: 'green'
                })
            }, 2000)*/
        }

        return (
            <div className="wrapper">
                <div className="column">
                    <div className="div-message" style={{background: this.state.background}}>User is saved!</div>
                    <div className="card">
                        <h1 className="title">Name</h1>
                        {element}
                    </div>
                </div>
            </div>
        )
    }
}

export default App