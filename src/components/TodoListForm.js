import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { startAddNote } from '../actions/notes';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class TodoListForm extends React.Component {
  state = {
    content: '',
    deadline: moment(),
    calendarFocused: false,
    error: '',
  };

  onContentChange = (e) => {
    const content = e.target.value;
    this.setState(() => ({ content }));
  };

  onDateChange = (deadline) => {
    if (deadline) {
      this.setState(() => ({ deadline }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { content, deadline } = this.state;
    const { addNote } = this.props;

    if (!content || content.trim() === '') {
      this.setState(() => ({ error: 'Please place a note text' }));
    } else {
      const note = {
        content,
        deadline: deadline.format('YYYY-MM-DD'),
      };
      addNote(note);
      this.setState(() => ({
        error: '',
        content: '',
      }));
    }
  };

  render() {
    const {
      content, deadline, calendarFocused, error,
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
              date={deadline}
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

TodoListForm.propTypes = {
  addNote: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addNote: expense => dispatch(startAddNote(expense)),
});

export default connect(undefined, mapDispatchToProps)(TodoListForm);
