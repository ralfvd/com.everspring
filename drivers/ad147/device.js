'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringAD147 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('AD147 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
	}

}

module.exports = EverspringAD147;
