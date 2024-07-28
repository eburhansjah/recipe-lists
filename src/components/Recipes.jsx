import {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {RecipesContext} from "../contexts/RecipesContext.jsx";
import styled from 'styled-components';
import RecipeDetails from './RecipeDetails.jsx';

const RecipeListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const StyledTitle = styled.h1`
    font-size: calc(10px + 2vmin);
    margin: 20px 0;
    text-align: center;
`;

const StyledRecipeItem = styled.div`
    width: 90%;
    max-width: 600px;
    margin: 10px 0;
    padding: 20px;
    border: 1px inset black;
    border-radius: 8px;
    text-align: left;
    
    @media (min-width: 768px){
        width: 45%;
    }
    
    @media(min-width: 1024px){
        width: 30%
    }
`;

const Recipes = () => {
    const {categoryId} = useParams();
    const {recipes} = useContext(RecipesContext);

    const filteredRecipes = recipes.filter(recipe => recipe.listId === parseInt(categoryId));

    return(
      <RecipeListWrapper>
          <StyledTitle>Recipes</StyledTitle>

          {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                  <StyledRecipeItem key={recipe.id}>
                      <RecipeDetails recipe={recipe} />
                  </StyledRecipeItem>
              ))
          ) : (
              <p>Sorry, no recipes found for this category.</p>
          )}
      </RecipeListWrapper>
    );
}

export default Recipes;