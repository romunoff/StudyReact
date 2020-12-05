import React from "react"
import { Card, Divider } from "antd"
import { ITicket } from "./interfaces"

interface TicketProps {
    ticket: ITicket
}

const Ticket: React.FC<TicketProps> = ({ ticket}) => {
    return (
        <Card className="ticket">
            <p>{ticket.transfers} TRANSFER</p>
            <Divider className="divider" orientation="right" plain>Air</Divider>
        </Card>
    )
}

export default Ticket