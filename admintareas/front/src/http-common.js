import axios from 'axios';
import axiosVue from 'vue-axios';
import Vue from 'vue';

Vue.use(axios, axiosVue);

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'content-Type' : 'application/json'
    }
});