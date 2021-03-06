import React from "react";
import { Row, Col, Container } from "reactstrap";
import DogInfo from "../components/DogInfo";
import styled from "styled-components";

//assets
import RigbyImg from "../images/Rigby300.jpg";
import TrixieImg from "../images/Trixie300.jpg";
import SnickersImg from "../images/Snickers300.jpg";

const StyledMyDogs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-items: center;
  background-image: linear-gradient(rgb(255, 209, 168), rgb(255, 99, 99));
  padding:5%;
  
  h1{
    text-decoration: underline;
    color:rgb(99, 4, 53);
   }
  .container{
    width: 80%;
    background-color: rgb(250, 213, 165);
    border-radius: 15px;
    border-width: 5px;
    border-style: solid;
    margin-top: 10px;
  }
  
`;


function MyDogs() {

  return (        
    <StyledMyDogs class="mb-3 mx-auto">
      <h1>Meet our Dogs</h1>
      <hr />
      <Container>
        <Row>
          <Col md="4">
            <img src={RigbyImg} alt="Rigby Jasper" />
          </Col>
          <Col md="8">
            <DogInfo
              name="Rigby Jasper"
              desc = "Rigby is a very playfull dog.  He plays with our other dogs, our cat, and anyone who will spend time with him. He loves to be brushed and groomed! He is deffinately the prince of the house."
              size = "Red Toy Male - 9 inches tall and 4.9 lbs"
              reg = "AKC and ACA"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <img src={TrixieImg} alt="Trixie" />
          </Col>
          <Col md="8">
            <DogInfo
              name="Trixie"
              desc = "Trixie is the most independant poodle we have ever seen.  She loves attention, can play fetch for ever, and when no one is playing with her, she tosses her toys in the air and tries to catch them."
              size = "Cream Toy Female - 10 inches tall and 6.3 lbs"
              reg = "ACA"
             />
          </Col>
        </Row>      
      </Container>
      <Container>
        <Row>
          <Col md="4">
            <img src={SnickersImg} alt="Snickers" />
          </Col>
          <Col md="8">
            <DogInfo
              name="Snickers"
              desc = "Snickers is a very cuddley dog.  She always wants to be laying next to you or in your lap. She is very attached to both me and my husband, but is the first to walk up to new people."
              size = "Cream Mini Female - 12 inches tall and 8.2 lbs"
              reg = "ACA"
             />
          </Col>
        </Row>      
      </Container>


    </StyledMyDogs>
  );
};

export default MyDogs;