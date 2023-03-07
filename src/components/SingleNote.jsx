import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import parse from 'html-react-parser';

const SingleNote = () => {
  const { id } = useParams();
  const selectedNote = useSelector((state) => state.notes.find((note) => note.id === id));
  if (!selectedNote) {
    return (
      <section>
        <h2>Oops! Note not found!</h2>
      </section>
    );
  }

  return (
    <section className="single-note border-gray">
      <article className="single-note-container">
        <h2>{selectedNote.title}</h2>
        <p className="note-text">{parse(selectedNote.text)}</p>
        <Link to={`/editNote/${selectedNote.id}`} className="button">
          <Button variant="secondary" size="lg">
            Edit Note
          </Button>
        </Link>
      </article>
    </section>
  );
};

export default SingleNote;
