// eslint-disable-next-line
export default (state = [], action) => {
    switch (action.type) {
        case 'DONE_DATA':
            return action.payload;
        default:
            return state;
    }
};