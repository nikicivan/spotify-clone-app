export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    discover_weekly: null,
    top_artist: null,
    item: null,
    // Delete after developing
    token: null
};

const reducer = (state, action) => {    
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;