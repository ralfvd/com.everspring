"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

// SP103

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: false,
	capabilities: {

		'alarm_motion': {
			'command_class'				: 'COMMAND_CLASS_BASIC',
			'command_report'			: 'BASIC_SET',
			'command_report_parser'		: function( report ){
				Homey.log('[EVR DEBUG] alarm_motion report:', report);
				if (report.hasOwnProperty('Value (Raw)')) {
				// if (typeof report['Value (Raw)'][0] !== 'undefined') {
					return report['Value (Raw)'][0] > 0;
				}
			}
		},

//		'alarm_tamper': {
//			'command_class'				: 'COMMAND_CLASS_ALARM',
//			'command_get'				: 'ALARM_GET',
//			'command_get_parser'		: function(){
//				return {
//					'Alarm Type': 1
//				}
//			},
//			'command_report'			: 'ALARM_REPORT',
//			'command_report_parser'		: function( report ){
//				Homey.log('[EVR DEBUG] alarm_tamper report:', report);
//				return report['Sensor State'] === 'alarm';
//	Deze return report werkt ook nog niet; geeft geen tamper alarm door aan Homey
//			}
//		},

		'measure_battery': {
			'command_class'				: 'COMMAND_CLASS_BATTERY',
			'command_get'				: 'BATTERY_GET',
			'command_report'			: 'BATTERY_REPORT',
			'command_report_parser'		: function( report ) {
				if (report.hasOwnProperty('Battery Level (Raw)')) {
			//	if (typeof report['Battery Level (Raw)'][0] !== 'undefined') {
					Homey.log('[EVR DEBUG] measure_battery report:', report);
					if( report['Battery Level'] === "battery low warning" ) return 1;
					return report['Battery Level (Raw)'][0];
				}
			}
		}

	},
	settings: {
		"phase_on": {
			"index": 1,
			"size": 1
		}
	}
})
