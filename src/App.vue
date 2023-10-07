<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
<Header />
  <Sidebar />
  <div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <router-view></router-view>
   </div>
</div>
</template>

<style scoped>


</style>
