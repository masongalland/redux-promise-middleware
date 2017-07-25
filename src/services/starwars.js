import axios from 'axios';

export const getPeople = function() {
    return axios.get('http://swapi.co/api/people')
        .then(response => response.data.results)
}