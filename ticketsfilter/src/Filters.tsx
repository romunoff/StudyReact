import React from "react"
import { Card, Checkbox } from "antd"
import * as data from "./Filters/filters.json"

interface FiltersProps {
    onChange(filter: string): void,
    allState: boolean
}

const Filters: React.FC<FiltersProps> = ({ onChange, allState }) => {
    return (
        <Card className="filters">
            <p>NUMBER OF TRANSFERS</p>
            <ul>
                {
                    data.filters.map(filter =>
                        <li className="list-li-style" key={filter.title}>
                            <Checkbox disabled={filter.title === "ALL" ? false : allState} onChange={() => onChange(filter.title)}>{filter.title}</Checkbox>
                        </li>
                    )
                }
            </ul>
        </Card>
    )
}

export default Filters