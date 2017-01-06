### Everspring

This app adds support for Everspring devices.

Supported devices:

- Everspring AD147 ( Dimmer plug )
- Everspring AD142(2) ( Dimmer plug )
- Everspring AN158 ( On/Off plug with power metering)
- Everspring AN180 ( On/Off plug )
- Everspring AN181 ( On/Off plug with power metering)
- Everspring HSP02 ( PIR motion sensor )
- Everspring SP103 ( PIR motion sensor )
- Everspring ST814 ( Temperature & Humidity sensor )

Central discussion/support/request topic: https://forum.athom.com/discussion/2418/

### Donate

If you like the app, consider a donation to support development  
[![Paypal donate][pp-donate-image]][pp-donate-link]

### ToDo

- Add more Everspring devices -- support from community needed!

### Known bugs/limitations

- [Fixed in 0.1.5] Dimmer plugs: Setting dimmer values in a flow will result in light to be turned on 100 %. Non-app bug, should be fixed by Homey FW.
- AD1422 : Current state (on/off) isn't always correct when using dimming in device card; non-app bug, should be fixed by Homey FW
- AD1422 : Local button for on/off isn't sent back to Homey  
- SP103 : Tamper alarm doesn't work yet
- ST814 sensor doesn't always work as expected. Debugging ongoing to get it more reliable

### Unknown bugs

Yes ;-)

### Changelog


- V0.1.5 2016-01-07 : AD147 dimmer settings in flow now working
- V0.1.4 2016-12-14 : AD1422 configuration settings removed ( not available ), bugfixes
- V0.1.3 2016-12-13 : Add support for SP814 ; ( SP814 on loan provided by Robbshop )
- V0.1.2 2016-12-13 : Add support for SP103 ; ( SP103 on loan provided by Robbshop )
- V0.1.1 2016-12-12 : Add support for AN158 ; update Zwave driver ( AN158 on loan provided by Robbshop )
- V0.1.0 2016-10-21 : Add support for AD1422
- V0.0.3 2016-10-04 : Add support for various powerplugs (Alexander)
- V0.0.2 2016-08-12 : Add support for HSP02 motion sensor (Robin van Kekem)
- V0.0.1 2016-08-02 : First test release on Github

[pp-donate-link]: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ralf%40iae%2enl&lc=GB&item_name=homey%2deverspring&item_number=homey%2devohome&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted
[pp-donate-image]: https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif
