'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringSM103 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('SM103 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('alarm_contact', 'SENSOR_BINARY');
		this.registerCapability('measure_battery', 'BATTERY');
	}

}

module.exports = EverspringSM103;
