
// eslint-disable-next-line
export default (state = null, action) => { 
    if (action.type === "ITEM_SELECTED") {
        return action.payload;
    }
    return state
};