import React, { Component } from 'react';

class HomeBody extends Component {

  render() {
    return (
      <div>

        <div className="container">
          <section class="welcome" id="welcome">
            <div class="welcome__main">
              <div class="welcome__text">
                <h2>We understand our community needs</h2>
                <p>Our services are designed to help you with all aspects of your online business from designing to implementation, from deployment to production. </p>
              </div>
              <img src="/images/welcome.jpg" class="welcome__img" alt="Code It" />

            </div>
          </section>

          {/* here */}

          <section class="process" id="contract">
            <h2 class="decorated"><span class="process__header">Join our community</span></h2>
            <div class="process__container">
              <div class="process__text">
                <h2>Get or provide support</h2>
                <p>Ask questions and get respond from DACA recipients.</p>
              </div>
              <img src="./images/process.png" alt="Call Us" />
            </div>
            <div class="process__container process__reverse">
              <div class="process__text process__reverse-text">
                <h2>Share your story with other dreamers.</h2>
                <p>Share your experiences and celebrate with others</p>
              </div>
              <img src="./images/process.png" alt="Meet Up" />
            </div>
            <div class="process__container">
              <div class="process__text">
                <h2>Discover how dreamers move forward</h2>
                <p>If they can do it, you can! See how dreamers are moving forward.</p>
                <img src="./images/getstarted.png" alt="Design It" />
              </div>
              <img src="./images/process.png" alt="Design It" />
            </div>


          </section>
          {/* here */}

        </div>
      </div>
    );
  }
}
export default HomeBody;
