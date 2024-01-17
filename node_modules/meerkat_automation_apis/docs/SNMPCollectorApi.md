# MeerkatAutomationApis.SNMPCollectorApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSNMPCollector**](SNMPCollectorApi.md#addSNMPCollector) | **POST** /SNMPCollector | Adds SNMP Collector
[**searchSNMPCollector**](SNMPCollectorApi.md#searchSNMPCollector) | **GET** /SNMPCollector | searches SNMP Collector

<a name="addSNMPCollector"></a>
# **addSNMPCollector**
> addSNMPCollector(opts)

Adds SNMP Collector

Adds SNMP Collector to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.SNMPCollectorApi();
let opts = { 
  'body': new MeerkatAutomationApis.SNMPCollector() // SNMPCollector | Inventory item to add SNMPcCollector
};
apiInstance.addSNMPCollector(opts, (error, data, response) => {
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
 **body** | [**SNMPCollector**](SNMPCollector.md)| Inventory item to add SNMPcCollector | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchSNMPCollector"></a>
# **searchSNMPCollector**
> [SNMPCollector] searchSNMPCollector()

searches SNMP Collector

By passing in the appropriate options, you can search for available SNMP Collectors 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.SNMPCollectorApi();
apiInstance.searchSNMPCollector((error, data, response) => {
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

[**[SNMPCollector]**](SNMPCollector.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

