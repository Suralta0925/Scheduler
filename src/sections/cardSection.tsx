import Card from "../components/Card";

function CardSection(props){
    const cards = [
    {
      status:"ongoing",
      subject: "pathfit",
      assignment: "HOPE: Push-ups",
      deadline: "August 18, 2025"

    },
    {
      status:"finished",
      subject: "IT-101",
      assignment: "Research: About the fundemental of computers",
      deadline: "August 22, 2025"
    },
    {
      status: "notice",
      subject: "IT-102",
      assignment:"Study the fundamental of accounting",
      deadline: "August 25, 2025",
    },
    {
      status:"finished",
      subject: "IT-101",
      assignment: "Research: About the fundemental of computers",
      deadline: "August 22, 2025"
    },
  {
      status:"finished",
      subject: "IT-101",
      assignment: "Research: About the fundemental of computers",
      deadline: "August 22, 2025"
    },
    {
      status: "notice",
      subject: "IT-102",
      assignment:"Study the fundamental of accounting",
      deadline: "August 25, 2025",
    },
    {
      status:"finished",
      subject: "IT-101",
      assignment: "Research: About the fundemental of computers",
      deadline: "August 22, 2025"
    },]
    return(<Card items={cards.filter((card) => card.status=== String(props.status).toLowerCase())}/>)
}

export default CardSection;