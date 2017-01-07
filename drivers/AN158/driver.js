"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

// http://products.z-wavealliance.org/products/213

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: false,
	capabilities: {
		'onoff': {
			'command_class'				: 'COMMAND_CLASS_SWITCH_BINARY',
			'command_get'				: 'SWITCH_BINARY_GET',
			'command_set'				: 'SWITCH_BINARY_SET',
			'command_set_parser'		: function( value ){
				return {
					'Switch Value': value
				}
			},
			'command_report'			: 'SWITCH_BINARY_REPORT',
			'command_report_parser'		: function( report ){
				return report['Value'] === 'on/enable';
			}
		},
			'measure_power': {
			'command_class'				: 'COMMAND_CLASS_METER',
			'command_get'					: 'METER_GET',
			'command_get_cb'			: true,
			'command_get_parser'	: function(power) {
				return {
					'Properties1': {
						'Scale': 0
					}
				}
			},
			'command_report'				: 'METER_REPORT',
			'command_report_parser'	: function(report) {
				return report['Meter Value (Parsed)'];
			}
		}
	},
	    settings: {
				"meter_report_interval": {
                "index": 3,
                "size": 1,
                "parser": function( input ) {
                return new Buffer([ parseInt(input) ]);
                  }
              }
			}
})
