export const ADD_BIDDERS = "ADD_BIDDERS";
export const CHANGE_MOVE = "CHANGE_MOVE";

export const loadBidders = () => {
    return (dispatch)=> {
        fetch('./bidders_data.json')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ADD_BIDDERS,
                    payload: data,
                })
            });
    }
}

export function biddersReducer(state = [], action) {
    switch (action.type) {
        case ADD_BIDDERS:
            return[...action.payload];
        case CHANGE_MOVE:
            return state.map((bidder)=> {
                if(bidder.move) bidder.move = false;
                if (bidder.id === action.payload) {
                    bidder.move = true;
                    bidder.prodCostSale += 25000;
                }
                return bidder
            })
        default:
            return state
    }
}
