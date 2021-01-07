import React, { useState } from 'react'

import Img from '../../assets/nature.jpg'
import { Form, Container, Row, Card } from 'react-bootstrap'

function Home() {

    const [text, setText] = useState('')

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    return (
        <Container>
            <Row className="row justify-content-center">
                <Card style={{ maxWidth: '100%' }}>
                    <Card.Title className="text-center py-3">Card Title</Card.Title>
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                    <Form>
                        < Form.Group className="col-12 col-md-6" controlId="formBasicEmail" >
                            <Form.Label>Your text:</Form.Label>
                            <Form.Control value={text} type="text" onChange={onChangeHandler} />
                        </Form.Group >
                    </Form>
                        <Card.Text>
                            {text}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}
export default Home

