/**
 * Import Dependencies
 */
import React, { Component } from 'react';
import { func, shape, string, bool } from 'prop-types';

import {
  InputGroup,
  InputGroupAppend,
  InputGroupAddon,
  TextInput,
  Icon,
  Calendar,
  ClickOutside,
} from 'any-library';

import { momentNow } from '#utils/helper';

/**
 * Range Slider allow the user to select a range
 */
class CalendarInput extends Component {
  /**
   * State
   */
  state = {
    is_visible: false,
  };

  /**
   * Handle Date Change
   *
   * @param {Object} date
   */
  onDateChange = date => {
    const { onChange, name } = this.props;

    this.setState({ is_visible: false });
    onChange(name, date.startOf('day'));
  };

  /**
   * Expand Calendar
   */
  expand = () => {
    this.setState({ is_visible: true });
  };

  /**
   * Collapse Calendar
   */
  collapse = () => {
    this.setState({ is_visible: false });
  };

  /**
   * Render View
   */
  render() {
    const {
      name,
      value,
      format,
      placeholder,
      error,
      calendarClassName,
    } = this.props;

    const { is_visible } = this.state;

    return (
      <ClickOutside onClickOutside={this.collapse}>
        <InputGroup
          onClick={this.expand}
          className="cursor-pointer position-relative"
        >
          <TextInput
            className="cursor-pointer"
            name={name}
            value={value.format(format)}
            placeholder={placeholder}
            onChange={() => {}}
            error={error && false}
            autoComplete="off"
          />
          <InputGroupAppend>
            <InputGroupAddon>
              <Icon icon="calendar" className="text-blue" />
            </InputGroupAddon>
          </InputGroupAppend>
        </InputGroup>

        {is_visible && (
          <div className={`position-absolute zIndex-2 ${calendarClassName}`}>
            <Calendar
              initialDate={value}
              date={value}
              onDateChange={this.onDateChange}
              focused
              initialVisibleMonth={() => value}
            />
          </div>
        )}
      </ClickOutside>
    );
  }
}

/**
 * Define component PropTypes
 */
CalendarInput.propTypes = {
  calendarClassName: string,
  error: bool,
  format: string,
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: shape({}).isRequired,
};

/**
 * Default Props
 */
CalendarInput.defaultProps = {
  calendarClassName: '',
  error: false,
  format: 'MMM D, YYYY',
  placeholder: 'Select a date...',
  value: momentNow().startOf('day'),
};

/**
 * Export the component
 */
export default CalendarInput;
