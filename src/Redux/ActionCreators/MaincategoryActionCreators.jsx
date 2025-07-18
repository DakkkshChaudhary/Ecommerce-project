import { CREATE_MAINCATEGORY, DELETE_MAINCATEGORY, GET_MAINCATEGORY, UPDATE_MAINCATEGORY } from "../Constants"

export function createMaincategory(data){
    return{
        type:CREATE_MAINCATEGORY,
        payload:data
    }
}

export function getMaincategory(){
    return{
        type:GET_MAINCATEGORY
    }
}

export function updateMaincategory(data){
    return{
        type:UPDATE_MAINCATEGORY,
        payload:data
    }
}

export function deleteMaincategory(data){
    return{
        type:DELETE_MAINCATEGORY,
        payload:data
    }
}