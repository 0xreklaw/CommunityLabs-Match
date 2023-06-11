
import { createContext } from 'react'
const AppContext = createContext()

const appReducer = (state, action) => {
    switch (action.type) {
    case TOGGLE_STORY: 
        return {
            ...state,
            storyToggle: action.payload
        }
        default:
            return state;
    }
}

const AppState = props => {
    const initialState = {
        profileStoryToggle: false,
        storyToggle: false,
    }

    const [state, dispatch] = useReducer(appReducer, initialState)

    

    return (
        <AppContext.Provider
            value={{
                profileStoryToggle: state.profileStoryToggle,
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default { AppContext, AppState }