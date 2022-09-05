import { Link } from "react-router-dom";
import { mainBackground } from "../../Images";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

export const Container = styled.div`
    color: white;
    height: 100%;
    background: url(${mainBackground});
    background-position: center center;
    background-size: cover;
`;

export const Navbar = styled.div`
    min-height: 104px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    align-items: center;


    @media(max-width: 716px){
        justify-content: center;
    }
`;
export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 320px;
`;

export const MenuItem = styled.div`
    position: relative;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    cursor: pointer;
    transition: all 300ms ease;

    &: hover {
        color: #d5d5d5;
    }
`;
export const LogoContainer = styled.div`
    position: absolute;
    top: -20px;
    left: -30px;
    width: 35px;
    height: 35px;
`;
export const Logo = styled.img`
    width: 100%;
    height: 100%;
`;
