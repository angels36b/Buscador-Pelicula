
import './App.css'

import { useMovies } from './hook/useMovies'
import { Movies } from './components/Movies.jsx'


function App() {

const { movies } = useMovies()


const handleSubmit = (event) => {
  event.preventDefault()
  const fields = Object.fromEntries(new window.FormData(event.target)) 
  console.log(fields)
}
// const hasMovies = movies?.length > 0

// receives and decides the transformation of the data of the API.

  return (
    <div className='page'>
      <header>
        <h1> Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
           
          <input name='query' placeholder='Avengers, Start wars' />
          <input name='campo' placeholder='Avengers, Start wars' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
       <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
