import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  updateAppName,
  updateAppIntro,
} from '../actions'
import { connect } from 'react-redux'

const field_name  = "name"
const field_intro = "intro"

class SetTextBtn extends Component {

  render() {
    return (
      <button
        onClick={(e) => {
          switch (this.props.field) {
            case field_name:
              this.props.updateAppName(this.props.text)
              break;

            case field_intro:
              this.props.updateAppIntro(this.props.text)
              break;

            default:
              break;
          }

        }}
      >
        Edit "{this.props.field}" with "{this.props.text}"
      </button>
    );
  }
}

SetTextBtn.propTypes = {
  field: PropTypes.oneOf([field_name, field_intro]).isRequired,
  text: PropTypes.string.isRequired,
};

export default connect(null, {
  updateAppName,
  updateAppIntro
})(SetTextBtn);
