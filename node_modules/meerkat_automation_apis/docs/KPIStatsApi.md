# MeerkatAutomationApis.KPIStatsApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addKPIstats**](KPIStatsApi.md#addKPIstats) | **POST** /KPIStats | Adds KPI Stats
[**searchKPIstats**](KPIStatsApi.md#searchKPIstats) | **GET** /KPIStats | searches KPI Stats

<a name="addKPIstats"></a>
# **addKPIstats**
> addKPIstats(opts)

Adds KPI Stats

Adds KPI stats to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.KPIStatsApi();
let opts = { 
  'body': new MeerkatAutomationApis.KPIStats() // KPIStats | Inventory item to add
};
apiInstance.addKPIstats(opts, (error, data, response) => {
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
 **body** | [**KPIStats**](KPIStats.md)| Inventory item to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searchKPIstats"></a>
# **searchKPIstats**
> [KPIStats] searchKPIstats()

searches KPI Stats

By passing in the appropriate options, you can search for available KPIStats 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.KPIStatsApi();
apiInstance.searchKPIstats((error, data, response) => {
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

[**[KPIStats]**](KPIStats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

