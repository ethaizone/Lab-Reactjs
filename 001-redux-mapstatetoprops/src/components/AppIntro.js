import React, { Component } from 'react';
import { connect } from 'react-redux'

class AppIntro extends Component {

  UNSAFE_componentWillReceiveProps(nextProps) {
    // This one don't trigger even same prop come to component! Good!
    console.log("AppIntro receive props");
  }

  render() {
    // This one don't rerender even same prop value come too. Nice!
    console.log("AppIntro rendered! " + this.props.intro);

    return (
      <p className="App-intro">
        { this.props.intro }
      </p>
    );
  }
}

const mapStateToProps = (state) => {
  // BEWARE!! This one trigger all time when store update!
  console.log("AppIntro mapStateToProps triggered!");
  return {
    intro: state.app.intro
  }
}

export default connect(mapStateToProps)(AppIntro);
