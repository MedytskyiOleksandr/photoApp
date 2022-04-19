import {
    SET_IMAGES
} from "../actions/action";

let initialState = {
    posts: []
};

export default reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                posts: action.images,
            }
        default:
            return state;
    }
};