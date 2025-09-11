<template>
    <header class="flex justify-between items-center p-4 text-black">
    <div class="flex gap-2 items-center" @click="$router.push('/')" role="button">
      <img src="/src/assets/images/logo.svg" alt="logo" class="h-8 w-auto">
      <span class="text-xl font-bold">Movies</span>
    </div>
    <button @click="$router.push('/favorites')" class="text-sm">즐겨찾기</button>
  </header>
</template>