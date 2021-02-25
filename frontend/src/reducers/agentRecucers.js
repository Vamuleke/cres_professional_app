import { AGENT_INFOS_FAIL, AGENT_INFOS_REQUEST, AGENT_INFOS_SUCCESS } from "../constant/constantsAgent";

export const getAgentInfosReducer = (state = {loading : true}, action) => {
    switch (action.type) {
        case AGENT_INFOS_REQUEST :
            return {loading : true}
        case AGENT_INFOS_SUCCESS :
            return {loading : false, agent : action.payload}
        case AGENT_INFOS_FAIL :
            return {loading : false, error : action.payload}
        default :
            return state
    }
}