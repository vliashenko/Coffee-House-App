import BestListItem from "../BestListItem/BestListItem";
import { favorites } from "../../data"
import { Container, Title, List } from "./OurBest.styled"

const OurBest = () => {
    return (
        <Container> 
            <Title>Our best</Title>
            
            <List>
                {favorites.map(item => {
                    const { id, ...allProps} = item;
                        return <BestListItem key={id} id={id} {...allProps}/>
                })}
            </List>
        </Container>
    );
};

export default OurBest;