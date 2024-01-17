# MeerkatAutomationApis.VendorApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addVendor**](VendorApi.md#addVendor) | **POST** /Vendor | Adds Monitored Objects
[**searchVendor**](VendorApi.md#searchVendor) | **GET** /Vendor | searches Vendors

<a name="addVendor"></a>
# **addVendor**
> addVendor(opts)

Adds Monitored Objects

Adds Monitored Objects to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.VendorApi();
let opts = { 
  'body': new MeerkatAutomationApis.Vendor() // Vendor | Inventory item to add
};
apiInstance.addVendor(opts, (error, data, response) => {
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
 **body** | [**Vendor**](Vendor.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchVendor"></a>
# **searchVendor**
> [Vendor] searchVendor()

searches Vendors

By passing in the appropriate options, you can search for available Vendors 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.VendorApi();
apiInstance.searchVendor((error, data, response) => {
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

[**[Vendor]**](Vendor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

