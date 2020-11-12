'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringSP816 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('SP816 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('alarm_motion', 'NOTIFICATION');
		this.registerCapability('measure_battery', 'BATTERY');
	}

}

module.exports = EverspringSP816;
