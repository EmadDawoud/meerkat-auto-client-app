# MeerkatAutomationApis.MonObjApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMonObj**](MonObjApi.md#addMonObj) | **POST** /MonObj | Adds Monitored Objects
[**searchMonObj**](MonObjApi.md#searchMonObj) | **GET** /MonObj | searches Monitored Objects

<a name="addMonObj"></a>
# **addMonObj**
> addMonObj(opts)

Adds Monitored Objects

Adds Monitored Objects to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.MonObjApi();
let opts = { 
  'body': new MeerkatAutomationApis.MonObj() // MonObj | Inventory item to add
};
apiInstance.addMonObj(opts, (error, data, response) => {
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
 **body** | [**MonObj**](MonObj.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchMonObj"></a>
# **searchMonObj**
> [MonObj] searchMonObj()

searches Monitored Objects

By passing in the appropriate options, you can search for available Monitoered Objects 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.MonObjApi();
apiInstance.searchMonObj((error, data, response) => {
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

[**[MonObj]**](MonObj.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

