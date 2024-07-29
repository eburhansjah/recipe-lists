import {createGlobalStyle} from 'styled-components';

const GlobalStyling = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ivory; //#edf3fc;
        color: orangered; // #290707;
        font-family: 'Verdana', sans-serif;
    }
`;

export default GlobalStyling;