'use strict'

const store = require('../store.js')
const showNotesTemplate = require('../templates/note-listing.handlebars')

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
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onDeleteNoteFailure = data => {
  $('#message').text('Error: Could not Delete Note.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  setTimeout(() => $('#message').text(''), 2000)
}

const onUpdateNoteSuccess = (playerTurn, cell) => {
  $('#message').text('Successfully Updated Note!')
}

const onUpdateNoteFailure = data => {
  $('#message').text('Error: Could not Update Note.')
}

const onDisplayAllNotesSuccess = (data) => {
  console.log(data)
  const showNotesHtml = showNotesTemplate({ notes: data.notes })
  $('.content').html(showNotesHtml)
}

const onDisplayAllNotesFailure = data => {
  $('#message').text('Error: Could Retrieve Notes')
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
