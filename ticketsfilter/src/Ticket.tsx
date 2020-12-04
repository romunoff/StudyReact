import React from "react"
import { Card, Divider } from "antd"

const Ticket: React.FC = () => {
    return (
        <Card className="ticket">
            <p>NO TRANSFER</p>
            <Divider className="divider" orientation="right" plain>Air</Divider>
        </Card>
    )
}

export default Ticket