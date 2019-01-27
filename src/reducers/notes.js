const notesReducerDefaultState = [];

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        action.note,
      ];
    case 'SET_NOTE_TO_COMPLETE':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            completed: true,
          };
        }
        return note;
      });
    case 'SET_NOTE_TO_UNCOMPLETE':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            completed: false,
          };
        }
        return note;
      });
    case 'REMOVE_NOTE':
      return state.filter(({ id }) => id !== action.id);
    case 'SET_NOTES':
      return action.notes;
    default:
      return state;
  }
};
