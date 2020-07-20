'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringST812 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('ST812 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('measure_battery', 'BATTERY');
		this.registerCapability('alarm_water', 'SENSOR_ALARM');
	}

}

module.exports = EverspringST812;
