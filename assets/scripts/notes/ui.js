'use strict'

const store = require('../store.js')
const showNotesTemplate = require('../templates/note-listing.handlebars')

const onNewNoteSuccess = data => {
  $('#message').text('Created New Note!')
  store.noteID = data.note.id
  $('#message').removeClass()
  $('#message').addClass('success')
  setTimeout(() => $('#message').text(''), 2000)
  $('form').trigger('reset')
}

const onNewNoteFailure = data => {
  $('#message').text('Error: Could not Create Note.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  setTimeout(() => $('#message').text(''), 2000)
  $('form').trigger('reset')
}

const onDeleteNoteSuccess = data => {
  $('#message').text('Deleted Note!')
  $('#message').removeClass()
  $('#message').addClass('success')
  setTimeout(() => $('#message').text(''), 2000)
  $('form').trigger('reset')
}

const onDeleteNoteFailure = data => {
  $('#message').text('Error: Could not Delete Note.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  setTimeout(() => $('#message').text(''), 2000)
  $('form').trigger('reset')
}

const onUpdateNoteSuccess = (playerTurn, cell) => {
  $('#message').text('Successfully Updated Note!')
  setTimeout(() => $('#message').text(''), 2000)
  $('form').trigger('reset')
}

const onUpdateNoteFailure = data => {
  $('#message').text('Error: Could not Update Note.')
  setTimeout(() => $('#message').text(''), 2000)
  $('form').trigger('reset')
}

const onDisplayAllNotesSuccess = (data) => {
  const showNotesHtml = showNotesTemplate({ notes: data.notes })
  $('.content').html(showNotesHtml)
  $('form').trigger('reset')
}

const onDisplayAllNotesFailure = data => {
  $('#message').text('Error: Could Retrieve Notes')
  setTimeout(() => $('#message').text(''), 2000)
}

module.exports = {
  onNewNoteFailure,
  onNewNoteSuccess,
  onDeleteNoteFailure,
  onDeleteNoteSuccess,
  onUpdateNoteFailure,
  onUpdateNoteSuccess,
  onDisplayAllNotesFailure,
  onDisplayAllNotesSuccess
}
