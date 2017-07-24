import React from "react";
var Link = require("react-router").Link;

var ContactUs = React.createClass({

	getInitialState: function() {
		return{
			name: "",
			email: "",
			phone: "",
			question: ""
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
		this.props.updateSearch(this.state.name, this.state.email, this.state.phone, this.state.question);
	},

	render: function() {

		return (
			<div className="main-container">

				<div className="row">
					<div className="col-sm-12">

						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title">
									<strong>Contact Us</strong>
								</h1>
							</div>
						</div>
						<div className="panel-body">

							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<h4 className=""><strong>Your Name</strong></h4>
									<input 
										type="text"
										value={this.state.name}
										className="form-control"
										id="name"
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

									<h4><strong>Questions</strong></h4>
									<input
										textarea="text"
										value={this.state.question}
										className="form-control"
										id="question"
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

module.exports = ContactUs;

