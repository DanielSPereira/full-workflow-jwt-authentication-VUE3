<script>
import { useAuth } from '../modules/useAuth'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const { isAuthenticated, isLoading, setIsLoading, verifyIsUserAuthenticated } = useAuth(true)

export default {
    setup() {
        const router = useRouter()
        
        if (!isAuthenticated.value) {
            onMounted(async () => {
                await verifyIsUserAuthenticated()

                if (!isAuthenticated.value) return router.push('login')
            })
        }

        return { isAuthenticated, isLoading, setIsLoading, verifyIsUserAuthenticated }
    }
}

</script>

<template>
    <div>
        <slot v-if="!isLoading && isAuthenticated"></slot>
        <h1 v-if="isLoading">Loading...</h1>
    </div>
</template>