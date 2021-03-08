import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
        <div className="container-fluid contactus">
        <div className="forms">
      
      <form className="text-center border border-light p-5" action="contactform.php" method="post">
          <p className="h4-cc mb-4">Contact us</p>
      
        <div className="form-group">
          <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />
        </div>

        <div className="form-group">
          <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" / >
        </div>

          <div className="form-group">
              <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
          </div>
      
          <button className="btn btn-info btn-block" type="submit">Send</button>
      
      </form>
      </div>
      </div>
    )
  }
}
