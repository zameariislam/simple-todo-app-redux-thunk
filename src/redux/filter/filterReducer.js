import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import { initialState } from "./initialState";


const filterReducer = (state = initialState, action) => {

    switch (action.type) {

        case STATUSCHANGED:
            console.log(action.payload)
            return {
                ...state,
                status: action.payload

            }

        case COLORCHANGED:
            console.log('hi from color changed')
            const { color, changeType } = action.payload
            if (changeType === 'added') {
                return {
                    ...state,
                    colors: [
                        ...state.colors, color
                    ]
                }

            }
            else {

                return {
                    ...state,
                    colors: state.colors.filter(currentColor => currentColor !== color)
                }
            }


        default:
            return state

    }

}
export default filterReducer


