
import axios from 'axios';
const http = axios.create({
    baseURL: 'http://api.yazilimgo.com/trending',
    headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/html; charset=UTF-8" }
});
export default {


    getGoogle({ state, commit }) {
        commit('setGoogle', { isLoading: true, data: state.google.data });
        return http.get('index.php?src=google').then((res) => {
            commit('setGoogle', { isLoading: false, data: res.data });
            return res.data;
        }).catch(() => {
            commit('setGoogle', { isLoading: false, data: state.google.data });
        });
    },

    getTwitter({ state, commit }) {
        commit('setTwitter', { isLoading: true, data: state.twitter.data });
        return http.get('index.php?src=twitter').then((res) => {
            commit('setTwitter', { isLoading: false, data: res.data });
            return res.data;
        }).catch(() => {
            commit('setTwitter', { isLoading: false, data: state.twitter.data });
        });
    }



}