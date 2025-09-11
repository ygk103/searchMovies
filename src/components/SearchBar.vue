<template>
  <div>
    <input v-model="query" @input="onInput" placeholder="영화 검색" class="border border-black p-2 rounded w-full"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import _ from 'lodash'

const store = useMovieStore()
const query = ref('')

// debounce 적용
const fetchDebounced = _.debounce(() => store.fetchMovies(query.value), 300)
const onInput = () => fetchDebounced()
</script>
