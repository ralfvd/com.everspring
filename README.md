### Everspring

This app adds support for Everspring devices.

Supported devices:

- Everspring ST814 ( Temperature & Humidity sensor )
- Everspring HSP02 ( PIR motion sensor )
- Everspring AD147 ( Dimmer plug )
- Everspring AN158 ( On/Off plug with power metering)
- Everspring AN180 ( On/Off plug )
- Everspring AN181 ( On/Off plug with power metering)
- Everspring AD1422 ( Dimmer plug )

### Donate

If you like the app, consider a donation to support development  
[![Paypal donate][pp-donate-image]][pp-donate-link]

### ToDo

- Add more Everspring devices -- support from community needed!

### Known bugs

- Setting dimmer values in a flow will result in light to be turned on 100 %. Non-app bug, should be fixed by Homey FW.
- ST814 sensor doesn't always work as expected. Debugging ongoing to get it more reliable

### Unknown bugs

Yes ;-)

### Changelog

- V0.1.1 2016-12-12 : Add support for AN158 ; update Zwave driver ( AN158 on loan provided by Robbshop )
- V0.1.0 2016-10-21 : Add support for AD1422
- V0.0.3 2016-10-04 : Add support for various powerplugs (Alexander)
- V0.0.2 2016-08-12 : Add support for HSP02 motion sensor (Robin van Kekem)
- V0.0.1 2016-08-02 : First test release on Github

[pp-donate-link]: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ralf%40iae%2enl&lc=GB&item_name=homey%2deverspring&item_number=homey%2devohome&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted
[pp-donate-image]: https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif
