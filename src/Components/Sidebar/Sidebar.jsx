import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { getMoviesGenresApi } from '../../AxiosInstance';

export default function Sidebar() {
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    try {
      const res = await getMoviesGenresApi.get();
      setGenres(res.data.genres);
    } catch (error) {
      console.log(error);

    }
  }

  // Call getGenres first time when page loads
  useEffect(() => {
    getGenres();
  }, [])

  return (
    <div>
      <h6 className='text-info fw-bold'>Movies Categories</h6>

      {genres.map((item) => {
        return <div class="form-check py-1 ps-5">
          <input class="form-check-input" type="radio" name="moviesGenres" id={item.id} />
          <label class="form-check-label fs-6 fw-medium" for={item.id}>
            {item.name}
          </label>
        </div>
      })}

    </div>
  )
}
