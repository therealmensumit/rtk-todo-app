import { Button } from "react-bootstrap";
import { useDeleteUserMutation } from "../features/api";
import { FaDeleteLeft } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const DeleteUser = ({ id }) => {
  const [deleteUser, { isLoading, error }] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      await deleteUser(id).unwrap();
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <>
      <Button variant="danger" onClick={handleDelete}>
        {isLoading ? (
          <AiOutlineLoading3Quarters className="rotate" />
        ) : (
          <FaDeleteLeft />
        )}
      </Button>
      {error ? <div>Error: {error.message}</div> : null}
    </>
  );
};
