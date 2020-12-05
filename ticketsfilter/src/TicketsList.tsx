import React from "react"
import Ticket from "./Ticket"
import { ITicket } from "./interfaces"

interface TicketsListProps {
    filterList: string[],
    ticketList: ITicket[]
}

const TicketsList: React.FC<TicketsListProps> = ({ filterList, ticketList }) => {
    return (
        <ul>
            {
                ticketList.map(ticket =>
                    <li className="list-li-style" key={ticket.id}>
                        { filterList.join().includes(String(ticket.transfers)) && <Ticket ticket={ticket} /> }
                    </li>
                )
            }
        </ul>
    )
}

export default TicketsList