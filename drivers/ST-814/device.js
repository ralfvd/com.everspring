'use strict';

const { ZwaveDevice } = require('homey-meshdriver');

class EverspringST814 extends ZwaveDevice {

	async onMeshInit() {

		//this.log('AN180 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('measure_battery', 'BATTERY');
		this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
		this.registerCapability('measure_humidity', 'SENSOR_MULTILEVEL');
	}

}

module.exports = EverspringST814;
