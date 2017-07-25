const initialState = {
    testView: 'I\'m data that lives on state'
};

const MY_ACTION_TYPE = "MY_ACTION_TYPE"


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case MY_ACTION_TYPE:
        return 
    }

    return state;
}

export function actionCreator() {
    return {
        type: MY_ACTION_TYPE,
        payload: "payload data"
    }
}