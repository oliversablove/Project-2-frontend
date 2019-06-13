'use strict'

const config = require('../config')
const store = require('../store')

const newNote = formData => {
  return $.ajax({
    url: config.apiUrl + '/notes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteNote = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/notes/${formData}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

/* const updateNote = (formData) => {
  return $.ajax({
    url: config.apiUrl + `/notes/${formData.note.id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
} */

const updateNote = (id, formData) => {
  return $.ajax({
    url: config.apiUrl + '/notes/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const displayAllNotes = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/notes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

/* const getNote = (id) => {
  return $.ajax({
    url: config.apiUrl + `/notes/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
} */

module.exports = {
  newNote,
  deleteNote,
  updateNote,
  displayAllNotes
  // getNote
}
