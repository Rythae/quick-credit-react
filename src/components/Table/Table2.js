import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Email</th>
        <th>Tenor</th>
        <th>Amount</th>
        <th>Monthly Installment</th>
        <th>Repaid</th>
        <th>Status</th>
        <th>Interest</th>
        <th>Balance</th>
        <th>Requested At</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.tenor}</td>
            <td>{user.amount}</td>
            <td>{user.monthlyinstallment}</td>
            <td>{user.repaid}</td>
            <td>{user.status}</td>
            <td>{user.interest}</td>
            <td>{user.balance}</td>
            <td>{user.requestedat}</td>
            <td>{user.actions}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={10}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable