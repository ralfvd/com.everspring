'use strict';

const Homey = require('homey');
const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringAD1422 extends ZwaveDevice {

	async onMeshInit() {

		//this.log('AD1422 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
	}

}

module.exports = EverspringAD1422;
