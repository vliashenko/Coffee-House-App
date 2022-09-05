import styled from "styled-components";

export const Container = styled.div`
    padding: 100px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    @media(max-width: 600px) {
        padding: 80px 0px;
    };
`;
export const Title = styled.div`
    font-size: 28px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;

    @media(max-width: 600px) {
        font-size: 26px;
    };
`;
export const LogoContainer = styled.div`
    margin-top:20px;
    width: 320px;
    height: 45px;

    @media(max-width: 600px) {
        width: 220px;
        height: 35px;
    };
`;
export const Logo = styled.img`
    width: 100%;
    height: 100%;
`;
export const FirstText = styled.div`
    margin-top: 41px;
    padding: 0 20px;
    width: 620px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;

    @media(max-width: 600px) {
        font-size: 16px;
        width: 100%;
    };
`;
export const SecondText = styled.div`
    margin-top: 20px;
    padding: 0 20px;
    width: 620px;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;

    @media(max-width: 600px) {
        font-size: 16px;
        width: 100%;
    };
`;