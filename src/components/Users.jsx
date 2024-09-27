import { Button, Col, Container, ListGroup, Stack } from "react-bootstrap";
import { useGetUsersQuery } from "../features/api";
import { DeleteUser } from "./DeleteUser";
import { CreateUser } from "./CreateUser";
import { FaEnvelope, FaPen, FaUser } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const navigate = useNavigate();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <h1 className="my-3 text-center">
        <span className="ribbon">Todo App</span>
      </h1>
      <Col md={{ offset: 1, span: 10 }} lg={{ offset: 3, span: 6 }}>
        <CreateUser />
      </Col>
      <br />
      <ListGroup as={"ul"}>
        {isLoading ? (
          <ListGroup.Item>Loading......</ListGroup.Item>
        ) : (
          data?.map((user) => (
            <ListGroup.Item as={"li"} key={user?.id}>
              <Stack gap={2} direction="horizontal">
                <Stack gap={2}>
                  <div>
                    <FaUser color="#c2c2c2" />
                    <span className="ps-2">{user?.name}</span>
                  </div>
                  <div>
                    <FaEnvelope color="#c2c2c2" />
                    <span className="ps-2">{user?.email}</span>
                  </div>
                </Stack>
                <Button
                  variant="info"
                  onClick={() => navigate(`/update-user/${user?.id}`)}>
                  <FaPen />
                </Button>
                <DeleteUser id={user?.id} />
                <Button
                  variant="default"
                  className="text-success"
                  onClick={() => navigate(`/user/${user?.id}`)}>
                  <FaArrowAltCircleRight />
                </Button>
              </Stack>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
};
