import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../states/todoListFilterState';

export default function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({target: {value}}) => {
        setFilter(value);
    }

    return (
        <div className="form-group">
            <label id="label-filter" htmlFor="filter">Filter</label>
            <select id="filter" className="border-primary custom-select" value={filter} onChange={updateFilter} title="Select anything to filter todo completed/uncompleted">
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </div>
    );
}