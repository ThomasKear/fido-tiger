// Include React
var React = require("react");




// Creating the Main component
var Main = React.createClass({

    render: function() {
        return (
            <div>
            <h1>Hello</h1>
            <a href="/auth/google">Sign In with Google</a>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;