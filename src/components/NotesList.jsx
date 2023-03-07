import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import parse from 'html-react-parser';
import { noteDeleted } from '../slices/notesSlice';

const NotesList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const renderedNotes = notes.map((note) => (
    <article className="note-item" key={note.id}>
      <h2>{note.title}</h2>
      <p className="note-item-text">{parse(note.text)}</p>
      <div className="note-buttons">
        <Link to={`/notes/${note.id}`}>
          <Button variant="info">View Note</Button>
        </Link>
        <Button
          variant="info"
          onClick={() => {
            dispatch(noteDeleted(note.id));
            toast.warn('The Note was deleted!');
          }}
        >
          Delete Note
        </Button>
      </div>
    </article>
  ));

  const renderHeaders = notes.length !== 0 ? <h2>Your Notes</h2> : <h2>You have no Notes!</h2>;

  return (
    <section className="notes-list">
      <Container fluid>
        <Row className="justify-content-center">
          {renderHeaders}
          {renderedNotes}
        </Row>
      </Container>
    </section>
  );
};

export default NotesList;

// </p>
