import React, { useState, useEffect } from "react"
import Filters from "./Filters"
import { Col, Row } from "antd"
import { ITicket } from "./interfaces"
import TicketsList from "./TicketsList";

const App: React.FC = () => {
    const [filters, setFilters] = useState<string[]>([])
    const [filtersCopy, setFiltersCopy] = useState<string[]>([])
    const [tickets, setTickets] = useState<ITicket[]>([])
    const [allState, setAllState] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/tickets.json")
            .then(response => response.json())
            .then(tickets => {
                setTickets(tickets.tickets)
            })
    }, [])

    const handleChange = (filterTitle: string) => {
        if (!filterTitle.includes("ALL")) {
            if (filterTitle.includes("NO")) {
                filterTitle = "0 TRANSFERS"
            }
            if (filters.includes(filterTitle)) {
                setFilters(filters.filter(element => element !== filterTitle))
            } else {
                setFilters([...filters, filterTitle])
            }
        } else {
            setAllState(!allState)
            if (!allState) {
                setFiltersCopy(filters)
                setFilters(["0 TRANSFERS, 1 TRANSFERS, 2 TRANSFERS, 3 TRANSFERS"])
            } else setFilters(filtersCopy)

        }
    }

    return (
        <Row justify="center">
            <Col>
                <Filters onChange={handleChange} allState={allState} />
            </Col>
            <Col>
                <TicketsList filterList={filters} ticketList={tickets} />
            </Col>
        </Row>
    )
}

export default App