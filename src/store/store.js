import { ref, reactive } from 'vue'
import router from '../router/router'
const authStore = reactive({
    isAuthenticated: localStorage.getItem('auth') == 1,
    user: JSON.parse(localStorage.getItem('user')),
    userProfile: JSON.parse(localStorage.getItem('userProfile')),
    authenticate(email, password) {
        fetch('http://ecom.asiancoder.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
            .then(res => {
                if (res.error == 0) {
                    authStore.isAuthenticated = true
                    authStore.user = res
                    authStore.userProfile = res.user
                    localStorage.setItem('auth', 1)
                    localStorage.setItem('user', JSON.stringify(res))
                    localStorage.setItem('userProfile', JSON.stringify(res.user))
                    router.push('/')
                }
            })
    },
    logout() {
        authStore.isAuthenticated = false
        authStore.user = {}
        authStore.userProfile = {}
        localStorage.setItem('auth', 0)
        localStorage.setItem('user', '{}')
        router.push('/login')
    },
    getUserToken(){
        return authStore.user.token
    },
    register(name, email, password, confirmPassword){
        fetch('http://ecom.asiancoder.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, confirmPassword })
        }).then(res => res.json())
            .then(res => {
                if (res.error == 0) {
                    authStore.authenticate(email, password)
                }
            })
        
    },

    updateProfile(email, name, date_of_birth, phone,address) {
        const token = authStore.getUserToken()
        if(!token){
            return
        }
        fetch('http://ecom.asiancoder.com/api/updateProfile', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, name, date_of_birth, phone , address})
        }).then(res => res.json())
            .then(res => {
                if (res.error == 0) {
                    localStorage.setItem('userProfile', JSON.stringify(res.user))
                    authStore.userProfile = res.user
                }
            })

    }

})

export { authStore }