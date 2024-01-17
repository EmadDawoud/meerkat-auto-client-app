# MeerkatAutomationApis.MetricApi

All URIs are relative to *https://virtserver.swaggerhub.com/EMADSAMU/MeerkatAuoAPIs/1.1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMetric**](MetricApi.md#addMetric) | **POST** /Metric | Adds Monitored Objects
[**searcMetric**](MetricApi.md#searcMetric) | **GET** /Metric | searches Monitored Objects

<a name="addMetric"></a>
# **addMetric**
> addMetric(opts)

Adds Monitored Objects

Adds Metrics to the system

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.MetricApi();
let opts = { 
  'body': new MeerkatAutomationApis.Metric() // Metric | Metric to add
};
apiInstance.addMetric(opts, (error, data, response) => {
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
 **body** | [**Metric**](Metric.md)| Metric to add | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="searcMetric"></a>
# **searcMetric**
> [Metric] searcMetric()

searches Monitored Objects

By passing in the appropriate options, you can search for available Metrics 

### Example
```javascript
import {MeerkatAutomationApis} from 'meerkat_automation_apis';

let apiInstance = new MeerkatAutomationApis.MetricApi();
apiInstance.searcMetric((error, data, response) => {
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

[**[Metric]**](Metric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

