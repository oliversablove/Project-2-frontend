'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onNewNote = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.newNote(formData)
    .then(ui.onNewNoteSuccess)
    .catch(ui.onNewNoteFailure)
}

const onDeleteNote = event => {
  event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  // const id = $('#delete').val()
  const id = $(event.target).data('id')
  console.log(id)
  api.deleteNote(id)
    .then(function () {
      onDisplayAllNotes(event)
    })
    .catch(ui.onDeleteNoteFailure)
}

const onUpdateNote = event => {
  event.preventDefault()
  store.id = event.target.id

  api.updateNote(store.id, store.title, store.content)
    .then(ui.onUpdateNoteSuccess(store.id))
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
