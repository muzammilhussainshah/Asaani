import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    USERDATA: "aaa",
    thankYou: false,
    appLoader: false,
    serFrmDb: [],
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
                thankYou: action.payload
            })
            case ActionTypes.SERVICEFRMDB:
                return ({
                    ...state,
                    serFrmDb: action.payload
                })
        case ActionTypes.APPLOADER:
            return ({
                ...state,
                appLoader: action.payload
            })
        default:
            return state;
    }

}