import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import TopNavbar from './components/TopNavbar';
import AddNoteForm from './components/AddNoteForm';
import EditNoteForm from './components/EditNoteForm';
import NotesList from './components/NotesList';
import SingleNote from './components/SingleNote';

const App = () => (
  <BrowserRouter>
    <TopNavbar />
    <div className="App">
      <Routes>
        <Route
          path="/my-notes-app"
          element={(
            <>
              <AddNoteForm />
              <NotesList />
            </>
          )}
        />
        <Route path="/notes/:id" element={<SingleNote />} />
        <Route path="/editNote/:id" element={<EditNoteForm />} />
      </Routes>
    </div>
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </BrowserRouter>
);

export default App;
