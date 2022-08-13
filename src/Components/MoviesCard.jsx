import React from "react";
import { Card, Button } from "react-bootstrap";

export default function MoviesCard({
    movie: { title, description, posterUrl },
}) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={posterUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
