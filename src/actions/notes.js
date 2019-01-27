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
        completed: ref.data.note.completed,
        ...note,
      }));
    }).catch(error => throw (error));
};

export const setNoteToComplete = ({ id } = {}) => ({
  type: 'SET_NOTE_TO_COMPLETE',
  id,
});
export const startSetNoteToComplete = ({ id } = {}) => dispatch => axios.put(`${apiUrl}/notes/${id}/completed`)
  .then(() => {
    dispatch(setNoteToComplete({ id }));
  });

export const setNoteToUncomplete = ({ id } = {}) => ({
  type: 'SET_NOTE_TO_UNCOMPLETE',
  id,
});
export const startSetNoteToUncomplete = ({ id } = {}) => dispatch => axios.put(`${apiUrl}/notes/${id}/uncompleted`)
  .then(() => {
    dispatch(setNoteToUncomplete({ id }));
  });

export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id,
});
export const startRemoveNote = ({ id } = {}) => dispatch => axios.delete(`${apiUrl}/notes/${id}`)
  .then(() => {
    dispatch(removeNote({ id }));
  }).catch(error => throw (error));

export const setNotes = notes => ({
  type: 'SET_NOTES',
  notes,
});
export const startSetNotes = () => dispatch => axios.get(`${apiUrl}/notes`)
  .then((ref) => {
    const notes = [...ref.data.notes];
    dispatch(setNotes(notes));
  });
