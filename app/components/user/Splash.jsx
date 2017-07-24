import React from "react";
var Link = require("react-router").Link;
import '../../splashStyle.css';

var ContactUs = require("./forms/ContactUs")

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
          <div className="jumbotron text-center">
  <h1>Fido and Tiger Pet Sitting</h1> 
  <p>Personal Pet Care, with a Professional Touch</p> 
</div>
<div id="about" className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>About Us</h2><br/>
      <h4>Fido and Tiger is a personalized pet care service provider.  From walks, to feeding to pet delivery services, we are here to help you and your pet.</h4><br/>
      <p>Customize your service!  If you want playtimes, walks (long or short), medicine dispensed, or your pets fed, we are here for you.  Our professional staff is reliable, friendly, and trustworthy.  We know your pet means the world to you and we want to assist you in giving them the best care possible. Just let us know what you need and times that you desire and we will set up a package for you! </p>
      <br/><button className="btn btn-default btn-lg" onClick={this.handleChange}>  Contact us!</button>
    </div> 
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-home logo"></span>
    </div>
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-globe logo slideanim"></span>
    </div>
    <div className="col-sm-8">
      <h2>Our Values</h2><br/>
      <h4><strong>MISSION:</strong> Our mission is to help you take the best care of your pet.  As you are working, out of town, away from home, we can step in and give your pet the attention and care they are accustom to.</h4><br/>
      <p><strong>VISION:</strong> Our vision is simple.  We respect you and your pet.  We are pet people too!  We will provide quality care, compassionate pet sitting and dog walking services for your pets in the comfort of their own home and neighborhood.</p>
    </div>
  </div>
</div>
<div id="services" className="container-fluid text-center">
  <h2>SERVICES</h2>
  <h4>What we offer</h4>
  <br/>
  <div className="row slideanim">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-off logo-small"></span>
      <h4>DOG WALKING</h4>
      <p>You choose the amount of time your dog is walked.</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-heart logo-small"></span>
      <h4>IN HOME CARE</h4>
      <p>Potty Breaks, feedings, playtime.</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock logo-small"></span>
      <h4>PET ERRANDS</h4>
      <p>Driving your pet to the vet, pet supplies dropped off at your home, pet taken to grooming appointments</p>
    </div>
  </div>
  <br/><br/>
 </div>
<div id="portfolio" className="container-fluid text-center bg-grey">
  <h2>MEET OUR TEAM</h2><br/>
  <div className="row text-center slideanim">
    <div className="col-sm-3">
      <div className="thumbnail">
        <img src="images/boy.png" alt="Thomas" width="400" height="300"></img>
        <p><strong>Thomas Kearney</strong></p>
         </div>
    </div>
    <div className="col-sm-3">
      <div className="thumbnail">
        <img src="images/boy.png" alt="Elliott" width="400" height="300"></img>
        <p><strong>Elliott Chalmers </strong></p>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="thumbnail">
        <img src="images/boy.png" alt="Alex " width="400" height="300"></img>
        <p><strong>Alex Lovell</strong></p>
      </div>
    </div>
    <div className="col-sm-3">
      <div className="thumbnail">
        <img src="images/girl.png" alt="Terri " width="400" height="300"></img>
        <p><strong>Terri Byers</strong></p>
      </div>
    </div>
  </div><br/>
  
  <h2>What our customers say</h2>
  <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <h4>"This company is the best. I am so happy with their services!"<br/><span>Happy Pet Owner, Chapel Hill, NC </span></h4>
      </div>
      <div className="item">
        <h4>"My Fiona is so much happier now that she gets regular walks."<br/><span>Fiona's Mommy, Raleigh, NC</span></h4>
      </div>
      <div className="item">
        <h4>"The staff is so reliable, dependable and always so happy to see my pets"<br/><span>Pet Lover, Durham, NC</span></h4>
      </div>
    </div>

    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>


<div id="contact" className="container-fluid bg-grey">
  <h2 className="text-center">CONTACT</h2>
  <div className="row">
    <div className="col-sm-5">
      <p>Contact us and we'll get back to you within 24 hours.</p>
      <p><span className="glyphicon glyphicon-map-marker"></span> Chapel Hill, NC</p>
      <p><span className="glyphicon glyphicon-phone"></span> +00 1515151515</p>
      <p><span className="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
    </div>
    <div className="col-sm-7 slideanim">
      <div className="row">
        <div className="col-sm-6 form-group">
{/*          <input className="form-control" id="name" name="name" placeholder="Name" type="text" required>
*/}        </div>
        <div className="col-sm-6 form-group">
{/*          <input className="form-control" id="email" name="email" placeholder="Email" type="email" required>
*/}        </div>
      </div>
      <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
      <div className="row">
        <div className="col-sm-12 form-group">
          <button className="btn btn-default pull-right" type="submit">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>

        );
    }
};

export default Splash;