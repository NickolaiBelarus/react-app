import axios from 'axios';

export function getLots(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
    
    const request = axios.get(`/api/lots?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response => {
                            if(list){
                                return [...list,...response.data]
                            } else {
                                return response.data
                            }
                        }
                    )

    return {
        type:'GET_BOOKS',
        payload:request
    }

}

export function getLotWithReviewer(id){
    const request = axios.get(`/api/getLot?id=${id}`)

    return (dispatch)=>{
        request.then(({data})=>{
            let lot = data;

            axios.get(`/api/getReviewer?id=${lot.ownerId}`)
            .then(({data})=>{
                let response = {
                    lot,
                    reviewer:data
                }

                dispatch({
                    type:'GET_BOOK_W_REVIEWER',
                    payload:response
                })
            })
        })
    }
}

export function clearLotWithReviewer(){
    return {
        type:'CLEAR_BOOK_W_REVIEWER',
        payload:{
            lot:{},
            reviewer:{}
        }
    }
}

export function addLot(lot){
    const request = axios.post('/api/lot',lot)
        .then(response => response.data);

    return {
        type:'ADD_BOOK',
        payload:request
    }
}
export function clearNewLot() {
    return {
        type:'CLEAR_NEWBOOK',
        payload:{}
    }
}

export function getUserPosts(userId){
    const request = axios.get(`/api/user_posts?user=${userId}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_POSTS',
        payload:request
    }
}

export function getLot(id){
    const request = axios.get(`/api/getLot?id=${id}`)
                    .then(response => response.data);

    return {
        type:'GET_BOOK',
        payload:request
    }
}


export function updateLot(data){
    const request = axios.post(`/api/lot_update`,data)
                .then(response => response.data);

    return {
        type:'UPDATE_BOOK',
        payload:request
    }

}

export function deleteLot(id){
    const request = axios.delete(`/api/delete_lot?id=${id}`)
                    .then(response => response.data)

    return {
        type:'DELETE_BOOK',
        payload:request
    }
}

export function clearLot(){
    return{
        type:'CLEAR_BOOK',
        payload:{
            lot:null,
            updateLot:false,
            postDeleted:false
        }
    }
}


/*========= USER ===========*/

export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
                .then(response => response.data)

    return {
        type:'USER_LOGIN',
        payload:request
    }
}

export function auth(){
    const request = axios.get('/api/auth')
                .then(response => response.data);

    return {
        type:'USER_AUTH',
        payload:request
    }

}

export function getUsers(){
    const request = axios.get(`/api/users`)
                    .then(response => response.data);
        
    return {
        type:'GET_USER',
        payload:request
    }
}


export function userRegister(user,userList){
    const request = axios.post(`/api/register`,user)

    return (dispatch) =>{
        request.then(({data})=>{
            let users = data.success ? [...userList,data.user]:userList;
            let response = {
                success:data.success,
                users
            }

            dispatch({
                type:'USER_REGISTER',
                payload:response
            })
        })
    }
}