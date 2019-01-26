const notesReducerDefaultState = [];

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        action.note,
      ];
    case 'EDIT_NOTE':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            updatedAt: action.updatedAt,
            ...action.updates,
          };
        }
        return note;
      });
    case 'TOGGLE_NOTE_COMPLETE':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            completed: !note.completed,
          };
        }
        return note;
      });
    case 'REMOVE_NOTE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
