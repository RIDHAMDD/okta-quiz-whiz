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
        text: "https://$(yourOktaDomain}/api/v1/users?app=false",
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
  }
  // Continue with remaining questions... (truncated for brevity but would include all 35)
];