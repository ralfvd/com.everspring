"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: true,
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
		}
	},
	    settings: {
				"remember_state": {
                "index": 3,
                "size": 1,
                "parser": function( input ) {
                return new Buffer([ parseInt(input) ]);
                  }
                },
				"switching_type": {
							  "index": 4,
								"size": 1,
								"parser": function( input ) {
                return new Buffer([ parseInt(input) ]);
                  }
				}
   }
})
