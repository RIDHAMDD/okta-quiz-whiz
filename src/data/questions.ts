export interface QuestionOption {
  text: string;
  answer: boolean;
  reasoning: string;
}

export interface Question {
  id: number;
  title: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: 1,
    title: "Is this true regarding data migration?",
    options: [
      {
        text: "The Okta Implementation Consultant needs to enable delegated authentication to force users to set their passwords when they first log in to the system.",
        answer: false,
        reasoning: "This option is incorrect because enabling delegated authentication to force users to set their passwords when they first log into the system is not required; it is optional during the migration process"
      },
      {
        text: "Okta does NOT set the default profile source. The Okta Implementation Consultant needs to set it after the data migration.",
        answer: false,
        reasoning: "This option is incorrect because the source of truth for attributes must be set at the stage of the migration process."
      },
      {
        text: "Okta imports both active and inactive user profiles from Directory imports",
        answer: false,
        reasoning: "This option is incorrect because Okta only imports active user profiles from Directory imports."
      },
      {
        text: "A hybrid live migration combines aspects of bulk import and Just-in-Time (JIT) migration",
        answer: true,
        reasoning: "This option is correct because a hybrid live migration is created by first bulk importing the identity attributes of the users and then setting their password during their first login (just-in-time)"
      }
    ]
  },
  {
    id: 2,
    title: "Is this a true statement regarding Advanced Server Access (ASA) management?",
    options: [
      {
        text: "It scopes credential management to an Advanced Server Access tenant",
        answer: false,
        reasoning: "This option is incorrect because all configurations and resources in ASA are scoped to a team. In ASA, a team is a named group of users who can authenticate with Okta"
      },
      {
        text: "It provides Zero Trust identity and access management for cloud and on-premises infrastructure",
        answer: true,
        reasoning: "This option is correct because ASA provides Zero Trust identity and access management for both cloud and on-premises infrastructures."
      },
      {
        text: "Admin users are required to log in using a shared Super Admin account.",
        answer: false,
        reasoning: "This option is incorrect because ASA allows teams to control device access using their existing AD accounts, groups, and permissions."
      },
      {
        text: "It provides Zero Trust identity and access management for cloud and on-premises infrastructures",
        answer: true,
        reasoning: "This option is correct because ASA provides Zero Trust Identity and access management for both cloud and on-premises infrastructures."
      }
    ]
  },
  {
    id: 3,
    title: "Is this the correct flow for the Okta Implementation Consultant to select when implementing OpenID Connect (OIDC) for a native application",
    options: [
      {
        text: "Resource Owner Password flow",
        answer: false,
        reasoning: "This option is incorrect because Authorization Code flow with Proof Key for Code Exchange (PKCE) is the recommended flow for most applications whether server-side (web), native, or mobile."
      },
      {
        text: "Implicit flow",
        answer: false,
        reasoning: "This option is incorrect because Authorization Code flow with Proof Key for Code Exchange (PKCE) is the recommended flow for most applications whether server-side (web), native, or mobile."
      },
      {
        text: "Authorization Code flow",
        answer: true,
        reasoning: "This option is correct because Authorization Code flow with Proof Key for Code Exchange (PKCE) is the recommended flow for most applications whether server-side (web), native, or mobile."
      },
      {
        text: "Client credentials flow",
        answer: false,
        reasoning: "This option is incorrect because Authorization Code flow with Proof Key for Code Exchange (PKCE) is the recommended flow for most applications whether server-side (web), native, or mobile."
      }
    ]
  },
  {
    id: 4,
    title: "Is this a true statement regarding on-premises provisioning (OPP)?",
    options: [
      {
        text: "Only a single connector can be created to provide connectivity to different on-premises applications",
        answer: false,
        reasoning: "This option is incorrect because you can create multiple connectors to provide connectivity to different-on premises applications, if necessary"
      },
      {
        text: "Java code for all applications must be authored in the provisioning Connector SDK",
        answer: false,
        reasoning: "This option is incorrect because you only need to author the Java code that defines the specifications of the on-premises application."
      },
      {
        text: "The provisioning connector receives SCIM messages from the Okta Provisioning Agent and integrates with the on-premises application using the API interface provided by that application",
        answer: true,
        reasoning: "This option is correct because a SCIM connector acts as a SCIM server and an intermediary between Okta and the on-premises application."
      }
    ]
  },
  {
    id: 5,
    title: "Is this statement about the Redirect Authentication Model true",
    options: [
      {
        text: "The Redirect Authentication Deployment Model is customizable through HTML, CSS, and JavaScript",
        answer: true,
        reasoning: "This option is correct because the Redirect Authentication Deployment Model is customizable through HTML, CSS, and Javascript"
      },
      {
        text: "The Redirect Authentication Deployment Model requires a greater level of effort to integrate and maintain compared to the Embedded Authentication Model",
        answer: false,
        reasoning: "This option is incorrect because the Embedded Authentication Model requires a higher level of effort to integrate and maintain compared to Okta-hosted Sign-In Widget"
      },
      {
        text: "When the Redirect Authentication Deployment Model is used, the user is kept in the application which reduces redirects to and from Okta",
        answer: false,
        reasoning: "This option is incorrect because when the Redirect Authentication Model is used the user or system is redirected to Okta for credential verification and is then provided authenticated access to the client application and other Service Providers."
      },
      {
        text: "When the Redirect Authentication Deployment Model is used, cross-site scripting (XSS) attacks on the application can result in stolen sign-in credentials",
        answer: false,
        reasoning: "This option is incorrect because XSS (cross-site scripting) attacks on your application do not affect the sign-in experience when using the Redirect Authentication Deployment Model."
      }
    ]
  },
  {
    id: 6,
    title: "An Okta Implementation Consultant is testing the Okta RADIUS Server Agent deployment using a RADIUS testing tool. The Okta RADIUS Server Agent is already installed and configured with the customer's Okta org. Is this piece of information required for the Okta Implementation Consultant to be able to test the integration.",
    options: [
      {
        text: "RADIUS Application Secret Key",
        answer: true,
        reasoning: "This option is correct because setting up NTRadPing, a RADIUS testing tool for verifying if the configuration of Okta RADIUS Agent or designated RADIUS App is done correctly, requires entering the Secret Key from the Okta RADIUS"
      },
      {
        text: "RADIUS Server (IP address and port number)",
        answer: true,
        reasoning: "This option is correct because setting up NTRadPing, a RADIUS testing tool for verifying if the configuration of Okta RADIUS Agent or designated RADIUS App is done correctly, requires entering the server IP Address where you have your Okta RADIUS Agent installed and the port you set up in your Okta RADIUS Application from the Admin Dashboard."
      },
      {
        text: "Name of the RADIUS app in Okta",
        answer: false,
        reasoning: "This option is incorrect because the name of the RADIUS app in Okta is not required to test the integration."
      }
    ]
  },
  {
    id: 7,
    title: "A company uses an application that stores user identity in a back-end database. Users in the SQL database must be provisioned to Okta without using any additional hardware. An Okta Implementation Consultant created the users using the Okta API, and has a properly formatted API body that includes all required attributes. The consultant needs to create an active user in Okta. Is this the URL the consultant should use in an API call?",
    options: [
      {
        text: "https://yourOktaDomain/api/v1/apps/{applicationid}/connections/default?activate=true",
        answer: false,
        reasoning: "This option is incorrect because it does not include the correct API call for creating a new user."
      },
      {
        text: "https://${yourOktaDomain}/api/v1/users?q=new",
        answer: false,
        reasoning: "This option is incorrect because it does not include the correct API call for creating a new user."
      },
      {
        text: "https://${yourOktaDomain}/api/v1/users?activate=true",
        answer: true,
        reasoning: "This option is correct because it is used to create a new user with password"
      },
      {
        text: "https://$(yourOktaDomain)/api/v1/users?",
        answer: false,
        reasoning: "This option is incorrect because it does not include the correct API call for creating a new user."
      },
      {
        text: "https://$(yourOktaDomain)/api/v1/users?app=false",
        answer: false,
        reasoning: "This option is incorrect because this API call includes 'users?app=false' instead of 'users?active=true'."
      }
    ]
  },
  {
    id: 8,
    title: "An Okta Implementation Consultant is creating a SAML app integration using the App Integration Wizard. The Okta Implementation Consultant configured the general settings, configured the SAML settings, and configured feedback. Is this a step the Okta Implementation Consultant needs to complete next?",
    options: [
      {
        text: "Set all SAML signing certificates to active",
        answer: false,
        reasoning: "This option is incorrect because Okta recommends keeping the app-only certificate active"
      },
      {
        text: "Enter the single-sign-on URL for Identity Provider (IdP) initiated sign-on requests",
        answer: false,
        reasoning: "This option is incorrect because this is not a required step when creating a SAML app integration using the App Integration Wizard."
      },
      {
        text: "Configure Name ID Format as EmailAddress",
        answer: false,
        reasoning: "No feedback provided"
      },
      {
        text: "Configure the app integration to verify signed SAML assertions for SSO",
        answer: true,
        reasoning: "This option is correct because this is a task that is required when using the App Integration Wizard to create a SAML app integration. This step must be completed once the general settings, SAML settings, and feedback have been configured"
      },
      {
        text: "Configure the app integration to trust Okta as the Identity Provider (IdP)",
        answer: true,
        reasoning: "This option is correct because this is a task that is required when using the App Integration Wizard to create a SAML app integration. This step must be completed once the general settings, SAML settings, and feedback have been configured."
      }
    ]
  },
  {
    id: 9,
    title: "Is this a benefit of using an Okta-managed certificate when configuring Okta custom URL domain?",
    options: [
      {
        text: "It eliminates the risk of a site outage when the certificate expires.",
        answer: true,
        reasoning: "This option is correct because when using an Okta-managed certificate, Okta manages your certificate renewals in perpetuity."
      },
      {
        text: "It is faster and easier to configure",
        answer: true,
        reasoning: "This option is correct because using an Okta-managed certificate when configuring an Okta custom URL domain is faster and easier than configuring a custom domain with your own TLS certificate."
      },
      {
        text: "It provides an Okta notification when the certificate is about to expire",
        answer: false,
        reasoning: "This option is incorrect because Okta automatically renews the certificate before it expires."
      },
      {
        text: "It revokes certificates from managed devices when they are no longer managed.",
        answer: false,
        reasoning: "This option is incorrect because this is not a function of an Okta-managed certificate when configuring an Okta custom URL domain"
      },
      {
        text: "Okta manages certificate renewals.",
        answer: true,
        reasoning: "This option is correct because when using an Okta-managed certificate, Okta manages your certificate renewals in perpetuity."
      }
    ]
  },
  {
    id: 10,
    title: "Okta ThreatInsight is currently configured as \"Log and enforce security based on threat level\" with a network zone in the exempt zones. Is this a step an Okta Implementation Consultant should take to unblock an IP blocked by Okta ThreatInsight?",
    options: [
      {
        text: "Enable the \"Log authentication attempts from malicious IPs\" action",
        answer: false,
        reasoning: "This option is incorrect because it can only be added to an IP zone that is exempted by going to the Network Zone section or directly from the System Log."
      },
      {
        text: "In the Okta Admin Panel, go to Network Zones and add the IP to the IP zone exempted in the ThreatInsight",
        answer: true,
        reasoning: "This option is correct because an IP can be added to an IP zone that is exempted by either going to the Network Zone section or directly from the System Log."
      },
      {
        text: "In the Okta Admin Panel, go to NetworkZones and remove the IP from the BlockedIpZone",
        answer: false,
        reasoning: "This option is incorrect because can be only added to an IP zone that is exempted by going to the Network Zone section or directly from the System Log."
      },
      {
        text: "Search the IP in the System Log",
        answer: true,
        reasoning: "This option is correct because an IP can be added to an IP zone that is exempted by either going to the Network Zone section or directly from the System Log."
      }
    ]
  },
  {
    id: 11,
    title: "Is this functionality supported when using an LDAP directory integration?",
    options: [
      {
        text: "Universal Security Groups",
        answer: false,
        reasoning: "This option is incorrect because universal security groups are not supported when using an LDAP directory integration."
      },
      {
        text: "Group Imports",
        answer: true,
        reasoning: "This option is correct because group imports are supported when using an LDAP directory integration."
      },
      {
        text: "Filtering users and groups by selecting an LDAP filter and selecting OUs",
        answer: false,
        reasoning: "This option is incorrect because filtering users and groups by selecting an LDAP filter and selecting OUs is not supported when using an LDAP directory integration."
      },
      {
        text: "Omitting selected users during import",
        answer: false,
        reasoning: "This option is incorrect because omitting selected users during import is not supported when using an LDAP directory integration."
      },
      {
        text: "Active Directory Lightweight Directory Services (AD LDS)",
        answer: true,
        reasoning: "This option is correct because Active Directory Lightweight Directory Services (AD LDS) is supported when using an LDAP directory integration."
      },
      {
        text: "Self-service password reset",
        answer: true,
        reasoning: "This option is correct because self-service password reset is supported when using an LDAP directory integration"
      },
      {
        text: "Disabling welcome emails",
        answer: true,
        reasoning: "This option is correct because welcome emails can be disabled when using an LDAP directory integration."
      },
      {
        text: "Incremental Imports",
        answer: true,
        reasoning: "This option is correct because incremental imports are supported when using an LDAP directory integration."
      }
    ]
  },
  {
    id: 12,
    title: "An Okta Implementation Consultant is configuring a custom authorization server in Okta with custom scopes and claims for OAuth 2.0 clients. Is this a valid sequence of steps to complete this task?",
    options: [
      {
        text: "1. Create authorization server 2. Create claims 3. Create scopes 4. Configure access policies",
        answer: false,
        reasoning: "This option is incorrect because the sequence of steps for configuring a custom authorization server in Okta with custom scopes and claims for OAuth 2.0 clients is incorrect"
      },
      {
        text: "1. Create authorization server 2. Create scopes 3. Create claims 4. Configure access policies",
        answer: true,
        reasoning: "This option is correct because it is the correct sequence of steps for configuring a custom authorization server in Okta with custom scopes and claims for OAuth 2.0 clients."
      },
      {
        text: "1. Define access policies 2. Create claims 3. Create scopes 4. Create authorization server",
        answer: false,
        reasoning: "This option is incorrect because the sequence of steps from configuring a custom authorization server in Okta with custom scopes and claims for OAuth 2.0 clients is incorrect"
      },
      {
        text: "1. Create scopes 2. Create claims 3. Configure access policies 4. Create authorization server",
        answer: false,
        reasoning: "This option is incorrect because the sequence of steps for configuring a custom authorization server in Okta with custom scopes and claims for OAuth 2.0 clients is incorrect."
      }
    ]
  },
  {
    id: 13,
    title: "Is this a capability supported by the Okta Org Authorization Server?",
    options: [
      {
        text: "Machine-to-machine or microservices architecture",
        answer: false,
        reasoning: "This option is incorrect because an Org Authorization Server can be used for SSO with OpenID Connect Apps, Developer SDK, and Okta widgets."
      },
      {
        text: "Use of Okta Developer SDKs and widgets for SSO",
        answer: true,
        reasoning: "This option is correct because an Org Authorization Server can be used for SSO with OpenID Connect Apps, Developer SDK, and Okta Widgets"
      },
      {
        text: "SSO with OpenID Connect",
        answer: true,
        reasoning: "This option is correct because an Org Authorization Server can be used for SSO with OpenID Connect Apps, Developer SDK, and Okta Widgets"
      },
      {
        text: "Addition of custom scopes or claims to tokens",
        answer: false,
        reasoning: "This option is incorrect because an Org Authorization Server can be used for SSO with OpenID Connect Apps, Developer SDK, and Okta Widgets. Access tokens with Okta API scope can only be minted using an Org Authorization server."
      },
      {
        text: "Integration with an API gateway",
        answer: false,
        reasoning: "This option is incorrect because an Org Authorization Server can be used for SSO with Open ID Connect Apps, Developer SDK, and Okta widgets. Access tokens can only be minted using Okta Authorization server."
      }
    ]
  },
  {
    id: 14,
    title: "Is this a use case for the Users API?",
    options: [
      {
        text: "The Okta Implementation Consultant needs to address user access requirements by configuring the authenticators available to end users for when signing in to applications.",
        answer: false,
        reasoning: "This option is incorrect because this is a use case for the Authenticators Administration API."
      },
      {
        text: "The Okta Implementation Consultant needs to address security requirements by providing API security through scoped access tokens",
        answer: false,
        reasoning: "This option is incorrect because this is a use case for the OpenID Connect and OAuth 2.0 API"
      },
      {
        text: "The Okta Implementation Consultant needs to address IT requirements to create users in a way that allows an email to be sent to the user with an activation token that the user can use to complete the activation process.",
        answer: true,
        reasoning: "This option is correct because this is a use case for the Users API."
      }
    ]
  },
  {
    id: 15,
    title: "A customer needs to brand the domain experience for end users. Is this what an Okta Implementation Consultant should use to achieve this goal?",
    options: [
      {
        text: "The custom URL domain feature in Okta",
        answer: true,
        reasoning: "This option is correct because this feature allows you to create a custom domain and to configure a custom email address so that you can present a branded experience to your end users."
      },
      {
        text: "The Okta-hosted Sign-In Widget",
        answer: false,
        reasoning: "This option is incorrect because the Okta-hosted Sign-In Widget allows you to add any HTML, CSS, or JavaScript to the sign-in page and also customize the sign-in page per application and with multiple brands but it does not allow you to customize the Okta URL domain"
      },
      {
        text: "The background image of the sign-in page",
        answer: false,
        reasoning: "This option is incorrect because it does not allow you to create a custom domain."
      },
      {
        text: "The Okta Brands API",
        answer: false,
        reasoning: "This option is incorrect because Okta Brands API allows you to customize the look and feel of the pages and templates but does not allow you to customize the domain."
      }
    ]
  },
  {
    id: 16,
    title: "A company's users are being locked out of their accounts. There has also been an increase in credential-based attacks (password spraying, brute-force, etc.) and the company wants to mitigate this. Is this a valid solution an Okta Implementation Consultant should recommend?",
    options: [
      {
        text: "Delegated Authentication",
        answer: false,
        reasoning: "This option is incorrect because the purpose of delegated authentication is to allow users to sign in to Okta by entering credentials for their organization's Active Directory (AD)."
      },
      {
        text: "Okta ThreatInsight",
        answer: true,
        reasoning: "This option is correct because when ThreatInsight is blocking suspicious IP addresses, login attempts from suspicious IPs do not count toward a user's login attempts."
      }
    ]
  },
  {
    id: 17,
    title: "An Okta Implementation Consultant is configuring Okta API Access Management to protect a customer's APIs. An OAuth 2.0 Client is configured in multiple access policies and multiple authorization servers. Is this an expected behavior for this OAuth 2.0 Client?",
    options: [
      {
        text: "The Resource Owner Password grant type will be used to determine which scopes are generated.",
        answer: false,
        reasoning: "This option is incorrect because Okta recommends not using this resource owner password grant type in this scenario."
      },
      {
        text: "Access tokens can be retrieved from the various authorization servers.",
        answer: true,
        reasoning: "This option is correct because OAuth clients and authorization servers can be assigned on a many-to-many basis. This allows a developer to use a single OAuth client to retrieve access tokens from different authorization depending on the use case."
      },
      {
        text: "Unexpected scopes could be generated.",
        answer: false,
        reasoning: "This option is incorrect because if a request generates unexpected scopes, it is because of an overly-broad rule within the authorization server."
      },
      {
        text: "Multiple tokens will be generated, each with separate authorization policies, token expiration times, and scopes",
        answer: true,
        reasoning: "This option is correct because an OAuth 2.0 client can be assigned to any number of authorization servers. Doing so provides for a variety of tokens to be generated, each with separate authorization policies, token expiration times, and scopes."
      }
    ]
  },
  {
    id: 18,
    title: "A company needs to provide access to multiple applications and domains to authorized end users that are outside the company's trust domain. An Okta Implementation Consultant needs to set up inbound federation to allow these end users to use a single set of credentials to access the company's applications and domains. Is this a possible source the Okta Implementation Consultant should use?",
    options: [
      {
        text: "Azure AD using OpenID Connect",
        answer: true,
        reasoning: "This option is correct because an Active Directory source can be set as an IdP"
      },
      {
        text: "An API request",
        answer: false,
        reasoning: "This option is incorrect because an API request cannot be set as an IdP"
      },
      {
        text: "A single-page web app",
        answer: false,
        reasoning: "This option is incorrect because a single-page web app cannot be set as an IdP"
      },
      {
        text: "A SAML integration",
        answer: true,
        reasoning: "This option is correct because a SAML integration can be set as an IdP."
      },
      {
        text: "A token server",
        answer: false,
        reasoning: "This option is incorrect because a token server cannot be set as an IdP."
      }
    ]
  },
  {
    id: 19,
    title: "An Okta Implementation Consultant needs to configure access to the user's attribute family_name in the ID token. Is this the scope that the Okta Implementation Consultant must use?",
    options: [
      {
        text: "openid profile",
        answer: true,
        reasoning: "This option is correct because profile is one of the default profile claims."
      },
      {
        text: "openid mail",
        answer: false,
        reasoning: "This option is incorrect because mail is not one the default profile claims."
      },
      {
        text: "Openid phone",
        answer: false,
        reasoning: "This option is incorrect because profile is one of the default profile claims."
      }
    ]
  },
  {
    id: 20,
    title: "During testing, an Okta Implementation Consultant noticed that when an inbound federation occurs and a user is logging in from the inbound IdP request, the user CANNOT be matched to the Okta Authentication response from the Okta org. Okta Org2Org integration is being used. Is this an action the Okta Implementation Consultant should take to address the issue?",
    options: [
      {
        text: "Configure Okta to reactivate users who are deactivated in Okta",
        answer: false,
        reasoning: "This option is incorrect because user activation and deactivation are not related to the configuration options for when an inbound identity federation does not match an existing user."
      },
      {
        text: "Configure Okta to create a new user account with Just In Time (JIT) provisioning",
        answer: true,
        reasoning: "This option is correct because if no match is found for the incoming identity of the user the two options that can be configured are to automatically create a new user just in time (JIT) or to redirect the user to the Okta Sign-in page of the destination Okta org."
      },
      {
        text: "Redirect the user back to the inbound IdP login page",
        answer: false,
        reasoning: "This option is incorrect because the user would not be redirected back to the source IdP."
      },
      {
        text: "Redirect the user to the Okta sign-in page",
        answer: true,
        reasoning: "This option is correct because if no match is found for the incoming identity of the user the two options that can be configured are to automatically create a new user just in time (JIT) or to redirect the user to the Okta Sign-In page of the destination Okta org."
      }
    ]
  },
  {
    id: 21,
    title: "An Okta Implementation Consultant installed and configured four Active Directory Agents to provide high availability and failover protection. Is this the behavior the Okta Implementation Consultant should expect if two of the Active Directory Agents fail?",
    options: [
      {
        text: "The failed Active Directory Agents must be re-integrated with the on-premises Active Directory server",
        answer: false,
        reasoning: "This option is incorrect because the failed Active Directory Agents would not need to be re-integrated with the on-premises server."
      },
      {
        text: "The Active Directory Agent that is next closest geographically will be selected first",
        answer: false,
        reasoning: "This option is incorrect because high availability and failover for the Active Directory Agents would not be based on geographic location of the agent"
      },
      {
        text: "The two failed AD agents will remain in the queue",
        answer: false,
        reasoning: "This option is incorrect because the failed Active Directory Agents would be marked unavailable."
      }
    ]
  },
  {
    id: 22,
    title: "A company has a supply chain partner that requires the use of Azure AD as their Identity Provider (IdP). The supply chain partner's users will access the company's cloud applications via Okta. Is this a method the Okta Implementation Consultant can use when integrating Azure AD as the external service for this scenario?",
    options: [
      {
        text: "WS-Fed",
        answer: false,
        reasoning: "This option is incorrect because WS-Fed is not an option for integrating Azure AD as the external service for this scenario"
      },
      {
        text: "Smart Card",
        answer: false,
        reasoning: "This option is incorrect because Smart Card is not an option for integrating Azure AD as the external service for this scenario"
      },
      {
        text: "SWA",
        answer: false,
        reasoning: "This option is incorrect because SWA is not an option for integrating Azure AD as the external service for this scenario"
      },
      {
        text: "SAML 2.0",
        answer: true,
        reasoning: "This option is correct because SAML 2.0 can be used to integrate Azure AD as the external service for this scenario."
      },
      {
        text: "OpenID Connect",
        answer: true,
        reasoning: "This option is correct because OpenID Connect is an option for integrating Azure AD as the external service for this scenario"
      },
      {
        text: "SCIM",
        answer: false,
        reasoning: "This option is incorrect because SCIM is not an option for integrating Azure AD as the external service for this scenario."
      }
    ]
  },
  {
    id: 23,
    title: "Is this an approach to update the lifetime of an ID token?",
    options: [
      {
        text: "Application Sign-on Policy",
        answer: false,
        reasoning: "This option is incorrect because sign on policies are used to restrict access to apps based on an end user's network location, originating IP address, group membership, and ability to satisfy multifactor authentication (MFA) challenges"
      },
      {
        text: "Token Inline Hook",
        answer: true,
        reasoning: "This option is correct because the Token Inline Hook allows you to update how long an access token or an ID token is valid"
      },
      {
        text: "Identity Provider routing rules",
        answer: false,
        reasoning: "This option is incorrect because Identity Provider routing rules are used to direct end users to identify providers based on the user's location, device, email domain, attributes, or the app they are attempting to access."
      },
      {
        text: "OAuth Authorization configuration",
        answer: false,
        reasoning: "This option is incorrect because configuring OAuth Authorization does not allow you to update the lifetime of an ID token"
      }
    ]
  },
  {
    id: 24,
    title: "A company has one Active Directory forest with two domains, Domain A and Domain B. Both domains have an Active Directory agent configured and are importing the Active Directory attribute \"department\" to the Okta field \"department.\" The company configured Okta to ensure only one Okta account is created if users exist in both domains. Company policy requires users with accounts in Domain A and Domain B to use delegated authentication against Domain A, and wants the \"department\" value from Domain B to be reflected in Okta for all users. Is this a configuration step that an Okta Implementation Consultant must take to achieve these goals?",
    options: [
      {
        text: "Place Domain B as priority #1 in Profile Sources",
        answer: false,
        reasoning: "This option is incorrect because with this configuration users in multiple domains will be authenticated against Domain B"
      },
      {
        text: "Place Domain A as priority #1 in Profile Sources",
        answer: true,
        reasoning: "This option is correct because it would ensure that users in multiple domains will be authenticated against Domain A"
      },
      {
        text: "Ensure the Okta attribute \"department\" is set to override profile source and inherit from Domain B",
        answer: true,
        reasoning: "This option is correct because it would ensure that users in multiple domains will be authenticated against Domain B"
      },
      {
        text: "Ensure the Okta attribute \"department\" is set to inherit from profile source",
        answer: false,
        reasoning: "This option is incorrect because it would not achieve either requirement defined by the company's policy."
      },
      {
        text: "Ensure the Okta attribute \"department\" is set to inherit from Okta",
        answer: false,
        reasoning: "This option is incorrect because with this configuration, the value from Domain B will not be placed in the Okta attribute."
      }
    ]
  },
  {
    id: 25,
    title: "Is this the role that provides the access token during the Resource Owner Password grant flow?",
    options: [
      {
        text: "Client",
        answer: false,
        reasoning: "This option is incorrect because the client is the device used by the user to access the data"
      },
      {
        text: "Resource owner",
        answer: false,
        reasoning: "This option is incorrect because the resource owner is the role that owns SOME of the resources in the resource server. This is also known as the user."
      },
      {
        text: "Resource server",
        answer: false,
        reasoning: "This option is incorrect because the resource server stores the resource. This is also known as the application."
      },
      {
        text: "Authentication server",
        answer: true,
        reasoning: "This option is correct because the Authorization server provides all tokens. It is also known as Okta"
      }
    ]
  },
  {
    id: 26,
    title: "Is this statement true regarding Identity Provider (IdP) routing rules?",
    options: [
      {
        text: "You CANNOT create a rule for Okta as your provider",
        answer: false,
        reasoning: "This option is incorrect because you can create a rule for Okta as your provider."
      },
      {
        text: "IdP routing rules are helpful in an on-network vs. off-network scenario.",
        answer: true,
        reasoning: "This option is correct because you can maintain alternate or legacy authentication for off-networking users and use Okta for on-network users."
      },
      {
        text: "You can redirect authentication based on app user attributes",
        answer: false,
        reasoning: "This option is incorrect because you cannot redirect authentication based on app user attributes."
      },
      {
        text: "You CANNOT add multiple providers in the same rule",
        answer: false,
        reasoning: "This option is incorrect because multiple providers can be added to the same rule and then prioritized"
      },
      {
        text: "You can create a rule for each of your providers",
        answer: true,
        reasoning: "This option is correct because you can direct authentication based on the Okta user attributes or the application being accessed."
      }
    ]
  },
  {
    id: 27,
    title: "An Okta Implementation Consultant is integrating the Okta LDAP Agent into a customer's existing environment. Is this an advantage of using delegated authentication when performing this operation?",
    options: [
      {
        text: "Enables LDAP to authenticate users when they sign in to Okta.",
        answer: true,
        reasoning: "This option is correct because using delegated authentication when integrating the Okta LDAP Agent allows LDAP to authenticate your users when they sign in to Okta"
      },
      {
        text: "Enables delegated authentication without the use of the Active Directory domain name suffix",
        answer: false,
        reasoning: "This option is incorrect because using delegated authentication when integrating the Okta LDAP Agent in an existing environment does not enable delegated authentication without the use of the Active Directory domain name suffix."
      },
      {
        text: "Makes LDAP the source of truth of the user",
        answer: false,
        reasoning: "This option is incorrect because using delegated authentication when integrating the Okta LDAP Agent in an existing environment does not make LDAP the source of truth of the user."
      },
      {
        text: "Eliminates the need to import users in bulk to Okta",
        answer: false,
        reasoning: "This option is incorrect because using delegated authentication when integrating the Okta LDAP Agent with an existing environment does not eliminate the need to import users in bulk in Okta."
      },
      {
        text: "Allows users to reuse their existing LDAP password",
        answer: true,
        reasoning: "This option is correct because using delegated authentication when integrating the Okta LDAP Agent allows LDAP to authenticate users when they sign in to Okta."
      }
    ]
  },
  {
    id: 28,
    title: "A customer needs to ensure that users are authenticated via SAML from a Spoke (source) Okta org into a Hub (target) Okta org. An Okta Implementation consultant has set up the Org2Org application in the company's Spoke (source) org and added the Org2Org SAML application to the Okta source (Spoke) organization. Is this the IdP-initiated URL that will result?",
    options: [
      {
        text: "Spoke Assertion Consumer Service URL",
        answer: false,
        reasoning: "This option is incorrect because the IDP is the Spoke (source) in the Hub and Spoke model. Hence, an IdP-initiated URL will be an application in Spoke"
      },
      {
        text: "Org2Org application Embed Link in Hub",
        answer: false,
        reasoning: "This option is incorrect because the IDP is the Spoke (source) in the Hub and Spoke model. Hence, an IdP-intiated URL will be an application embed link of the Org2Org application in Spoke, not Hub."
      },
      {
        text: "Org2Org application Embed Link in Spoke",
        answer: true,
        reasoning: "This option is correct because the IDP is the Spoke (source) in the Hub and Spoke model. Hence, an IdP-initiated URL will be an application embed link of the Org2Org application in Spoke."
      },
      {
        text: "Hub Assertion Consumer Service URL",
        answer: false,
        reasoning: "This option is incorrect because the IDP is the Spoke (source) in the Hub and Spoke model. Hence, an IdP-initiated URL will be an application in Spoke"
      }
    ]
  },
  {
    id: 29,
    title: "Is this a true statement regarding embedded authentication using Okta SDKs?",
    options: [
      {
        text: "WebView is a more secure approach for authentication in mobile applications",
        answer: false,
        reasoning: "This option is incorrect because Okta native SDK is more secure than using WebViews for authentication on mobile apps because this practice exposes users to unacceptable security risks."
      },
      {
        text: "Embedded authentication using SDK redirects the user to Okta for authentication",
        answer: false,
        reasoning: "This option is incorrect because in embedded authentication, the user is kept in the application which reduces redirects and from okta."
      },
      {
        text: "Okta provides a wide range of SDKs for native, front-end, and service-side integrations along with sample code",
        answer: true,
        reasoning: "This option is correct because Okta SDKs with sample code are available for native, front-end, and server-side integrations."
      },
      {
        text: "Okta native SDK provides more secure authentication than using WebView in mobile applications",
        answer: true,
        reasoning: "This option is correct because Okta native SDK is more secure than using WebViews for authentication on mobile apps because this practice exposes users to unacceptable security risks."
      },
      {
        text: "Embedded authentication is the only deployment model supported by SDKs",
        answer: false,
        reasoning: "This option is incorrect because embedded authentication is not the only deployment model supported by SDKs"
      }
    ]
  },
  {
    id: 30,
    title: "In order to make it as easy as possible for customers to work with the company an IT team wants to implement social login with Okta. The Okta Implementation Consultant created a group named Okta-LinkedIn that has users assigned with group rules. The following requirements apply: Authenticate via LinkedIn, If the account already exists in Okta and is a member of the Okta-LinkedIn user group, auto-link the account, If the account is new in Okta, create the user and make sure the user is assigned to the Okta-LinkedIn group. The Okta Implementation Consultant already configured an OAuth 2.0 client in LinkedIn and created an OpenID Connect (OIDC) application in Okta. Is this the configuration step the consultant needs to complete?",
    options: [
      {
        text: "Add the LinkedIn identity provider (IdP) in Okta with Auto-Link restrictions set to link the user's IdP account with a matching Okta account.",
        answer: false,
        reasoning: "This option is incorrect because setting the Auto-Link restrictions to link the user's IdP account with a matching Okta account would not meet the requirement of the scenario that existing Okta accounts who are members of the Okta-LinkedIn group should be auto-linked"
      },
      {
        text: "Add the LinkedIn identity provider (IdP) in Okta with Auto-Link restrictions set to the Okta-LinkedIn group",
        answer: true,
        reasoning: "This option is correct because specifying the Okta-LinkedIn group in the Auto-Link restrictions ensures that only existing Okta accounts who are members of the Okta-LinkedIn group are auto-linked."
      },
      {
        text: "Add the LinkedIn identity provider (IdP) in Okta with the Account Link policy set to enabled",
        answer: false,
        reasoning: "This option is incorrect because the Account Link policy is used to specify whether Okta automatically links the user's IdP account with a matching Okta account."
      },
      {
        text: "Add the LinkedIn identity provider (IdP) in Okta with the Account Link policy set to disabled",
        answer: false,
        reasoning: "This option is incorrect because the Account Link policy is used to specify whether Okta automatically links the user's IdP account."
      }
    ]
  },
  {
    id: 31,
    title: "A company wants to deny end users access if they are logging in from a high-risk network zone. After an Okta Implementation Consultant creates the necessary sign-on policy, an end user attempts to log in from a high-risk network zone. Is this an expected behavior in the Okta org?",
    options: [
      {
        text: "An event indicating a post-authentication sign-on policy evaluation is triggered.",
        answer: false,
        reasoning: "This option is incorrect because the sign-on policy evaluation happens prior to authenticating with the user"
      },
      {
        text: "The end user receives a message that indicates that logging in from a restricted zone is prohibited",
        answer: false,
        reasoning: "This option is incorrect because the user will not receive a message regarding their login attempt"
      },
      {
        text: "The end user receives a message that indicates that only two more login attempts are allowed before the user will be locked out.",
        answer: false,
        reasoning: "This option is incorrect because the user will not receive a message regarding their login attempt."
      },
      {
        text: "An event indicating a pre-authentication sign-on policy evaluation is triggered",
        answer: true,
        reasoning: "This option is correct because the sign-on policy evaluation happens prior to authenticating the user."
      }
    ]
  },
  {
    id: 32,
    title: "Is this a required component for configuring on-premises provisioning (OPP)",
    options: [
      {
        text: "SCIM server or custom connectors",
        answer: true,
        reasoning: "This option is correct because on-premises provisioning (OPP) combines on-premises applications and a SCIM server or custom connectors together with the Okta Provisioning Agent to send user information to and from Okta."
      },
      {
        text: "On-premises application",
        answer: true,
        reasoning: "This option is correct because on-premises provisioning (OPP) combines on-premises applications and a SCIM server or custom connectors together with the Okta Provisioning Agent to send user information to and from Okta."
      },
      {
        text: "Integrated Windows Authentication Agent",
        answer: false,
        reasoning: "This option is incorrect because on premises provisioning (OPP) utilizes the Okta Provisioning Agent."
      },
      {
        text: "Okta Provisioning Agent",
        answer: true,
        reasoning: "This option is correct because on-premises provisioning (OPP) combines on-premises applications and a SCIM server or custom connectors together with the Okta Provisioning Agent to send user information to and from Okta."
      },
      {
        text: "Cloud application",
        answer: false,
        reasoning: "This option is incorrect because on-premises provisioning (OPP) utilizes on-premises applications, not cloud applications."
      }
    ]
  },
  {
    id: 33,
    title: "Is this a true statement regarding on-premises provisioning (OPP)?",
    options: [
      {
        text: "Only a single connector can be created to provide connectivity to different on-premises applications",
        answer: false,
        reasoning: "This option is incorrect because you can create multiple connectors to provide connectivity to different on-premises applications, if necessary."
      },
      {
        text: "Communication between Okta and on-premises applications can only occur through the Okta Provisioning Agent and a native SCIM server",
        answer: false,
        reasoning: "This option is incorrect because Okta and on-premises applications communicate with each other through the Okta Provisioning Agent and SCIM server. If an on-premises application does NOT support SCIM natively, a SCIM connecter can be built using the Provisioning Connector SDK. A SCIM connector acts as a SCIM server and an intermediary between Okta and the on-premises application."
      },
      {
        text: "Java code for all applications must be authored in the Provisioning Connector SDK",
        answer: false,
        reasoning: "This option is incorrect because you only need to author the Java code that defines the specifications of the on-premises application."
      },
      {
        text: "The provisioning connector receives SCIM messages from the Okta Provisioning Agent and integrates with the on-premises application using the API interface provided by that application.",
        answer: true,
        reasoning: "This option is correct because a SCIM connector acts as a SCIM server and an intermediary between Okta and the on-premises application."
      }
    ]
  },
  {
    id: 34,
    title: "Is this protocol supported by the Okta LDAP Interface?",
    options: [
      {
        text: "StartTLS (LDAP over TLS)",
        answer: true,
        reasoning: "This option is correct because StartTLS (LDAP over TLS) is supported by the LDAP interface"
      },
      {
        text: "Kerberos",
        answer: false,
        reasoning: "This option is incorrect because Kerberos is not supported by the Okta LDAP interface."
      },
      {
        text: "LDAPS (LDAP over SSL)",
        answer: true,
        reasoning: "This option is correct because LDAPS (LDAP over SSL) is supported by the Okta LDAP Interface."
      }
    ]
  },
  {
    id: 35,
    title: "Is this a use case for a custom email domain",
    options: [
      {
        text: "An Okta Implementation Consultant needs to specify more than 10 mail servers that can send mail from the domain.",
        answer: false,
        reasoning: "This option is incorrect because you cannot have more than 10 DNS hookups in your SPF record"
      },
      {
        text: "Okta needs to send emails through a domain that uses SendGrid",
        answer: false,
        reasoning: "This option is incorrect because you cannot configure Okta to send emails through a domain that uses SendGrid"
      },
      {
        text: "End users receiving emails need to be presented with a branded experience",
        answer: true,
        reasoning: "This option is correct because configuring a custom email domain allows for configuring a branded experience"
      },
      {
        text: "Multiple emails need to be used simultaneously",
        answer: false,
        reasoning: "This option is incorrect because you cannot use more than one custom email address at a time."
      }
    ]
  }
];