---
title: Specifications
layout: default
permalink: pages/specifications/
---

## Specifications 

### Languages
The API is language-independent so you can use it with any chosen language. You can use it with languages such as Java, C#, VB.NET, and PHP. We only provide examples in C# and VB.NET in our documentation.

### Protocol
The API uses SOAP 1.1.

### WSDL File 
The WSDL file is the same across all regions, but the endpoint differs by region. 

Enter one of the following in place of `{regioncode}` in the WSDL link:
- us1
- eu1
- eu2
- uk1

`https://{regioncode}.accountsiq.com/system/dashboard/integration/integration_1_1.asmx?wsdl`

Your AIQ administrator will let you know which `{regioncode}` to use. If you still need help identifying your host location, contact your local support team at [support@accountsIQ.com ](mailto:support@accountsIQ.com).

When using the WSDL file, it is recommended to refresh the file. However, as we only make backward compatible changes, this is not mandatory.
