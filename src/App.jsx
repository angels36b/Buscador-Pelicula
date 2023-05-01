
import './App.css'
import responseMovies from './mocks/with-result.json'
//import withoutResult from '.mocks/not-result.json'


function App() {

const movies = responseMovies.Search
const hasMovies = movies?.length > 0

  return (
    <div className='page' >
      <header>
        <h1> Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Start wars' />
          <button type='submit'> Buscar </button>
        </form>
      </header>
      <main>
        Aqui iran los resultados

        {
          hasMovies
            ?(
              <ul>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.Title} />

                    </li>
                  ))
                }
              </ul>
            ) 
            :(
          <p>No se encontraron peliculas para esta busqueda </p>
          )
            
          
            
        }
      </main>

    </div>
  )
}

export default App
