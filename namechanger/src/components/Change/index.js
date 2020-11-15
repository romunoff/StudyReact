import React from 'react'
import './style.css'
import { Button, Input } from 'antd'

export default function Change(props) {
    return (
        <div>
            <Input className="margin-right input-style" placeholder = "Luke" />
            <Button type="primary" onClick = {props.onClick} danger>Save</Button>
        </div>
    )
}