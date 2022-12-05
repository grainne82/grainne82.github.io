---
title: Data Types
layout: default
permalink: pages/datatypes/
---

## What types of data can I access with the AIQ API?
The API allows you to access most entity level data. You cannot access customer (practice) level data.
If you are interested in data that our API has not yet exposed, please contact us at [integration@accountsiq.com](mailto:integration@accountsiq.com) and we will take your suggestions into consideration.

### Most popular data type
The following is a rundown of some of the most popular data categories our integrators access using our API. By allowing APIs to handle routine data entry and retrieval, AIQ customers can maximise the efficiency of their business processes.

### Customer and Supplier Data
The AIQ API can retrieve and create essential customer and supplier data. 

Use the `GetCustomer` or `GetSupplier` method to:
-	Verify that the customer/supplier code on a sales transaction exists in AccountsIQ.
-	Set customer/supplier defaults such as tax codes when creating or importing transactions.
-	Get the customer/supplier account ID to use it in other API calls.

The AIQ API can also help create customer accounts during implementation or updating of the AIQ system. 

Use the `UpdateCustomer` method can either:
-	Automatically create customers based on a client’s source data.
-	Be used as part of an initial batch import from a previous system.

### Batch Invoice Data
We tailor AIQ API integrations to meet our customer’s needs. For many integrations, this means creating batch sales invoices and sales receipts, and then allocating them using separate API methods, one transaction at a time, using methods such as the following:

-	`CreateBatchSalesInvoiceGetBackTransactionID`
-	`CreateBatchPurchasesInvoiceGetBackTransactionID`
-	`GetNewSalesInvoice `
-	`GetNewPurchasesInvoice`

In other cases, we can use `PostPayAndAllocateSalesInvoices` creates all these operations with one API method for dozens of transactions in bulk. This API call is used for clients with a higher volume of transactions to import as it avoids time-out issues during uploads.

### Reference Data
When loading transactions, the `GetTransactionsByExternalReference` method ensures that the same data has not been loaded twice by ensuring that the transaction does not already exist in the system. This can happen when a client mistakenly uploads the same file again. 
