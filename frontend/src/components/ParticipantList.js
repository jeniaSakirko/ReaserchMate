import React, {Component} from "react";
import {Table} from "reactstrap";
import NewParticipantModal from "./NewParticipantModel";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ParticipantList extends Component {
    render() {
        const participants = this.props.students;
        return (
            <Table dark>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {!participants || participants.length <= 0 ? (
                    <tr>
                        <td colSpan="6" align="center">
                            <b>Ops, no one here yet</b>
                        </td>
                    </tr>
                    ) : (
                    participants.map(participant => (
                    <tr key={participant.id}>
                    <td>{`${participant.first_name} ${participant.last_name}`}</td>
                    <td>{participant.user.email}</td>
                    <td>{participant.phone_number}</td>
                    <td align="center">
                    <NewParticipantModal
                    create={false}
                    student={participant}
                    resetState={this.props.resetState}
                    />
                    &nbsp;&nbsp;
                    <ConfirmRemovalModal
                    id={participant.id}
                    resetState={this.props.resetState}
                    />
                    </td>
                    </tr>
                    ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default ParticipantList;