import React from 'react'
import usernames from '../../nameList'
import './style.css'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export default function View(props) {

    return (
        <div>
            <ul>
                {
                    usernames.map(user =>
                        <li className="view-list-li-style" key = {user.username}>
                            <div className="float-left margin-right div-font-size div-style">{user.username}</div>
                            <Button type="primary" onClick = {props.onClick}>Change</Button>
                            <Button type="text" icon={<DeleteOutlined />} className="btn-remove" onClick = {props.onDeleteClick} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}