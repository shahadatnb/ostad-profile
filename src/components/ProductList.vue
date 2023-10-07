<template>
<h1>Product List</h1>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Unite price
                </th>
                <th scope="col" class="px-6 py-3">
                    Stock
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <template v-for="product in products" :key="product.id">
            <tr>
                <th>
                    {{ product.title }}
                </th>
                <td class="px-6 py-4">
                    {{ product.price }}
                </td>
                <td class="px-6 py-4">
                    {{ product.stock }}
                </td>
                <td class="px-6 py-4">
                    <router-link :to="{ name: 'product', params: { id: product.id }}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</router-link>
                </td>
            </tr>
            </template>
        </tbody>
    </table>
</div>

</template>
<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
  import axios from 'axios'
  const products = ref([])

  onBeforeMount(() => {
    axios.get('https://dummyjson.com/products?limit=20')
        .then(res => {
          products.value = res.data.products
        });

        console.log(products)
  })
</script>