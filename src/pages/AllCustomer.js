import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AllCustomer() {
  const [superHeroes, setSuperHeroes] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactapidemo.azurewebsites.net/api/SuperHeroes")
      .then((response) => {
        setSuperHeroes((data) => {
          return response.data;
        });
      })
      .catch(error=>{
        console.error("server responsed with error:", error);
      });
     
  }, []);

  

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {superHeroes.map((hero) => {
          return (
            <Col key={hero.id}>
              <Card>
                <Card.Img variant="top" src={"/assets/hero/" + hero.imageUrl} />
                <Card.Body>
                  <Card.Title>{hero.heroName}</Card.Title>
                  <Card.Text className="truncate-3-lines">{hero.powers}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default AllCustomer;
