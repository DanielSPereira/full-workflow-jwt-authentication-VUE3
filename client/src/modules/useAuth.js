import { ref } from 'vue'
import { api } from '../services/api'


export const useAuth = (allowVerifyAuth = false) => {
    let isAuthenticated = ref(false)

    const signIn = async (username, password) => {
        try {
            const loginResponse = await api.post('/login', { userName: username, password: password })
            const user = JSON.stringify(loginResponse.data.user)

            localStorage.setItem('user', user)
            
            verifyIsUserAuthenticated()

            alert('Usuário autenticado com sucesso!')
        } catch (e) {
            const message = e.response?.data?.message || e.message
            alert(message)
        }
    }

    const signOut = () => {
        localStorage.removeItem('user')

        verifyIsUserAuthenticated()

        location.reload()
    }

    const getToken = () => JSON.parse(localStorage.getItem('user'))?.token

    const verifyIsUserAuthenticated = async () => {
        try {
            const token = getToken()

            if (!token) throw new Error('Usuário não autenticado')
            
            const isAuth = await api.get('/isAuthenticated', { headers: { 'Authorization': 'Bearer ' + token }})
            
            isAuthenticated.value = isAuth.data.authenticated

        } catch (e) {
            const message = e.response?.data?.message || e.message
            console.log(message)
        }
    }

    return !allowVerifyAuth ? { isAuthenticated, signIn, signOut, getToken } : { isAuthenticated, signIn, signOut, getToken, verifyIsUserAuthenticated }
}