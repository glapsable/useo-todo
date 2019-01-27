// import uuid from 'uuid';
import * as moment from 'moment';
import axios from 'axios';

const apiUrl = 'http://useo-notes.herokuapp.com';

export const addNote = note => ({
  type: 'ADD_NOTE',
  note,
});
export const startAddNote = (noteData = {}) => (dispatch) => {
  const {
    content = '',
    deadline = '',
  } = noteData;
  const note = { content, deadline };
  return axios.post(`${apiUrl}/notes`, note)
    .then((ref) => {
      dispatch(addNote({
        id: ref.data.note.id,
        completed: false,
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        ...note,
      }));
    });
};

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
