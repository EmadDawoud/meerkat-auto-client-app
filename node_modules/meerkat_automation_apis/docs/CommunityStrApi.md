# MeerkatAutomationApis.CommunityStrApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCommunityStr**](CommunityStrApi.md#addCommunityStr) | **POST** /CommunityStr | Adds Monitored Objects
[**searcCommunityStr**](CommunityStrApi.md#searcCommunityStr) | **GET** /CommunityStr | searches Community Strings

<a name="addCommunityStr"></a>
# **addCommunityStr**
> addCommunityStr(opts)

Adds Monitored Objects

Adds Community Strings to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.CommunityStrApi();
let opts = { 
  'body': new MeerkatAutomationApis.CommunityStr() // CommunityStr | Inventory item to add
};
apiInstance.addCommunityStr(opts, (error, data, response) => {
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
 **body** | [**CommunityStr**](CommunityStr.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searcCommunityStr"></a>
# **searcCommunityStr**
> [CommunityStr] searcCommunityStr()

searches Community Strings

By passing in the appropriate options, you can search for available Community Strings 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.CommunityStrApi();
apiInstance.searcCommunityStr((error, data, response) => {
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

[**[CommunityStr]**](CommunityStr.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

