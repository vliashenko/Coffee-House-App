import { ourBest } from "../../Images"
import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    background: url(${ourBest});
    background-position: center center;
    background-size: cover;
`;

export const Title = styled.div`
    padding: 30px 0 0 0;
    width: 100%;
    font-family: Merienda;
    font-size: 26px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const List = styled.ul`
    width: 60%;
    margin: 0 auto;
    padding: 20px 0 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
