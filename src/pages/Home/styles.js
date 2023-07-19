import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 820px;
    padding-inline: 24px;
    margin-inline: auto;
`;

export const Header = styled.div`
    width: 100%;
    height: 60px;
    margin-block: 24px;
`;

export const Error = styled.p`
    font-size: 12px;
    color: #F68484;
    margin-left: 4px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;

export const RepoList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    > h2 {
        text-align: center;
        margin-block: 24px;
    }
`;