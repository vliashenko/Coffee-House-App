import React, { Component } from 'react';
import Header from "../Components/Header/Header";
import AboutUs from "../Components/AboutUs/AboutUs";
import OurBest from "../Components/OurBest/OurBest";
import Footer from "../Components/Footer";
import styled from "styled-components";

const Container = styled.div`
    
`;

class MainPage extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <AboutUs/>
                <OurBest/>
                {/*<Footer/> */}
            </Container>
        );
    }
}

export default MainPage;