"use strict";

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// http://www.everspring.com/ST812.aspx

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: true,
	capabilities: {

    alarm_water: {
			getOnWakeUp: true,
			command_class: 'COMMAND_CLASS_SENSOR_ALARM',
			command_get: 'SENSOR_ALARM_GET',
			command_get_parser: () => ({
				'Sensor Type': 'Water Leak Alarm',
			}),
			command_report: 'SENSOR_ALARM_REPORT',
			command_report_parser: report => {
				Homey.log(report);
				if (report['Sensor Type'] !== 'Water Leak Alarm') return null;
				return report['Sensor State'] === 'alarm';
			},
		},

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
		}
	}
});
