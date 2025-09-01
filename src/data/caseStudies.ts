export interface CaseStudyQuestion {
  id: string;
  statement: string;
  correctAnswer: boolean;
  reasoning: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  existingSetup: string;
  goals: string;
  technicalRequirements: string;
  questions: CaseStudyQuestion[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "sound-healthcare",
    title: "Sound Healthcare Technology",
    description: `Multinational healthcare technology company with three global offices
• 2,500 employees
• 300,000 customers`,
    existingSetup: `• Two Active Directory forests and five domains
• Internally developed applications use OpenID Connect (OIDC)/OAuth 2.0
• User accounts in multiple places: Microsoft SQL Server database, CSV file, and Workday
• Each partner has its own identity infrastructure and applications
• Customers include companies with employees using on-premises applications at Cloud Vault Financials
• Each internal business unit maintains its own infrastructure and applications
• Enterprise and cloud-based applications provide domain-specific access
• MFA is NOT compatible with enterprise on-premise applications; users authenticate via VPN
• MFA is currently used for cloud-based applications`,
    goals: `• Add external user accounts into centralized identity service; allow self-registration
• Automate creation of partner, contractor, and employee accounts
• Adopt centralized approach to Identity and Access Management (IAM)
• Allow efficient access to applications for partners, customers, contractors/employees
• Automate user provisioning to applications seamlessly
• Implement IT solutions that enhance user productivity and efficiency
• Deliver ROI within one year and reduce TCO over product lifetime
• Develop onboarding process via Workday to minimize processing time
• Enable Single Sign-On (SSO) for specified applications
• Implement password-less authentication experience
• Support flexibility for future B2B solutions for supply-chain partners
• Ensure only employee-trusted devices gain access to company applications like Office 365`,
    technicalRequirements: `• Employees must sign in to applications using Okta accounts
• Remote access authentication must meet stringent Authentication Assurance Levels (AALs)
• Internal IT documents shared between business units and partners using Box
• Sales data shared across business units and partners using Salesforce
• Branding is important; partners and customers must NOT see Okta domain
• Users must NOT see redirects to different domains during authentication
• Adaptive MFA must secure partners' authentication to company apps
• Extend Okta's core identity and access controls to company infrastructure and applications
• Extend Okta's identity solutions to Linux and Windows servers through SSH and RDP
• Self-service options available to customers (registration, password operations, etc.)
• Workday must be implemented as source of truth for employees`,
    questions: [
      {
        id: "workday-below-ad",
        statement: "Sound Healthcare Technology configured Okta to bring in users from Workday HR, Active Directory, and a CSV file. All three identity stores are configured to be a profile source. In some cases, users will exist in two of the identity stores, and in some cases a user may exist in all three identity stores. The business requirements include using Workday data if it is available for a user, and the Workday data should be reflected in Okta. Set Workday below Active Directory in profile sources is the correct priority setting that the Okta Implementation Consultant must set to achieve the requirements.",
        correctAnswer: false,
        reasoning: "This option is incorrect because the Active Directory data would take priority over Workday data if both are available."
      },
      {
        id: "csv-priority-1",
        statement: "Sound Healthcare Technology configured Okta to bring in users from Workday HR, Active Directory, and a CSV file. All three identity stores are configured to be a profile source. In some cases, users will exist in two of the identity stores, and in some cases a user may exist in all three identity stores. The business requirements include using Workday data if it is available for a user, and the Workday data should be reflected in Okta. Set CSV as priority 1 in profile sources is the correct priority setting that the Okta Implementation Consultant must set to achieve the requirements.",
        correctAnswer: false,
        reasoning: "This option is incorrect because setting the CSV file data as priority 1 would make the CSV file data take priority over Workday data if both are available."
      },
      {
        id: "workday-below-csv",
        statement: "Sound Healthcare Technology configured Okta to bring in users from Workday HR, Active Directory, and a CSV file. All three identity stores are configured to be a profile source. In some cases, users will exist in two of the identity stores, and in some cases a user may exist in all three identity stores. The business requirements include using Workday data if it is available for a user, and the Workday data should be reflected in Okta. Set Workday below CSV in profile sources is the correct priority setting that the Okta Implementation Consultant must set to achieve the requirements.",
        correctAnswer: false,
        reasoning: "This option is incorrect because the CSV file data would take priority over Workday data if both are available."
      },
      {
        id: "workday-priority-1",
        statement: "Sound Healthcare Technology configured Okta to bring in users from Workday HR, Active Directory, and a CSV file. All three identity stores are configured to be a profile source. In some cases, users will exist in two of the identity stores, and in some cases a user may exist in all three identity stores. The business requirements include using Workday data if it is available for a user, and the Workday data should be reflected in Okta. Set Workday as priority 1 in profile sources is the correct priority setting that the Okta Implementation Consultant must set to achieve the requirements.",
        correctAnswer: true,
        reasoning: "This option is correct because setting Workday as priority 1 achieves the goal of using Workday data as the source, if it is available for the user."
      },
      {
        id: "ad-priority-1",
        statement: "Sound Healthcare Technology configured Okta to bring in users from Workday HR, Active Directory, and a CSV file. All three identity stores are configured to be a profile source. In some cases, users will exist in two of the identity stores, and in some cases a user may exist in all three identity stores. The business requirements include using Workday data if it is available for a user, and the Workday data should be reflected in Okta. Set Active Directory as priority 1 in profile sources is the correct priority setting that the Okta Implementation Consultant must set to achieve the requirements.",
        correctAnswer: false,
        reasoning: "This option is incorrect because setting the Active Directory data as priority 1 would make the Active Directory data take priority over Workday data if both are available."
      },
      {
        id: "idp-cert-not-managed",
        statement: "Sound Healthcare Technology wants to require Workforce users to authenticate using Okta and to use a custom Multifactor Authentication (MFA) solution as the second factor. After the Okta Implementation Consultant completed the configuration of the Identity Provider (IdP), routing rules, custom authenticator, and authentication policies, target users are NOT able to use the custom MFA solutions as the second factor. The IdP certificate is NOT managed by Okta is a possible reason for the failure.",
        correctAnswer: false,
        reasoning: "This option is incorrect because the certificate must only be valid; it does not need to be managed by Okta."
      },
      {
        id: "idp-is-active",
        statement: "Sound Healthcare Technology wants to require Workforce users to authenticate using Okta and to use a custom Multifactor Authentication (MFA) solution as the second factor. After the Okta Implementation Consultant completed the configuration of the Identity Provider (IdP), routing rules, custom authenticator, and authentication policies, target users are NOT able to use the custom MFA solutions as the second factor. The IdP is active is a possible reason for the failure.",
        correctAnswer: false,
        reasoning: "This option is incorrect because the IdP should be active."
      },
      {
        id: "idp-usage-sso-only",
        statement: "Sound Healthcare Technology wants to require Workforce users to authenticate using Okta and to use a custom Multifactor Authentication (MFA) solution as the second factor. After the Okta Implementation Consultant completed the configuration of the Identity Provider (IdP), routing rules, custom authenticator, and authentication policies, target users are NOT able to use the custom MFA solutions as the second factor. The IdP Usage setting is set for SSO Only is a possible reason for the failure.",
        correctAnswer: true,
        reasoning: "This option is correct because to meet the requirements of this scenario, in the General Settings section on the identity provider's page, the Okta Implementation Consultant must select the Factor only option from the IdP Usage dropdown; you can't use the SSO only option with the IdP authenticator."
      },
      {
        id: "custom-authenticator-inactive",
        statement: "Sound Healthcare Technology wants to require Workforce users to authenticate using Okta and to use a custom Multifactor Authentication (MFA) solution as the second factor. After the Okta Implementation Consultant completed the configuration of the Identity Provider (IdP), routing rules, custom authenticator, and authentication policies, target users are NOT able to use the custom MFA solutions as the second factor. The custom authenticator is inactive is a possible reason for the failure.",
        correctAnswer: true,
        reasoning: "This option is correct because the custom authenticator must be enabled and appropriately configured to use a custom Multifactor Authentication (MFA) solution as the second factor."
      },
      {
        id: "one-radius-agent-per-app",
        statement: "Sound Healthcare Technology wants to enforce Multifactor Authentication (MFA) for their employees who access the network remotely using a VPN. For technical reasons, the organization has multiple VPN solutions deployed on their infrastructure. Sound Healthcare Technology is unsure if a single Okta RADIUS server agent supports multiple integrations. A minimum of one Okta RADIUS server agent must be deployed for every RADIUS-enabled application.",
        correctAnswer: false,
        reasoning: "This option is incorrect because one RADIUS app (not one Okta RADIUS server agent) must be added in Okta for each RADIUS-enabled application being integrated with Okta."
      },
      {
        id: "multiple-radius-apps",
        statement: "Sound Healthcare Technology wants to enforce Multifactor Authentication (MFA) for their employees who access the network remotely using a VPN. For technical reasons, the organization has multiple VPN solutions deployed on their infrastructure. Sound Healthcare Technology is unsure if a single Okta RADIUS server agent supports multiple integrations. Multiple RADIUS apps must be added in Okta: one for each RADIUS-enabled application, configured with a different UDP port.",
        correctAnswer: true,
        reasoning: "This option is correct because the Okta RADIUS server agent supports multiple ports simultaneously but one RADIUS app must be added in Okta for each RADIUS-enabled application being integrated with Okta."
      },
      {
        id: "single-radius-app-multiple-ports",
        statement: "Sound Healthcare Technology wants to enforce Multifactor Authentication (MFA) for their employees who access the network remotely using a VPN. For technical reasons, the organization has multiple VPN solutions deployed on their infrastructure. Sound Healthcare Technology is unsure if a single Okta RADIUS server agent supports multiple integrations. A single RADIUS app must be added in Okta and the Okta Administrator must configure it with multiple ports, one for each RADIUS-enabled application.",
        correctAnswer: false,
        reasoning: "This option is incorrect because one RADIUS app must be added in Okta for each RADIUS-enabled application."
      },
      {
        id: "change-config-properties",
        statement: "Sound Healthcare Technology wants to enforce Multifactor Authentication (MFA) for their employees who access the network remotely using a VPN. For technical reasons, the organization has multiple VPN solutions deployed on their infrastructure. Sound Healthcare Technology is unsure if a single Okta RADIUS server agent supports multiple integrations. The Okta Implementation Consultant must change the config.properties file for the Okta RADIUS server agent and add one port number the agent will be listening to for each RADIUS-enabled application.",
        correctAnswer: false,
        reasoning: "This option is incorrect because the Okta RADIUS server agent supports multiple ports simultaneously."
      },
      {
        id: "email-change-broke-link",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology configured Workday as a source of truth for Okta. The Workday Administrator made updates to the emails of User A and User B, but only User A is reflecting changes in Okta after repeated imports. The email change has broken the link between Workday and Okta for User B is a potential cause of the issue.",
        correctAnswer: false,
        reasoning: "This option is incorrect because changes for User A are reflected in Okta although this user's email was changed."
      },
      {
        id: "user-not-linked-workday",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology configured Workday as a source of truth for Okta. The Workday Administrator made updates to the emails of User A and User B, but only User A is reflecting changes in Okta after repeated imports. User B is NOT linked to the corresponding profile in Workday is a potential cause of the issue.",
        correctAnswer: true,
        reasoning: "This option is correct because if User B is not linked to the corresponding profile in Workday, this information will not be imported in to Okta when Workday is configured as the profile source."
      },
      {
        id: "workday-real-time-sync",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology configured Workday as a source of truth for Okta. The Workday Administrator made updates to the emails of User A and User B, but only User A is reflecting changes in Okta after repeated imports. Workday Real Time Sync is NOT configured properly is a potential cause of the issue.",
        correctAnswer: false,
        reasoning: "This option is incorrect because changes for User A are reflected in Okta. If there was an issue with the Workday Real Time Sync configuration, changes for neither user would be reflected in Okta after import."
      },
      {
        id: "attribute-level-sourcing",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology configured Workday as a source of truth for Okta. The Workday Administrator made updates to the emails of User A and User B, but only User A is reflecting changes in Okta after repeated imports. Attribute-level sourcing is NOT configured correctly is a potential cause of the issue.",
        correctAnswer: true,
        reasoning: "This option is correct because attribute-level sourcing allows you to designate different profile sources for different user attributes. If Attribute-level sourcing is configured differently for Users A and B, User A could have been updated but not User B due to the different configurations."
      },
      {
        id: "incremental-import-impact",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology configured Workday as a source of truth for Okta. During testing, the Workday Administrator is NOT able to edit provisioned user groups. The Okta Implementation Consultant completed an incremental import of Workday users is a potential cause of the issue.",
        correctAnswer: false,
        reasoning: "This option is incorrect because an incremental import would not impact Workday Administrator's ability to edit provisioned users."
      },
      {
        id: "users-not-provisioned-to-ad",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology configured Workday as a source of truth for Okta. During testing, the Workday Administrator is NOT able to edit provisioned user groups. The users have NOT been provisioned from Workday to Active Directory is a potential cause of the issue.",
        correctAnswer: false,
        reasoning: "This option is incorrect because Workday is configured as the source of truth."
      },
      {
        id: "workday-admin-security-group",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology configured Workday as a source of truth for Okta. During testing, the Workday Administrator is NOT able to edit provisioned user groups. The Workday Administrator is a member of a security group that does NOT have modify permissions in Okta is a potential cause of the issue.",
        correctAnswer: true,
        reasoning: "This option is correct because the Workday Administrator must have the correct privileges to edit provisioned user groups. The Domain Security Policy is Provisioning Group Administration must be enabled and the Workday Administrator must belong to a security group with modify permissions in Okta."
      },
      {
        id: "domain-security-policy-disabled",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology configured Workday as a source of truth for Okta. During testing, the Workday Administrator is NOT able to edit provisioned user groups. The Domain Security Policy in Provisioning Group Administrator is disabled is a potential cause of the issue.",
        correctAnswer: true,
        reasoning: "This option is correct because the Workday Administrator must have the correct privileges to edit provisioned user groups. The Domain Security Policy in Provisioning Group Administration must be enabled and the Workday Administrator must belong to a security group with modify permissions in Okta."
      },
      {
        id: "custom-name-assigned",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology is configuring Multifactor Authentication (MFA) as a service for Active Directory Federation Services (ADFS). When the Okta Implementation Consultant attempts to log in to ADFS with a test user account, an error does NOT appear, but the Okta MFA prompt does NOT appear. The Okta Implementation Consultant assigned a custom name to the assigned test user account is a possible reason for this result.",
        correctAnswer: false,
        reasoning: "This option is incorrect because assigning a custom name to the assigned test user account is not a required step when configuring MFA for ADFS."
      },
      {
        id: "adfs-access-control-policy",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology is configuring Multifactor Authentication (MFA) as a service for Active Directory Federation Services (ADFS). When the Okta Implementation Consultant attempts to log in to ADFS with a test user account, an error does NOT appear, but the Okta MFA prompt does NOT appear. The Okta Implementation Consultant did NOT add the Access Control Policy to the relying party application is a possible reason for this result.",
        correctAnswer: true,
        reasoning: "This option is correct because adding the Access Control Policy to a Relying Party Application is a step that is required when configuring MFA for ADFS."
      },
      {
        id: "deny-app-sign-on-policy",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology is configuring Multifactor Authentication (MFA) as a service for Active Directory Federation Services (ADFS). When the Okta Implementation Consultant attempts to log in to ADFS with a test user account, an error does NOT appear, but the Okta MFA prompt does NOT appear. The Okta Implementation Consultant configured a Deny App Sign-on policy is a possible reason for this result.",
        correctAnswer: false,
        reasoning: "This option is incorrect because configuring a Deny App Sign-on policy is not a required step when configuring MFA for ADFS."
      },
      {
        id: "oag-admin-node-internal",
        statement: "An Okta Implementation Consultant needs to provide a list of security best practices recommended for an Okta Access Gateway (OAG) deployment to Sound Healthcare Technology's security team. Deploy Access Gateway admin node on the internal network is a security best practice to securely deploy OAG.",
        correctAnswer: true,
        reasoning: "This option is correct because Okta recommends deploying the Access Gateway admin node on the internal network, separate from worker nodes so that the admin node is unreachable from the public internet."
      },
      {
        id: "admin-node-public-internet",
        statement: "An Okta Implementation Consultant needs to provide a list of security best practices recommended for an Okta Access Gateway (OAG) deployment to Sound Healthcare Technology's security team. Confirm that the admin node is reachable from the public internet is a security best practice to securely deploy OAG.",
        correctAnswer: false,
        reasoning: "This option is incorrect because Okta recommends deploying the Access Gateway admin node on the internal network, separate from worker nodes so that the admin node is unreachable from the public internet."
      },
      {
        id: "self-signed-ssl-certificates",
        statement: "An Okta Implementation Consultant needs to provide a list of security best practices recommended for an Okta Access Gateway (OAG) deployment to Sound Healthcare Technology's security team. Use self-signed SSL certificates for end-users to access applications is a security best practice to securely deploy OAG.",
        correctAnswer: false,
        reasoning: "This option is incorrect because Okta recommends using public SSL certificates for end users to access applications. Certificates can be handled by the pre Access Gateway load balancer, or from within Access Gateway itself."
      },
      {
        id: "oag-change-passwords",
        statement: "An Okta Implementation Consultant needs to provide a list of security best practices recommended for an Okta Access Gateway (OAG) deployment to Sound Healthcare Technology's security team. Change passwords for the Access Gateway Management Console and Access Gateway Admin UI is a security best practice to securely deploy OAG.",
        correctAnswer: true,
        reasoning: "This option is correct because Okta recommends resetting the Admin UI and Management console default passwords."
      },
      {
        id: "resource-owner-password-flow",
        statement: "An Okta Implementation Consultant is configuring a native application for Sound Healthcare Technology that CANNOT store the secret. Resource owner password is the OpenID Connect flow that the Okta Implementation Consultant should choose.",
        correctAnswer: false,
        reasoning: "This option is incorrect because the Resource Owner Password flow is intended for use cases where you control both the client application and the resource that it is interacting with. It requires that the client secret can be trusted with the resource owner's credentials, and so is most commonly found in clients made for online services, like the Facebook client applications that interact with the Facebook service."
      },
      {
        id: "implicit-flow",
        statement: "An Okta Implementation Consultant is configuring a native application for Sound Healthcare Technology that CANNOT store the secret. Implicit flow is the OpenID Connect flow that the Okta Implementation Consultant should choose.",
        correctAnswer: false,
        reasoning: "This option is incorrect because the Implicit flow is a legacy flow used only for SPAs that cannot support PKCE."
      },
      {
        id: "native-app-pkce-flow",
        statement: "An Okta Implementation Consultant is configuring a native application for Sound Healthcare Technology that CANNOT store the secret. Authorization code + PKCE flow is the OpenID Connect flow that the Okta Implementation Consultant should choose.",
        correctAnswer: true,
        reasoning: "This option is correct because the Authorization Code flow with Proof Key for Code Exchange (PKCE) is the most recommended flow for most applications whether server-side (web), native, or mobile."
      },
      {
        id: "client-credentials-flow",
        statement: "An Okta Implementation Consultant is configuring a native application for Sound Healthcare Technology that CANNOT store the secret. Client Credentials flow is the OpenID Connect flow that the Okta Implementation Consultant should choose.",
        correctAnswer: false,
        reasoning: "This option is incorrect because the Client Credentials flow is intended for server-side (\"confidential\") client applications with no end user, which normally describes machine-to-machine communication. The application must be server-side because it must be trusted with the client secret, and since the credentials are hard-coded, it cannot be used by an actual end user."
      },
      {
        id: "behavior-detection-new-geolocation",
        statement: "A company has a user in Chicago, Illinois. This user logged in to Okta at 3:00 PM CDT and 25 minutes later, the same user attempted to log in from Bucharest, Romania. New geolocation is the component of behavior detection that is responsible for flagging this issue.",
        correctAnswer: false,
        reasoning: "This option is incorrect because this setting checks against the last 20 successful sign-in attempts for locations that are outside a 20-kilometer radius of the locations of prior, successful sign-in attempts."
      },
      {
        id: "behavior-detection-velocity",
        statement: "A company has a user in Chicago, Illinois. This user logged in to Okta at 3:00 PM CDT and 25 minutes later, the same user attempted to log in from Bucharest, Romania. Velocity is the component of behavior detection that is responsible for flagging this issue.",
        correctAnswer: true,
        reasoning: "This option is correct because this setting checks against the geographic distance and time elapsed between two successive sign-in attempts."
      },
      {
        id: "behavior-detection-device",
        statement: "A company has a user in Chicago, Illinois. This user logged in to Okta at 3:00 PM CDT and 25 minutes later, the same user attempted to log in from Bucharest, Romania. Device is the component of behavior detection that is responsible for flagging this issue.",
        correctAnswer: false,
        reasoning: "This option is incorrect because this setting checks a device that hasn't been the source of a prior, successful sign-in attempt."
      },
      {
        id: "third-party-admin-password-changed",
        statement: "An Okta Implementation Consultant completed an integration of single sign-on with Sound Healthcare Technology's Salesforce instance. When the Okta Implementation Consultant access the Tasks page in the Okta dashboard, the following error is displayed: 'Automate provisioning of user John Doe to app Salesforce.com failed: Matching user not found'. The third-party admin password was changed but NOT updated in Okta is the possible cause of this error message.",
        correctAnswer: false,
        reasoning: "This option is incorrect because it is associated with a different error: 'Automatic provisioning of user John Doe to app Salesforce.com failed: The credentials used to connect to the API were invalid; please check your configuration.'"
      },
      {
        id: "user-role-licensing-incorrect",
        statement: "An Okta Implementation Consultant completed an integration of single sign-on with Sound Healthcare Technology's Salesforce instance. When the Okta Implementation Consultant access the Tasks page in the Okta dashboard, the following error is displayed: 'Automate provisioning of user John Doe to app Salesforce.com failed: Matching user not found'. The user was assigned to the integration but does NOT have the correct level of user role or licensing is the possible cause of this error message.",
        correctAnswer: false,
        reasoning: "This option is incorrect because it is associated with a different error: 'Automatic provisioning of user John Doe to app Salesforce.com failed: License Limit exceeded.'"
      },
      {
        id: "provisioning-create-option",
        statement: "An Okta Implementation Consultant completed an integration of single sign-on with Sound Healthcare Technology's Salesforce instance. When the Okta Implementation Consultant access the Tasks page in the Okta dashboard, the following error is displayed: 'Automate provisioning of user John Doe to app Salesforce.com failed: Matching user not found'. The provisioning feature is enabled in Okta but the create, update, and deactivate users options are NOT turned on is the possible cause of this error message.",
        correctAnswer: true,
        reasoning: "This option is correct because the error message tells you that the Create user option is not on, as the error message states that it was unable to find a user in the Salesforce application that matches this user, and therefore it could not assign the app integration."
      },
      {
        id: "third-party-admin-password-expired",
        statement: "An Okta Implementation Consultant completed an integration of single sign-on with Sound Healthcare Technology's Salesforce instance. When the Okta Implementation Consultant access the Tasks page in the Okta dashboard, the following error is displayed: 'Automate provisioning of user John Doe to app Salesforce.com failed: Matching user not found'. The third-party admin account reached a password expiration date is the possible cause of this error message.",
        correctAnswer: false,
        reasoning: "This option is incorrect because it is associated with a different error: 'Automatic provisioning of user John Doe to app Salesforce.com failed: The credentials used to connect to the API were invalid; please check your configuration.'"
      },
      {
        id: "dsso-jit-samaccountname-lookup",
        statement: "Sound Healthcare Technology configured agentless Desktop Single Sign-On (DSSO) and Just-In Time (JIT) Provisioning. When a user that has NOT been imported into Okta tries to log in via agentless DSSO, the correct flow is: 1. The web browser sends the Kerberos ticket to Okta. 2. The Okta Active Directory Agent looks up the user's SAMAccountName. 3. If the user's SAMAccountName is found, Okta validates the Kerberos ticket. 4. Okta creates the user. 5. The user signs in successfully.",
        correctAnswer: false,
        reasoning: "This option is incorrect because in Step 2, the Okta Active Directory Agent looks up the user's UPN."
      },
      {
        id: "dsso-jit-upn-lookup",
        statement: "Sound Healthcare Technology configured agentless Desktop Single Sign-On (DSSO) and Just-In Time (JIT) Provisioning. When a user that has NOT been imported into Okta tries to log in via agentless DSSO, the correct flow is: 1. The web browser sends the Kerberos ticket to Okta. 2. The Okta Active Directory Agent looks up the user's UPN. 3. If the user's UPN is found, Okta validates the Kerberos ticket. 4. Okta creates the user. 5. The user signs in successfully.",
        correctAnswer: true,
        reasoning: "This option is correct because if a user has not been imported into Okta and logs in via agentless DSSO with JIT enabled, Okta uses the UPN to validate the user. If the Okta username format isn't a UPN and instead uses another format, Okta ignores this setting and uses the UPN validation."
      },
      {
        id: "dsso-jit-domain-controller-lookup",
        statement: "Sound Healthcare Technology configured agentless Desktop Single Sign-On (DSSO) and Just-In Time (JIT) Provisioning. When a user that has NOT been imported into Okta tries to log in via agentless DSSO, the correct flow is: 1. The web browser sends the Kerberos ticket to Okta. 2. The domain controller looks up the user's UPN. 3. If the user's UPN is found, Active Directory validates the Kerberos ticket. 4. Okta creates the user. 5. The user signs in successfully.",
        correctAnswer: false,
        reasoning: "This option is incorrect because the Okta Active Directory Agent, not the domain controller, performs the UPN lookup, and Okta, not Active Directory, validates the Kerberos ticket."
      },
      {
        id: "fastpass-private-browser",
        statement: "An Okta Implementation Consultant configured Okta FastPass for employees and contractors at Sound Healthcare Technology. During testing, the Okta Implementation Consultant signs in to Salesforce on a macOS desktop set up for authentication with Okta FastPass. The Okta Implementation Consultant then logs out and attempts to sign in to Salesforce from a private browser window (Incognito mode). The user automatically logged in is the behavior the Okta Implementation Consultant should expect.",
        correctAnswer: true,
        reasoning: "This option is correct because on macOS or Windows desktops set up for authentication with Okta FastPass, if users access the Okta End-User Dashboard from a private browser windows (Incognito mode), they gain access to the page as if they were in a regular browser session. Okta Verify runs on the desktop, verifies the identity of the users, and grants them access to the dashboard. The authentication is not affected by the browser mode (regular or private)."
      },
      {
        id: "fastpass-mfa-prompt",
        statement: "An Okta Implementation Consultant configured Okta FastPass for employees and contractors at Sound Healthcare Technology. During testing, the Okta Implementation Consultant signs in to Salesforce on a macOS desktop set up for authentication with Okta FastPass. The Okta Implementation Consultant then logs out and attempts to sign in to Salesforce from a private browser window (Incognito mode). The user is prompted for Multifactor Authentication (MFA) is the behavior the Okta Implementation Consultant should expect.",
        correctAnswer: false,
        reasoning: "This option is incorrect because on macOS or Windows desktops set up for authentication with Okta FastPass the authentication is not affected by the browser mode (regular or private)."
      },
      {
        id: "fastpass-redirected-to-signin",
        statement: "An Okta Implementation Consultant configured Okta FastPass for employees and contractors at Sound Healthcare Technology. During testing, the Okta Implementation Consultant signs in to Salesforce on a macOS desktop set up for authentication with Okta FastPass. The Okta Implementation Consultant then logs out and attempts to sign in to Salesforce from a private browser window (Incognito mode). The user is redirected to the Okta sign-in page is the behavior the Okta Implementation Consultant should expect.",
        correctAnswer: false,
        reasoning: "This option is incorrect because on macOS or Windows desktops set up for authentication with Okta FastPass, the authentication is not affected by the browser mode (regular or private)."
      },
      {
        id: "fastpass-prompted-for-credentials",
        statement: "An Okta Implementation Consultant configured Okta FastPass for employees and contractors at Sound Healthcare Technology. During testing, the Okta Implementation Consultant signs in to Salesforce on a macOS desktop set up for authentication with Okta FastPass. The Okta Implementation Consultant then logs out and attempts to sign in to Salesforce from a private browser window (Incognito mode). The user is prompted to enter credentials is the behavior the Okta Implementation Consultant should expect.",
        correctAnswer: false,
        reasoning: "This option is incorrect because on macOS or Windows desktops set up for authentication for Okta FastPass, the authentication is not affected by the browser mode."
      }
    ]
  }
];