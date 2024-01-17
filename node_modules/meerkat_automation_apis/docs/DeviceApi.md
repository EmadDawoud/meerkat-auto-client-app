# MeerkatAutomationApis.DeviceApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDevice**](DeviceApi.md#addDevice) | **POST** /Device | Adds SNMP Devices
[**searchDevice**](DeviceApi.md#searchDevice) | **GET** /Device | searches SNMP Devices

<a name="addDevice"></a>
# **addDevice**
> addDevice(opts)

Adds SNMP Devices

Adds Devices to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.DeviceApi();
let opts = { 
  'body': new MeerkatAutomationApis.Device() // Device | Inventory item to add
};
apiInstance.addDevice(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Device**](Device.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchDevice"></a>
# **searchDevice**
> [Device] searchDevice()

searches SNMP Devices

By passing in the appropriate options, you can search for available Devices 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.DeviceApi();
apiInstance.searchDevice((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Device]**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

