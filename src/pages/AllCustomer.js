import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function AllCustomer() {
  const heroes = [
    {
      id: 1,
      heroName: "Photonix",
      heroAlias: "Sarah Sparks",
      powers:
        "Photonix can manipulate light energy, enabling her to fly at incredible speeds, generate blinding flashes of light, create solid constructs out of photons, and even turn invisible by bending light around herself.",
      imageUrl: "Photonix.png",
    },
    {
      id: 2,
      heroName: "Titan",
      heroAlias: "David Steele",
      powers:
        "Titan possesses superhuman strength, durability, and agility. He can also manipulate earth and rock, shaping them into powerful weapons or creating seismic disturbances.",
      imageUrl: "Titan.png",
    },
    {
      id: 3,
      heroName: "Frostbite",
      heroAlias: "Emily Winter",
      powers:
        "Frostbite has cryokinetic abilities, allowing her to generate and control ice and cold temperatures. She can freeze objects, create icy constructs, and lower the temperature in her vicinity to freezing levels.",
      imageUrl: "Frostbite.png",
    },
    {
      id: 4,
      heroName: "Shadowstrike",
      heroAlias: "Alex Nightshade",
      powers:
        "Shadowstrike possesses the ability to manipulate shadows, using them to teleport short distances, blend into darkness, and create solid constructs formed from shadows. He's also skilled in hand-to-hand combat and stealth.",
      imageUrl: "Shadowstrike.png",
    },
    {
      id: 5,
      heroName: "Blaze",
      heroAlias: "Marcus Inferno",
      powers:
        "Blaze can generate and control fire. He can project flames from his hands, create walls of fire, and even engulf himself in flames for increased strength and heat resistance. He's also immune to burns and extreme temperatures.",
      imageUrl: "Blaze.png",
    },
  ];

  return (
    <>
      
      <Row xs={1} md={3} className="g-4">
        {heroes.map((hero) => {
          return (
            <Col key={hero.id}>
              <Card>
                <Card.Img variant="top" src={"/assets/hero/"+hero.imageUrl} />
                <Card.Body>
                  <Card.Title>{hero.heroName}</Card.Title>
                  <Card.Text class="truncate-3-lines" >{hero.powers}</Card.Text>
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
