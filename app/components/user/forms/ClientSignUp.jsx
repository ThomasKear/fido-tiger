import React from "react";

var Link = require("react-router").Link;

var ClientSignUp = React.createClass({

	getInitialState: function () {
		return{
			client_name: "",
			street_address: "",
			city: "",
			state: "",
			zip: "",
			phone: "",
			email: "",
		};
	},

	handleChange: function(event) {
		console.log("TEXT CHANGED");

		var newState = {};	
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},

	handleSubmit: function(event) {
		event.preventDefault();
		console.log("CLICKED");
		this.props.updateSearch(
			this.state.client_name,
			this.state.street_address,
			this.state.city,
			this.state.zip,
			this.state.phone,
			this.state.email);
	},

	render: function() {

		return(
			<div className="main-container">

				<div className="row">
					<div className="col-sm-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title">
										<strong>Sign Up</strong>
								</h1>		
							</div>
						</div>
						<div className="panel-body">

							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<h4 className=""><strong>Your Name</strong></h4>
									<input
										type="text"
										value={this.state.client_name}
										className="form-control"
										id="client_name"
										onChange={this.handleChange}
										required
									/>

									<h4><strong>Street Address</strong></h4>
									<input
										type="text"
										value={this.state.street_address}
										className="form-control"
										id="street_address"
										onChange={this.handleChange}
										required
									/>		

									<h4><strong>City</strong></h4>
									<input
										type="text"
										value={this.state.city}
										className="form-control"
										id="city"
										onChange={this.handleChange}
										required
									/>
									
									<h4><strong>State</strong></h4>
									<input
										type="text"
										value={this.state.state}
										className="form-control"
										id="state"
										onChange={this.handleChange}
										required		
									/>
									
									<h4><strong>Zip Code</strong></h4>
									<input
										type="number"
										pattern="[0-9]*"
										maxlength="5"
										value={this.state.zip}	
										className="form-control"
										id="zip"
										onChange={this.handleChange}
										required
									/>
									
									<h4><strong>Phone Number</strong></h4>
									<input
										type="tel"
										pattern="[\(]\d{3}[\)]\d{3}[\-]\d{4}"
										value={this.state.phone}
										className="form-control"
										id="phone"
										onChange={this.handleChange}
										required
									/>

									<h4><strong>Email</strong></h4>
									<input
										type="email"
										value={this.state.email}
										className="form-control"
										id="email"
										onChange={this.handleChange}
										required
									/>		

								</div>

								<div className="pull-right">
									<button
											type="submit"
											className="btn btn-info"
									>
											<h4>Submit</h4>
									</button>		
								</div>	
							</form>

						</div>
					</div>
				</div>

			</div>
			);
	}
});

module.exports = ClientSignUp;