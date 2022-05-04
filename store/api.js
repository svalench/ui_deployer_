export const state = () =>({
    usersList: [],
    serversList: [],
    lastGetUser: null,
})

export const mutations = {
    setUsersList (state,usersList) {
        state.usersList = usersList
    },
    setServersList (state,serversList) {
        state.serversList = serversList
    },
    setLastGetUser (state,lastGetUser) {
          state.lastGetUser = lastGetUser
    },
}

export const actions = {
    async getUsersList ({commit, $toast}) {
      try {
        let usersList = await this.$axios.$get(`/users/`);
        commit('setUsersList', usersList)
        return usersList
      }catch (err) {
        console.log(err.response)
      }
    },
    async getUser ({commit},id) {
          let user = await this.$axios.$get(`/users/${id}`);
          commit('setLastGetUser', user)
          return user
    },
    async addUser ({commit},data) {
      return await this.$axios.post(`/users/${data.id}`, data.data)
    },

    async getServersList ({commit, $toast}) {
      try {
        let serversList = await this.$axios.$get(`/server/`);
        commit('setServersList', serversList)
        return serversList
      }catch (err) {
        console.log(err.response)
      }
    },
}

export const getters = {
    usersList: state => state.usersList,
    lastGetUser: state => state.lastGetUser,
    serversList: state => state.serversList,

}

export default {
    state,
    mutations,
    actions,
    getters,
  }
