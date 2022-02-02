<script setup>
import { onMounted, ref } from 'vue'
import { api } from '../services/api'
import { useAuth } from '../modules/useAuth'

const { getToken, signOut } = useAuth()

let secret = ref('')

onMounted(async () => {
    try {
        const token = getToken()

        if (!token) throw new Error('Usuário não autenticado')

        const secretResponse = await api.get('/secret-information', { headers: { 'Authorization': 'Bearer ' + token } })

        secret.value = secretResponse.data.secret

    } catch (e) {
        const message = e.response?.data?.message || e.message
        
        alert(message)

        secret.value = ref(message)
    }
})
</script>

<template>
    <h1>Secret</h1>
    <h3>{{ secret }}</h3>
    <input @click="signOut" type="button" value="sair">
</template>