const { addBooksHandler, getAllBooksHandler, getbooksDetailByIdHandler, editBooksbyIdHandler, deleteNoteByIdHandler } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getbooksDetailByIdHandler
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBooksbyIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteNoteByIdHandler
  }
]

module.exports = { routes }
