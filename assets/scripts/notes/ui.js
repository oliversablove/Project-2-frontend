'use strict'

const store = require('../store.js')

const onNewNoteSuccess = data => {
  $('#message').text('Created New Note!')
  store.noteID = data.note.id
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onNewNoteFailure = data => {
  $('#message').text('Error: Could not Create Note.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  setTimeout(() => $('#message').text(''), 2000)
}

const onDeleteNoteSuccess = data => {
  $('#message').text('Deleted Note!')
  store.noteID = data.note.id
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onDeleteNoteFailure = data => {
  $('#message').text('Error: Could not Delete Note.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  setTimeout(() => $('#message').text(''), 2000)
}
module.exports = {
  onNewNoteFailure,
  onNewNoteSuccess,
  onDeleteNoteFailure,
  onDeleteNoteSuccess
}
