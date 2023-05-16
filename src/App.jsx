import './App.css'
import { useState } from 'react'
import { useMovies } from './hook/useMovies'
import { Movies } from './components/Movies.jsx'

function App() {

const { movies } = useMovies()
const [query, setQuery] = useState('')


const handleSubmit = (event) => {
  event.preventDefault()
  console.log({ query })
}

const handleChange = (event)=>{
  setQuery(event.target.value)
}

// const hasMovies = movies?.length > 0
// receives and decides the transformation of the data of the API.

  return (
    <div className='page'>
      <header>
        <h1> Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>       
          <input onChange={handleChange} value='value' name='query' placeholder='Avengers, Start wars' />
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
