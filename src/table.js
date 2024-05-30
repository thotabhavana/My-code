import React, { useEffect, useState } from "react";
import { Avatar, Table, TextInput } from "@mantine/core";
import axios from 'axios';

const UserTable = () => {
    const [users, setUsers] = useState ([]);
     const [searchTerm, setSearchTerm] = useState('');
     
     useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/users')
          .then(response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

     const filteredUsers  = users.filter((users) => 
        `${users.name.fristname} ${users.name.lastname}`.toLocaleLowerCase().includes(searchTerm.toLowerCase())
);  
  return (
    <div>
        <TextInput
            placeholder ="Search users..."
            value= {searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
            style={{ marginTop: '1rem'}}
            />

            <Table striped highlightOnHover  style={{ marginTop: '1rem'}}>
                
                <th>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roal</th>
                    <th>Avatar</th>
                    </tr>
                </th>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Avatar src={user.avatar} alt={user.name}  />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
    </div>
);
};

export default UserTable;