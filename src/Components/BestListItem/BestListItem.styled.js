import styled from "styled-components";

export const Container = styled.li`
    width: 200px;
    height: 240px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 8px;
    cursor: pointer;
    transition: all 400ms ease;

    &:hover {
        transform: scale(1.08);
    }
`;

export const ImageContainer = styled.div`
    width: 151px;
    height: 130px;
    margin: 22px auto 18px auto;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Name = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0 auto;
`;

export const Price = styled.div`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: right;
    margin: 10px 20px;
`;