'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class EverspringSP103 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('SP103 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

	//	this.registerCapability('alarm_motion', 'BASIC');


		this.registerCapability('alarm_motion', 'BASIC', {
      get: 'BASIC_GET',
      report: 'BASIC_REPORT',
      reportParser: report => {
        if (report && report.hasOwnProperty('Value')) {
          return report['Value'] > 0;
        }
        return null;
      },
    });
		
		this.registerCapability('measure_battery', 'BATTERY');
	}

}

module.exports = EverspringSP103;
