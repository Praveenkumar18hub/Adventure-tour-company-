
import React from 'react';
import '../Plan.css';
import '../Plann.css'

export default function Planner() {
  return (
    <div>
    <div class="scrollToTop"><i class="fas fa-chevron-up"></i></div>
    <div class="container">
      <nav>
        <div class="nav-container">
          <div class="brand"></div>
          <div class="responsive-toggle">
            <i class="fas fa-bars"></i>
          </div>
        </div>
   
      </nav>
      <section class="starter">
        <div class="content">
          <p class="subTitle">Best Destinations around the world</p>
          <h1 class="title">
            Travel, <span>enjoy</span> and live a new and full life
          </h1>
          <div class="description">
            "Let us step into the night and pursue that flighty temptress, adventure.”
          </div>
          <div class="last">
            <button>Find out more</button>
           
          </div>
        </div>
        <div class="image">
          <img src="../../images/traveller1.png" alt="" />
        </div>
      </section>
      <section class="services">
        <p class="subtitle">CATEGORY</p>
        <h2 class="title">We Offer Best Services</h2>
        <div class="cards">
          <div class="card">
            <div class="icon">
              <img src="../../images/service1.png" alt="" />
            </div>
            <h3 class="title">Calculated Weather</h3>
            <p>
              We'll arrange you the right place during the right season.
            </p>
          </div>

          <div class="card">
            <div class="icon">
              <img src="../../images/services3.png" alt="" />
            </div>
            <h3 class="title">Perfect Package</h3>
            <p>
              Providing you the best and teh bestest
            </p>
          </div>
          <div class="card">
            <div class="icon">
              <img src="../../images/services4.png" alt="" />
            </div>
            <h3 class="title">Good Maintainence</h3>
            <p>
             You will receive all the good needs for your trip
            </p>
          </div>
        </div>
      </section>
      <section class="destination">
        <p class="subtitle">Top Selling</p>
        <h2 class="title">Top Destinations</h2>
        <div class="cards">
          <div class="card">
            <div class="image">
              <img src="../../images/destination1.png" alt="" />
            </div>
            <div class="content">
              <h3>Rome, Italy</h3>
              
            </div>
            <div class="time">
              <i class="fas fa-location-arrow"></i>
              <h4>10 Days Trip</h4>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="../../images/destination2.jpg" alt="" />
            </div>
            <div class="content">
              <h3>Rome, Italy</h3>
              
            </div>
            <div class="time">
              <i class="fas fa-location-arrow"></i>
              <h4>10 Days Trip</h4>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="../../images/destination3.png" alt="" />
            </div>
            <div class="content">
              <h3>Rome, Italy</h3>
              
            </div>
            <div class="time">
              <i class="fas fa-location-arrow"></i>
              <h4>10 Days Trip</h4>
            </div>
          </div>
        </div>
      </section>
      <section class="next-trip">
        <div class="content">
          <p class="subtitle">Easy and Fast</p>
          <h2 class="title">Book your Next Trip in 3 Easy Steps</h2>
          <div class="steps">
            <div class="step">
              <div class="icon"><img src="../../images/nextsteps1.png" alt="" /></div>
              <div class="text">
                <h3 class="title">Choose Destination</h3>
                <p>
                  Ride to you destiny
                </p>
              </div>
            </div>
            <div class="step">
              <div class="icon"><img src="../../images/nextsteps2.png" alt="" /></div>
              <div class="text">
                <h3 class="title">Make Payment</h3>
                <p>
                  confirming your destiny
                </p>
              </div>
            </div>
            <div class="step">
              <div class="icon"><img src="../../images/nextsteps3.png" alt="" /></div>
              <div class="text">
                <h3 class="title">Reach Airport on Time</h3>
                <p>
                  As simple As that!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="trip">
          <img src="../../images/next trip.jpg" alt="" />
          <h3 class="title">Trip to Greece</h3>
          <p class="subTitle">14-29 June | by Kishan Sheth</p>
          <div class="icons">
            <div class="icon">
              <i class="fas fa-leaf"></i>
            </div>
            <div class="icon">
              <i class="fas fa-map"></i>
            </div>
            <div class="icon">
              <i class="fas fa-location-arrow"></i>
            </div>
          </div>
          <div class="like">
            <div class="count">
              <i class="fas fa-skiing-nordic"></i>
              <span>24 people going</span>
            </div>
            <i class="far fa-heart"></i>
          </div>
        </div>
      </section>
      <section class="testimonials">
        <div class="content">
          
          <h2 class="title">What People Say About Us.</h2>
        </div>
        <div class="review">
          <p>
           The service which they provide us was excellent, their package was extremely afforable</p>
          <h3 class="name">Kishan Sheth</h3>
          <h4 class="location">India,Earth</h4>
        </div>
      </section>
      <section class="brands">
        <img src="../../images/logo1.png" alt="" />
        <img src="../../images/logo2.png" alt="" />
        <img src="../../images/logo3.png" alt="" />
        <img src="../../images/logo4.png" alt="" />
      </section>
    
     
    </div>

  
    <script src="https://unpkg.com/scrollreveal"></script>
    </div>
  );
}




