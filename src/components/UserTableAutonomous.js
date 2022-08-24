import React, { Component } from 'react';
import axios from 'axios';
import '../css/Table.css';

const USER_SERVICE_URL = 'https://jsonplaceholder.typicode.com/users';

function rowClassNameFormat(index) {
    return index % 2 === 0 ? 'Gold-Row' : 'Silver-Row';
}

class UserTableAutonomous extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            users: []
        };
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.users.map((user, index) => (
                        <tr key={index} className={rowClassNameFormat(index)}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
            </div>
        )
    }

    componentDidMount() {
        this.fetchUsers();
        this.timer = setInterval(() => this.fetchUsers(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    async fetchUsers() {
        try {
            this.setState({...this.state, isFetching: true});
            const response = await axios.get(USER_SERVICE_URL);
            this.setState({users: response.data, isFetching: false});
        } catch (e) {
            console.log(e);
            this.setState({...this.state, isFetching: false});
        }
    }
}

export default UserTableAutonomous;
