import React, {createContext, useCallback, useReducer} from 'react';
// import useSWR from 'swr';
import PropTypes from 'prop-types';

export const CategoriesContext = createContext();

const initialState = {
    categories: [],
    loading: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return {
                ...state,
                categories: action.payload,
                loading: false,
            };
        case 'FETCH_CATEGORIES_ERROR':
            return {
                ...state,
                categories: [],
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchCategories = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3000/categories');
            const data = await response.json();
            dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_CATEGORIES_ERROR', payload: error.message });
        }
    }, []);

    React.useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    const { categories, loading, error } = state;

    if (loading) return <div>Loading recipe categories...</div>;
    if (error) return <div>Error loading recipe categories: {error}</div>;

    return (
        <CategoriesContext.Provider value={{ categories }}>
            {children}
        </CategoriesContext.Provider>
    );
};

export default CategoriesProvider;

// const fetcher = (url) => fetch(url).then(res => res.json());
//
// export default function CategoriesProvider ({children}) {
//     const{data, error, isLoading} = useSWR('http://localhost:3000/categories', fetcher);)
//
//     if (error) return <div>Error loading recipe categories</div>;
//     if (isLoading) return <div>Loading recipe categories...</div>;
//
//     return(
//         <CategoriesContext.Provider value={data}>
//             {children}
//         </CategoriesContext.Provider>
//     );
// }
//
CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}