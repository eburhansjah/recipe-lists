import {createContext} from 'react';
import useSWR from 'swr';
import PropTypes from 'prop-types';

export const CategoriesContext = createContext();

const fetcher = (url) => fetch(url).then(res => res.json());

const CategoriesProvider = ({children}) => {
    const{data: categoriesData, error: categoriesError, isLoading: categoriesLoading} =
        useSWR('http://localhost:3000/categories', fetcher);

    if (categoriesError) return <div>Error loading recipe categories</div>;
    if(categoriesLoading) return <div>Loading recipe categories...</div>;

    return(
        <CategoriesContext.Provider value={{categoriesData}}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvider;

CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}