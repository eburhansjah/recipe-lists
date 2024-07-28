import CategoriesProvider from './CategoriesContext';
import RecipesProvider from './RecipesContext';
import PropTypes from "prop-types";

const AppContext = ({ children }) => {
    return (
        <CategoriesProvider>
            <RecipesProvider>
                {children}
            </RecipesProvider>
        </CategoriesProvider>
    );
};

export default AppContext;

AppContext.propTypes = {
    children: PropTypes.node.isRequired,
}