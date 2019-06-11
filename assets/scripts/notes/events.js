'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onNewNote = event => {
  event.preventDefault()
  const form = event.target
  const noteData = getFormFields(form)

  api.newNote(noteData)
    .then(ui.onNewNoteSuccess)
    .catch(ui.onNewNoteFailure)
}

const onDeleteNote = event => {
  event.preventDefault()

  api.deleteNote()
    .then(ui.onDeleteNoteSuccess)
    .catch(ui.onDeleteNoteFailure)
}

/* const onGetNote = event => {
  const form = event.target
  const formData = getFormFields(form)

  api.getNote(formData.note.id)
    .then(ui.onGetNoteSuccess)
    .catch(ui.onGetNoteFailure)
} */

module.exports = {
  onNewNote,
  onDeleteNote
  // onGetNote
}
