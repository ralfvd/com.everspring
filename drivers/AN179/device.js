'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringAN179 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('AN179 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('onoff', 'SWITCH_BINARY');
	}

}

module.exports = EverspringAN79;
