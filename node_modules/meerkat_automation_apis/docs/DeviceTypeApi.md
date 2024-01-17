# MeerkatAutomationApis.DeviceTypeApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDeviceType**](DeviceTypeApi.md#addDeviceType) | **POST** /DeviceType | Adds Device Types
[**searchDeviceType**](DeviceTypeApi.md#searchDeviceType) | **GET** /DeviceType | searches Device Types

<a name="addDeviceType"></a>
# **addDeviceType**
> addDeviceType(opts)

Adds Device Types

Adds Device Types to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.DeviceTypeApi();
let opts = { 
  'body': new MeerkatAutomationApis.DeviceType() // DeviceType | Inventory item to add
};
apiInstance.addDeviceType(opts, (error, data, response) => {
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
 **body** | [**DeviceType**](DeviceType.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchDeviceType"></a>
# **searchDeviceType**
> [DeviceType] searchDeviceType()

searches Device Types

By passing in the appropriate options, you can search for available Device types 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.DeviceTypeApi();
apiInstance.searchDeviceType((error, data, response) => {
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

[**[DeviceType]**](DeviceType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

