import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    USERDATA: "aaa",
    thankYou: false,
    appLoader: false,
    internetIssue: false,
    serFrmDb: [],
    discountFrmDb: [],
    profession: [],
    addToCart: []
}

export default (state = INITIAL_STATE, action) => {
    console.log(state.addToCart,"addToCartaddToCartaddToCart")
    switch (action.type) {
        case ActionTypes.INTERNETISSUE:
            return ({
                ...state,
                internetIssue: action.payload
            })
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
        case ActionTypes.ADDTOCART:
            return ({
                ...state,
                addToCart: action.payload
            })
        case ActionTypes.SERVICEFRMDB:
            return ({
                ...state,
                serFrmDb: action.payload
            })
        case ActionTypes.DISCOUNTFRMDB:
            return ({
                ...state,
                discountFrmDb: action.payload
            })
        case ActionTypes.PROFESSION:
            return ({
                ...state,
                profession: action.payload
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