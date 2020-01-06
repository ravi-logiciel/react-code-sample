/**
 * Import Dependencies
 */
import React from 'react';
import { string, func } from 'prop-types';
import { Button, Heading } from 'any-library';

/**
 * Define the component class
 */
class ConfirmationPopup extends React.Component {
  /**
   * Return Response > Yes
   */
  returnYes = () => {
    const { handleConfRes, conf_key } = this.props;
    handleConfRes(conf_key);
  };

  /**
   * Return Response > No
   */
  returnNo = () => {
    this.props.handleConfRes(false);
  };

  /**
   * Render View
   */
  render() {
    const { msg, yes_text, no_text } = this.props;

    return (
      <div className="px-4 pb-4">
        <Heading className="pb-4 text-center d-block" as="h2">
          {msg}
        </Heading>
        <div className="text-center py-3">
          <Button className="mx-2" onClick={this.returnYes}>
            {yes_text}
          </Button>
          <Button className="mx-2" theme="secondary" onClick={this.returnNo}>
            {no_text}
          </Button>
        </div>
      </div>
    );
  }
}

/**
 * Define component props
 */
ConfirmationPopup.propTypes = {
  conf_key: string,
  handleConfRes: func.isRequired,
  msg: string.isRequired,
  no_text: string,
  yes_text: string,
};

/**
 * Default component props
 */
ConfirmationPopup.defaultProps = {
  no_text: 'No',
  yes_text: 'Yes',
};

/**
 * Export the component
 */
export default ConfirmationPopup;
