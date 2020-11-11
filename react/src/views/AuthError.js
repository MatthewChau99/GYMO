import React from "react";
import { Container, Button } from "shards-react";

const AuthError = () => (
    <Container fluid className="main-content-container px-4 pb-4">
        <div className="error">
            <div className="error__content">
                <h2>401</h2>
                <h3>You need to login to authorize this page</h3>
                <Button pill>&larr; Go Back</Button>
            </div>
        </div>
    </Container>
);

export default AuthError;
