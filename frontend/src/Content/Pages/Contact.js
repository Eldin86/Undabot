import React, { useEffect, useState } from 'react'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import Spinner from '../../shared/UIElements/Spinner'

//TEST

function Contact() {
    const [message, setMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [inputValues, setInputValues] = useState({
        email: {
            value: '',
            isValid: false
        },
        message: {
            value: '',
            isValid: false
        }
    })

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            setIsLoading(true)
            const response = await fetch('http://localhost:3001/API/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputValues.email.value,
                    message: inputValues.message.value
                })
            })
            const responseData = await response.json()

            setMessage(responseData)
            setIsLoading(false)
            //Clear inputs if both inputs are valid after form submit
            if(inputValues.email.isValid && inputValues.message.isValid){
                setInputValues(prevState => {
                    return {
                        ...prevState,
                        email: {
                            ...prevState.email,
                            value: '',
                            isValid: false
                        },
                        message: {
                            ...prevState.message,
                            value: '',
                            isValid: false
                        }
                    }
                })
            }

        } catch (error) { }
    }

    const onChangeHandler = (e) => {
        const inputName = e.target.name
        const inputvalue = e.target.value
        const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValidInput = false

        //Setting input value and checking is input valid or not
        switch (inputName) {
            case 'email':
                isValidInput = mailRegex.test(inputvalue)
                setInputValues(prevState => {
                    return {
                        ...prevState,
                        [inputName]: {
                            ...prevState[inputName],
                            value: inputvalue,
                            isValid: isValidInput
                        }
                    }
                })
                return 
            case 'message': 
                isValidInput = inputvalue.trim().length > 30
                setInputValues(prevState => {
                    return {
                        ...prevState,
                        [inputName]: {
                            ...prevState[inputName],
                            value: inputvalue,
                            isValid: isValidInput
                        }
                    }
                })
                return 
        }
    }

    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col sm={12} md={6}>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="text-white">Email address</Form.Label>
                            <Form.Control value={inputValues.email.value} type="email" name="email" onChange={onChangeHandler} />
                            {message.email && <small className="text-danger font-weight-bold">{message.email}</small>}
                        </Form.Group>


                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="text-white">Message (Minimum 30 characters)</Form.Label>
                            <Form.Control value={inputValues.message.value} as="textarea" rows={3} name="message" onChange={onChangeHandler} />
                            {message.message && <small className="text-danger font-weight-bold">{message.message}</small>}
                        </Form.Group>

                        {message.isSuccessMessage && <p className="text-danger font-weight-bold">{message.isSuccessMessage}</p>}

                        <Button className="d-flex align-items-end" variant="primary" type="submit" formNoValidate><span>Submit</span> {isLoading && <Spinner />}</Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    )
}
export default Contact