import React from "react";
import { Ticket } from "./Ticket";
import { ITicket } from "./interfaces";

interface TicketsListProps {
  filterList: string[];
  ticketList: ITicket[];
}

const TicketsList: React.FC<TicketsListProps> = ({
  filterList,
  ticketList,
}) => {
  return (
    <ul>
      {ticketList.map(
        (ticket) =>
          filterList.join().includes(String(ticket.transfers)) && (
            <li className="list-li-style" key={ticket.id}>
              <Ticket ticket={ticket} />
            </li>
          )
      )}
    </ul>
  );
};

export { TicketsList };
