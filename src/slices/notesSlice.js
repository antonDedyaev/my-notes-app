import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'Sample note', text: 'Read this sample note!' },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded: (state, action) => {
      state.push(action.payload);
    },

    noteUpdated: (state, action) => {
      const { id, title, text } = action.payload;
      const searchedNote = state.find((note) => note.id === id);
      if (searchedNote) {
        searchedNote.title = title;
        searchedNote.text = text;
      }
    },

    noteDeleted: (state, action) => {
      const deletedNoteId = action.payload;
      return state.filter((note) => note.id !== deletedNoteId);
    },
  },

});

export const { noteAdded, noteUpdated, noteDeleted } = notesSlice.actions;

export default notesSlice.reducer;
