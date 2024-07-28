import React, {createContext, useCallback, useReducer} from 'react';
// import useSWR from 'swr';
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
            const response = await fetch('http://localhost:3000/recipes');
            const data = await response.json();
            dispatch({ type: 'FETCH_RECIPES_SUCCESS', payload: data });
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
        <RecipesContext.Provider value={{ recipes }}>
            {children}
        </RecipesContext.Provider>
    );
};

export default RecipesProvider;

// const fetcher = (url) => fetch(url).then(res => res.json());
//
// const RecipesProvider = ({children}) => {
//     const{data, error, isLoading} = useSWR('http://localhost:3000/recipes', fetcher);
//
//     if (error) return <div>Error loading recipes</div>;
//     if (isLoading) return <div>Loading recipes...</div>;
//
//     return(
//         <RecipesContext.Provider value={{data}}>
//             {children}
//         </RecipesContext.Provider>
//     );
// }
//
// export default RecipesProvider;
//
RecipesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}