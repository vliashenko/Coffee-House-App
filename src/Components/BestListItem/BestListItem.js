import { Link } from 'react-router-dom';
import { Container, ImageContainer, Image, Name, Price } from "./BestListItem.styled";
import PropTypes from "prop-types";

const BestListItem = ({ image, name, price, id }) => {
    return (
        <Link to={`/productPage/${id}`}>
        <Container>
            <ImageContainer>
                    <Image 
                        src={image}
                    />
                </ImageContainer>
                <Name>
                    {name}
                </Name>
                <Price>
                    {price}$
                </Price>
        </Container>
        </Link>
    );
};

BestListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
};

export default BestListItem;