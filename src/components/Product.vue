<template>
    <div class="flex">
        <img class="object-cover flex-none w-1/2 h-96" :src="product.thumbnail" alt="">
        <div class="ml-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ product.title }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                $ {{ product.price }}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ product.description }}
            </p>
        </div>
    </div>
</template>
<script setup>
import { reactive, onBeforeMount } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router';
const route = useRoute()
const id = route.params.id
const product = reactive({})
onBeforeMount(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => {
            product.id = res.data.id
            product.title = res.data.title
            product.description = res.data.description
            product.price = res.data.price
            product.thumbnail = res.data.thumbnail
        })
})

</script>