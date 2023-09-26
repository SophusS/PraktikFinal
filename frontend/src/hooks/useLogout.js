import { useAuthContext } from "./useAuthContext"
import { useEventsContext } from "./UseEventsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: eventsDispatch } = useEventsContext()

    const logout = () => {
        //remove user from storage
        localStorage.removeItem("user")

        //dispatch logout action
        dispatch({type: "LOGOUT"})
        eventsDispatch({type: 'SET_EVENTS', payload: null})
    }

    return {logout}
}