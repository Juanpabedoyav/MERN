export const ShippingsReducer = (state, action) => {
    switch (action.type) {
        case 'setShippings':
            return{
                ...state,
                shippings: action.payload
            }
            case 'newShipping':
                return{
                    ...state,
                    newShipping: action.payload
                }
        default:
            return state;
    }

}