const DATE = 'date';

export const date = () => ({
    type: DATE
});


 

let today = new Date();
let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric"
};
let day = today.toLocaleDateString("en-US", options);


const initialState = {
    today: day,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DATE:
            return { ...state, today: state.today };
       
        default:
            return state
    }
}