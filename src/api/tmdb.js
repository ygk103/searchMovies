// src/api/tmdb.js
import axios from 'axios'

const API_KEY = '8f0f45eff47af692b2f93d0d2ca86804'
const BASE_URL = 'https://api.themoviedb.org/3'

export const searchMovies = async (query) => {
  if (!query) return []
  try {
    const res = await axios.get(`${BASE_URL}/search/movie`, {
      params: { api_key: API_KEY, query }
    })
    return res.data.results
  } catch (err) {
    console.error(err)
    return []
  }
}

export const getMovieDetail = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: API_KEY }
    })
    return res.data
  } catch (err) {
    console.error(err)
    return null
  }
}
