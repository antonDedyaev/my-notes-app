import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { noteUpdated } from '../slices/notesSlice';

const EditNoteForm = () => {
  const { id } = useParams();

  const selectedNote = useSelector((state) => (
    state.notes.find((note) => note.id === id)
  ));

  const [title, setTitle] = useState(selectedNote.title);
  const [text, setText] = useState(selectedNote.text);
  const [validated, setValidated] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (event, editor) => {
    const data = editor.getData();
    setText(data);
  };

  const onSaveButtonClicked = () => {
    if (title) {
      dispatch(noteUpdated({ id, title, text }));
      setValidated(true);
      navigate(`/notes/${id}`);
      toast.info('The Note was changed!');
    } else {
      setValidated(false);
    }
  };

  return (
    <section className="note-form border-green">
      <h2>Edit the Note</h2>
      <Form className="note-form-elements">
        <Form.Label htmlFor="noteTitle">
          <h4>Title:</h4>
        </Form.Label>
        <Form.Control
          className="note-form-title"
          type="text"
          id="noteTitle"
          name="noteTitle"
          value={title}
          onChange={onTitleChanged}
          isInvalid={!validated && !title}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide any title!
        </Form.Control.Feedback>
        <Form.Label htmlFor="noteText"><h4>Text:</h4></Form.Label>
        <div className="note-form-text">
          <CKEditor
            data={selectedNote.text}
            editor={ClassicEditor}
            config={{
              toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'link', 'undo', 'redo'],
            }}
            onChange={(e, editor) => { onTextChanged(e, editor); }}
          />
        </div>
        <Button
          variant="success"
          type="button"
          size="lg"
          onClick={onSaveButtonClicked}
        >
          Save Note
        </Button>
      </Form>
    </section>
  );
};

export default EditNoteForm;
