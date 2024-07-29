import {useContext} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
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

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 600px;
`;

const StyledTitle = styled.h1`
    font-family: 'Monaco', monospace;
    font-size: calc(20px + 2vmin);
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
`;

const StyledButton = styled.button`
    background-color: ivory;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: calc(10px + 1vmin);
    
    &:hover{
        text-decoration: underline;
    }
`;

const StyledRecipeItem = styled.div`
    width: 90%;
    max-width: 600px;
    margin: 10px 0;
    padding: 20px;
    border: 3px inset black;
    border-radius: 8px;
    text-align: left;
    
    @media (min-width: 768px){
        width: 45%;
    }
    
    @media(min-width: 1024px){
        width: 60%
    }
`;

const Recipes = () => {
    const {categoryId} = useParams();
    const {recipes} = useContext(RecipesContext);

    const navigate = useNavigate();

    const filteredRecipes = recipes.filter(recipe => recipe.listId === parseInt(categoryId));

    const backClickHandle = () => {
        navigate('/');
    };

    const scrollToTopHandle = () => {
        window.scrollTo({top:0, behavior: 'smooth'});
    };

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

          <ButtonWrapper>
              <StyledButton onClick={backClickHandle}>Back to Categories</StyledButton>
              <StyledButton onClick={scrollToTopHandle}>To the Top</StyledButton>
          </ButtonWrapper>
      </RecipeListWrapper>
    );
}

export default Recipes;