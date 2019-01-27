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
        ...note,
      }));
    }).catch(error => console.log(error));
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

export const setNotes = notes => ({
  type: 'SET_NOTES',
  notes,
});

export const startSetNotes = () => dispatch => axios.get(`${apiUrl}/notes`)
  .then((ref) => {
    const notes = [...ref.data.notes];
    dispatch(setNotes(notes));
  });
