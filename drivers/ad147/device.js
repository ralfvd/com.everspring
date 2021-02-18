'use strict';

//SDK2
//const { ZwaveDevice } = require('homey-meshdriver');

//SDK3
const { ZwaveDevice } = require('homey-zwavedriver');


class EverspringAD147 extends ZwaveDevice {

	async onNodeInit() {

		//this.log('AD147 has been inited');

		// enable debugging
		this.enableDebug();
		// print the node's info to the console
		this.printNode();

		this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
		this.registerCapability('dim', 'SWITCH_MULTILEVEL',
		{
      get: 'SWITCH_MULTILEVEL_GET',
      report: 'SWITCH_MULTILEVEL_REPORT',
      reportParser: report => {
				//console.log ('ad147 debyh 1');
        if (report && report.hasOwnProperty('Value (Raw)')) {
          return report['Value (Raw)'][0] > 0;
					console.log('ad147 debug: ' + report['Value (Raw)'])
        }
        return null;
      },
			//reportParserOverride: true
    });


//		this.registerReportListener(
//      'SWITCH_MULTILEVEL',
//      'SWITCH_MULTILEVEL_REPORT',
//      (rawReport, parsedReport) => {
//        console.log('ralf -- registerReportListener', rawReport.Value);
//      },
//    );
	}

}

module.exports = EverspringAD147;
