'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringSP814 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('SP814 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('alarm_motion', 'SENSOR_BINARY');
	}

}

module.exports = EverspringSP814;
