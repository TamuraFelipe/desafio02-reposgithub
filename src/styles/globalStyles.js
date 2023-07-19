import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
    :root {
        background-color: #1D2128;
        font-family: 'Inter', sans-serif;
        color: #999;
        font-size: 16px;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    input {
        border: none;
    }
    button {
        cursor: pointer;
    }
`;