<template>
  <Header />
  <div class="p-4">
    <div class="w-1/2 mx-auto">
      <h2 class="text-4xl font-bold text-center">오늘 뭐 볼지 고민될 땐</h2>
      <SearchBar class="mt-4" />
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
      <MovieCard v-for="movie in store.movies" :key="movie.id" :movie="movie" />
    </div>
    <MovieDetailModal v-if="store.selectedMovie" :movie="store.selectedMovie" @close="store.selectedMovie = null" />
  </div>
</template>

<script setup>
import SearchBar from '../components/SearchBar.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieDetailModal from '../components/MovieDetailModal.vue'
import { useMovieStore } from '../stores/movieStore'
import Header from '../components/common/Header.vue'

const store = useMovieStore()
</script>
