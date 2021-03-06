'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewNote = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.newNote(formData)
    .then(ui.onNewNoteSuccess)
    .then(function () {
      onDisplayAllNotes(event)
    })
    .catch(ui.onNewNoteFailure)
}

const onDeleteNote = event => {
  event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  // const id = $('#delete').val()
  const id = $(event.target).data('id')
  api.deleteNote(id)
    .then(ui.onDeleteNoteSuccess)
    .then(function () {
      onDisplayAllNotes(event)
    })
    .catch(ui.onDeleteNoteFailure)
}

/* const onUpdateNote = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.updateNote(formData)
    .then(function () {
      onDisplayAllNotes(event)
      ui.onUpdateNoteSuccess()
    })
    .catch(ui.onUpdateNoteFailure)
}
*/

const onUpdateNote = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)

  api.updateNote(id, formData)
    .then(function () {
      onDisplayAllNotes(event)
    })
    .then(ui.onUpdateNoteSuccess)
    .catch(ui.onUpdateNoteFailure)
}

const onDisplayAllNotes = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.displayAllNotes(formData)
    .then(ui.onDisplayAllNotesSuccess)
    .catch(ui.onDisplayAllNotesFailure)
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
  onDeleteNote,
  onUpdateNote,
  onDisplayAllNotes
  // onGetNote
}
