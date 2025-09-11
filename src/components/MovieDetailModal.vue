<template>
  <div v-if="movie" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
    <div class="bg-white p-4 rounded w-full max-w-lg relative">
      <button @click="$emit('close')" class="absolute top-2 right-2">❌</button>
      <h2 class="text-xl font-bold">{{ movie.title }}</h2>
      <p class="text-gray-600">{{ movie.release_date }}</p>
      <p class="mt-2">{{ movie.overview }}</p>
      <p class="mt-2">평점: {{ movie.vote_average.toFixed(1) }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ movie: Object })
</script>
