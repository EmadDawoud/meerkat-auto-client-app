# MeerkatAutomationApis.SNMPMIBApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSNMPMIB**](SNMPMIBApi.md#addSNMPMIB) | **POST** /SNMPMIB | Adds SNMPMIB
[**searchSNMPMIB**](SNMPMIBApi.md#searchSNMPMIB) | **GET** /SNMPMIB | searches SNMP MIB

<a name="addSNMPMIB"></a>
# **addSNMPMIB**
> addSNMPMIB(opts)

Adds SNMPMIB

Adds SNMP MIBs to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.SNMPMIBApi();
let opts = { 
  'body': new MeerkatAutomationApis.SNMPMIB() // SNMPMIB | Inventory item to add
};
apiInstance.addSNMPMIB(opts, (error, data, response) => {
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
 **body** | [**SNMPMIB**](SNMPMIB.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchSNMPMIB"></a>
# **searchSNMPMIB**
> [SNMPMIB] searchSNMPMIB()

searches SNMP MIB

By passing in the appropriate options, you can search for available SNMP MIBs 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.SNMPMIBApi();
apiInstance.searchSNMPMIB((error, data, response) => {
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

[**[SNMPMIB]**](SNMPMIB.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

