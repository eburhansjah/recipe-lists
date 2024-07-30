import React, {createContext, useCallback, useReducer} from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

const initialState = {
    recipes: [],
    loading: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_RECIPES_SUCCESS':
            return {
                ...state,
                recipes: action.payload,
                loading: false,
            };
        case 'FETCH_RECIPES_ERROR':
            return {
                ...state,
                recipes: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const RecipesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchRecipes = useCallback(async () => {
        try {
            const response = await fetch('https://eburhansjah.github.io/recipe-lists/src/db.json');
            const {recipes} = await response.json();
            dispatch({ type: 'FETCH_RECIPES_SUCCESS', payload: recipes });
        } catch (error) {
            dispatch({ type: 'FETCH_RECIPES_ERROR', payload: error.message });
        }
    }, []);

    React.useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    const { recipes, loading, error } = state;

    if (loading) return <div>Loading recipes...</div>;
    if (error) return <div>Error loading recipes: {error}</div>;

    return (
        <RecipesContext.Provider value={{recipes}}>
            {children}
        </RecipesContext.Provider>
    );
};

export default RecipesProvider;

RecipesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}