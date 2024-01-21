import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
        margin:0px;
        padding:0px;
        box-sizing: border-box;
        font-family: 'STIX Two Text', serif;
}

h1{
        color:${({ theme}) => theme.colors.heading}
        font-size: 6rem;
        font-weight: 900;
}

H2{
        color:${({ theme}) => theme.colors.heading};
        font-size: 4.4rem;
        font-weight: 300;
        withe-space: normal;
        text-align: center;
}

H3{
        
        font-size: 1.4rem;
        font-weight: 400;
              
}

p{
        color:${({ theme }) => theme.colors.heading};
        opacity: .7;
        font-size: 1.65rem;
        line-height: 1.5;
        margin-top: 1rem;
        font-weight: 400;
}

a{
        text-decoration: none;

}

li{
        list-style: none;
}


`;