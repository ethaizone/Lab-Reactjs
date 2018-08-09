import React, { Component } from 'react';
import { connect } from 'react-redux'

class AppTitle extends Component {
  render() {
    console.log("AppTitle rendered! " + this.props.name);

    return (
      <h1 className="App-title">
        { this.props.name }
      </h1>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.app.name
})

export default connect(mapStateToProps)(AppTitle);
