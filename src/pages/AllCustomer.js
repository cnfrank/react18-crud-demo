import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

function AllCustomer() {
  const [superHeroes, setSuperHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://reactapidemo.azurewebsites.net/api/SuperHeroes")
      .then((response) => {
        setSuperHeroes((data) => {
          return response.data;
        });
        setLoading(false);
      })
      .catch((res_error) => {
        console.error("server responsed with error:", res_error);
        setError("error");
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && (
        <Row className="justify-content-center">
          <Spinner animation="border" variant="primary" />
        </Row>
      )}
      {error && <div>Oops，Something went wrong. Try again please</div>}
      <Row xs={1} md={3} className="g-4">
        {superHeroes &&
          superHeroes.map((hero) => {
            return (
              <Col key={hero.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={"/assets/hero/" + hero.imageUrl}
                  />
                  <Card.Body>
                    <Card.Title>{hero.heroName}</Card.Title>
                    <Card.Text className="truncate-3-lines">
                      {hero.powers}
                    </Card.Text>
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
