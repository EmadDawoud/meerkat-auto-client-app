# MeerkatAutomationApis.ProvinceApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProvince**](ProvinceApi.md#addProvince) | **POST** /Province | Adds Province
[**searchProvince**](ProvinceApi.md#searchProvince) | **GET** /Province | searches Province

<a name="addProvince"></a>
# **addProvince**
> addProvince(opts)

Adds Province

Adds Province to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.ProvinceApi();
let opts = { 
  'body': new MeerkatAutomationApis.Province() // Province | Inventory item to add
};
apiInstance.addProvince(opts, (error, data, response) => {
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
 **body** | [**Province**](Province.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchProvince"></a>
# **searchProvince**
> [Province] searchProvince()

searches Province

By passing in the appropriate options, you can search for available Province 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.ProvinceApi();
apiInstance.searchProvince((error, data, response) => {
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

[**[Province]**](Province.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

