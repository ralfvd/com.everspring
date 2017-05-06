"use strict";

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// http://www.everspring.com/SM103.aspx

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: false,
	capabilities: {

		alarm_contact: [
			{	getOnWakeUp: true,
				command_class: 'COMMAND_CLASS_SENSOR_BINARY',
				command_get: 'SENSOR_BINARY_GET',
				command_report: 'SENSOR_BINARY_REPORT',
				command_report_parser: report => report['Sensor Value'] === 'detected an event',
			},
			{
				command_class: 'COMMAND_CLASS_BASIC',
				command_report: 'BASIC_SET',
				command_report_parser: report => report.Value === 99,
			},
		],

		measure_battery: {
			getOnWakeUp: true,
			command_class: 'COMMAND_CLASS_BATTERY',
			command_get: 'BATTERY_GET',
			command_report: 'BATTERY_REPORT',
			command_report_parser: report => {
				if (report['Battery Level'] === 'battery low warning') return 1;
			Homey.log(report);
				if (report.hasOwnProperty('Battery Level (Raw)')) { return report['Battery Level (Raw)'][0]; }

				return null;
			},
		},
		},
	settings: {
		"basic_set_level": {
			"index": 1,
			"size": 1
		},
		"off_delay": {
			"index": 2,
			"size": 1
		}
	}
});
