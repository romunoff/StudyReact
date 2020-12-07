import React, { useState, useEffect } from "react";
import { Filters } from "./Filters";
import { TicketsList } from "./TicketsList";
import { Col, Row } from "antd";
import { ITicket } from "./interfaces";
import * as data from "./Filters/filters.json";

const App: React.FC = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [filtersCopy, setFiltersCopy] = useState<string[]>([]);
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const [allState, setAllState] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/tickets.json")
      .then((response) => response.json())
      .then((tickets) => {
        setTickets(
          tickets.tickets.sort((ticket1: ITicket, ticket2: ITicket) =>
            ticket1.transfers > ticket2.transfers ? 1 : -1
          )
        );
      });
  }, []);

  useEffect(() => {
    setFilters(
      data.filters.map((filter) => {
        if (filter.title.includes("NO")) return "0 TRANSFERS";
        else return filter.title;
      })
    );
    setFiltersCopy(
      data.filters.map((filter) => {
        if (filter.title.includes("NO")) return "0 TRANSFERS";
        else return filter.title;
      })
    );
  }, []);

  const handleChange = (filterTitle: string) => {
    if (filterTitle.includes("ALL")) {
      setAllState(!allState);
      if (!allState) {
        setFiltersCopy(filters);
        setFilters(
          data.filters.map((filter) => {
            if (filter.title.includes("NO")) return "0 TRANSFERS";
            else return filter.title;
          })
        );
      } else setFilters(filtersCopy);
    } else {
      if (filterTitle.includes("NO")) {
        filterTitle = "0 TRANSFERS";
      }
      if (filters.includes(filterTitle)) {
        setFilters(filters.filter((element) => element !== filterTitle));
      } else {
        setFilters([...filters, filterTitle]);
      }
    }
  };

  return (
    <Row justify="center">
      <Col>
        <Filters onChange={handleChange} allState={allState} />
      </Col>
      <Col>
        <TicketsList filterList={filters} ticketList={tickets} />
      </Col>
    </Row>
  );
};

export { App };
