import React from 'react';
import Select from '../../../src/index';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';

var ValuesAsBooleansField = createClass({
	displayName: 'ValuesAsBooleansField',
	propTypes: {
		label: PropTypes.string
	},
	getInitialState () {
		return {
			options: [
				{ value: true, label: 'Yes' },
				{ value: false, label: 'No' }
			],
			value: null
		};
	},
	onChange(value) {
		this.setState({ value });
		console.log('Boolean Select value changed to', value);
	},
	render () {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label} <a href="https://github.com/JedWatson/react-select/tree/master/examples/src/components/BooleanSelect.js">(Source)</a></h3>
				<Select
					onChange={this.onChange}
					options={this.state.options}
					simpleValue
					value={this.state.value}
					/>
				<div className="hint">This example uses simple boolean values</div>
			</div>
		);
	}
});

module.exports = ValuesAsBooleansField;
