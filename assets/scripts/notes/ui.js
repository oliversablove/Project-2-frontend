'use strict'

const showNotesTemplate = require('../templates/note-listing.handlebars')
const timeoutModule = require('../timeout/timeout-queue.js')

const onNewNoteSuccess = data => {
  $('#message').text('Created New Note!')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onNewNoteFailure = data => {
  $('#message').text('Error: Could not Create Note.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onDeleteNoteSuccess = data => {
  // const showNotesHtml = showNotesTemplate({ notes: data.notes })
  $('#message').text('Deleted Note!')
  $('#message').removeClass()
  $('#message').addClass('success')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
  // $('.content').html(showNotesHtml)
}

const onDeleteNoteFailure = data => {
  $('#message').text('Error: Could not Delete Note.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onUpdateNoteSuccess = (playerTurn, cell) => {
  $('#message').text('Successfully Updated Note!')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}

const onUpdateNoteFailure = data => {
  $('#message').text('Error: Could not Update Note.')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  $('form').trigger('reset')
}
// working get all notes without message
// update: added message but without hiding content but seems to act the same
// in the sense that no notes message shows.
// Odd way to set if statement with else (effectively) outside of if statement.
// need to add ifNoteDelete = false and put it in if statement && = true
// then display message. If note was just deleted and length = 0 do not display.
const onDisplayAllNotesSuccess = (data) => {
  const showNotesHtml = showNotesTemplate({ notes: data.notes })
  $('.content').html(showNotesHtml)
  if (data.notes.length === 0) {
    $('#message').text('No Notes to Display. Press New Note to Create a Note!')
    timeoutModule.overrideTimout()
    timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
  }
}

// broken get all notes with if no note display message.
// will not delete last note visually.
// fixed to delete visually by adding html'' on content but no notes message
// appears after last note is deleted, which it shouldn't. This also overrides
// last delete note message, making it disappear too quickly.
/*
const onDisplayAllNotesSuccess = (data) => {
  const showNotesHtml = showNotesTemplate({ notes: data.notes })
  if (data.notes.length === 0) {
    $('#message').text('No Notes to Display. Press New Note to Create a Note!')
    setTimeout(() => $('#message').text(''), 2000)
    $('.content').html('')
  } else {
    $('.content').html(showNotesHtml)
  }
} */

const onDisplayAllNotesFailure = data => {
  $('#message').text('Error: Could Retrieve Notes')
  timeoutModule.overrideTimout()
  timeoutModule.pushToTimeoutQueue(setTimeout(() => $('#message').text(''), 2000))
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
