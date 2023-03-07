import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { noteAdded } from '../slices/notesSlice';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [validated, setValidated] = useState(true);
  const dispatch = useDispatch();

  const editorRef = useRef();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (event, editor) => {
    const data = editor.getData();
    setText(data);
  };

  const onAddButtonClicked = () => {
    if (title) {
      dispatch(noteAdded({ id: nanoid(), title, text }));
      setValidated(true);
      toast.success('New Note was successfully added!');
      editorRef.current.setData('');
    } else {
      setValidated(false);
    }
    setTitle('');
  };

  return (
    <section className="note-form border-blue">
      <h2>Add a new Note</h2>
      <Form className="note-form-elements">
        <Form.Label htmlFor="noteTitle"><h4>Title:</h4></Form.Label>
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
            data=""
            editor={ClassicEditor}
            config={{
              toolbar: ['heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList', 'link', 'undo', 'redo'],
            }}
            onReady={(editor) => {
              editorRef.current = editor;
            }}
            onChange={(e, editor) => { onTextChanged(e, editor); }}
          />
        </div>
        <Button
          variant="primary"
          type="button"
          size="lg"
          onClick={onAddButtonClicked}
        >
          Add Note
        </Button>
      </Form>
    </section>
  );
};

export default AddNoteForm;
