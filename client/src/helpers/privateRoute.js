import { useAuth } from '../modules/useAuth'

const { isAuthenticated, verifyIsUserAuthenticated } = useAuth(true)

export const privateRoute = async (to, from, next) => {
    await verifyIsUserAuthenticated()

    if (!isAuthenticated.value) {
        next({
          path: 'login',
          replace: true
        })
    } else {
        next()
    }
}