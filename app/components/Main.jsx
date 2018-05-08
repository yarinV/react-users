var React = require('react');
var { Link } = require('react-router');

var Main = React.createClass({
  render() {
    return (<div>
      <h2>Main Component</h2>
      <Link to="users">Users</Link>
    </div>);
  }
})
module.exports = Main;