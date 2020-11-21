import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{   
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;    
}

html{
    min-height: 100%;
}

body{
    background-color: #FFF;
}

button{
    background-color: #212121;
    cursor: pointer;
}
`;
