import {createContext} from 'react';
import useSWR from 'swr';
import PropTypes from 'prop-types';
// https://my-json-server.typicode.com/<your-username>/<your-repo>
export const CategoriesContext = createContext();

const fetcher = (url) => fetch(url).then(res => res.json());

const CategoriesProvider = ({children}) => {
    const{data, error, isLoading} = useSWR('http://localhost:3000/categories', fetcher);

    if (error) return <div>Error loading recipe categories</div>;
    if (isLoading) return <div>Loading recipe categories...</div>;

    return(
        <CategoriesContext.Provider value={{data}}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvider;

CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}