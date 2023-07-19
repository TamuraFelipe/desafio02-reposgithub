import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-bottom: 24px;
    
    h3 {
        margin-top: 16px;
        a {
            margin-bottom: 0;
        }
    }
    p {
        margin-top: 16px;
    }
    a {
        display: block;
        margin-bottom: 16px;
        color: #999;
        &.link--blue {
            color: #6DA5F2;
        }
    }
    button {
        border: none;
        background-color: transparent;
        margin-bottom: 24px;
        &.link--red {
            color: #F68484;
        }
    }
    &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: rgba(229, 229, 229, 0.20);;
        display: block;
    }
    &:last-child::after {
        display: none;
    }
`;