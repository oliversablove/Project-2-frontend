'use strict'

const config = require('../config')
const store = require('../store')

const newNote = formData => {
  console.log(formData.note)
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
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + `/notes/${formData}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const updateNote = (formData) => {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + `/notes/${formData.note.id}`,
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
