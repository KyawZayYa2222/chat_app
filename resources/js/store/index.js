import { createStore } from "vuex"

const store = createStore({
    state () {
        return {
            baseUrl: 'http://127.0.0.1:8000/api',
            userData: localStorage.getItem('user-data'),
            accessToken: localStorage.getItem('access-token'),
            activePopup: "",
            darkModeStatus: false
        }
    },
    getters: {
        getBaseUrl: (state) => state.baseUrl,
        getAccessToken: (state) => state.accessToken,
        getUserData: (state) => state.userData,
        getActivePopup: (state) => state.activePopup,
        getDarkModeStatus: (state) => state.darkModeStatus
    },
    mutations: {
        setAccessToken(state, value) {
            localStorage.setItem('access-token', value)
            state.accessToken = value
        },
        setUserData(state, value) {
            localStorage.setItem('user-data', JSON.stringify(value))
            state.userData = value
        },
        setActivePopup(state, value) {
            state.activePopup = value
        },
        setDarkModeStatus(state, value) {
            state.darkModeStatus = value
        }
    },
    actions: {
        toggleDarkModeStatus({commit}, value) {
            commit('setDarkModeStatus', value)
        }
    }
})

export default store
