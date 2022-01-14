import axios from "axios";


export const FETCH_USER = 'FETCH_USER'
export const FETCH_USER_SKILLS = 'FETCH_USER_SKILLS'
export const FETCH_USER_EXPERIENCES = 'FETCH_USER_EXPERIENCES'

export function fetchUsers(publicId){
    return async function(dispatch){
        try {
            let poder = await axios.get(`https://node-torre.herokuapp.com/user?id=${publicId}`) // Hacemos al backEnd nuestro
            dispatch({
            type: FETCH_USER,
            payload: poder.data
            })
        } catch (e) {
            console.log(e)
        }
        
    }
}

export function fetchUserSkills(publicId){
    return async function(dispatch){
        try {
            let poder = await axios.get(`https://node-torre.herokuapp.com/user/skills?id=${publicId}`) // Hacemos al backEnd nuestro
            dispatch({
            type: FETCH_USER_SKILLS,
            payload: poder.data
            })
        } catch (e) {
            console.log(e)
        }
        
    }
}

export function fetchUserExperiences(publicId){
    return async function(dispatch){
        try {
            let poder = await axios.get(`https://node-torre.herokuapp.com/user/userEx?id=${publicId}`) // Hacemos al backEnd nuestro
            dispatch({
            type: FETCH_USER_EXPERIENCES,
            payload: poder.data
            })
        } catch (e) {
            console.log(e)
        }
        
    }
}