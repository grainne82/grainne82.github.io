---
title: Authentication
layout: default
permalink: pages/authentication/
---

## Authentication

To authenticate a user, use the Login function [link to this function here]. This function requires the following:
- **A partner key:** This key is valid across multiple entities.
- **A user key:** The user can get this via the company information. It is only valid to impersonate one user, in one entity. Multiple keys are required to interact with multiple entities.
- An existing Entity identifier.
- An existing User identifier.
- A valid end point URL.
  
If the authentication is successful, the API returns a session token which is valid for 20 minutes. The API will request the session token for all functions. There is no rate limit.

When the token expires, the API will return a flag indicating this. To get a new session token call the Login method again.

### Code Sample: C# 

This is the session token that you can retrieve by calling the Login method using the correct credentials. Auth refers to authentication.
```
Integration_1_1.Integration_1_1 ws = new Integration_1_1.Integration_1_1();
String auth = ws.Login(companyID, partnerKey, userKey);

if (auth != null)
{
  // ...
}
```
## Authentication Troubleshooting

**Issue:** I am trying to call the Login method, but the server is not sending back a session token.

**Solution:**

Confirm the following:
- You are linking to the staging environment, not the live production servers. The production servers require a different set of keys and will refuse your credentials. You must request a set of production keys from AIQ directly.
- You are contacting the correct end point URL for your client’s region.
- Your authentication keys are correct. If you copied your keys from an email, you have not accidently copied line endings or blank spaces.

### Integrator Partner Security

Before using the API, please read and acknowledge the [Terms of Use](/pages/termsofuse/) to [integration@accountsiq.com ](mailto:integration@accountsiq.com).

The integrator partner key is a sensitive piece of information and must be treated as such. The integrator is responsible for the use of their key. Keep it secure at all times, ensuring it is inaccessible via reverse engineering or any other method.

For further information, contact [AccountsIQ](https://www.accountsiq.com/success/support/).

