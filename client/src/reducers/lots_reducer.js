export default function(state={},action){
    switch(action.type){
        case 'GET_BOOKS':
            return { ...state,list:action.payload }
        case 'GET_BOOK':
            return {...state,lot:action.payload}
        case 'GET_BOOK_W_REVIEWER':
            return {
                ...state,
                lot:action.payload.lot,
                reviewer:action.payload.reviewer
            }
        case 'CLEAR_BOOK_W_REVIEWER':
            return {
                ...state,
                lot:action.payload.lot,
                reviewer:action.payload.reviewer
            }
        case 'ADD_BOOK':
            return {...state,newlot:action.payload}
        case 'CLEAR_NEWBOOK':
            return {...state,newlot:action.payload}
        case 'UPDATE_BOOK':
            return {
                ...state,
                updateLot:action.payload.success,
                lot:action.payload.doc
            }
        case 'DELETE_BOOK':
            return {
                ...state,
                postDeleted:action.payload
            }
        case 'CLEAR_BOOK':
            return {
                ...state,
                updateLot:action.payload.updateLot,
                lot:action.payload.lot,
                postDeleted:action.payload.postDeleted
            }
        default:
            return state;
    }
}