import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    USERDATA: "aaa",
    test: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.USERDATA:
            return ({
                ...state,
                USERDATA: action.payload
            })
        case ActionTypes.THANKYOUFORORDER:
            return ({
                ...state,
                test: action.payload
            })
        default:
            return state;
    }

}