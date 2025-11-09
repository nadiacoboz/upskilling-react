import type { JSX } from "react";
import useUserForm from "../../hooks/useUserForm/useUserForm";
import { Button, Container, Form } from "react-bootstrap";

function UserForm(): JSX.Element {
  const { formData, errors, handleChange, handleSubmit } = useUserForm({
    username: "",
    email: "",
  });

  return (
    <>
      <Container className="my-4">
        <fieldset>
          <legend>User Information</legend>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="username">Username: </Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
              {errors.username && (
                <p style={{ color: "red" }}>{errors.username}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email: </Form.Label>
              <Form.Control
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </Form.Group>
            <Button variant="secondary" type="submit">Submit</Button>
            <p>{JSON.stringify(formData)}</p>
          </Form>
        </fieldset>
      </Container>
    </>
  );
}

export default UserForm;
