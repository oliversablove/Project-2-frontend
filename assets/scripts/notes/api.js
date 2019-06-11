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

const deleteNote = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: store.note.id
  })
}

/* const getNote = (id) => {
  return $.ajax({
    url: config.apiUrl + `/games/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
} */

module.exports = {
  newNote,
  deleteNote
  // getNote
}
