"use strict";

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/601

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: false,
	capabilities: {

		alarm_motion: {
			command_class : 'COMMAND_CLASS_SENSOR_BINARY',
			command_get : 'SENSOR_BINARY_GET',
			command_report : 'SENSOR_BINARY_REPORT',
			command_report_parser : function( report ){
				return report['Sensor Value'] === 'detected an event';
			}
		},

		alarm_tamper: {
			command_class : 'COMMAND_CLASS_ALARM',
			command_get : 'ALARM_GET',
			command_get_parser : function(){
				return {
					'Alarm Type': 1
				};
			},
			command_report : 'ALARM_REPORT',
			command_report_parser : function( report ){
				if (report['Alarm Type'] === 1 && report['Alarm Level'] === 17) {
					return true;
				}
				if (report['Alarm Type'] === 1 && report['Alarm Level'] === 0) {
					return false;
				}

			},
			getOnWakeUp: true
		},

		measure_battery: {
			command_class: 'COMMAND_CLASS_BATTERY',
			command_get: 'BATTERY_GET',
			command_report: 'BATTERY_REPORT',
			command_report_parser: function( report ) {
				if (report['Battery_Level'] === 'battery low warning') {
					return 1;
				}
				if (report.hasOwnProperty('Battery Level (Raw)')) {
					return report['Battery Level (Raw)'][0];
				}
			},
			getOnWakeUp: true
		}
	},
	settings: {
		"basic_set_level": {
			"index": 1,
			"size": 1
		},
		"enable_disable_sensor_detection": {
			"index": 2,
			"size": 1
		},
		"sensitivity_level": {
			"index": 3,
			"size": 1
		},
		"re-trigger_interval": {
			"index": 4,
			"size": 2
		},
		"lux_level": {
			"index": 5,
			"size": 1
		},
		"on_off_duration": {
			"index": 6,
			"size": 2
		}
	}
});