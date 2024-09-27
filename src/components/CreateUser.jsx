import { useState } from "react";
import { useCreateUserMutation } from "../features/api";
import { Button, Form } from "react-bootstrap";

export const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createUser, { isLoading, error }] = useCreateUserMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUser({ name, email });
      setName("");
      setEmail("");
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <div className="shadow p-3 rounded-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control
            type="text"
            value={name}
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Button type="submit">
          {isLoading ? "Loading...." : "Create User"}
        </Button>
        {error ? <div>Error: {error.message}</div> : null}
      </Form>
    </div>
  );
};
