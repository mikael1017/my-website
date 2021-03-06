import React from "react";
import emailjs from 'emailjs-com';
import "./contact.css";




export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('jaewoo-gmail', 'Jaewoo Email', e.target, 'user_Z1dlJwMHA82FlM5AcegPo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        alert("Email was successfully sent to Jaewoo!");
    }

    return(
      <div>
          <div id="contact" className="container">
              Send me an Email!
          <form onSubmit={sendEmail}>
                  <div className="row pt-5 mx-auto">
                      <div className="col-8 form-group mx-auto">
                          <input type="text" className="form-control" placeholder="Name" name="name"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                      </div>
                      <div className="col-8 pt-3 mx-auto">
                          <input type="submit" className="btn btn-info" value="Send Email"></input>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  );
}
