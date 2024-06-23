<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import 'mathlive'

const route = useRoute();
const router = useRouter();

const questions = [
    {
        question: "¿Qué vas a sacar?",
        options: [
            { answer: "Un fucking 80", correct: true },
            { answer: "Un fucking 45", correct: false },
            { answer: "Un fucking 32", correct: false },
        ]
    },
    {
        question: "¿De dónde eres?",
        options: [
            { answer: "De España", correct: false },
            { answer: "De Padrón", correct: false },
            { answer: "De Herbón", correct: true },
            { answer: "Soy un ciudadano del mundo", correct: false },
        ]
    },
    {
        question: "¿Listo para una pregunta más complicada?",
        options: [
            { answer: "Yeaaaah", correct: true },
            { answer: "Nah, soy un cobarde", correct: false },
        ]
    },
    {
        question: `Alina, Trini y Lois dejaron una placa de Petri con una población de gripe española criogenizada.
        <br>
        Álvaro y Caldas, pensando que era un helado, sacan la placa de Petri del criocongelador, reiniciando el proceso de reproducción de las bacterias.
        <br>
        La población de las bacterias se puede modelizar mediante la llamada función logística:
        <br>
        <math-field read-only>P(t) = a\\frac{1}{1+e^{-(t+b)}} \\hspace{1.5mm} a,b \\in \\R</math-field>
        <br>
        Debido a la escasez de alimento en la placa, se sabe que se llegará a una población máxima de 1000 bacterias, y que se comienza con un total de 800 bacterias.
        <br>
        <br>
        Preguntas:
        <br>
        - Ajuste los parámetros a y b de la función con las restricciones del caso dado.
        <br>
        - Con los parámetros calculados, determine el crecimiento de la población en t=0. Por favor, ¡recuerde esta respuesta!`,
        options: [
            { answer: "300 bacterias/segundo", correct: false },
            { answer: "145 bacterias/segundo", correct: false },
            { answer: "160 bacterias/segundo", correct: true },
            { answer: "360 bacterias/segundo", correct: false },
        ]
    }
]

function verify() {
    if (questions[Number.parseInt(route.params.number as string, 10) - 1].options[picked.value].correct) {
        const next_question = Number.parseInt(route.params.number as string, 10) + 1

        if (next_question <= 4) {
            router.push({ path: `/question/${next_question}` })
        } else {
            router.push({ path: "/caesar" })
        }

    } else {
        window.location.href = "https://www.youtube.com/watch?v=2qBlE2-WL60";
    }
}

const picked = ref();
</script>

<template>
    <div class="p-4 h-dvh flex flex-col">
        <div class="flex w-full justify-between mb-4">
            <p class="text-2xl font-bold">PREGUNTA</p>
            <p class="text-sm">{{ $route.params.number }} / {{ questions.length }}</p>
        </div>
        <div class="border-2 border-white px-2 py-6 rounded-md mb-4">
            <p class="text-xl font-bold text-center"
                v-html="questions[Number.parseInt($route.params.number as string, 10) - 1].question"></p>
        </div>
        <p class="text-2xl font-bold">RESPUESTAS</p>
        <div class="flex flex-col justify-between h-full">
            <div class="mt-2 mb-4 flex flex-col gap-2 flex-1">
                <button
                    v-for="(option, index) in questions[Number.parseInt($route.params.number as string, 10) - 1].options"
                    class="btn border-2 border-white w-full hover:bg-white hover:text-black hover:border-white selection:bg-white selection:border-white"
                    @click="picked = index"
                    :class="{ 'bg-white text-black': index == picked, 'bg-transparent text-white': index != picked }">
                    {{ option.answer }}
                </button>
            </div>
            <button
                class="btn bg-white text-black border-2 border-white w-full hover:bg-white hover:text-black hover:border-white selection:bg-white selection:border-white"
                @click="verify">
                Verifícame esta
            </button>
        </div>
    </div>
</template>