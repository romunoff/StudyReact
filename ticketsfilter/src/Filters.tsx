import React from "react"
import { Card, Checkbox } from "antd"
import { TypeFilters } from "./interfaces"

interface FiltersProps {
    filterList: TypeFilters[],
    checked(title: string): void
}

const Filters: React.FC<FiltersProps> = ({filterList, checked}) => {
    return (
        <Card className="filters">
            <p>NUMBER OF TRANSFERS</p>
            <ul>
                {
                    filterList.map(filter =>
                        <li className="list-li-style" key={filter.title}>
                            <Checkbox checked={filter.isChecked} onClick={() => checked(filter.title)}>{filter.title}</Checkbox>
                        </li>
                    )
                }
            </ul>
        </Card>
    )
}

export default Filters