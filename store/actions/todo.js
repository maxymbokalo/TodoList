export const types = {
    ADD_TODO : 'TODO/ADD',
    UPDATE_TODO : 'TODO/UPDATE',
    DELETE_TODO : 'TODO/DELETE',
    FETCH_TODO : 'TODO/FETCH',
    SUCCSES_FETCH : 'TODO/SUCCSES',
    FAILED_FETCH : 'TODO/FAILED'
}
export const actions = {
    fetch : ()=> {
        const requestGet = fetch("http://192.168.103.89:5000/api/todoitems")

        return {
            type: types.FETCH_TODO,
            payload : requestGet
        }
    },
    succses : (data)=>{
        return {
            type: types.SUCCSES_FETCH,
            payload : data
        }
    },
    error : (data)=>{
        return {
            type: types.FAILED_FETCH,
            payload : data
        }
    }
}