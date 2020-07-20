'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringSF812 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('SF812 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('alarm_smoke', 'SENSOR_ALARM');
		this.registerCapability('measure_battery', 'BATTERY');
	}

}

module.exports = EverspringSP816;
