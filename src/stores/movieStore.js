// src/stores/movieStore.js
import { defineStore } from 'pinia'
import { searchMovies, getMovieDetail } from '../api/tmdb'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [],
    selectedMovie: null,
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
    searchQuery: ''
  }),
  actions: {
    async fetchMovies(query) {
      this.searchQuery = query
      this.movies = await searchMovies(query)
    },
    async selectMovie(id) {
      this.selectedMovie = await getMovieDetail(id)
    },
    toggleFavorite(movie) {
      const index = this.favorites.findIndex(f => f.id === movie.id)
      if (index >= 0) this.favorites.splice(index, 1)
      else this.favorites.push(movie)
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
  }
})
