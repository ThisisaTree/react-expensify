import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { sortByAmount, sortByDate, setTextFilter, setStartDate, setEndDate} from "../actions/filters";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null,
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (focused) => {
        this.setState(() => ({calendarFocused: focused}));
    };
    

    render() {
        return(
            <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input type="text" className="text-input" defaultValue={this.props.filters.text}
                    placeholder="Search expenses"
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}/>
                </div>
                <div className="input-group__item">
                    <select value={this.props.filters.sortBy}
                    className="select"
                    onChange={(e) => {
                    e.target.value === "date" ? this.props.dispatch(sortByDate()) : this.props.dispatch(sortByAmount());
                    }}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            startDateId={"start"}
                            endDateId={"end"}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                    />
                </div>
            </div>
            </div>
            );
            }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};


export default connect(mapStateToProps)(ExpenseListFilters);