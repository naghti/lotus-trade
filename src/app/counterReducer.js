export const START_COUNTER = "START_COUNTER";

export function counterReducer(state = '00:02:00' , action) {
    switch (action.type) {
        case START_COUNTER:
            const total = Date.parse(action.payload) - Date.parse(new Date());
            const seconds = Math.floor((total / 1000) % 60);
            const minutes = Math.floor((total / 1000 / 60) % 60);
            if (total >= 0) {
                return `00:${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`
            } else {return state}
        default:
            return state
    }
}
