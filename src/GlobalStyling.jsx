import {createGlobalStyle} from 'styled-components';

const GlobalStyling = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        background-color: white;
        color: black;
    }
`;

export default GlobalStyling;