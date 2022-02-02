<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <h1>Home</h1>
    <input type="button" @click="router.push('login')" value="Login" style="margin-right: 10px;">
    <input type="button" @click="router.push('secret')" value="Secret" >
</template>