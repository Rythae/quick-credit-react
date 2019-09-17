import React from 'react';

import './Table.css';

const Table = () => {
   return <div> 
   <div class="wrapper-admin">
    
    {/* <div class="left">
      <ul class="side-ul">
        <li><a class="side-link back-btn" onclick="history.back(-1)">&#8592; &nbsp;&nbsp;Go Back</a></li>
        <li><a href="loan-request.html" class="side-link">Request loan</a></li>
        <li><a href="loan-history.html" class="side-link active">View loan history</a></li>
      </ul>
    </div> */}

  	<div class="right">
  		<div class="main-content">
        <header id="header">
          <p>Loan History</p>
          <nav class="navi"> 
            <input type="checkbox" id="toggle" checked />   
            <label for="toggle" class="button"><span class="fa fa-navicon"></span></label>
            <section class="menu">
              <ul>
                <li><a class="side-link back-btn" onclick="history.back(-1)">&#8592; &nbsp;&nbsp;Go Back</a></li>
                <li><a href="loan-request.html" class="side-link">Request loan</a></li>
                <li><a href="loan-history.html" class="side-link">View loan history</a></li>
              </ul>
            </section>
          </nav>
        </header>
  			<div class="wrapper">
          <table class='record-list'>
            <thead>
              <tr>
                <td class='tb-col-1'>Email</td>
                <td class='tb-col-2'>Tenor</td>
                <td class='tb-col-3'>Amount</td>
                <td class='tb-col-4'>Monthly Installment</td>
                <td class='tb-col-5'>Repaid</td>
                <td class='tb-col-6'>Status</td>
                <td class='tb-col-7'>Interest</td>
                <td class='tb-col-8'>Balance</td>
                <td class='tb-col-9'>Requested At</td>
                <td class='tb-col-10'>Actions</td>
              </tr>
            </thead>
            <div class="body-container">
              <tbody>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
                <tr>
                  <td class='tb-col-1'>quickuser1@quick-cred.tes</td>
                  <td class='tb-col-2'>2</td>
                  <td class='tb-col-3'>10000</td>
                  <td class='tb-col-4'>5500</td>
                  <td class='tb-col-5'>Yes</td>
                  <td class='tb-col-6'>Approved</td>
                  <td class='tb-col-7'>500</td>
                  <td class='tb-col-8'>0</td>
                  <td class='tb-col-9'>May 1, 2019</td>
                  <td class='tb-col-10'>
                    <a href="single-application.html" class="btn">View</a>
                  </td>
                </tr>
              </tbody>
            </div>
          </table>
        </div>
  		</div>
  	</div>
  </div>
</div>

}

export default Table;