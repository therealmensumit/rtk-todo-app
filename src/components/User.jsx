import { useNavigate, useParams } from "react-router-dom";
import { useGetUserQuery } from "../features/api";
import { Button, Container } from "react-bootstrap";
import { FaLeftLong } from "react-icons/fa6";

export const User = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetUserQuery(id);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Button variant="default" onClick={() => navigate(-1)}>
        <FaLeftLong />
      </Button>
      <hr />
      <p>
        <strong>User: </strong>
        <span>{data.name}</span>
      </p>
      <p>
        <strong>Email: </strong>
        <span>{data.email}</span>
      </p>
    </Container>
  );
};
