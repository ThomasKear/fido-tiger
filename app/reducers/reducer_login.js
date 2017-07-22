import { LOG_IN } from '../actions/';

export default function(state = [], action) {
    if (action.error) {
        action.type = 'HANDLE_ERROR'; // change the type
    }
    switch (action.type) {
        case LOG_IN:
            return [action.payload.data, ...state];
        case 'HANDLE_ERROR':
            console.log('ERROR OCCURRED IN PROMISE');
            return state;
        default:
            return state;
    }
};