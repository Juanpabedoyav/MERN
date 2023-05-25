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
                case 'searchShipping':
                    return{
                        ...state,
                        searchShipping: action.payload
                    }
        default:
            return state;
    }

}