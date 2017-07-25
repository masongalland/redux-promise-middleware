import * as starwars from '../services/starwars';

const initialState = {
    people: [],
    loading: false
};

const GET_PEOPLE = "GET_PEOPLE";
const GET_PEOPLE_PENDING = "GET_PEOPLE_PENDING"
const GET_PEOPLE_FULFILLED = "GET_PEOPLE_FULFILLED"


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_PEOPLE_PENDING:
            return Object.assign({}, state, {loading: true})

        case GET_PEOPLE_FULFILLED:
            return Object.assign({}, state, {loading: false, people: action.payload})

        default:
            return state;

    }

    
}

export function getPeople() {
    return {
        type: GET_PEOPLE,
        payload: starwars.getPeople()
    }
}