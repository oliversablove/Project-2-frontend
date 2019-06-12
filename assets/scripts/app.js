'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const noteEvents = require('./notes/events')

$(() => {
  // user
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  // note
  $('#new-note').on('submit', noteEvents.onNewNote)
  $('#delete-note').on('submit', noteEvents.onDeleteNote)
  $('.content').on('click', '.remove-note', noteEvents.onDeleteNote)
  $('#get-note').on('submit', noteEvents.onGetNote)
  $('#update-note').on('submit', noteEvents.onUpdateNote)
  $('.content').on('submit', '.change-note', noteEvents.onUpdateNote)
  $('#display-all-notes').on('submit', noteEvents.onDisplayAllNotes)
})
