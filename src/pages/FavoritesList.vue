<template>
  <Header />
  <div class="p-4" style="min-height: calc(100vh - 64px);">
    <h2 class="text-xl font-bold mb-4">즐겨찾기 영화</h2>
    <div v-if="favorites.length" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <MovieCard v-for="movie in favorites" :key="movie.id" :movie="movie" />
    </div>
    <p v-else class="text-gray-500 my-auto flex justify-center items-center" style="min-height: calc(100vh - 140px);">
      즐겨찾기한 영화가 없습니다.</p>
    <MovieDetailModal v-if="store.selectedMovie" :movie="store.selectedMovie" @close="store.selectedMovie = null" />

  </div>
</template>

<script setup>
import { useMovieStore } from '../stores/movieStore'
import Header from '../components/common/Header.vue'
import MovieCard from '../components/MovieCard.vue'
import MovieDetailModal from '../components/MovieDetailModal.vue'

const store = useMovieStore()
const favorites = store.favorites
</script>
