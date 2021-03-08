import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid footer-page-part">
            <footer className="page-footer font-small blue pt-4">

                 <div className="row content-footer">

                 <div className="col-md-4 mt-md-0 mt-3">
                 <h5 className="text-uppercase">GREECE BLOG</h5>
                 <p className="parag">This site represents Greece Blog.</p>
                 </div>

                    <hr className="clearfix w-100 d-md-none pb-3" />

                 <div className="col-md-4 mb-md-0 mb-3">
                 <h5 className="text-uppercase">Popular Categories</h5>

                <ul className="list-unstyled">
                    <li>
                    <a className="base-link" href="#!">Marketing</a>
                    </li>
                    <li>
                   <a className="base-link" href="#!">SEO Service</a>
                  </li>
                  <li>
                  <a className="base-link" href="#!">Digital Agency</a>
                  </li>
                  <li>
                   <a className="base-link" href="#!">Blogging</a>
              </li>
         </ul>

  </div>

  <div className="col-md-4 mb-md-0 mb-3">
    <h5 className="text-uppercase">Copyrights</h5>

    <ul className="list-unstyled">
      <li>
        <a className="base-link" href="#!">About us</a>
      </li>
      <li>
        <a className="base-link" href="#!">Advertising</a>
      </li>
      <li>
        <a className="base-link" href="#!">Write for us</a>
      </li>
      <li>
        <a className="base-link" href="#!">Help</a>
      </li>
    </ul>

  </div>

</div>

<div className="footer-copyright text-center py-3">© 2020 Copyright:
<a className="ftt" href="#11">Greece blog</a>
</div>

</footer>
      </div>
    )
  }
}
