import React from 'react';
import { connect } from 'react-redux';
import { viewLoans } from '../actions/registerActions';

const Loans = () => {
  const viewLoans = this.state.loans.map(loan => (
    <div key={loan.id}>
      <h3>{loan.title}</h3>
      <p>{loan.description}</p>
    </div>
  ));

  return ( 
    <div>
      <h1>View Loans</h1>
      {viewLoans}
    </div>
  );
}

export default Loans;