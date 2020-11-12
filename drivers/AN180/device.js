'use strict';

//SDK2
//const { ZwaveDevice } = require('homey-meshdriver');

//SDK3
const { ZwaveDevice } = require('homey-zwavedriver');


class EverspringAN180 extends ZwaveDevice {

	async onNodeInit() {
//async onMeshInit() {
		//this.log('AN180 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('onoff', 'SWITCH_BINARY');
	}

}

module.exports = EverspringAN180;
