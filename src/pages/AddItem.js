import React, { useRef } from "react";
import Layout from "../components/shared/Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function AddItem() {
  const heroName = useRef("");
  const heroAlias = useRef("");
  const powers = useRef("");
  const imageUrl = useRef("");

  const payload = {
    heroName: heroName.current.value,
    heroAlias: heroAlias.current.value,
    powers: powers.current.value,
    imageUrl: imageUrl.current.value,
  };

  const addHero = () => {
    axios
      .post("https://reactapidemo.azurewebsites.net/api/SuperHeroes", payload)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("server responsed with error:", error);
      });
  };
  return (
    <>
      <Layout>
        <Form>
          <Form.Group className="mb-3" controlId="heroName">
            <Form.Label>Hero Name</Form.Label>
            <Form.Control type="text" ref={heroName} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="heroAlias">
            <Form.Label>Hero Alias</Form.Label>
            <Form.Control type="text" ref={heroAlias} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="powers">
            <Form.Label>Powers</Form.Label>
            <Form.Control type="text" ref={powers} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="imageUrl">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" ref={imageUrl} />
          </Form.Group>

          <Button variant="primary" type="button" onClick={addHero}>
            Add
          </Button>
        </Form>
      </Layout>
    </>
  );
}

export default AddItem;
