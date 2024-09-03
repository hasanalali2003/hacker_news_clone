function createStore(reducer) {
    let currentState = reducer(undefined, {});
    return {
        getState: () => currentState,
        dispatch: (action) => {
            currentState = reducer(currentState, action);
        },
    };
}

const initialState = {
    favorites: [],
};

function favoriteReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_FAVORITE": {
            const addedfavorite = action.payload.favorite;
            const favorites = [...state.favorites, addedfavorite];
            return { favorites };
        }
        case "REMOVE_FAVORITE": {
            const removedfavorite = action.payload.favorite;
            const favorites = state.favorites.filter(
                (favorite) => favorite.id !== removedfavorite.id
            );
            return { favorites };
        }
        default:
            return state;
    }
}

const store = createStore(favoriteReducer);

export default store;
