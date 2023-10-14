<template>
    <h1>Welcome to {{ auth.userProfile.name }}</h1>
</template>
<script setup>
import { authStore } from '../store/store';
const auth = authStore 
</script>