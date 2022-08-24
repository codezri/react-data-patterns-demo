import React from 'react';
import '../css/Table.css';

function rowClassNameFormat(index) {
    return index % 2 === 0 ? 'Gold-Row' : 'Silver-Row';
}

const SimpleUserTable = (props) => {
    return (
        <div>
            <table>
                <tbody>
                {props.data.map((user, index) => (
                   <tr key={user.id} className={rowClassNameFormat(index)}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                   </tr>
                ))}
                </tbody>
            </table>
            <p>{props.isFetching ? 'Fetching users...' : ''}</p>
        </div>
    )
};

export default SimpleUserTable;
