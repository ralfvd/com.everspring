"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: false,
    capabilities: {
		'onoff': {
		  'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
		  'command_get': 'SWITCH_MULTILEVEL_GET',
		  'command_set': 'SWITCH_MULTILEVEL_SET',
		  'command_set_parser': function(value) {
			return {
				'Value': (value > 0) ? 'on/enable' : 'off/disable',
			  "Dimming Duration": 1
			}
		  },
		  'command_report': 'SWITCH_MULTILEVEL_REPORT',
		  'command_report_parser': function(report) {
			return report['Value (Raw)'][0] > 0;
		  }
		},
		'dim': {
		  'command_class': 'COMMAND_CLASS_SWITCH_MULTILEVEL',
		  'command_get': 'SWITCH_MULTILEVEL_GET',
		  'command_set': 'SWITCH_MULTILEVEL_SET',
		  'command_set_parser':	function(value) {
			return {
			  "Value": Math.min(value * 100, 99),
			  "Dimming Duration": 1
			}
		  },
		  'command_report': 'SWITCH_MULTILEVEL_REPORT',
		  'command_report_parser': function(report) {
			let value = report['Value (Raw)'][0];
			return value / 100;
		  }
		}
	  },

	  settings: {

		  "basic_set_value": {
			  "index": 1,
			  "size": 2,
			  "parser": function( input ) {
				  return new Buffer([ parseInt(input) ]);
			  }
		  },

		  "meter_report_interval": {
			  "index": 2,
			  "size": 1,
			  "parser": function( input ) {
				  return new Buffer([ parseInt(input) ]);
			  }
		  },
		  "remember_state": {
			  "index": 3,
			  "size": 1,
			  "parser": function( input ) {
				  return new Buffer([ parseInt(input) ]);
			  }
		  },
		  "switch_type": {
			  "index": 4,
			  "size": 1,
			  "parser": function( input ) {
				  return new Buffer([ parseInt(input) ]);
			  }
		  },
		  "dimming_onoff": {
			  "index": 5,
			  "size": 1,
			  "parser": function( input ) {
				  return new Buffer([ parseInt(input) ]);
			  }
		  }
	  }
  })
