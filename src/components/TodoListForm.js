import React from 'react';
import { connect } from 'react-redux';

class TodoListForm extends React.Component {
  state = {
    content: '',
  };

  onContentChange = (e) => {
    const content = e.target.value;
    this.setState(() => ({ content }));
  };

  render() {
    const { content } = this.state;
    return (
      <div className="list-form">
        <form className="table-row list-form__row">
          <div className="table-row__cell table-row__cell--1">&nbsp;</div>
          <div className="table-row__cell table-row__cell--2">
            <input
              className="list-form__input"
              type="text"
              name="task"
              placeholder="Add some text (required)"
              value={content}
              onChange={this.onContentChange}
            />
          </div>
          <div className="table-row__cell table-row__cell--3">Deadline</div>
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
