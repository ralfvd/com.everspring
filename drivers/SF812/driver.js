"use strict";

const path			= require('path');
const ZwaveDriver	= require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/22

module.exports = new ZwaveDriver( path.basename(__dirname), {
	debug: false,
	capabilities: {
		alarm_smoke: {
			getOnWakeUp: true,
			command_class: 'COMMAND_CLASS_SENSOR_ALARM',
			command_get: 'SENSOR_ALARM_GET',
			command_get_parser: () => ({
				'Sensor Type': 'Smoke Alarm',
			}),
			command_report: 'SENSOR_ALARM_REPORT',
			command_report_parser: report => {
				Homey.log(report);
				if (report['Sensor Type'] !== 'Smoke Alarm') return null;
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
		
	}
})
