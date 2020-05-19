'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class EverspringAD146 extends ZwaveDevice {

	async onMeshInit() {

		//this.log('AD147 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('onoff', 'SWITCH_BINARY');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
	}

}

module.exports = EverspringAD146;
