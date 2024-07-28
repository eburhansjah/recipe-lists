import {createContext} from 'react';
import useSWR from 'swr';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

const fetcher = (url) => fetch(url).then(res => res.json());

const RecipesProvider = ({children}) => {
    const{data, error, isLoading} = useSWR('http://localhost:3000/recipes', fetcher);

    if (error) return <div>Error loading recipes</div>;
    if (isLoading) return <div>Loading recipes...</div>;

    return(
        <RecipesContext.Provider value={{data}}>
            {children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;

RecipesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}