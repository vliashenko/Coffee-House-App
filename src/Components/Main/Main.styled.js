import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

export const Container = styled.div`
    padding: 176px 0;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media(max-width: 717px){
        padding: 76px 0;
    };
`;

export const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0em;
    text-align: center;
    padding: 0 20px;

    @media(max-width: 717px){
        font-size: 32px;
    };
`;
export const MainLogoContainer = styled.div`
    margin-top: 20px;
    width: 320px;
    height: 45px;

    @media(max-width: 576px){
        width: 220px;
        height: 35px;
    };
`;
export const MainLogo = styled.img`
    width: 100%;
    height: 100%;
`;
export const SubTitle = styled.div`
    margin-top: 36px;
    font-size: 24px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
    padding: 0 20px;

    @media(max-width: 717px){
        font-size: 22px;
    };

    @media(max-width: 530px){
        font-size: 18px;
    };
`;
export const SubTitleSecond = styled.div`
    margin-top: 20px;
    font-size: 24px;
    font-weight: 700;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
    padding: 0 20px;

    @media(max-width: 717px){
        font-size: 20px;
    };

    @media(max-width: 530px){
        font-size: 15px;
    };
`;
export const Button = styled.button`
    margin-top: 58px;
    padding: 15px 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Merienda;   
    color: white;
    width: 120px;
    height: 30px;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    border: 1px solid white;
    border-radius: 3px;
    background: none;
    cursor: pointer;
    transition: transform 400ms ease;

    &:hover {
        transform: scale(1.10);
    }
`;
