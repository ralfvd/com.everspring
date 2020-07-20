'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringAD146 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('AD146 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('onoff', 'SWITCH_BINARY');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
	}

}

module.exports = EverspringAD146;
