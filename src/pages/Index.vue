<script setup lang="ts">

</script>

<template>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 -translate-y-1/2 w-full px-2">
        <img src="/hello.jpg" alt="" class="w-32">
        <h1 class="text-4xl font-extrabold mb-4">Bienvenido, Saúl 👋</h1>
        <div class="flex w-full gap-4">
            <RouterLink to="/question/1" class="bg-white text-black p-2 rounded-md w-full text-center">Start</RouterLink>
            <RouterLink to="/about" class="bg-white text-black p-2 rounded-md w-full text-center">¿Qué narices es esto?</RouterLink>
        </div>
    </div>
</template>