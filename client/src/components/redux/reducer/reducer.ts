import { actionType } from "../../types/types";

export type Reducer1Type = {
    arr:any
    load:boolean
}
const InitialState: Reducer1Type = {
    arr: [],
    load:true
};

function reduxstate(state:Reducer1Type = InitialState, action: actionType): Reducer1Type {
    switch (action.type) {
        case "ACTION":
            return {
                ...state,
                arr: [...state.arr, action.payload],
            };
        default:
            return state; 
    }
}
export default reduxstate;
    