import styled from 'styled-components';
import PropTypes from 'prop-types';

const RecipeDetailsWrapper = styled.div`
    h2{
        margin-bottom: 20px;
    }

    h3{
        margin: 20px 0;
    }
    
    p{
        color: black;
    }
    
    ul, ol{
        margin: 10px 0;
        padding: 0 20px;
        color: black;
    }
    
    li{
        margin: 10px 0;
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
            <p>Calories: {recipe.calories_per_serving} per serving</p>

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

RecipeDetails.propTypes = {
    recipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        dishType: PropTypes.string.isRequired,
        prepTime_minutes: PropTypes.number.isRequired,
        cookTime_minutes: PropTypes.number.isRequired,
        servings: PropTypes.number.isRequired,
        calories_per_serving: PropTypes.number.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
}

export default RecipeDetails;