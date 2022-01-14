import { FETCH_USER, FETCH_USER_SKILLS } from "../actions";


const initialState = {
    person : {
        publicId: ''
    },
    skills : []
}

export default function reducer(state = initialState, action){
    switch(action.type){

        case FETCH_USER:
            console.log('Llegué', action.payload);
            let person = action.payload
            return {
                ...state,
                person
            };
        
        case FETCH_USER_SKILLS:
            const master = action.payload.filter((x) => x.proficiency === "master")
            const expert = action.payload.filter((x) => x.proficiency === "expert")
            const proficient = action.payload.filter((x) => x.proficiency === "proficient")
            const novice = action.payload.filter((x) => x.proficiency === "novice")
            
            master.length === 0 ? master.push({name: 'None'}) : console.log('OK');
            expert.length === 0 ? expert.push({name: 'None'}) : console.log('OK');
            proficient.length === 0 ? proficient.push({name: 'None'}) : console.log('OK');
            novice.length === 0 ? novice.push({name: 'None'}) : console.log('OK');


            return {
                ...state,
                skills : {
                    master,
                    expert,
                    proficient,
                    novice
                }
            };

        default: 
        console.log('Estoy entrando acá');
            return state;
    }
}