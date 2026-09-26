import React, { useEffect, useState } from "react"

function ApiTable() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((data) => setUsers(data))

    }, [])
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Users Comments</h2>

            <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>userId</th>
                        <th>ID</th>
                        <th>title</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => {
                        return (
                            <tr  key={user.id}>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ApiTable