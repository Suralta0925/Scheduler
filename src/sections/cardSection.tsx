import Card from "../components/TodoTabComponents/Card";
import { cards } from "../Data/cardData";

function CardSection(props){
    return(<Card items={cards.filter((card) => card.status=== String(props.status).toLowerCase())}/>)
}

export default CardSection;