import {createContext} from 'react';
import useSWR from 'swr';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

const fetcher = (url) => fetch(url).then(res => res.json());

const RecipesProvider = ({children}) => {
    const{data: recipesData, error: recipesError, isLoading: recipesLoading} =
        useSWR('http://localhost:3000/recipes', fetcher);

    if (recipesError) return <div>Error loading recipes</div>;
    if(recipesLoading) return <div>Loading recipes...</div>;

    return(
        <RecipesContext.Provider value={{recipesData}}>
            {children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;

RecipesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}