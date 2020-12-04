import React, { useState, useEffect } from "react"
import Ticket from "./Ticket"
import Filters from "./Filters"
import { Col, Row } from "antd"
import * as data from "./Filters/filters.json"
import { TypeFilters } from "./interfaces"

const App: React.FC = () => {
    const [filters, setFilters] = useState<TypeFilters[]>([])

    useEffect(() => {
        setFilters(data.filters)
    }, [])

    const onCheckedHandler = (title: string) => {
        setFilters(prev => prev.map(filter => {
            if (filter.title === title) {
                filter.isChecked = !filter.isChecked
            }
            return filter
        }))
    }

    return (
        <Row justify="center" align="middle">
            <Col>
                <Filters filterList={filters} checked={onCheckedHandler} />
            </Col>
            <Col>
                <Ticket />
            </Col>
        </Row>
    )
}

export default App