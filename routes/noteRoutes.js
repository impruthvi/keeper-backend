const express = require('express');
const noteController = require('./../controllers/noteController');

const router = express.Router();

router
  .route('/')
  .post(noteController.createNote)
  .get(noteController.getAllNotes);
router
  .route('/:id')
  .get(noteController.getNote)
  .patch(noteController.updateNote)
  .delete(noteController.deleteNote);

module.exports = router;
