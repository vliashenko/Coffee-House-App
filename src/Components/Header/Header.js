import Main from "../Main/Main";
import { headerBeans } from "../../Images";
import {
    Container,
    Navbar,
    Left,
    StyledLink,
    MenuItem,
    LogoContainer,
    Logo
} from "./Header.styled";

const Header = () => {
    return (
        <Container>
            <Navbar>
                <Left>
                    <StyledLink to="/">
                        <MenuItem>
                            <LogoContainer>
                                <Logo src={headerBeans}/>
                            </LogoContainer>
                            Coffee house
                        </MenuItem>
                    </StyledLink>
                    <StyledLink to="/ourCoffee">
                        <MenuItem>
                            Our coffee
                        </MenuItem>
                    </StyledLink>
                    <MenuItem>
                        For your pleasure
                    </MenuItem>
                </Left>
            </Navbar>

            <Main/>
        </Container>
    );
}

export default Header;