import uuid from 'uuid';
import * as moment from 'moment';

export const addNote = ({
  content = '', deadline = '',
} = {}) => ({
  type: 'ADD_NOTE',
  note: {
    id: uuid(),
    content,
    deadline,
    completed: false,
    createdAt: moment().toISOString(),
    updatedAt: moment().toISOString(),
  },
});
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updatedAt: moment().toISOString(),
  updates,
});
export const toggleNoteComplete = ({ id } = {}) => ({
  type: 'TOGGLE_NOTE_COMPLETE',
  id,
});
export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id,
});
