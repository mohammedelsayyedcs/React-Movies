import './Sidebar.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedMoviesByGenreId } from '../../ReduxTK/moviesSlice';
import { useGetAllGenresQuery } from '../../ReduxTK/moviesApiSlice';

export default function Sidebar() {

  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetAllGenresQuery();
  const genreSelected = useSelector(state => state.movies.genreSelected);

  if (!genreSelected) {
    const radios = document.getElementsByName("moviesGenres");
    radios.forEach((item) => item.checked = false)
  }

  // Handle error and isLoading
  if (error) return <h4 className='text-danger d-flex justify-content-center align-items-center min-vh-100'>Error: The required page is not found ...</h4>
  if (isLoading) return <h4 className='text-info d-flex justify-content-center align-items-center min-vh-100'>Loading ...</h4>

  return (
    <div className='border border-3 py-3 px-3 lead'>
      <h6 className='text-info fw-bold'>Movies Categories</h6>

      {
        data?.genres?.map((item) => {
          return <div key={item.id} className="form-check py-1 ps-5">
            <input className="form-check-input" type="radio" name="moviesGenres" id={item.id} value={item.name}
              onClick={() => dispatch(setSelectedMoviesByGenreId(item.id))} />
            <label className="form-check-label fs-6 fw-medium" htmlFor={item.id}>
              {item.name}
            </label>
          </div>
        })
      }

    </div>
  )
}
