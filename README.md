### Everspring

This app adds support for Everspring devices.

Supported devices:

- Everspring ST-814 ( Temperature & Humidity sensor )

### Settings

Everspring ST-814:
You can change settings in the device card. Please refer to the manual for all specific settings.
Most important ones:
- Report time interval: will send a report to Homey, even if there was no threshold passed. In minutes.
- Report temperature change: will send a report to Homey, when temperature changes more than set.
- Report humidity change: will send a report to Homey, when humidity changes more than set.

These will trigger Flows and entries in Insight

### Flow support

Everspring ST-814
*Triggers*

- When temperature changes: triggers a flow when temperature changes
- When humidity changes: triggers a flow when humidity changes
- When battery changes: triggers a flow when battery level changes

*Conditions*

No conditions defined at this moment

*Actions*

- No actions defined

### Speech

No speech support

### Donate

If you like the app, consider a donation to support development  
[![Paypal donate][pp-donate-image]][pp-donate-link]

### ToDo

- Add more Everspring devices -- support from community needed!

### Known bugs

None
### Unknown bugs

Yes ;-)

### Changelog

- V0.0.1 2016-08-02 : First test release on Github

[pp-donate-link]: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=ralf%40iae%2enl&lc=GB&item_name=homey%2deverspring&item_number=homey%2devohome&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted
[pp-donate-image]: https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif
