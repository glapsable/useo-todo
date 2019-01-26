import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('YYYY-MM-DD'));

class TodoListForm extends React.Component {
  state = {
    content: '',
    // deadline: '',
    date: moment(),
    calendarFocused: false,
    error: '',
  };

  onContentChange = (e) => {
    const content = e.target.value;
    this.setState(() => ({ content }));
  };

  onDateChange = (date) => {
    if (date) {
      this.setState(() => ({ date }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  };

  onSubmit = (e) => {
    const { content } = this.state;
    e.preventDefault();

    if (!content || content.trim() === '') {
      this.setState(() => ({
        error: 'Please place a note text',
      }));
    } else {
      this.setState(() => ({
        error: '',
      }));
    }
  };

  render() {
    const {
      content, date, calendarFocused, error,
    } = this.state;
    return (
      <div className="list-form">
        <form className="table-row list-form__row" onSubmit={this.onSubmit}>
          <div className="table-row__cell table-row__cell--1">&nbsp;</div>
          <div className="table-row__cell table-row__cell--2">
            <input
              className={`list-form__input ${error && 'list-form__input--error'}`}
              type="text"
              name="task"
              placeholder="Add some text (required)"
              value={content}
              onChange={this.onContentChange}
            />
            {error && <p>{error}</p>}
          </div>
          <div className="table-row__cell table-row__cell--3">
            <SingleDatePicker
              date={date}
              onDateChange={this.onDateChange}
              focused={calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
            />
          </div>
          <div className="table-row__cell table-row__cell--4">
            <button type="submit" className="button">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//
// });

export default connect(undefined, undefined)(TodoListForm);
