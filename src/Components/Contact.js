import React, { Component, useRef } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from 'emailjs-com';
import { timers } from "jquery";

class Contact extends Component {
  
  render() {
    if (!this.props.data) return null;


    const name = this.props.data.name;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4cx6a2l', 'template_9prrc8t', e.target, 'user_fLFRsBSeCeAYs4WNN8kio')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form onSubmit={sendEmail} method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="name"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="name"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="subject"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="subject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="message"
                    ></textarea>
                  </div>

                  <div>
                    <input className="submit" type="submit" value="Submit"></input>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" style={{"width":"10%"}}/>
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
