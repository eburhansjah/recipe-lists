import {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {CategoriesContext} from '../contexts/CategoriesContext';
import styled from 'styled-components';


const CategoryListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const StyledTitle = styled.h1`
    font-family: 'Monaco', monospace;
    font-size: calc(20px + 2vmin);
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    
    &:hover{
        text-decoration: underline;
    }
`;

const StyledCategoryItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: calc(10px + 2vmin);
    max-width: 600px;
    margin: 10px 0;
    padding: 20px;
    border: 3px inset indianred;
    border-radius: 8px;
    text-align: left;
    
    @media (min-width: 768px){
        width: 45%;
    }
    
    @media (min-width: 1024px){}
        width: 50%;
`;

export default function Categories(){
    const categoriesData = useContext(CategoriesContext);
    // console.log(categoriesData);

    // Checking if categoriesData is loaded
    const categories = categoriesData?.categories || [];

    return(
        <CategoryListWrapper>
            <StyledTitle>Recipe Categories</StyledTitle>
            {/*Debugging purposes*/}
            {categories.length === 0 ? (
                <p>No categories available.</p>
            ) : (
                categories.map((category) => (
                    <StyledCategoryItem key={category.id}>
                        <StyledNavLink to={`/recipes/${category.id}`}>{category.title}</StyledNavLink>
                    </StyledCategoryItem>
                ))
            )}
        </CategoryListWrapper>
    );
}