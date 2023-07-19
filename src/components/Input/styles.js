import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    > label {
        display: none;
    }

    > input {
        width: 100%;
        height: 49px;
        padding: 16px;
        border-radius: 8px;
        background-color: #2D333B;
        border: 2px solid rgba(229, 229, 229, 0.20);
        color: #FFF;
        font-size: 16px;

        &.border--red {
            border: 2px solid #F68484;
        }
    }
`;