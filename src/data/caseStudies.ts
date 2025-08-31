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
        id: "workday-priority",
        statement: "Sound Healthcare Technology configured Okta to bring in users from Workday HR, Active Directory, and a CSV file. All three identity stores are configured to be a profile source. In some cases, users will exist in two of the identity stores, and in some cases a user may exist in all three identity stores. The business requirements include using Workday data if it is available for a user, and the Workday data should be reflected in Okta. Set Workday as priority 1 in profile sources is the correct priority setting that the Okta Implementation Consultant must set to achieve the requirements.",
        correctAnswer: true,
        reasoning: "This option is correct because setting Workday as priority 1 achieves the goal of using Workday data as the source, if it is available for the user."
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
        id: "radius-multiple-apps",
        statement: "Sound Healthcare Technology wants to enforce Multifactor Authentication (MFA) for their employees who access the network remotely using a VPN. For technical reasons, the organization has multiple VPN solutions deployed on their infrastructure. Sound Healthcare Technology is unsure if a single Okta RADIUS server agent supports multiple integrations. Multiple RADIUS apps must be added in Okta: one for each RADIUS-enabled application, configured with a different UDP port.",
        correctAnswer: true,
        reasoning: "This option is correct because the Okta RADIUS server agent supports multiple ports simultaneously but one RADIUS app must be added in Okta for each RADIUS-enabled application being integrated with Okta."
      },
      {
        id: "user-not-linked-workday",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology configured Workday as a source of truth for Okta. The Workday Administrator made updates to the emails of User A and User B, but only User A is reflecting changes in Okta after repeated imports. User B is NOT linked to the corresponding profile in Workday is a potential cause of the issue.",
        correctAnswer: true,
        reasoning: "This option is correct because if User B is not linked to the corresponding profile in Workday, this information will not be imported in to Okta when Workday is configured as the profile source."
      },
      {
        id: "attribute-level-sourcing",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology configured Workday as a source of truth for Okta. The Workday Administrator made updates to the emails of User A and User B, but only User A is reflecting changes in Okta after repeated imports. Attribute-level sourcing is NOT configured correctly is a potential cause of the issue.",
        correctAnswer: true,
        reasoning: "This option is correct because attribute-level sourcing allows you to designate different profile sources for different user attributes. If Attribute-level sourcing is configured differently for Users A and B, User A could have been updated but not User B due to the different configurations."
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
        id: "adfs-access-control-policy",
        statement: "The Okta Implementation Consultant for Sound Healthcare Technology is configuring Multifactor Authentication (MFA) as a service for Active Directory Federation Services (ADFS). When the Okta Implementation Consultant attempts to log in to ADFS with a test user account, an error does NOT appear, but the Okta MFA prompt does NOT appear. The Okta Implementation Consultant did NOT add the Access Control Policy to the relying party application is a possible reason for this result.",
        correctAnswer: true,
        reasoning: "This option is correct because adding the Access Control Policy to a Relying Party Application is a step that is required when configuring MFA for ADFS."
      },
      {
        id: "oag-admin-node-internal",
        statement: "An Okta Implementation Consultant needs to provide a list of security best practices recommended for an Okta Access Gateway (OAG) deployment to Sound Healthcare Technology's security team. Deploy Access Gateway admin node on the internal network is a security best practice to securely deploy OAG.",
        correctAnswer: true,
        reasoning: "This option is correct because Okta recommends deploying the Access Gateway admin node on the internal network, separate from worker nodes so that the admin node is unreachable from the public internet."
      },
      {
        id: "oag-change-passwords",
        statement: "An Okta Implementation Consultant needs to provide a list of security best practices recommended for an Okta Access Gateway (OAG) deployment to Sound Healthcare Technology's security team. Change passwords for the Access Gateway Management Console and Access Gateway Admin UI is a security best practice to securely deploy OAG.",
        correctAnswer: true,
        reasoning: "This option is correct because Okta recommends resetting the Admin UI and Management console default passwords."
      },
      {
        id: "native-app-pkce-flow",
        statement: "An Okta Implementation Consultant is configuring a native application for Sound Healthcare Technology that CANNOT store the secret. Authorization code + PKCE flow is the OpenID Connect flow that the Okta Implementation Consultant should choose.",
        correctAnswer: true,
        reasoning: "This option is correct because the Authorization Code flow with Proof Key for Code Exchange (PKCE) is the most recommended flow for most applications whether server-side (web), native, or mobile."
      },
      {
        id: "behavior-detection-velocity",
        statement: "A company has a user in Chicago, Illinois. This user logged in to Okta at 3:00 PM CDT and 25 minutes later, the same user attempted to log in from Bucharest, Romania. Velocity is the component of behavior detection that is responsible for flagging this issue.",
        correctAnswer: true,
        reasoning: "This option is correct because this setting checks against the geographic distance and time elapsed between two successive sign-in attempts."
      },
      {
        id: "provisioning-create-option",
        statement: "An Okta Implementation Consultant completed an integration of single sign-on with Sound Healthcare Technology's Salesforce instance. When the Okta Implementation Consultant access the Tasks page in the Okta dashboard, the following error is displayed: 'Automate provisioning of user John Doe to app Salesforce.com failed: Matching user not found'. The provisioning feature is enabled in Okta but the create, update, and deactivate users options are NOT turned on is the possible cause of this error message.",
        correctAnswer: true,
        reasoning: "This option is correct because the error message tells you that the Create user option is not on, as the error message states that it was unable to find a user in the Salesforce application that matches this user, and therefore it could not assign the app integration."
      },
      {
        id: "dsso-jit-upn-lookup",
        statement: "Sound Healthcare Technology configured agentless Desktop Single Sign-On (DSSO) and Just-In Time (JIT) Provisioning. When a user that has NOT been imported into Okta tries to log in via agentless DSSO, the correct flow is: 1. The web browser sends the Kerberos ticket to Okta. 2. The Okta Active Directory Agent looks up the user's UPN. 3. If the user's UPN is found, Okta validates the Kerberos ticket. 4. Okta creates the user. 5. The user signs in successfully.",
        correctAnswer: true,
        reasoning: "This option is correct because if a user has not been imported into Okta and logs in via agentless DSSO with JIT enabled, Okta uses the UPN to validate the user. If the Okta username format isn't a UPN and instead uses another format, Okta ignores this setting and uses the UPN validation."
      },
      {
        id: "fastpass-private-browser",
        statement: "An Okta Implementation Consultant configured Okta FastPass for employees and contractors at Sound Healthcare Technology. During testing, the Okta Implementation Consultant signs in to Salesforce on a macOS desktop set up for authentication with Okta FastPass. The Okta Implementation Consultant then logs out and attempts to sign in to Salesforce from a private browser window (Incognito mode). The user automatically logged in is the behavior the Okta Implementation Consultant should expect.",
        correctAnswer: true,
        reasoning: "This option is correct because on macOS or Windows desktops set up for authentication with Okta FastPass, if users access the Okta End-User Dashboard from a private browser windows (Incognito mode), they gain access to the page as if they were in a regular browser session. Okta Verify runs on the desktop, verifies the identity of the users, and grants them access to the dashboard. The authentication is not affected by the browser mode (regular or private)."
      }
    ]
  }
];