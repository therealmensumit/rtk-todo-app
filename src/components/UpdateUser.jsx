import { useState } from "react";
import { useUpdateUserMutation } from "../features/api";
import { Button, Container, Form } from "react-bootstrap";

export const UpdateUser = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [updateUser, { isLoading, error }] = useUpdateUserMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateUser({ id, name, email });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Button type="submit">Update User</Button>
        {isLoading ? <div>Loading...</div> : null}
        {error ? <div>Error: {error.message}</div> : null}
      </Form>
    </Container>
  );
};
