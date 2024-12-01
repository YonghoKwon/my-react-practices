import './App.css'

function App() {

  const books = [
    { id: 1, title: 'React Basics', published: true, publisher: 'Manning' },
    { id: 2, title: 'React Hooks', published: true, publisher: 'OReilly' },
    { id: 3, title: 'React Router', published: true, publisher: 'Packt' },
  ]

  const publishers = books.filter(book => book.published);

  return (
    <>

      {publishers.length > 0 && <h2>Published Books</h2>}
      {publishers.length ?
        publishers.map(book =>
          <article key={book.id}>
            <strong>{book.title}</strong>
            <em> - {book.publisher}</em>
          </article>
        )
      : <p>No published books found.</p>
      }
    </>
  )
}

export default App
