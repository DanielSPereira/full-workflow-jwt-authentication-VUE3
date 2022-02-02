<script setup>
import { reactive } from 'vue'
import { useAuth } from '../modules/useAuth'

const { signIn } = useAuth()

const form = reactive({
    userName: "",
    password: "",
})

</script>

<template>
    <h1>Login</h1>
    <input v-model="form.userName" type="text" placeholder="username" >
    <input v-model="form.password" type="password" placeholder="password" style="margin: 0 10px;" >
    <input @click="signIn(form.userName, form.password)" type="button" value="Enviar" >
</template>