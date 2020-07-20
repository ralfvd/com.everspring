'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringAN158 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('AN158 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('onoff', 'SWITCH_BINARY');
		this.registerCapability('measure_power', 'METER');
	}

}

module.exports = EverspringAN158;
