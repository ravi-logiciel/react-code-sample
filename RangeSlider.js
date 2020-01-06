/**
 * Import Dependencies
 */
import React, { Component } from 'react';
import { func, arrayOf, bool, string, number } from 'prop-types';
import { SliderInput, FormLabel, Sublabel } from 'any-library';

/**
 * Range Slider allow the user to select a range
 */
class RangeSlider extends Component {
  /**
   * Handle Change in Slider
   *
   * @param {String} name
   * @param {Array} range [ Array of [min, max] ]
   */
  handleChange = (name, range) => {
    const { onChange } = this.props;
    onChange(range);
  };

  /**
   * Render View
   */
  render() {
    const { allowCross, className, label, min, max, unit, value } = this.props;

    return (
      <div className={className}>
        <FormLabel className="d-block mb-3">{label}</FormLabel>
        <SliderInput
          as="range"
          name="range-slider"
          value={value}
          allowCross={allowCross}
          onChange={this.handleChange}
          min={min}
          max={max}
        />
        <div className="my-2">
          <Sublabel className="pull-left">
            {value[0]} {unit}
          </Sublabel>
          <Sublabel className="mt-0 pull-right">
            {value[1]} {unit}
          </Sublabel>
        </div>
      </div>
    );
  }
}

/**
 * Define component PropTypes
 */
RangeSlider.propTypes = {
  allowCross: bool,
  className: string,
  label: string,
  max: number.isRequired,
  min: number.isRequired,
  onChange: func.isRequired,
  unit: string,
  value: arrayOf(number).isRequired,
};

/**
 * Default Props
 */
RangeSlider.defaultProps = {
  allowCross: false,
  className: '',
  label: 'Range',
  max: 1,
  min: 10,
  unit: '',
  value: [19, 55],
};

/**
 * Export the component
 */
export default RangeSlider;
