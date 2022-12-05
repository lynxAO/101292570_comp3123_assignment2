import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from 'react-bootstrap'
import axios from 'axios';

export default class Update extends Component {
    render() {
        return (
            <div className="mx-5 mb-4">
                <div>
                    <h1 class="display-4 text-center my-5">Update Employee</h1>
                </div>
                <Form onSubmit={this.onSubmit}>
                <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="First Name"/>
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Last Name"
                            //value={this.state.lastName}
                            //onChange={this.onChangeLastName} 
                            />
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter Email"
                            //value={this.state.emailId}
                            //onChange={this.onChangeEmailId} 
                            />
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    </Form.Group>
                    <Button variant="info" type="submit" style={{marginRight:12}}>
                        Save
                    </Button>
                    <Link to="/">
                        <Button variant="danger">
                            Cancel
                        </Button>
                    </Link>
                </Form>
            </div>
        )
    }
}