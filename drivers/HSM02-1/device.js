'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringHSM02 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('HSM02 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('alarm_contact', 'SENSOR_BINARY');
		this.registerCapability('measure_battery', 'BATTERY');
	}

}

module.exports = EverspringHSM02;
