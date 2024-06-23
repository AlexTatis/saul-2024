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
            router.push({path: "/caesar"})
        }

    } else {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}

const picked = ref();
</script>

<template>
    <div class="p-4">
        <h1 class="text-3xl font-extrabold">Pregunta {{ $route.params.number }}</h1>
        <h2 class="text-xl font-bold"
            v-html="questions[Number.parseInt($route.params.number as string, 10) - 1].question"></h2>
        <div class="my-4">
            <div class="flex gap-3"
                v-for="(option, index) in questions[Number.parseInt($route.params.number as string, 10) - 1].options">
                <input type="radio" id="one" :value="index" v-model="picked" />
                <label for="one">{{ option.answer }}</label>
            </div>
        </div>
        <button to="/question/1" class="bg-white text-black p-2 rounded-md text-center" @click="verify">
            Verifícame esta
        </button>
    </div>
</template>