'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringHSP02 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('HSP02 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('alarm_motion', 'SENSOR_BINARY');
		this.registerCapability('measure_battery', 'BATTERY');
	}

}

module.exports = EverspringHSP02;
