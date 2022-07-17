import React from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

import axios from "axios";

import {PARTICIPANT_API_URL} from "../constants";

class NewParticipantForm extends React.Component {
    state = {
        id: 0,
        name: "",
        email: "",
        document: "",
        phone: ""
    };

    componentDidMount() {
        if (this.props.participant) {
            const {id, name, document, email, phone} = this.props.participant;
            this.setState({id, name, document, email, phone});
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    createParticipant = e => {
        e.preventDefault();
        axios.post(PARTICIPANT_API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editParticipant = e => {
        e.preventDefault();
        axios.put(PARTICIPANT_API_URL + this.state.id, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.props.participant ? this.editParticipant : this.createParticipant}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.email)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="document">Document:</Label>
                    <Input
                        type="text"
                        name="document"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.document)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone:</Label>
                    <Input
                        type="text"
                        name="phone"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.phone)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewParticipantForm;