import { AGENT_INFOS_FAIL, AGENT_INFOS_SUCCESS, AGENT_INFOS_REQUEST } from '../constant/constantsAgent'
import axios from 'axios'

export const getAgentInfos = () => async (dispatch) => {
    dispatch ({type : AGENT_INFOS_REQUEST})

    try {
        const {data} = await axios.get ('/api/agents')
        dispatch ({type : AGENT_INFOS_SUCCESS, payload : data})
    } catch (error) {
        dispatch ({type : AGENT_INFOS_FAIL, payload : error.message})
    }
}