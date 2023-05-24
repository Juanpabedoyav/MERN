export const ShippingsReducer = (state, action) => {
    switch (action.type) {
        case 'setShippings':
            return{
                ...state,
                shippings: action.payload
            }
    
        default:
            return state;
    }

}