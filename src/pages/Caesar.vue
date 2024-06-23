<script setup lang="ts">
import { Ref, ref } from 'vue';

import { useRouter } from 'vue-router';

const code: Ref<number> = ref(0)
const error: Ref<boolean> = ref(false)
const router = useRouter()

function toPokemon() {
    if (code.value == 1234567) {
        alert('Código correcto! Hamlet estaría orgulloso. Te echas unos Pokémon?')
        router.push('/emu')
    } else {
        alert('Código incorrecto Saúl, womp womp')
        error.value = true

        setInterval(() => error.value = false, 8000);
    }
}

</script>

<template>

    <!-- Uyizihs: Zimrxmgyexvs F, wikyrhs gyevxixs -->

    <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 -translate-y-1/2 w-full px-2">
        <div class="flex flex-col items-center gap-4" v-if="!error">
            <img src="/caesar.jpeg" alt="" class="w-32">
            <h1 class="text-4xl font-extrabold mb-4 text-center">César sabía criptografía</h1>
            o al menos eso dicen. Después de César...
        </div>
        <div class="flex flex-col items-center gap-4" v-else>
            <img src="/womp.jpg" alt="" class="w-32">
            <h1 class="text-4xl font-extrabold mb-4 text-center">Bro, Saúl</h1>
            esto es literalmente un skill issue
        </div>
        <button @click="toPokemon" class="bg-white text-black p-2 rounded-md text-center">...regresa cuando hayas
            visitado al príncipe</button>
        <input type="number" class="h-16 w-48 text-center text-4xl border-2 border-white rounded-md" v-model="code">
    </div>
</template>