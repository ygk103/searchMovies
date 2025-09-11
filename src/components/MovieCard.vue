<template>
  <div @click="showDetail" class="border rounded shadow hover:shadow-lg cursor-pointer">
    <img :src="posterUrl" class="w-full h-64 object-cover" />
    <div class="p-2 text-center">
      <h3 class="font-bold">{{ movie.title }}</h3>
      <p class="text-gray-500 text-sm">{{ movie.release_date }}</p>
      <button @click.stop="toggleFavorite" class="mt-2 text-red-500">
        {{ isFavorite ? '❤️' : '🤍' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMovieStore } from '../stores/movieStore'

const props = defineProps({ movie: Object })
const store = useMovieStore()

const posterUrl = computed(() => 
  props.movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${props.movie.poster_path}` 
    : 'https://via.placeholder.com/500x750?text=No+Image'
)

const isFavorite = computed(() => store.favorites.some(f => f.id === props.movie.id))
const toggleFavorite = () => store.toggleFavorite(props.movie)
const showDetail = () => store.selectMovie(props.movie.id)
</script>
