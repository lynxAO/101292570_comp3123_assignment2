import { Link } from "react-router-dom";
import React, { Component } from 'react';
import axios from 'axios'
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

const Employee = props => (
    <tr>
        <td>{props.employee.firstName}</td>
        <td>{props.employee.lastName}</td>
        <td>{props.employee.emailId}</td>
        <td class="mx-3">
            <Link to={"/update-employee/"+props.employee._id}>
                <Button variant="warning" style={{marginRight:12}}>Update</Button>
            </Link>
            <Link to={"/view-employee/"+props.employee._id}>
                <Button variant="info" style={{marginRight:12}}>View</Button>
            </Link>
            <Link to="/delete-employee/">
                <Button variant="danger">Delete</Button>
            </Link>
        </td>
    </tr>
)

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        axios.get('https://638d37c2aefc455fb29e97b5.mockapi.io/api/v1/employee')
            .then(response => {
                this.setState({employees: response.data})
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    employeeList() {
        return this.state.employees.map(function(currentEmployee, i) {
            return <Employee employee={currentEmployee} key={i} />;
        })
    }

    render() {
        return (
                <div>
                    <div>
                        <h1 class="display-4 text-center my-5">Employees List</h1>
                    </div>
                    <div class="mx-5 mb-4">
                        <Link to="/add-employee">
                            <Button variant="primary">Add Employee</Button>
                        </Link>
                    </div>
                    <div>
                        <div class="mx-5">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Employee First Name</th>
                                        <th scope="col">Employee Last Name</th>
                                        <th scope="col">Employee Email ID</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { this.employeeList() }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        )
    }
}