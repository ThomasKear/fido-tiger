// Include React
var React = require("react");




// Creating the Main component
var Main = React.createClass({

    render: function() {
        return (
            <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Address Finder!</h2>
            <p className="text-center">
              <em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em>
            </p>
          </div>

          <div className="col-md-6">

            <Form setTerm={this.setTerm} />

          </div>

          <div className="col-md-6">

            <Results address={this.state.results} />

          </div>

        </div>

        <div className="row">

          <History history={this.state.history} />

        </div>

      </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;