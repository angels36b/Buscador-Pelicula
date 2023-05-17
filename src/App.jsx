import './App.css'
import { useState } from 'react'
import { useMovies } from './hook/useMovies'
import { Movies } from './components/Movies.jsx'
import { useEffect } from 'react'


//creacion de custom Hook useSearch
function useSearch () {
  const [search, updateSearch] =useState('')
  const [error, setError] = useState(null) 

  useEffect(()=> {
    if(search === ''){
      setError('Sin nombre de pelicula, no hay resultados')
      return
    }
    if (search.match(/\d+$/)){
      setError('No se puede buscar la pelicula con un numero')
      return
    }
  
    if(search.length < 3){
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }
    setError (null)
  }, [search])
  
    return {search, updateSearch, error}
}

function App() {

const { movies } = useMovies()
const [query, setQuery] = useState('')
const [error, setError] = useState('')

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
          <input
          style={{ 
            border: '1px solid transparent',
            borderColor: error ? 'red':'transparent'
          }}  onChange={handleChange} value={query} name='query' placeholder='Avengers, Start wars' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}> {error} </p>}
      </header>

      <main>
       <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
