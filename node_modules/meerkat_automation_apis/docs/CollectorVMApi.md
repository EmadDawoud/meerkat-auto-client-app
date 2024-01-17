# MeerkatAutomationApis.CollectorVMApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCollectorVM**](CollectorVMApi.md#addCollectorVM) | **POST** /collectorVM | Adds Collector VM
[**searchCollectorVM**](CollectorVMApi.md#searchCollectorVM) | **GET** /collectorVM | searches Collector VM

<a name="addCollectorVM"></a>
# **addCollectorVM**
> addCollectorVM(opts)

Adds Collector VM

Adds Collector VM to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.CollectorVMApi();
let opts = { 
  'body': new MeerkatAutomationApis.CollectorVM() // CollectorVM | Inventory item to add
};
apiInstance.addCollectorVM(opts, (error, data, response) => {
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
 **body** | [**CollectorVM**](CollectorVM.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchCollectorVM"></a>
# **searchCollectorVM**
> [CollectorVM] searchCollectorVM()

searches Collector VM

By passing in the appropriate options, you can search for available Collector VMs 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.CollectorVMApi();
apiInstance.searchCollectorVM((error, data, response) => {
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

[**[CollectorVM]**](CollectorVM.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

