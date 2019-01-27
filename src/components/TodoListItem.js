import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startRemoveNote, startSetNoteToComplete, startSetNoteToUncomplete } from '../actions/notes';

class TodoListItem extends React.Component {
  toggleNoteComplete = (id, completed) => {
    const { setNoteToComplete, setNoteToUncomplete } = this.props;
    if (!completed) {
      setNoteToComplete({ id });
    } else {
      setNoteToUncomplete({ id });
    }
  };

  render() {
    const {
      id, content, deadline, completed, removeNote,
    } = this.props;
    return (
      <div className="list-item">
        <div className="table-row">
          <div className="table-row__cell table-row__cell--1">
            <input type="checkbox" />
          </div>
          <div className="table-row__cell table-row__cell--2">
            <p className={completed ? 'list-item__completed' : ''}>{content}</p>
          </div>
          <div className="table-row__cell table-row__cell--3">
            <p className={completed ? 'list-item__completed' : ''}>{deadline}</p>
          </div>
          <div className="table-row__cell table-row__cell--4 list-item__actions">
            <input type="checkbox" checked={completed} onChange={() => this.toggleNoteComplete(id, completed)} />
            <button type="button" onClick={() => removeNote({ id })}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

TodoListItem.propTypes = {
  content: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  removeNote: PropTypes.func.isRequired,
  setNoteToComplete: PropTypes.func.isRequired,
  setNoteToUncomplete: PropTypes.func.isRequired,
};

TodoListItem.defaultProps = {
  deadline: '',
};

const mapDispatchToProps = dispatch => ({
  removeNote: id => dispatch(startRemoveNote(id)),
  setNoteToComplete: id => dispatch(startSetNoteToComplete(id)),
  setNoteToUncomplete: id => dispatch(startSetNoteToUncomplete(id)),
});

export default connect(undefined, mapDispatchToProps)(TodoListItem);
