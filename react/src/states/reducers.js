// function rootReducer(state = {name: 'Horizons'}, action) {
const initialState = {  //Initial state never changes so const
    loginStatus: false,
    user: null
};

function loginReducer(state, action) {
    console.log('Reducer State');
    console.log(state);

    if (typeof state === 'undefined') {
        console.log('State is undefined');
        console.log("action: " + action.type);
        return initialState
    }

    switch (action.type) {
        case "login":
            console.log("Login action");
            return Object.assign({}, state, {
                loginStatus: true,
                user: action.user
            });

        case 'logout':
            console.log('Logout action');
            return Object.assign({}, state, {loginStatus: false});

        default:
            console.log('Default action');
            return state;
    }
}

export default loginReducer;
