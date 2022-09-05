import { whiteBeans } from "../../Images";
import {
    StyledLink,
    Container,
    Title,
    MainLogoContainer,
    MainLogo,
    SubTitle,
    SubTitleSecond,
    Button,
} from "./Main.styled";

const Main = () => {
    return (
        <Container>
            <Title>
                Everything You Love About Coffee 
            </Title>

            <MainLogoContainer>
                <MainLogo src={whiteBeans}/>
            </MainLogoContainer>

            <SubTitle>
                We makes every day full of energy and taste
            </SubTitle>

            <SubTitleSecond>
                Want to try our beans?
            </SubTitleSecond>

            <StyledLink to="/ourCoffee">
                <Button>
                    More
                </Button>
            </StyledLink>
        </Container>
    );
};

export default Main;