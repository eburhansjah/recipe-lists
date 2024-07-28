import styled from 'styled-components';

const RecipeDetailsWrapper = styled.div`
    ul, ol{
        margin: 10px 0;
        padding: 0 20px;
    }
    
    li{
        margin: 5px 0;
    }
`;


const RecipeDetails = ({recipe}) => {
    return(
        <RecipeDetailsWrapper>
            <h2>{recipe.title}</h2>
            <p>Dish Type: {recipe.dishType}</p>
            <p>Prep Time: {recipe.prepTime_minutes} minutes</p>
            <p>Cook Time: {recipe.cookTime_minutes} minutes</p>
            <p>Servings: {recipe.servings}</p>
            <p>Calories per serving: {recipe.calories_per_serving}</p>

            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h3>Instructions:</h3>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </RecipeDetailsWrapper>
    );
}

export default RecipeDetails;