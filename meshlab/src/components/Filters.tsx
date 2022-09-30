import React from 'react';
import Button from './Button';
import DatePicker from './DatePicker';
import UserFilter from './UserFilter';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

// Currently not used because sorting and filtering is done by our data-grid in the display

const search = () => {
    console.log("search");
};

const commit_filter = () => {
    console.log("search");
};

const issue_filter = () => {
    console.log("search");
};

export function Filters() {
    return (
        <div>
            <UserFilter />
            <DatePicker />
            <DatePicker />
            <Button
                onClick={commit_filter}
                label=" FILTER "
                className="filter-button"
                icon={faFilter}
                onKeyDown={commit_filter}
            />
        </div>)
}

