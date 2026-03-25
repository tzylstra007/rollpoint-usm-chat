// Roll Point USM Expert Chatbot — Vercel Serverless Proxy
// Knowledge Base: Mastering USM Guide v6.04 + Mastering USM Glossary v6.04

const SYSTEM_PROMPT = `You are the USM Expert Assistant for Roll Point LLC, the consulting firm of Tom Zylstra — the foremost expert on the Smartsheet User Subscription Model (USM) licensing architecture and the author of the Mastering USM Guide and Companion Glossary.

Your sole knowledge base is the Mastering USM Guide (v6.04) and the Mastering USM Glossary (v6.04) — both authored by Roll Point LLC / Software X. Answer ONLY from this content.

RULES:
- Answer complex, precise questions about USM licensing with authority and accuracy
- Use proper USM terminology (iPMQA, ePMQA, NTURPC, Provisional Member, Seat Type, SysAdmin, AAU, etc.)
- If a question is outside the scope of these documents, say so clearly and suggest scheduling a consultation at rollpointllc.com
- Never guess or fabricate. If the answer is not in the documents, say so.
- Be concise but thorough — visitors are Smartsheet admins, IT leaders, and procurement teams
- End every answer with: "For deeper analysis, schedule a consultation at rollpointllc.com"
- You are the Roll Point USM Expert Assistant

=== MASTERING USM GUIDE (v6.04) ===
Mastering USM
Mastering USM details the Smartsheet next generation licensing model. The guide covers all unique USM functions, 
documenting both the requirements and results of each function. USM is a dynamic methodology whereby multiple 
dimensions determine the status of every user.
The goal of Mastering USM is a dynamically updated comprehensive reference for achieving optimal management of the 
Smartsheet service
Research incorporates detailed examination of every aspect of model design and operation; confirmation of published 
instructions and is updated soon after each Smartsheet USM modification. In short "Operational Certainty"
1

Mastering Getting Started USM
Mastering USM - Usage Instructions:
● Add this Google Slide URL as a Browser Bookmark for frequent access
● Add the Companion Glossary Google Doc URL as a Browser Bookmark for frequent access
● Enter Google Slides Slideshow mode to optimize viewing, navigate via the navigation links, leverage the 
Mastering USM Companion Glossary by selecting the “A-Z” navigation link icon 
● Many Mastering USM Slides include a “Conditions Panel” - the values in the panel define the attributes 
Smartsheet requires of either the User performing the USM Action or Targeted User
● If you have feedback specific to content within the Mastering USM Guide, select the “talk” navigation icon
● If you have any questions specific to the Smartsheet USM policy or functionality, please utilize the Smartsheet
Support Portal
● Please utilize the “Schedule Consult” Icon to discuss an overview of your Smartsheet Licensing challenges & 
goals
● If you have questions regarding Software X consulting services, please contact us at sales@thesoftwarex.com
Overview
USM Summary - Upgrades & Downgrades
USM - Plan Transition to USM
USM - Create New User Features
USM - Upgrade Features
USM - Downgrade Features
USM - Remove Features
USM - Report Features
USM Architecture - Smartsheet Group Features
USM - True Up Features
USM - Change Log
USM - Key Insights
USM - API Features
USM - Member Training Features
Mastering USM - Analysis Design
USM - User Attribute Features
Table of Contents
Mastering USM
Mastering
USM
USM Overview
Mastering
USM USM Dashboard - Metrics, Reports, Change Log, Resources
Mastering USM Insight
Available within Mastering USM 
Header throughout Guide
Mastering
USM Core Functions USM
Transition to USM
Existing Smartsheet 
Plan is converted or 
“transitioned” to User 
Subscription Model
Add Users
USM Users are added 
to a Smartsheet Plan 
by three different 
methods
Upgrade 
Users
USM Users are 
upgraded by eight 
different methods
Remove Users
USM Users are 
removed by three 
different methods
Downgrade 
Users
Three USM Seat Type 
Downgrades are 
supported
Mastering
LCM & USM Comparisons USM
USM Diverges from LCM in several administrative and functional areas
Seat Types
● Legacy Collaborator Model (LCM) has 3 Internal Seat Types and 1 External Seat Type
● User Subscription Model (USM) has 3 Internal Seat Types and 4 External Seat Types
Function
● LCM - All Seat Types were capable of View & Edit functionality
● USM - Specific Internal & External Seat Types have Edit functionality
● USM - Internal Users with Edit functionality are Members
● USM - External Users with Edit functionality are either Members or Guests
Licensing
● LCM - Only Internal Seat Types can be Licensed if approved by a SysAdmin
● USM - All Seat Types can initially be upgraded to Licensed by End User Actions, post downgrade only SysAdmins
Plan Membership
● LCM - Internal Seat Types can be a member of one Internal Smartsheet Plan, External Seat Types are not members 
of any External Smartsheet Plans
● USM - Internal Seat Types can be a “member” (i.e. Member or Viewer) of one* to many Internal & External 
Smartsheet Plans, External Seat Types can be a “member” (i.e. Member, Guest, Viewer) of one to many Internal & 
External Smartsheet Plans
Default Plan (Controls Security Login, Location of User Created Assets)
● LCM - Internal & External Seat Types always have one “Default Plan” which is not modifiable
● USM - Internal & External Seat Types always have one “Default Plan” which is modifiable
* Centralized Operation Limited to 1 Internal Plan Membership 
Mastering
USM Legacy Collaborator Model (LCM) & User Subscription Model (USM)
Comparison: Smartsheet Licensing Models
Legacy Collaborator Model (LCM) User Subscription Model (USM)
Licensing 
Process
Trial User - End of Trial Auto Reversion to Non-Licensed User, 
Upgrade to Licensed User requires SysAdmin Approval
Provisional Member - Asset Creation*, Design & Collaboration, Auto 
Downgrade to Viewer*** Upgrade to Member requires SysAdmin Approval
Viewer & Guest - Users Upgraded to Provisional Members via Authorized 
Asset User (AAU) Actions, Auto Downgrade to Viewer or Guest*** Upgrade 
to Member requires SysAdmin Approval
Internal User: 
Licensed
Licensed User - Asset Creation, Design & Collaboration
(+ Connected User)
Internal Member - Asset Creation*, Design & Collaboration
Internal User: 
Non-Licensed
Non-Licensed User - Collaboration (Edit, Comment, View)
(+ Connected User, +WorkApps Collaborator Licensing)
Internal Viewer - Asset Collaboration (View)
External User: 
Licensed
N/A External Member - Asset Creation* & Collaboration
(Admin, Edit, Comment, View)
External User: 
Non-Licensed
External Collaborator - Collaboration (Edit, Comment, View)
(+ Connected User, WorkApps Collaborator)
Guest - Collaboration (Share, Edit, Comment, View)
External Viewer - Collaboration (View)
User Plan 
Memberships
One Internal Plan Unlimited Internal** & External Plans
Default Plan Limited to Internal Plan Internal or External Plan (User Managed)
* Users Default Plan Only ** Centralized Operation Limited to 1 Internal Plan Membership *** Conversion @ end of Plan True-Up Cycle 

Mastering
USM
Overview - Paths to USM Member Seat Type
1 2
Gain Permission
User Shared to a Plan 
Asset (Workspace, Sheet, 
Report, Dashboard) at an 
upgraded permission 
level 
“Qualifying Action”
User performs one of 
several monitored actions 
on Plan Asset
Trial License
User upgraded to “Provisional 
Member” until next invoice 
cycle, then auto downgrades 
unless manually upgraded to 
“Member”
3
Manual Upgrade
SysAdmin Manually 
Upgrades User to 
Member
1
OR
O
K
Eligibility: Not Previously Downgraded Eligibility: All Users
Mastering
USM
Solution Summary:
USM Upgrades & 
Downgrades
Mastering
USM
Upgrade Internal Viewer to Plan Provisional Member:
Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Mastering USM Summary
Group Manager: Add Viewer to Group
(Group Shared currently/future to Any Plan Asset Above Viewer Permission) 2
Unmanaged Asset Mgr: Approve Viewer Sharing 
Request
(Plan Asset has No Current Admin User or Group)
3
Authorized Asset User Shares Plan Asset(s) to Group
(Group Shared currently/future to Any Plan Asset Above Viewer Permission)
4
Authorized Asset User Shares Plan Asset(s) to Viewer
(Shared Above Viewer Permission)
5
Viewer Requests Sharing to Plan Asset
(Asset Owner or Admin Approves Above Viewer Permission)
6
Plan Admin Actions Plan End User “Trigger” Actions
Upgrade Logic: Upon 1st “Internal Provisional Member Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core Asset
● Approve Sharing Permission Request for a Plan Core Asset
● Delete a Plan Core Asset
SysAdmin: Upgrade Internal Viewer to Member* 1
*User Upgrades to Member, bypassing Provisional Member
Viewer Edits Published Plan Sheet
(Asset Owner or Admin enables Publish Sheet Edit by Shared To/Plan Users)
7
User cannot be a Previously Downgraded Member
User cannot be a Previously Downgraded Member
User cannot be a Previously Downgraded Member
User cannot be a Previously Downgraded Member
User cannot be a Previously Downgraded Member
+

Mastering
USM
Upgrade Guest to Plan Provisional Member: 
Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Mastering USM Summary
Group Manager: Add Viewer to Group
(Group Shared currently/future to Any Plan Asset at Admin Permission) 2
Unmanaged Asset Mgr: Approve Viewer Sharing 
Request for Admin Permission
(Plan Asset has No Current Admin User or Group)
3
Authorized Asset User Shares Plan Asset(s) to Group
(Group Shared currently/future to Any Plan Asset at Admin Permission)
4
Authorized Asset User Shares Plan Asset(s) to Viewer
(Shared at Admin Permission)
5
Viewer Requests Sharing to Plan Asset
(Asset Owner or Admin Approves at Admin Permission) 6
Plan Admin Actions Plan End User Actions
Upgrade Logic: Upon 1st “External Provisional Member Qualifying Action” (ePMQA)” 
User is upgraded to External Provisional Member:
● Modify Permissions for a Plan Core Asset
● Create, Edit, or Delete a Plan Sheet Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet Form + ● + 12 Additional Actions
SysAdmin: Upgrade Guest to Member* 1
Schedule *User Upgrades to Member, bypassing Provisional Member
Consult
User cannot be a Previously Downgraded Member
User cannot be a Previously Downgraded Member
User cannot be a Previously 
Downgraded Member
User cannot be a Previously 
Downgraded Member
User cannot be a Previously 
Downgraded Member

Mastering
USM
Upgrade External Viewer to Plan Provisional Member: 
Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Mastering USM Summary
Group Manager: Add Viewer to Group
(Group Shared currently/future to Any Plan Asset at Admin Permission)
2
Unmanaged Asset Mgr: Approve Viewer Sharing 
Request for Admin Permission
(Plan Asset has No Current Admin User or Group)
3
Authorized Asset User Shares Plan Asset(s) to Group
(Group Shared currently/future to Any Plan Asset at Admin Permission)
4
Authorized Asset User Shares Plan Asset(s) to Viewer
(Shared at Admin Permission)
5
Viewer Requests Sharing to Plan Asset
(Asset Owner or Admin Approves at Admin Permission)
6
Plan Admin Actions Plan End User Actions
Upgrade Logic: Upon 1st “External Provisional Member Qualifying Action” (ePMQA)” 
User is upgraded to External Provisional Member:
● Modify Permissions for a Plan Core Asset
● Create, Edit, or Delete a Plan Sheet Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet Form + ● + 12 Additional Actions
SysAdmin: Upgrade External Viewer to Member* 1
Schedule *User Upgrades to Member, bypassing Provisional Member
Consult
User cannot be a Previously 
Downgraded Member
User cannot be a Previously 
Downgraded Member
User cannot be a Previously 
Downgraded Member
User cannot be a Previously 
Downgraded Member
User cannot be a Previously 
Downgraded Member

Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer: 
Mastering USM Summary
1 - Workspaces 2 - Sheets
4 - WorkApps 5 - Dynamic Views
3 - Groups
6 - API Tokens
7 - Group Admin 8 - Plan Admin 9 - SysAdmin 10 - Data Egress 11 - Data Retention
Workspaces Sheets Groups
WorkApps Dynamic Views API Tokens
Group 
Admin
Plan 
Admin SysAdmin Data 
Egress
Data 
Retention
= Reduced
= Removed
✔ SysAdmin
 
Plan
Type(s)
✔ Enterprise ✔ Pro
✔ Business Free
✔Centralized
✔Decentralized
Plan
Role(s)
Op.
Mode(s)
Mastering
USM Downgrade External Plan Member / Provisional Member to Guest: 
Mastering USM Summary
1 - Workspaces 2 - Sheets
4 - WorkApps
5 - Dynamic Views
3 - Groups
Workspaces Sheets
Groups WorkApps
Dynamic Views
= Reduced
= Removed
✔ SysAdmin
 
Plan
Type(s)
✔ Enterprise Pro
✔ Business Free
✔Centralized
✔Decentralized
Plan
Role(s)
Op.
Mode(s)
Mastering
USM Downgrade External Plan Member / Provisional Member to Viewer: 
Mastering USM Summary
1 - Workspaces 2 - Sheets
4 - WorkApps 5 - Dynamic Views
3 - Groups Workspaces Sheets Groups
WorkApps Dynamic Views
= Reduced
= Removed
✔ SysAdmin
 
Plan
Type(s)
✔ Enterprise ✔ Pro
✔ Business Free
✔Centralized
✔Decentralized
Plan
Role(s)
Op.
Mode(s)
Mastering
USM
Plan Transition 
to USM
Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise ✔Pro
✔ Business Free
LCM Plan Transition - USM Transition Member Count Calculator: 
Existing Plan Licensed User Automatically Transitioned to Internal Member
Plan
Type(s)
Op.
Mode(s)
Plan 
User
LCM
USM
✔Licensed User External Collaborator
 Non Licensed User
Plan
Align
✔Internal
 External
Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise ✔Pro
✔ Business Free
Plan 
User
LCM
 Licensed User External Collab
✔Non Licensed User
USM
WorkApps
Non Licensed User Plan Assets Plan Asset Shared to Directly or Via Group
Plan Asset Share Permission Role
 Employee Benefits G V IV
 Engineering Designs G CO IPM
 Eng - R798 Design U E IPM
 J798 - My Designs U E IPM
 New Products G A IPM
Plan
Align
✔ Internal
 External
Plan
Type(s)
Op.
Mode(s)
LCM Plan Transition - USM Transition Member Count Calculator: 
Existing Plan Non Licensed User Initially Transitioned to Internal Provisional Member:
1)Shared to Plan Asset(s) @ > Viewer Permission & 2) Last “iPMQA” < 90 Days Prior then 3) auto-downgrades to Viewer @ NTURPC unless 
SysAdmin Upgrades to Member
“Internal Member Level Qualifying Action (iPMQA)” 
User transitioned as Internal Provisional Member if 
they performed any of following once in last 90 days:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core 
Asset
● Approve Sharing Permission Request for a 
Plan Core Asset
● Delete a Plan Core Asset
1
2
Mastering
USM
LCM Plan Transition - USM Transition Member Count Calculator: 
Existing Plan Non Licensed User Initially Transitioned to Internal Viewer if:
1)Shared to Plan Asset(s) @ > Viewer Permission & 2) Zero “iMLA” < 90 Days Prior
✔Centralized
✔Decentralize
d
✔ Enterprise ✔Pro
✔ Business Free
Plan 
User
LCM
 Licensed User External Collab
✔Non Licensed User
USM
WorkApps
Non Licensed User Plan Assets Plan Asset Shared to Directly or Via Group
Plan Asset Share Permission Role
 Employee Benefits G V IV
 Engineering Designs G CO IPM
 Eng - R798 Design U E IPM
 J798 - My Designs U E IPM
 New Products G A IPM
Plan
Align
✔ Internal
 External
Plan
Type(s)
Op.
Mode(s)
“Internal Member Level Qualifying Action (iPMQA)” 
User transitioned as Internal Viewer if they did not 
perform any of following once in last 90 days:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core 
Asset
● Approve Sharing Permission Request for a 
Plan Core Asset
● Delete a Plan Core Asset
1
2
Mastering
USM
LCM Plan Transition - USM Transition Member Count Calculator: 
Existing Plan Non Licensed User Transitioned to Internal Viewer if:
Highest Permission Shared to Plan Asset(s) is Viewer
✔Centralized
✔Decentralize
d
✔ Enterprise ✔Pro
✔ Business Free
Plan 
User
LCM
USM
WorkApps
Non Licensed User Plan Assets Plan Asset Shared to Directly or Via Group
Plan Asset Share Permission Role
 General Counsel U V V
 Health Tips U V V
 Intern Roster U V V
 Legal Research U V V
 Suppliers G V V
 Licensed User External Collab
✔Non Licensed User
Plan
Align
✔ Internal
 External
Plan
Type(s)
Op.
Mode(s)
Mastering
USM
LCM Plan Transition - USM Transition Member Count Calculator: 
Existing Plan External Collaborator User Initially Transitioned to External Provisional Member if:
1) Shared to Plan Asset(s) @ Admin Permission & 2) Last “eMLA” < 90 Days Prior then 3) auto-downgrades to Guest @ NTURPC unless 
SysAdmin Upgrades to Member
✔ Enterprise ✔Pro
✔ Business Free
Plan 
User
 Licensed User ✔External 
Collab Non Licensed User
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
LCM
USM
WorkApps
External Collaborator Plan Assets Plan Asset Shared to Directly or Via Group
Plan Asset Share Permission Role
 Engineering Feedback G V
 External Media G CO
 Joint Marketing U E
 Supplier Designs U A
Plan
Align
 Internal
✔ External
Plan
Type(s)
Op.
Mode(s)
^Most External Members cannot create assets in another organizations Plan
“External Provisional Member Qualifying 
Action” (ePMQA)” transitioned as External 
Provisional Member if they performed any of 
following once in last 90 days:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
Plan 
User
1
2
Mastering
USM
LCM Plan Transition - USM Transition Member Count Calculator: 
Existing Plan External Collaborator User Initially Transitioned to External Provisional Member if:
1) Shared to Plan Asset(s) @ Admin Permission & 2) Last “ePMQA” < 90 Days Prior then 3) auto-downgrades to Viewer @ NTURPC unless 
SysAdmin Upgrades to Member
✔ Enterprise ✔Pro
✔ Business Free
Plan 
User
 Licensed User ✔External 
Collab Non Licensed User
✔Centralized
✔Decentralize
d
Enterprise ✔ Pro
Business Free
LCM
USM
WorkApps
External Collaborator Plan Assets Plan Asset Shared to Directly or Via Group
Plan Asset Share Permission Role
 Engineering Feedback G V
 External Media G CO
 Joint Marketing U E
 Supplier Designs U A
Plan
Align
 Internal
✔ External
Plan
Type(s)
Op.
Mode(s)
^Most External Members cannot create assets in another organizations Plan
“External Provisional Member Qualifying 
Action” (ePMQA)” transitioned as External 
Provisional Member if they performed any of 
following once in last 90 days:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
Plan 
User
1
2
Mastering
USM
LCM Plan Transition - USM Transition Member Count Calculator:
Existing Plan External Collaborator User Initially Transitioned to Guest if:
1) Shared to Plan Asset(s) @ > Viewer Permission & < Admin Permission + 2) Last “GLA” < 90 Days Prior
✔ Enterprise ✔Pro
✔ Business Free
Plan 
User
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
Plan 
User
LCM
Licensed User ✔External Collab
Non Licensed User
USM
WorkApps
External Collaborator Plan Assets Plan Asset Shared to Directly or Via Group
Plan Asset Share Permission Role
 Engineering Feedback G V
 External Media G CO G
 Joint Marketing U E G
 Supplier Designs U E G
Plan
Align
 Internal
✔ External
Plan
Type(s)
Op.
Mode(s)
“Guest Level Action (GLA)” transitioned as Guest 
if they performed any of following once in last 90 
days:
● Comment in Plan Sheet
● Edit Plan Sheet
● Share Plan Asset 
1
2
Mastering
USM
LCM Plan Transition - USM Transition Member Count Calculator:
Existing Plan External Collaborator User Initially Transitioned to Provisional Member:
1) Shared to Plan Asset(s) @ > Viewer Permission & < Admin Permission + 2) Last “GLA” < 90 Days Prior 3) auto-downgrades to Viewer @ 
NTURPC unless SysAdmin Upgrades to Member
✔ Enterprise ✔Pro
✔ Business Free
Plan 
User
✔Centralized
✔Decentralize
d
Enterprise ✔ Pro
Business Free
Plan 
User
LCM
Licensed User ✔External Collab
Non Licensed User
USM
WorkApps
External Collaborator Plan Assets Plan Asset Shared to Directly or Via Group
Plan Asset Share Permission Role
 Engineering Feedback G V
 External Media G CO G
 Joint Marketing U E G
 Supplier Designs U E G
Plan
Align
 Internal
✔ External
Plan
Type(s)
Op.
Mode(s)
“Guest Level Action (GLA)” transitioned as Guest 
if they performed any of following once in last 90 
days:
● Comment in Plan Sheet
● Edit Plan Sheet
● Share Plan Asset 
1
2
Mastering
USM
LCM Plan Transition - USM Transition Member Count Calculator: 
Existing Plan External Collaborator User Initially Transitioned to External Viewer
1-Shared to Plan Asset(s) @ > Viewer Permission & 2-Last “eMLA” or “GLA” > 90 Days Prior
✔ Enterprise ✔Pro
✔ Business Free
Plan 
User
✔Centralized
✔Decentralize
d
✔ Enterprise ✔Pro
✔ Business Free
Plan 
User
LCM
Licensed User ✔External Collab
Non Licensed User
USM
WorkApps
External Collaborator Plan Assets Plan Asset Shared to Directly or Via Group
Plan Asset Share Permission Role
 Engineering Feedback G V
 External Media G CO
 Joint Marketing U E
 Supplier Designs U A
Plan
Align
 Internal
✔ External
Plan
Type(s)
Op.
Mode(s)
“Guest Level Action (GLA)” User transitioned as 
External Viewer if they did not perform any of 
following in last 90 days:
● Comment in Plan Sheet
● Edit Plan Sheet
● Share Plan Asset 
“External Provisional Member Qualifying Action 
(ePMQA)” User transitioned as Internal Viewer if they 
did not perform any of following in last 90 days:
● Modify Permissions for a Plan Core Asset
● Create, Edit, or Delete a Plan Sheet Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet Form
● + 12 Additional Actions
^Most External Members cannot create assets in another organizations Plan
2 1
Mastering
USM
✔Centralized
✔Decentralize
d
LCM Plan Transition - USM Transition Member Count Calculator:
Existing Plan External Collaborator User Transitioned to External Viewer
Plan 
User
 Licensed User ✔External Collab
 Non Licensed User
Plan
Align
 Internal
✔
External
✔ Enterprise ✔Pro
✔ Business Free
LCM
USM
WorkApps
External Collaborator Plan Assets Plan Asset Shared to Directly or Via Group
Plan Asset Share Permission Role
 Engineering Feedback G V V
 External Media G V V
 Joint Marketing U V V
 Supplier Designs U V V
Plan
Type(s)
Op.
Mode(s)
Mastering
USM
Create New User
Mastering
USM
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔Centralized
 Decentralized
✔ Enterprise Pro
 Business Free
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
USM Centralized Mode - Create New Internal Viewer: 
USM Authorized Asset User (AAU) Shares Internal Plan Asset(s) @ Viewer Permission Level 
to USM Internal Non-User (excluding Deactivated Users)
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Seat Type Internal Viewer
Default Plan Centralized Internal Plan
Authentication Centralized Internal Plan
Centralized 
Plan Profile Target Op Mode Enterprise Plan
I NU CM
Mastering
USM
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔Centralized
 Decentralized
✔ Enterprise Pro
 Business Free
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
USM Centralized Mode - Create New Initially Internal Viewer: 
USM Authorized Asset User (AAU) Shares Internal Plan Asset(s) @ >Viewer Permission 
Level to USM Internal Non-User (excluding Deactivated Users)
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Seat Type Initially Internal Viewer
Default Plan Centralized Internal Plan
Authentication Centralized Internal Plan
Centralized 
Plan Profile Target Op Mode Enterprise Plan
I NU CM
Upgrade Logic: Upon 1st “Internal Provisional 
Member Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
Mastering
USM
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔Centralized
 Decentralized
✔ Enterprise Pro
 Business Free
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
USM Centralized Mode - Create New Internal Viewer & External Viewer: 
USM Authorized Asset User (AAU) Shares External Plan Asset(s) @ Viewer Permission Level to USM 
Internal Non-User (excluding Deactivated Users)
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Seat Type Internal Viewer
Default Plan Centralized Internal Plan
Authentication Centralized Internal Plan
Internal 
Centralized 
Enterprise Plan Plan Profile Target Op Mode
I NU CM
Seat Type External Viewer
Default Plan Centralized Internal Plan
Authentication Centralized Internal Plan
External Plan
Mastering
USM
✔ Enterprise Pro
✔ Business Free
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
 Centralized
✔Decentralize
d
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
USM Decentralized Mode - Create New Initially Internal Viewer: 
USM Authorized Asset User (AAU) Shares Internal Plan Asset(s) @ Any Permission Level to 
USM Internal Non-User (excluding Deactivated Users)
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Seat Type Initially Internal Viewer
Default Plan Decentralized Internal Plan Owning Shared 
Asset(s) or Plan Asked/Approved to Join
Authentication Decentralized Internal Plan Owning Shared 
Asset(s) or Plan Asked/Approved to Join
Internal Pro 
Plan(s)
Internal 
Business Plan(s)
Internal Enterprise 
Plan(s)
Plan Profile Target Op Mode
IP NU DM
Upgrade Logic: Upon 1st “Internal Provisional 
Member Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
Mastering
USM
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔Centralized
 Decentralized
✔ Enterprise Pro
 Business Free
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
USM Centralized Mode - Create New Internal Viewer & Initially External Viewer: 
USM Authorized Asset User (AAU) Shares External Plan Asset(s) @ Commenter/Editor Permission Level to USM 
Internal Non-User (excluding Deactivated Users)
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Seat Type Internal Viewer
Default Plan Centralized Internal Plan
Authentication Centralized Internal Plan
Internal Centralized 
Enterprise Plan
Plan Profile Target Op Mode
I NU CM
Seat Type Initially External Viewer
Default Plan Centralized Internal Plan
Authentication Centralized Internal Plan
External Plan
Post transition Logic: Upon 1st “Guest Level 
Action (GLA)” User is modified to Guest
● Comment in Plan Sheet
● Edit Plan Sheet
● Share Plan Asset
Mastering
USM
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔Centralized
 Decentralized
✔ Enterprise Pro
 Business Free
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
USM Centralized Mode - Create New Internal Viewer & Initially External Viewer: 
USM Authorized Asset User (AAU) Shares External Plan Asset(s) @ Admin Permission Level to USM Internal 
Non-User
(excluding Deactivated Users)
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Seat Type Internal Viewer
Default Plan Centralized Internal Plan
Authentication Centralized Internal Plan
Internal Centralized 
Enterprise Plan
Plan Profile Target Op Mode
I NU CM
Seat Type Initially External Viewer
Default Plan Centralized Internal Plan
Authentication Centralized Internal Plan
External Plan
Post transition Logic: Upon 1st “External Member Level Qualifying 
Action (eMLA)” User is upgraded to External Provisional Member:
● Modify Permissions for a Plan Core Asset
● Create, Edit, or Delete a Plan Sheet Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet Form
● + 12 Additional Actions
Mastering
USM
USM Decentralized Mode - Create New External Viewer:
USM Authorized Asset User (AAU) Shares External Plan Asset(s) @ Viewer Permission 
Level to USM Internal Non-User (excluding Deactivated Users)
Seat Type External Viewer
Default Plan External Plan Sharing External Asset(s)
Authentication External Plan Sharing External Asset(s)
External Pro 
Plan(s)
External 
Business Plan(s)
External Enterprise 
Plan(s)
✔ Approved Email/Domain
✔ Disabled or N/A
✔ Centralized
✔ Decentralized
✔ Enterprise ✔Pro
✔ Business 
Free
✔ Owner / Admin
✔ Editor Can 
Share
✔ Internal
 External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Safe 
Sharing
Plan Profile Target Op Mode
EP NU DM
Mastering USM Decentralized Mode - Create New Initially External Viewer: USM
USM Authorized Asset User (AAU) Shares External Plan Asset(s) @ Commenter/Editor Permission 
Level to USM Internal Non-User
Seat Type Initially External Viewer
Default Plan External Plan Sharing External Asset(s)
Authentication External Plan Sharing External Asset(s)
External 
Business Plan(s)
External Enterprise 
Plan(s)
✔ Approved Email/Domain
✔ Disabled or N/A
✔ Centralized
✔ Decentralized
✔ Enterprise Pro
✔ Business 
Free
✔ Owner / Admin
✔ Editor Can 
Share
✔ Internal
 External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Safe 
Sharing
Plan Profile Target Op Mode
EP NU DM Post transition Logic: Upon 1st “Guest Level 
Action (GLA)” User is modified to Guest
● Comment in Plan Sheet
● Edit Plan Sheet
● Share Plan Asset Mastering
USM
USM Decentralized Mode - Create New Initially External Viewer: 
USM Authorized Asset User (AAU) Shares External Plan Asset(s) @ Commenter/Editor Permission 
Level to USM Internal Non-User
Seat Type Initially External Viewer
Default Plan External Plan Sharing External Asset(s)
Authentication External Plan Sharing External Asset(s)
External Pro 
Plan(s)
✔ Approved Email/Domain
✔ Disabled or N/A
✔ Centralized
✔ Decentralized
Enterprise ✔Pro
 Business Free
✔ Owner / Admin
✔ Editor Can 
Share
✔ Internal
 External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Safe 
Sharing
Plan Profile Target Op Mode
EP NU DM
Post transition Logic: Upon 1st “Internal 
Member Level Action (iPMQA)” (Pro Plans do 
not have Guest Users) User is modified to 
External Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a 
Plan Core Asset
● Approve Sharing Permission 
Request for a Plan Core Asset
● Delete a Plan Core Asset
Mastering
USM
Upgrade Actions
Mastering
USM
Upgrade Internal 
Viewer to 
Provisional Member
Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise ✔Pro
✔ Business Free
✔ Member Guest
✔ Prov. Member 
Viewer
✔ SysAdmin 
✔ Group Admin
✔ Internal
 External
✔ Default
 Joined 
Upgrade Internal Viewer to Plan Provisional Member: 
1- Prerequisite: Internal Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Group Manager (GM) adds Viewer to Group Shared to Plan Asset(s) @ =>Commenter
3- Viewer takes iPMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
Upgrade Logic: Upon 1st “Internal Provisional 
Member Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
Group Manager will not receive any error/notification if 
performing action against Previously Downgraded 
Viewer, action will be discarded. Internal Viewer will 
receive invalid notification of invitation to edit, however 
remains @ Viewer effective permission 1
2
3
Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise ✔Pro
✔ Business Free
✔ Internal
 External
✔ Default
 Joined 
✔ SysAdmin 
✔ Plan Admin
✔ Member Guest
✔ Prov. Member 
Viewer
Upgrade Internal Viewer to Plan Provisional Member: 
1- Prerequisite: Internal Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Unmanaged Asset Manager (UAM) Approves User Request for Sharing to Unmanaged Plan Asset @ >Viewer
3- Viewer takes iPMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
✔ Unmanaged
 
Asset 
Status
Unmanaged Asset Manager will not receive any 
error/notification if performing action against 
Previously Downgraded Viewer, action will be 
discarded. Internal Viewer will receive invalid 
notification of invitation to edit, however remains @ 
Viewer effective permission
Upgrade Logic: Upon 1st “Internal Provisional 
Member Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Upgrade Internal Viewer to Plan Provisional Member: 
1- Prerequisite: Internal Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU)Shares Plan Asset(s) to Group containing Viewer @ >Viewer
3- Viewer takes iPMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against Previously 
Downgraded Viewer, action will be discarded. Internal 
Viewer will receive invalid notification of invitation to edit, 
however remains @ Viewer effective permission
Upgrade Logic: Upon 1st “Internal Provisional 
Member Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Upgrade Internal Viewer to Plan Provisional Member: 
1- Prerequisite: Internal Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Plan Asset(s) to Internal Viewer @ >Viewer
3- Viewer takes iPMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against Previously 
Downgraded Viewer, action will be discarded. Internal 
Viewer will receive invalid notification of invitation to edit, 
however remains @ Viewer effective permission
Upgrade Logic: Upon 1st “Internal Provisional 
Member Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
2
3
1

Mastering
USM
✔ Enterprise ✔Pro
✔ Business 
Free
Member Guest
Prov. Member ✔Viewer
✔ Internal
 External
✔ Default
✔ Joined 
✔Centralized
✔Decentralize
d
Upgrade Internal Viewer to Plan Provisional Member: 
1- Prerequisite: Internal Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Internal Viewer Request for Sharing to Plan Asset(s) @ >Viewer Approved
3- Viewer takes iPMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
User
Plan
Authorized Asset User will not receive any 
error/notification if approving request against Previously 
Downgraded Viewer, action will be discarded. Internal 
Viewer will receive invalid notification of invitation to edit, 
however remains @ Viewer effective permission
Upgrade Logic: Upon 1st “Internal Provisional 
Member Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Upgrade Internal Viewer to Plan Provisional Member: 
1- Prerequisite: Internal Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Control Center Blueprint to Internal Viewer @ >Viewer
3- Viewer takes iPMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against Previously 
Downgraded Viewer, action will be discarded. Internal 
Viewer will receive invalid notification of invitation to edit, 
however remains @ Viewer effective permission
Upgrade Logic: Upon 1st “Internal Provisional 
Member Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Upgrade Internal Viewer to Plan Provisional Member: 
1- Prerequisite: Internal Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Control Center Blueprint to Group containing Internal Viewer @ >Viewer
3- Viewer takes iPMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against Previously 
Downgraded Viewer, action will be discarded. Internal 
Viewer will receive invalid notification of invitation to edit, 
however remains @ Viewer effective permission
Upgrade Logic: Upon 1st “Internal Provisional 
Member Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
2
3
1

Mastering Upgrade Internal Viewer to Plan Member: USM
SysAdmin Upgrades Viewer to Plan Member via USM True-Up
✔Centralized
✔Decentralize
d
✔ Enterprise ✔Pro
✔ Business Free
Member Guest
Prov. Member ✔
Viewer
✔ SysAdmin 
 Group Admin
✔ Internal
 External
✔ Default
 Joined 
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
*User Upgrades to Member, bypassing Provisional Member Mastering
USM
Publish Sheet “Edit by Anyone” for Users Shared to Workspace or Sheet
NOTE: Feature Permits All Shared To Users to Edit via “Indirect Sheet Access” logic, requires User Login
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
 Business Free
✔ Member ✔Guest
✔ Prov. Member ✔Viewer
✔ Internal
✔ External
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Upgrade Internal Viewer to Plan Provisional Member: 
1- Authorized Asset User (AAU) Publishes a Plan Sheet with Edit by Shared To Users Option
2- Viewer Accesses Publish Sheet URL; takes iPMQA Action
Internal Viewer taking an iMLA action via Publish Sheet Edit URL will be converted to 
either a Provisional Member or Member if previously downgraded. Seat Type report will not 
report Publish Sheet Edit actions in User “# Edits Last X Days” accounting metrics Upgrade Logic: Upon 1st “Internal Provisional Member Level 
Qualifying Action (iPMQA)” User is upgraded to Internal Provisional 
Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core Asset
● Approve Sharing Permission Request for a Plan Core Asset
● Delete a Plan Core Asset
1
2
1

Mastering
USM
Publish Sheet “Edit by Anyone” for all Smartsheet Plan Users
NOTE: Feature Permits All Plan Users to Edit via “Indirect Sheet Access” logic, requires User Login, does 
not require user to be Shared to Sheet
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business 
Free
✔ Member Guest
✔ Prov. Member ✔Viewer
✔ Internal
 External
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Upgrade Internal Viewer to Plan Provisional Member: 
1- Authorized Asset User (AAU) Publishes a Plan Sheet with Edit by Plan Users Option
2- Viewer Accesses Publish Sheet URL; takes iPMQA Action
Internal Viewer taking an iMLA action via Publish Sheet Edit URL will be converted to 
either a Provisional Member or Member if previously downgraded. Seat Type report will 
not report Publish Sheet Edit actions in User “# Edits Last X Days” accounting metrics
Upgrade Logic: Upon 1st “Internal Provisional Member Level 
Qualifying Action (iPMQA)” User is upgraded to Internal Provisional 
Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core Asset
● Approve Sharing Permission Request for a Plan Core Asset
● Delete a Plan Core Asset
2
1
Mastering
USM
Upgrade Guest to 
Provisional Member
Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Member Guest
✔ Prov. Member 
Viewer
✔ SysAdmin 
✔ Group Admin
✔ Internal
 External
✔ Default
 Joined 
Upgrade Guest to Plan Provisional Member: 
1- Prerequisite Guest has not been previously downgraded from Plan Provisional Member / Member
2- Group Manager (GM) adds Guest to Group Shared to Plan Asset(s) @ Admin
3- Guest takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action” 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
Group Manager will not receive any error/notification if 
performing action against Guest that was a Previously 
Downgraded Viewer, action will be reduced. Guest will 
receive notification of invitation to edit, however at reduced @ 
Editor Can Share effective permission
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Internal
 External
✔ Default
 Joined 
✔ SysAdmin 
✔ Plan Admin
✔ Member Guest
✔ Prov. Member 
Viewer
Upgrade Guest to Plan Provisional Member: 
1- Prerequisite Guest has not been previously downgraded from Plan Provisional Member / Member
2- Unmanaged Asset Manager (UAM) Approves User Request for Sharing to Unmanaged Plan Asset @ Admin
3- Guest takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
✔ Unmanaged
 
Asset 
Status
Unmanaged Asset Manager will not receive any 
error/notification if performing action against Guest that was a 
Previously Downgraded Viewer, action will be reduced. Guest 
will receive notification of invitation to edit, however at reduced 
@ Editor Can Share effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
✔ Enterprise Pro
✔ Business 
Free
✔Centralized
✔Decentralize
d
✔ Owner / Admin Editor Cannot Share
 Editor Can Share Commenter / Viewer
✔ Internal
✔ External
✔ Member Guest
✔ Prov. Member Viewer
Upgrade Guest to Plan Provisional Member: 
1- Prerequisite Guest has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Plan Asset(s) to Group containing Guest @ Admin
3- Guest takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any error/notification if 
performing action against Guest that was a Previously 
Downgraded Viewer, action will be reduced. Guest will receive 
notification of invitation to edit, however at reduced @ Editor 
Can Share effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
Upgrade Guest to Plan Provisional Member: 
1- Prerequisite Guest has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Plan Asset(s) to Guest @ Admin
3- Guest takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
✔ Enterprise Pro
✔ Business 
Free
✔Centralized
✔Decentralize
d
✔ Owner / Admin Editor Cannot Share
 Editor Can Share Commenter / Viewer
✔ Internal
✔ External
✔ Member Guest
✔ Prov. Member Viewer
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any error/notification if performing 
action against Guest that was a Previously Downgraded Viewer, action will 
be reduced. Guest will receive notification of invitation to edit, however at 
reduced @ Editor Can Share effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
✔ Enterprise Pro
✔ Business 
Free
Member Guest
Prov. Member 
✔Viewer
✔Internal
✔External
✔ Default
✔ Joined 
✔Centralized
✔Decentralize
d
Upgrade Guest to Plan Provisional Member: 
1- Prerequisite Guest has not been previously downgraded from Plan Provisional Member / Member
2- Guest Request for Sharing to Plan Asset(s) Approved @ Admin Permission
3- Guest takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
User
Plan
Authorized Asset User will not receive any error/notification if approving 
request against Guest that was a Previously Downgraded Viewer, action will 
be reduced. Guest will receive notification of invitation to edit, however at 
reduced @ Editor Can Share effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Upgrade Guest to Plan Provisional Member: 
1- Prerequisite Guest has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Control Center Blueprint to Group containing Guest @ Admin
3- Guest takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against Previously 
Downgraded Viewer, action will be reduced. External 
Viewer will receive notification of invitation to edit, 
however at reduced @ Editor Can Share effective 
permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Upgrade Guest to Plan Provisional Member: 
1- Prerequisite Guest has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Control Center Blueprint to Guest @ Admin
3- Guest takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against Previously 
Downgraded Viewer, action will be reduced. External 
Viewer will receive notification of invitation to edit, 
however at reduced @ Editor Can Share effective 
permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
 Default
 ✔Joined 
Upgrade Guest to Plan Member: 
SysAdmin Upgrades Guest to Plan Member via USM True-Up
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
Member ✔Guest
Prov. Member Viewer
✔ SysAdmin 
 Group Admin
 Internal
✔External
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
*User Upgrades to Member, bypassing Provisional Member Mastering
USM
Upgrade External 
Viewer to 
Provisional Member
Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business 
Free
✔ Member Guest
✔ Prov. Member 
Viewer
✔ SysAdmin 
✔ Group Admin
✔ Internal
 External
✔ Default
 Joined 
Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Group Manager (GM) adds External Viewer to Group Shared to Plan Asset(s) @ Admin
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
Group Manager will not receive any error/notification if 
performing action against Previously Downgraded 
Viewer, action will be reduced. Guest will receive 
notification of invitation to edit, however @ reduced 
Editor-Can-Share effective permission
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
Enterprise ✔ Pro
Business Free
✔ Member Guest
✔ Prov. Member 
Viewer
✔ SysAdmin 
✔ Group Admin
✔ Internal
 External
✔ Default
 Joined 
Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Group Manager (GM) adds External Viewer to Group Shared to Plan Asset(s) @ Admin
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
Group Manager will not receive any error/notification if 
performing action against Previously Downgraded 
Viewer, action will be reduced. External Viewer will 
receive invalid notification of invitation to edit, however 
remains @ Viewer effective permission
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Internal
 External
✔ Default
 Joined 
✔ SysAdmin 
✔ Plan Admin
✔ Member Guest
✔ Prov. Member 
Viewer
Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Unmanaged Asset Manager (UAM) Approves User Request for Sharing to Unmanaged Plan Asset @ Admin
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
✔ Unmanaged
 
Asset 
Status
Unmanaged Asset Manager will not receive any 
error/notification if performing action against 
Previously Downgraded Viewer, action will be 
reduced. Guest will receive notification of invitation to 
edit, however at reduced @ Editor Can Share 
effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
Enterprise ✔ Pro
Business Free
✔ Internal
 External
✔ Default
 Joined 
✔ SysAdmin 
✔ Plan Admin
✔ Member Guest
✔ Prov. Member 
Viewer
Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Unmanaged Asset Manager (UAM) Approves User Request for Sharing to Unmanaged Plan Asset @ Admin
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
✔ Unmanaged
 
Asset 
Status
Unmanaged Asset Manager will not receive any 
error/notification if performing action against 
Previously Downgraded Viewer, action will be 
reduced. External Viewer will receive invalid 
notification of invitation to edit, however remains @ 
Viewer effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
✔ Enterprise Pro
✔ Business 
Free
✔Centralized
✔Decentralize
d
✔ Owner / Admin Editor Cannot Share
 Editor Can Share Commenter / Viewer
✔ Internal
✔ External
✔ Member Guest
✔ Prov. Member Viewer
Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Plan Asset(s) to Group containing External Viewer @ Admin
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against 
Previously Downgraded Viewer, action will be 
reduced. Guest will receive notification of invitation to 
edit, however at reduced @ Editor Can Share 
effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
Enterprise ✔ Pro
Business Free
✔Centralized
✔Decentralize
d
✔ Owner / Admin Editor Cannot Share
 Editor Can Share Commenter / Viewer
✔ Internal
✔ External
✔ Member Guest
✔ Prov. Member Viewer
Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Plan Asset(s) to Group containing External Viewer @ Admin
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against 
Previously Downgraded Viewer, action will be 
reduced. External Viewer will receive invalid 
notification of invitation to edit, however remains @ 
Viewer effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Plan Asset(s) to External Viewer @ Admin
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
✔ Enterprise Pro
✔ Business 
Free
✔Centralized
✔Decentralize
d
✔ Owner / Admin Editor Cannot Share
 Editor Can Share Commenter / Viewer
✔ Internal
✔ External
✔ Member Guest
✔ Prov. Member Viewer
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against 
Previously Downgraded Viewer, action will be 
reduced. Guest will receive notification of invitation to 
edit, however at reduced @ Editor Can Share 
effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
✔ Enterprise Pro
✔ Business 
Free
Member Guest
Prov. Member 
✔Viewer
✔Internal
✔External
✔ Default
✔ Joined 
✔Centralized
✔Decentralize
d
Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- External Viewer Request for Sharing to Plan Asset(s) Approved @ Admin Permission
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
User
Plan
Authorized Asset User will not receive any 
error/notification if approving request against Previously 
Downgraded Viewer, action will be reduced. Guest will 
receive notification of invitation to edit, however at 
reduced @ Editor Can Share effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
Enterprise ✔ Pro
Business Free
Member Guest
Prov. Member 
✔Viewer
✔Internal
✔External
✔ Default
✔ Joined 
✔Centralized
✔Decentralize
d
Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- External Viewer Request for Sharing to Plan Asset(s) Approved @ Admin Permission
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
User
Plan
Authorized Asset User will not receive any 
error/notification if approving request against Previously 
Downgraded Viewer, action will be reduced. External 
Viewer will receive invalid notification of invitation to edit, 
however remains @ Viewer effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Control Center Blueprint to Group containing External Viewer @ Admin
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against Previously 
Downgraded Viewer, action will be reduced. Guest will 
receive notification of invitation to edit, however at 
reduced @ Editor Can Share effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
✔ Owner / Admin Editor Cannot Share
✔ Editor Can Share Commenter / 
Viewer
✔ Internal
✔ External
✔ Member ✔ Guest
✔ Prov. Member Viewer
Upgrade External Viewer to Plan Provisional Member: 
1- Prerequisite External Viewer has not been previously downgraded from Plan Provisional Member / Member
2- Authorized Asset User (AAU) Shares Control Center Blueprint to External Viewer @ Admin
3- Viewer takes ePMQA Action
4- Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
Plan 
User
Asset 
Permissions
Plan
Align
Authorized Asset User will not receive any 
error/notification if performing action against Previously 
Downgraded Viewer, action will be reduced. Guest will 
receive notification of invitation to edit, however at 
reduced @ Editor Can Share effective permission
Post transition Logic: Upon 1st “External 
Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External 
Provisional Member:
● Modify Permissions for a Plan Core 
Asset
● Create, Edit, or Delete a Plan Sheet 
Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet 
Form
● + 12 Additional Actions
2
3
1

Mastering
USM
 Default
 ✔Joined 
Upgrade External Viewer to Plan Member: 
SysAdmin Upgrades External Viewer to Plan Member via USM True-Up
✔Centralized
✔Decentralize
d
✔ Enterprise ✔ Pro
✔ Business 
Free
Member Guest
Prov. Member ✔Viewer
✔ SysAdmin 
 Group Admin
 Internal
✔ External
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
*User Upgrades to Member, bypassing Provisional Member Mastering
USM
Upgrade 
Provisional Member 
to Member
Mastering
USM
 ✔ Default
 ✔Joined 
Upgrade Provisional Member to Plan Member: 
SysAdmin Upgrades Internal or External Provisional Member to Plan Member via USM True-Up
✔Centralized
✔Decentralize
d
✔ Enterprise ✔ Pro
✔ Business 
Free
 Member Guest
✔Prov. Member Viewer
✔ SysAdmin 
 Group Admin
✔ Internal
✔ External
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
Mastering
USM
 ✔ Default
 ✔Joined 
Upgrade Provisional Member to Plan Member: 
SysAdmin Batch Upgrades Internal or External Provisional Members to Plan Member via 
USM True-Up
✔Centralized
✔Decentralize
d
✔ Enterprise ✔ Pro
✔ Business 
Free
 Member Guest
✔Prov. Member Viewer
✔ SysAdmin 
 Group Admin
✔ Internal
✔ External
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
Mastering
USM
Downgrade Actions
Mastering
USM
Downgrade Internal 
Member to Viewer
Mastering
USM
✔ Default
 Joined 
✔Centralized
✔Decentralized
✔ SysAdmin 
 Group Admin
✔ Enterprise ✔ Pro
✔ Business Free
Automatic Downgrade Internal Provisional Member to Viewer:
Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
User
Plan
Plan
Role
4
1
Internal Viewer Performs iPMQA - Auto Upgraded to Plan Provisional Member
3 Downgrade Date Calculated ( {Earliest Plan NTURPC Date => 30 Days from Provisional Member Start Date})
Plan Setting - Auto Downgrade 2
Upgrade Logic: Upon 1st “Internal Provisional Member Level Qualifying Action (iPMQA)” User is upgraded to 
Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core Asset
● Approve Sharing Permission Request for a Plan Core Asset
● Delete a Plan Core Asset
Provisional Member 
Start Date
Plan NTURPC 
Dates
Auto Downgrade 
to Internal Viewer
11/2/25 11/8/25
12/8/25
12/8/25
11/2/25 1/17/26
4/17/26
1/17/26
11/2/25 11/30/25
2/28/26
2/28/26
Auto 
Downgraded 
to Internal 
Viewer
5 Effective Permission Plan Assets = Viewer

Mastering
USM
✔ Default
 Joined 
✔Centralized
✔Decentralized
✔ SysAdmin 
 Group Admin
✔ Enterprise ✔ Pro
✔ Business Free
Manual Downgrade Internal Plan Member / Provisional Member to Viewer:
Process Individual User - Admin Center
Plan
Type
Op.
Mode
User
Plan
Plan
Role
2 Search for User 3 Select User
4 Change Seat Type 5 Confirm Change
1 Copy User Email

Mastering Manual Downgrade Internal Plan Member / Provisional Member to Viewer: USM
Bulk Process Users - Admin Center
1 Filter for Specific Seat Types-Domain-Activity 2 1st 2-200 Users - Select All / Some Filtered Users
3 Change Seat Type 4 Confirm Change 5 Next 2-200 Users - Repeat Steps 2, 3 & 4
✔ Default
 Joined 
✔Centralized
✔Decentralized
✔ SysAdmin 
 Group Admin
✔ Enterprise ✔ Pro
✔ Business Free
Plan
Type
Op.
Mode
User
Plan
Plan
Role
2 3 4
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer:
Workspaces
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔ Centralized
 Decentralized
Workspace Owner User Plan Share Assigned 
Permission
Effective 
Permission
 CoBranded 
Projects S J EP U E E
 Employee 
Benefits C D I G V V
 Engineering 
Designs C D I G E E
 Eng - R798 
Design C D I U E E
 J798 - My 
Designs C D I U O O
 J832 - Joint 
Product S J EP G E E
 New Products C D I G A A
Workspace Owner User Plan Share Assigned 
Permission
Effective 
Permission
 CoBranded 
Projects S J EP U E E
 Employee Benefits C D I G V V
 Engineering 
Designs C D I G E V
 Eng - R798 Design C D I U E V
 J798 - My Designs C D I U O V
 J832 - Joint 
Product S J EP G E E
 New Products C D I G A V
✔ SysAdmin
 
Plan
Role
Mastering
USM
 Centralized
✔Decentralized
Downgrade Internal Plan Member / Provisional Member to Viewer:
Workspaces
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔ SysAdmin
 
Plan
Role
Workspace Owner User Plan Share Assigned 
Permission
Effective 
Permission
 CoBranded 
Projects S J EP U E E
 Corp - Supply 
Chain S J I G V E
 Employee 
Benefits C D I G E V
 Engineering 
Designs C D I G E E
 Eng - R798 
Design C D I U O E
 J798 - My 
Designs C D I U E O
 J832 - Joint 
Product S J EP G A E
 New Products C D I G E A
Workspace Owner User Plan Share Assigned 
Permission
Effective 
Permission
 CoBranded 
Projects S J EP U E E
 Corp - Supply 
Chain S J I G V E
 Employee Benefits C D I G E V
 Engineering 
Designs C D I G E V
 Eng - R798 Design C D I U O V
 J798 - My Designs C D I U E V
 J832 - Joint 
Product S J EP G A E
 New Products C D I G E V
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer:
Sheets
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔ Centralized
 Decentralized
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Approved 
Suppliers S J EP U E E
 Compliance 
Codes C D I G E E
 Intern 
Candidates C D I G E E
 Product 
Launches C D I U A A
 Regulatory 
Status C D I U O O
 Service 
Agreements S J EP G V V
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Approved 
Suppliers S J EP U E E
 Compliance 
Codes C D I G E V
 Intern Candidates C D I G E V
 Product 
Launches C D I U A V
 Regulatory 
Status C D I U O V
 Service 
Agreements S J EP G V V
✔ SysAdmin
 
Plan
Role
Mastering
USM
 Centralized
✔Decentralized
Downgrade Internal Plan Member / Provisional Member to Viewer:
Sheets
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔ SysAdmin
 
Plan
Role
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Approved 
Suppliers S J EP U E E
 Compliance 
Codes C D I G E E
 Intern 
Candidates C D I G E E
 Product 
Launches C D I U A A
 Regulatory 
Status C D I U O O
 Service 
Agreements S J EP G V V
 Test Procedures S J I U A A
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Approved 
Suppliers S J EP U E E
 Compliance 
Codes C D I G E V
 Intern Candidates C D I G E V
 Product 
Launches C D I U A V
 Regulatory 
Status C D I U O V
 Service 
Agreements S J EP G V V
 Test Procedures S J I U A A
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer: 
WorkApps
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
✔ Centralized
 Decentralized
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Construction 
Mgmt C D I G EWA/ISA EWA/ISA
 Meeting Mgmt C D I G EWA/ISA EWA/ISA
 Regulatory 
Filings C D I G EWA/ISA EWA/ISA
 Risk Analysis C D I U EWA/ISA EWA/ISA
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Construction 
Mgmt C D I G EWA/ISA EWA/ISA
 Meeting Mgmt C D I G EWA/ISA EWA/ISA
 Regulatory 
Filings C D I G EWA/ISA EWA/ISA
 Risk Analysis C D I G EWA/ISA EWA/ISA
✔ SysAdmin
 
Plan
Role
No Impact
Mastering
USM
 Centralized
✔Decentralized
Downgrade Internal Plan Member / Provisional Member to Viewer:
WorkApps
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
✔ SysAdmin
 
Plan
Role
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Construction 
Mgmt C D I G EWA/ISA EWA/ISA
 Meeting Mgmt C D I G EWA/ISA EWA/ISA
 Regulatory 
Filings C D I G EWA/ISA EWA/ISA
 Risk Analysis C D I U EWA/ISA EWA/ISA
 Tax Analysis S J I G EWA/ISA EWA/ISA
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Construction 
Mgmt C D I G EWA/ISA EWA/ISA
 Meeting Mgmt C D I G EWA/ISA EWA/ISA
 Regulatory 
Filings C D I G EWA/ISA EWA/ISA
 Risk Analysis C D I U EWA/ISA EWA/ISA
 Tax Analysis S J I G EWA/ISA EWA/ISA
No Impact
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer:
Dynamic Views
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
✔ Centralized
 Decentralized
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 IT Support 
Request C D I G EDV/ISA EDV/ISA
 Renew Service C D I U EDV/ISA EDV/ISA
 Store New 
Archive C D I G EDV/ISA EDV/ISA
 Water Analysis C D I DO EDV/ISA EDV/ISA
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 IT Support 
Request C D I G EDV/ISA EDV/ISA
 Renew Service C D I U EDV/ISA EDV/ISA
 Store New 
Archive C D I G EDV/ISA EDV/ISA
 Water Analysis C D I DO EDV/ISA EDV/ISA
✔ SysAdmin
 
Plan
Role
No Impact
Mastering
USM
 Centralized
✔Decentralized
Downgrade Internal Plan Member / Provisional Member to Viewer:
Dynamic Views
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
✔ SysAdmin
 
Plan
Role
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Engineer ReCert S J I G EDV/ISA EDV/ISA
 IT Support 
Request C D I G EDV/ISA EDV/ISA
 Renew Service C D I U EDV/ISA EDV/ISA
 Store New 
Archive C D I G EDV/ISA EDV/ISA
 Water Analysis C D I DO EDV/ISA EDV/ISA
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Engineer ReCert S J I G EDV/ISA EDV/ISA
 IT Support 
Request C D I G EDV/ISA EDV/ISA
 Renew Service C D I U EDV/ISA EDV/ISA
 Store New 
Archive C D I G EDV/ISA EDV/ISA
 Water Analysis C D I DO EDV/ISA EDV/ISA
No Impact
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer:
Groups
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔ Centralized
 Decentralized
Group 
Memberships Owner User Plan Role
 Directors C D I M
 Engineering C D I M
 FTE C D I M
 QA Engineering C D I M
 R&D C D I M
 Sr. Engineers C D I M
Group 
Memberships Owner User Plan Role
 Directors C D I M
 Engineering C D I M
 FTE C D I M
 QA Engineering C D I M
 R&D C D I M
 Sr. Engineers C D I M
✔ SysAdmin
 
Plan
Role
No Impact
Mastering
USM
 Centralized
✔Decentralized
Downgrade Internal Plan Member / Provisional Member to Viewer:
Groups
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔ SysAdmin
 
Plan
Role
Group 
Memberships Owner User Plan Role
 Directors C D I M
 Engineering C D I M
 FTE C D I M
 J798 Team S J I M
 QA Engineering C D I M
 R&D C D I M
 Sr. Engineers C D I M
Group 
Memberships Owner User Plan Role
 Directors C D I M
 Engineering C D I M
 FTE C D I M
 J798 Team S J I M
 QA Engineering C D I M
 R&D C D I M
 Sr. Engineers C D I M
No Impact
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer:
API Tokens
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔Centralized
✔Decentralized
API Token 
Name Owner Plan Role
 Finance App Int C I M
 BI Tool C I M
API Token 
Name Owner Plan Role
 Finance App Int C I RAP
 BI Tool C I RAP
User
Plan
✔ Default
 Joined 
✔ SysAdmin
 
Plan
Role
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer:
Group Admin
Groups 
Owned Owner Plan Role
 Accts Payable C I M
 Accts Receivable C I M
 Credit Dept C I M
 Finance Consult C I M
 Procurement C I M
 Vendors C I M
Groups 
Transferred Owner Plan Role
 Accts Payable C I RGO
 Accts Receivable C I RGO
 Credit Dept C I RGO
 Finance Consult C I RGO
 Procurement C I RGO
 Vendors C I RGO
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔Centralized
✔Decentralized
User
Plan
✔ Default
 Joined 
✔ SysAdmin
 
Plan
Role
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer:
Plan Asset Admin
Function Owner Plan Role
 Plan Asset Admin C I M
Function Owner Plan Role
 Plan Asset Admin C I RPA
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔Centralized
✔Decentralized
User
Plan
✔ Default
 Joined 
✔ SysAdmin
 
Plan
Role
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer:
System Admin
Function Owner Plan Role
 System Admin C I M
Function Owner Plan Role
 System Admin C I V
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔Centralized
✔Decentralized
User
Plan
✔ Default
 Joined 
✔ SysAdmin
 
Plan
Role
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer:
Data Egress
Plan
Type
Op.
Mode
✔ Enterprise Pro
 Business Free
✔ Centralized
 Decentralized
Group 
MembershipsOwner User Plan Seat Type
 FTE C D I M
 J832 Joint Team C D I M
Group 
Memberships Owner User Plan Seat Type
 FTE C D I V
 J832 Joint Team C D I V
✔ SysAdmin
 
Plan
Role
Seat Type Viewer cannot perform 
any Data Egress actions 
independent of plan Data Egress 
policy(s) 
Mastering
USM
 Centralized
✔Decentralized
Downgrade Internal Plan Member / Provisional Member to Viewer:
Data Egress
Plan
Type
Op.
Mode
✔ Enterprise Pro
 Business Free
✔ SysAdmin
 
Plan
Role
Group 
Memberships Owner User Plan Seat Type
 FTE C D I M
 IXC Vendors S J I M
 J832 Joint Team C D I M
Group 
Memberships Owner User Plan Seat Type
 FTE C D I V
 IXC Vendors S J I M
 J832 Joint Team C D I V
Seat Type Viewer cannot perform 
any Data Egress actions 
independent of plan Data Egress 
policy(s) 
Mastering
USM
Downgrade Internal Plan Member / Provisional Member to Viewer:
Data Retention
Group 
Memberships Owner User Plan Role
 Data Retention C D I M
 J832 Joint Team C D I M
Group 
Memberships Owner User Plan Role
Policy 
Monitored 
Sheets
 Data Retention C D I M UPA
 J832 Joint Team C D I M UPA
Data Retention
Policy - Inclusion Group(s)
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔Centralized
✔Decentralized
User
Plan
✔ Default
 Joined 
✔ SysAdmin
 
Plan
Role
Data Retention
Policy - Inclusion Group(s)
Mastering
USM
Downgrade 
External Member to 
Guest
Mastering
USM
✔ Default
 Joined 
✔Centralized
✔Decentralized
✔ SysAdmin 
 Group Admin
✔ Enterprise Pro
✔ Business Free
Automatic Downgrade External Provisional Member to Guest:
Provisional Member status auto-downgrades to Guest @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
User
Plan
Plan
Role
4
1
3 Downgrade Date Calculated ( {Earliest Plan NTURPC Date => 30 Days from Provisional Member Start Date})
Plan Setting - Auto Downgrade
Provisional Member 
Start Date
Plan NTURPC 
Dates
Auto Downgrade 
to Guest
11/2/25 11/8/25
12/8/25
12/8/25
11/2/25 1/17/26
4/17/26
1/17/26
11/2/25 11/30/25
2/28/26
2/28/26
Auto 
Downgraded 
to Guest
5 Effective Permission Plan Assets = Editor Can Share
2 External Viewer Performs ePMQA - Auto Upgraded to Plan Provisional Member
Post transition Logic: Upon 1st “External Provisional Member Qualifying Action 
(ePMQA)” User is upgraded to External Provisional Member:
● Modify Permissions for a Plan Core Asset
● Create, Edit, or Delete a Plan Sheet Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet Form
● + 12 Additional Actions

Mastering
USM
✔ Default
 Joined 
✔Centralized
✔Decentralized
✔ SysAdmin 
 Group Admin
✔ Enterprise Pro
✔ Business Free
Downgrade External Plan Member / Provisional Member to Guest:
Process Individual User - Admin Center
Plan
Type
Op.
Mode
User
Plan
Plan
Role
2 Search for User 3 Select User
4 Change Seat Type 5 Confirm Change
1 Copy User Email
Mastering
USM
Downgrade External Plan Member / Provisional Member to Guest:
Bulk Process Users - Admin Center
1 Filter for Specific Seat Types-Domain-Activity 2 1st 2-200 Users - Select All / Some Filtered Users
3 Change Seat Type 4 Confirm Change 5 Next 2-200 Users - Repeat Steps 2, 3 & 4
✔ Default
 Joined 
✔Centralized
✔Decentralized
✔ SysAdmin 
 Group Admin
✔ Enterprise Pro
✔ Business Free
Plan
Type
Op.
Mode
User
Plan
Plan
Role
2 3 4
Mastering
USM
✔Centralized
✔Decentralized
Downgrade External Plan Member / Provisional Member to Guest:
Workspaces
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
Workspace Owner User Plan Share Assigned 
Permission
Effective 
Permission
 CoBranded 
Projects S D I U A A
 Employee 
Benefits C J EP G E-S E-S
 Engineering 
Designs C J EP G E+S E+S
 Eng - R798 
Design C J EP U E+S E+S
 J798 - My 
Designs C J EP U CO CO
 New Products C J EP G E-S E-S
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
Workspace Owner User Plan Share Assigned 
Permission
Effective 
Permission
 CoBranded Projects S D I U A E+S
 Employee Benefits C J EP G E-S E-S
 Engineering Designs C J EP G E+S E+S
 Eng - R798 Design C J EP U E+S E+S
 J798 - My Designs C J EP U CO CO
 New Products C J EP G E-S E-S
Mastering
USM
✔Centralized
✔Decentralized
Downgrade External Plan Member / Provisional Member to Guest:
Sheets
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Approved 
Suppliers C J EP G A A
 Compliance 
Codes C J EP G E+S E+S
 Intern 
Candidates C J EP G E+S E-S
 Product 
Launches C J EP U A A
 Regulatory 
Status C J EP U E+S E+S
 Service 
Agreements S D I G A E+S
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Approved Suppliers C J EP G A A
 Compliance Codes C J EP G E+S E+S
 Intern Candidates C J EP G E+S E+S
 Product Launches C J EP U A A
 Regulatory Status C J EP U E+S E+S
 Service Agreements S D I G A E+S
Mastering
USM
✔Centralized
✔Decentralized
Downgrade External Plan Member / Provisional Member to Guest:
WorkApps
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Construction Mgmt C J EP G E+S E+S
 Meeting Mgmt C J EP G E-S E-S
 Regulatory Filings C J EP G E-S E-S
 Risk Analysis C J EP U E-S E-S
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Construction Mgmt C J EP G E+S E+S
 Meeting Mgmt C J EP G E-S E-S
 Regulatory Filings C J EP G E-S E-S
 Risk Analysis C J EP U E-S E-S
Mastering
USM
✔Centralized
✔Decentralized
Downgrade External Plan Member / Provisional Member to Guest:
Dynamic Views
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 IT Support Request C J EP G C C
 Renew Service C J EP U E-S E-S
 Store New Archive C J EP G E+S E+S
 Water Analysis C J EP U E-S E-S
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
User
Plan
 Default
✔Joined 
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 IT Support Request C J EP G C C
 Renew Service C J EP U E-S E-S
 Store New Archive C J EP G E+S E+S
 Water Analysis C J EP U E-S E-S
✔ SysAdmin
 
Plan
Role
Mastering
USM
✔Centralized
✔Decentralized
Downgrade External Plan Member / Provisional Member to Guest:
Groups
Group 
Memberships Owner User Plan Role
 Adjunct Research C J EP M
 CAD Review C J EP M
 Core Standards C J EP M
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
No Impact
Group 
Memberships Owner User Plan Role
 Adjunct Research C J EP M
 CAD Review C J EP M
 Core Standards C J EP M
Mastering
USM Downgrade External Plan Member / Provisional Member to Guest:
Data Egress
Group 
Memberships Owner User Plan Role GHP
 Adjunct Research C J EP M E+S
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
✔Centralized
✔Decentralized
User
Plan
 Default
✔Joined 
Group 
Memberships Owner User Plan Role GHP
 Adjunct Research C J EP M E+S
✔ SysAdmin
 
Plan
Role
No Impact
Mastering
USM
Downgrade External Plan Member / Provisional Member to Guest:
USM Seat Type Report Result - User Downgrade Modifications Included RGE+S
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
✔Centralized
✔Decentralized
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
1 2
3
Action Results
● Downgraded to maximum Effective Permission of Editor Cannot Share on all 
Shared to Assets
● User Retains Authorized Asset User (AAU) Attribute & Capabilities
1. User Downgraded 
to Guest
2. Guest retains 
capability to 
perform AAU 
Licensing Actions
Mastering
USM Downgrade External Plan Member / Provisional Member to Guest:
API Tokens, Group Admin, Plan Asset Admin, SysAdmin, Data Retention
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
✔Centralized
✔Decentralized
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
Mastering
USM
Downgrade External 
Member to Viewer
Mastering
USM
✔ Default
 Joined 
✔Centralized
✔Decentralized
✔ SysAdmin 
 Group Admin
 Enterprise ✔ Pro
 Business Free
Automatic Downgrade External Provisional Member to Viewer:
Provisional Member status auto-downgrades to Viewer @ NTURPC unless SysAdmin Upgrades to Member
Plan
Type
Op.
Mode
User
Plan
Plan
Role
4
1
External Viewer Performs ePMQA - Auto Upgraded to Plan Provisional Member
3 Downgrade Date Calculated ( {Earliest Plan NTURPC Date => 30 Days from Provisional Member Start Date})
Plan Setting - Auto Downgrade 2
Provisional Member 
Start Date
Plan NTURPC 
Dates
Auto Downgrade to 
External Viewer
11/2/25 11/8/25
12/8/25
12/8/25
11/2/25 1/17/26
4/17/26
1/17/26
11/2/25 11/30/25
2/28/26
2/28/26
Auto 
Downgraded 
to External 
Viewer
5 Effective Permission Plan Assets = Viewer
Post transition Logic: Upon 1st “External Provisional Member Level Qualifying Action 
(ePMQA)” User is upgraded to External Provisional Member:
● Modify Permissions for a Plan Core Asset
● Create, Edit, or Delete a Plan Sheet Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet Form
● + 12 Additional Actions

Mastering
USM
✔ Default
 Joined 
✔Centralized
✔Decentralized
✔ SysAdmin 
 Group Admin
Downgrade External Plan Member / Provisional Member to Viewer:
Process Individual User - Admin Center
User
Plan
Plan
Role
2 Search for User 3 Select User
4 Change Seat Type 5 Confirm Change
1 Copy User Email
✔ Enterprise ✔Pro
✔ Business Free
Plan
Type
Op.
Mode
Mastering
USM
Downgrade External Plan Member / Provisional Member to Viewer:
Bulk Process Users - Admin Center
1 Filter for Specific Seat Types-Domain-Activity 2 1st 2-200 Users - Select All / Some Filtered Users
3 Change Seat Type 4 Confirm Change 5 Next 2-200 Users - Repeat Steps 2, 3 & 4
✔ Default
 Joined 
✔Centralized
✔Decentralized
✔ SysAdmin 
 Group Admin
✔ Enterprise ✔Pro
✔ Business Free
Plan
Type
Op.
Mode
User
Plan
Plan
Role
2 3 4
Mastering
USM
✔Centralized
✔Decentralized
Downgrade External Plan Member / Provisional Member to Viewer:
Workspaces
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
Workspace Owner User Plan Share Assigned 
Permission
Effective 
Permission
 CoBranded 
Projects S D I U A A
 Employee 
Benefits C J EP G E-S E-S
 Engineering 
Designs C J EP G E+S E+S
 Eng - R798 
Design C J EP U E+S E+S
 J798 - My 
Designs C J EP U CO CO
 New Products C J EP G E-S E-S
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
Workspace Owner User Plan Share Assigned 
Permission
Effective 
Permission
 CoBranded Projects S D I U A E+S
 Employee Benefits C J EP G E-S E-S
 Engineering Designs C J EP G E+S E+S
 Eng - R798 Design C J EP U E+S E+S
 J798 - My Designs C J EP U CO CO
 New Products C J EP G E-S E-S
Mastering
USM
✔Centralized
✔Decentralized
Downgrade External Plan Member / Provisional Member to Viewer:
Sheets
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Approved 
Suppliers C J EP G A A
 Compliance 
Codes C J EP G E+S E+S
 Intern 
Candidates C J EP G E+S E-S
 Product 
Launches C J EP U A A
 Regulatory 
Status C J EP U E+S E+S
 Service 
Agreements S D I G A E+S
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Approved Suppliers C J EP G A A
 Compliance Codes C J EP G E+S E+S
 Intern Candidates C J EP G E+S E+S
 Product Launches C J EP U A A
 Regulatory Status C J EP U E+S E+S
 Service Agreements S D I G A E+S
Mastering
USM
✔Centralized
✔Decentralized
Downgrade External Plan Member / Provisional Member to Viewer:
WorkApps
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Construction Mgmt C J EP G E+S E+S
 Meeting Mgmt C J EP G E-S E-S
 Regulatory Filings C J EP G E-S E-S
 Risk Analysis C J EP U E-S E-S
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 Construction Mgmt C J EP G E+S E+S
 Meeting Mgmt C J EP G E-S E-S
 Regulatory Filings C J EP G E-S E-S
 Risk Analysis C J EP U E-S E-S
Mastering
USM
✔Centralized
✔Decentralized
Downgrade External Plan Member / Provisional Member to Viewer:
Dynamic Views
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 IT Support Request C J EP G C C
 Renew Service C J EP U E-S E-S
 Store New Archive C J EP G E+S E+S
 Water Analysis C J EP U E-S E-S
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
User
Plan
 Default
✔Joined 
Asset Owner User Plan Share Assigned 
Permission
Effective 
Permission
 IT Support Request C J EP G C C
 Renew Service C J EP U E-S E-S
 Store New Archive C J EP G E+S E+S
 Water Analysis C J EP U E-S E-S
✔ SysAdmin
 
Plan
Role
Mastering
USM
✔Centralized
✔Decentralized
Downgrade External Plan Member / Provisional Member to Viewer: Groups
Group 
Memberships Owner User Plan Role
 Adjunct Research C J EP M
 CAD Review C J EP M
 Core Standards C J EP M
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
No Impact
Group 
Memberships Owner User Plan Role
 Adjunct Research C J EP M
 CAD Review C J EP M
 Core Standards C J EP M
Mastering
USM Downgrade External Plan Member / Provisional Member to Viewer:
Data Egress
Group 
Memberships Owner User Plan Role GHP
 Adjunct Research C J EP M E+S
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
✔Centralized
✔Decentralized
User
Plan
 Default
✔Joined 
Group 
Memberships Owner User Plan Role GHP
 Adjunct Research C J EP M E+S
✔ SysAdmin
 
Plan
Role
No Impact
Mastering
USM
Downgrade External Plan Member / Provisional Member to Viewer:
USM Seat Type Report Result - User Downgrade Modifications Included RGE+S
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
✔Centralized
✔Decentralized
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
1 2
3
Action Results
● Downgraded to maximum Effective Permission of Editor Cannot Share on all 
Shared to Assets
● User Retains Authorized Asset User (AAU) Attribute & Capabilities
1. User Downgraded 
to Viewer
2. User is actually 
Downgraded to 
Guest
3. Guest retains 
capability to 
perform AAU 
Licensing Actions
Mastering
USM Downgrade External Plan Member / Provisional Member to Guest:
API Tokens, Group Admin, Plan Asset Admin, SysAdmin, Data Retention
Plan
Type
Op.
Mode
✔ Enterprise Pro
✔ Business Free
✔Centralized
✔Decentralized
User
Plan
 Default
✔Joined 
✔ SysAdmin
 
Plan
Role
Mastering
USM
Remove User
Mastering Smartsheet User Attributes: USM
USM Overview - Remove User Methods
Smartsheet Access License Shared To 
Plan Assets
User 
Mgmt
Created 
Assets
Groups 
Owned
Eligible USM 
Seat Types
Remove User Converted to Free 
Plan, no 
Authentication or 
Collaboration 
Controls
Member 
Status 
Retained
Sharing 
Removed
Removed Transferred Optionally 
Transferred
Plan Users
Deactivate User User Cannot 
Access Smartsheet
Member 
Status 
Removed
Sharing 
Retained
Removed Ownership 
Retained 
(separate 
transfer option)
Ownership 
Retained 
(separate 
transfer option)
Plan Users
Downgrade User - No Access Retain Plan 
Membership & 
Plan Authentication 
Control
Member 
Status 
Removed
Sharing 
Removed
Retained Access 
Removed
TBD USM User
Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise ✔ Pro
✔ Business 
Free
✔ Member Guest
✔ Prov. Member 
Viewer
✔ SysAdmin 
 Group Admin
✔ Internal
 External
✔ Default
 Joined 
Remove Internal Member / Provisional Member / Viewer:
Plan SysAdmin Removes User
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise ✔ Pro
✔ Business 
Free
✔ Member Guest
✔ Prov. Member 
Viewer
✔ SysAdmin 
 Group Admin
✔ Internal
 External
✔ Default
 Joined 
Deactivate Internal Member / Provisional Member / Viewer:
Plan SysAdmin Deactivates User
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
Deactivate User supports Plan Users
Mastering
USM
✔Centralized
✔Decentralize
d
✔ Enterprise ✔ Pro
✔ Business 
Free
✔ Member Guest
✔ Prov. Member 
Viewer
✔ SysAdmin 
 Group Admin
✔ Internal
 External
✔ Default
 Joined 
No Access Internal Member / Provisional Member / Viewer:
Plan SysAdmin Downgrades User to No Access
Plan
Type
Op.
Mode
Plan 
User
Plan
Role
Plan
Align
User
Plan
Mastering
USM
Smartsheet 
Reports
Mastering Smartsheet Seat Type Report: USM
USM Overview - Seat Type Report
Report Developed for USM - Report is primary source of information for 
reviewing all plan USM Seat Types status and activity metrics
Mastering Smartsheet Sheet Access Report: USM
USM Overview - Sheet Access Report
Report Function Unmodified for USM - Key Source for Plan 
Assets Shared To Activity Permission Levels
Mastering Smartsheet Alternate Sheet Access Report: USM
USM Overview - Alternate Sheet Access Report
Report Function Unmodified for USM - Key Source for Plan Assets Shared To 
Activity Permission Levels
Mastering Smartsheet Bulk Update Basic Permissions Function: USM
USM Overview - Bulk Update Basic Permissions
Report Function Unmodified 
for USM - NOTE: Using function to modify 
permissions will negatively impact USM
Mastering Smartsheet Import Users Function: USM
USM Overview - Import Users Function
Report Function Unmodified 
for USM- NOTE: Using function to modify 
permissions will negatively impact USM
Mastering Smartsheet User List Report: USM
USM Overview - User List Report
Report Function Unmodified 
for USM
Mastering Smartsheet Published Items Report: USM
USM Overview - Published Items Report
Report Function Unmodified 
for USM
Mastering Smartsheet Login History Report: USM
USM Overview - Login History Report
Report Function Unmodified 
for USM

Mastering Smartsheet Revoke Access to Items: USM
USM Overview - Revoke Access to Items Function
Function replaced by USM 
Admin Center “Change Seat 
Type - No Access”
Mastering Smartsheet User Management Function: USM
USM Overview - User Management Function
Function unmodified for USM- NOTE: Using function to modify user 
settings could negatively impact USM
Mastering
USM
Smartsheet Groups 
USM Architecture
Mastering Smartsheet Group Architecture: USM
USM Smartsheet Group Sharing Impacts - Groups Setting = All Users
*Internal Viewer Upgrade Logic: Upon 1st “Internal Provisional 
Member Qualifying Action (iPMQA)” User is upgraded to Internal 
Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core Asset
● Approve Sharing Permission Request for a Plan 
Core Asset
● Delete a Plan Core Asset
External Viewer Upgrade Logic: Upon 1st “Guest Level Action 
(GLA)” User is modified to Seat Type Guest:
● Comment in Plan Sheet
● Edit Plan Sheet
● Share Plan Asset
*External Viewer / Guest Upgrade Logic: Upon 1st “External 
Provisional Member Qualifying Action (ePMQA)” User is 
upgraded to External Provisional Member:
● Modify Permissions for a Plan Core Asset
● Create, Edit, or Delete a Plan Sheet Column
● Format a Plan Sheet Column
● Create, Edit or Delete a Plan Sheet Form
● + 12 Additional Actions
*Prerequisite: User has not been previously 
downgraded from Plan Provisional Member / 
Member
Mastering Smartsheet Group Architecture: USM
USM Smartsheet Group Sharing Impacts - Groups Setting = Plan Users
*Internal Viewer Upgrade Logic: Upon 1st “Internal Provisional 
Member Qualifying Action (iPMQA)” User is upgraded to Internal 
Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core Asset
● Approve Sharing Permission Request for a Plan 
Core Asset
● Delete a Plan Core Asset
*Prerequisite: User has not been previously 
downgraded from Plan Provisional Member / 
Member
Mastering Smartsheet Group Architecture: USM
USM Downgrade Member to Viewer: Group Membership Impacts - Groups Setting = All Users
Mastering
USM
Smartsheet Group Architecture:
USM Downgrade Internal Member to Viewer: Group Membership Impacts - Groups 
Setting = Plan Users
Mastering
USM
Smartsheet Group Architecture:
USM Downgrade External Member to Guest: Group Membership Impacts - Groups 
Setting = All Users
Mastering
USM
Smartsheet Group Architecture:
USM Downgrade Internal / External Member to No Access: Group Membership 
Impacts - Groups Setting = All Users
Mastering
USM
Smartsheet Group Architecture:
USM Downgrade Internal Member to No Access: Group Membership Impacts - 
Groups Setting = Plan Users
Mastering
USM
USM True Up
Mastering
USM
Qualifying Actions (iPMQA) Downgrade Options
Comment on a Plan core asset ● Automatic Downgrade to Viewer @ NTURPC
● Manual Downgrade - Viewer or No Access
● Deactivate
Edit a Plan core asset ● Automatic Downgrade to Viewer @ NTURPC
● Manual Downgrade - Viewer or No Access
● Deactivate
Create a Plan core asset ● Automatic Downgrade to Viewer @ NTURPC
● Manual Downgrade - Viewer or No Access
● Deactivate
Modify Sharing Permissions for a Plan Core Asset ● Automatic Downgrade to Viewer @ NTURPC
● Manual Downgrade - Viewer or No Access
● Deactivate
Approve permission requests for a Plan sheet, dashboard, workspace, or 
collection
● Automatic Downgrade to Viewer @ NTURPC
● Manual Downgrade - Viewer or No Access
● Deactivate
Delete a Plan sheet, dashboard, workspace, or collection ● Automatic Downgrade to Viewer @ NTURPC
● Manual Downgrade - Viewer or No Access
● Deactivate
✔Centralized
✔Decentralize
d
✔ Enterprise ✔Pro
✔ Business Free
✔ Internal
 External
Member Guest
Prov. Member ✔Viewer
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Qualifying Actions - Internal Member Level Actions (iPMQA):
Prerequisite Internal Viewer has not been previously downgraded from Plan Provisional Member / Member
Detailed List of Actions Upgrading a Plan Internal Viewer to a Provisional Member Seat Type
Mastering
USM
Non Qualifying Actions (iPMQA)
Rename Plan Core Asset - (Workspace, Sheet, Report, 
Dashboard, Collection)
Modify Permissions for a Plan Content File in a File Library
Approve permission requests for a Plan Content File in a File 
Library
Delete a Plan Content File in a File Library
✔Centralized
✔Decentralize
d
✔ Enterprise ✔Pro
✔ Business Free
✔ Internal
 External
Member Guest
Prov. Member ✔Viewer
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Non Qualifying Actions - Internal Member Level Actions (iPMQA):
Detailed List of Actions Not Upgrading a Plan Internal Viewer to a Provisional Member Seat Type
Mastering
USM
Qualifying Actions (ePMQA) Downgrade Options
Modify permissions for a Plan Asset (Workspace, Sheet, Report, Dashboard, 
Collection)
● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Modify permissions for a Plan content file in a file library ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Approve permission requests for a Plan Asset (Workspace, Sheet, Report, 
Dashboard, Collection)
● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Delete a Plan Asset (Workspace, Sheet, Report, Dashboard, Collection) ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Create, Edit, or Delete a Plan Summary Sheet Field ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Create, Edit, or Delete a Plan Sheet Automation ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Qualifying Actions - External Member Level Actions (ePMQA): Page 1 of 3
Prerequisite Guest has not been previously downgraded from Plan Provisional Member / Member
Detailed List of Actions Upgrading a Plan Guest to an External Provisional Member Seat Type
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
 Internal 
✔External
Member ✔ Guest
Prov. Member Viewer
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Mastering
USM
Qualifying Actions (ePMQA) Downgrade Options
Create, Edit, or Delete a Plan Sheet Shared Filter ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Create, Edit, or Delete a Plan Sheet Conditional Formatting ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Create, Edit, Delete a Plan Sheet Form ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Create Plan Sheet Proof, Create Proof Info Column, Create Proof Comment, Add New Proof Version, 
Delete Proof
● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Enable, Disable Plan Sheet Publish - Read Only Full ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Format Plan Sheet Column ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Qualifying Actions - External Member Level Actions (ePMQA): Page 2 of 3
Prerequisite Guest has not been previously downgraded from Plan Provisional Member / Member
Detailed List of Actions Upgrading a Plan Guest to an External Provisional Member Seat Type
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
 Internal 
✔External
Member ✔ Guest
Prov. Member Viewer
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Mastering
USM
Qualifying Actions (ePMQA) Downgrade Options
Create, Edit, or Delete Plan Sheet Column ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Edit or Delete a Plan Report ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Edit or Delete a Plan Dashboard ● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Create a Plan Core Asset (i.e. Workspace, Sheet, Report, Dashboard)
NOTE: This Qualifying Action is rare, as it requires the Internal Plan to be the Default Plan of the External Viewer / Guest
● Automatic Downgrade to Guest @ NTURPC
● Downgrade - Guest, Viewer or No Access
● Deactivate
Qualifying Actions - External Member Level Actions (ePMQA): Page 3 of 3
Prerequisite Guest has not been previously downgraded from Plan Provisional Member / Member
Detailed List of Actions Upgrading a Plan Guest to an External Provisional Member Seat Type
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
 Internal 
✔External
Member ✔ Guest
Prov. Member Viewer
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Mastering
USM
Non Qualifying Actions - External Member Level Actions (ePMQA):
Detailed List of Actions Not Upgrading a Plan Guest to a Provisional Member Seat Type
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business Free
 Internal 
✔External
Member ✔ Guest
Prov. Member Viewer
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Non Qualifying Actions (ePMQA)
Rename Plan Core Asset - (Workspace, Sheet, Report, 
Dashboard, Collection)
Approve permission requests for a Plan Content File in a File 
Library
Delete a Plan Content File in a File Library
Plan Sheet - Send as Attachment
Plan Sheet - Email Shared Users
Plan Sheet - View Activity Log
Plan Sheet - Export Sheet
Plan Sheet - Send Update Request
Mastering
USM
USM Change Log
Mastering
USM Updates USM
Mastering
USM
Key USM Insights
Mastering
USM
Plan
Type
✔Centralized
✔Decentralized
✔ Enterprise Pro
✔ Business Free
Member Guest
Prov. Member ✔Viewer
✔ Internal
✔ External
✔ Default
✔ Joined 
Capabilities: Seat Type - Plan Viewer
Mastering USM Insight
Submit Forms Update Requests Approval Requests Proof Review Requests
View Shared Assets View - Published Assets Collaborate - Dynamic Views View - WorkApps
Op.
Mode
Plan 
User
Plan
Align
User
Plan
Mastering
USM
Plan
Type
✔Centralized
✔Decentralized
✔ Enterprise ✔Pro
✔ Business Free
✔Member ✔Guest
✔Prov. Member ✔Viewer
✔ Internal
✔ External
USM Design - Seat Type Modifications via Sharing Actions
Mastering USM Insight
Internal Member / Provisional Member: Plan Highest Sharing Permission Decreased to Viewer
Op.
Mode
Plan 
User
Plan
Align
Internal Viewer: Plan Highest Sharing Permission Increased Above Viewer & iMLA Qualifying Action
Guest: Highest Plan Sharing Permission Increased to Admin & eMLA Qualifying Action
External Viewer: Plan Highest Sharing Permission Increased to Guest & GLA Action
Guest: Plan Highest Sharing Permission Decreased to Viewer
USM Highest 
Permission Sharing 
Seat Type 
Adjustments:
● Upgrades are 
Dynamic or 
Manual
● Downgrades are 
Automatic or 
Manual
External Member / Provisional Member: Plan Highest Sharing Permission Decreased to Editor
Mastering
USM
USM API
Mastering
USM Use of Smartsheet API for USM Functions:
Create User, Upgrade User, Downgrade User, Remove User 
Smartsheet API - USM Functions
Create User - Currently No USM Specific API Functionality
Upgrade User - Currently No USM Specific API Functionality
Downgrade User - Currently No USM Specific API 
Functionality
Remove User - Deactivate User Option and Remove User
Option supported, Remove Access Option unsupported
Group Management - Currently No USM Specific API 
Functionality, Existing LCM Group Mgmt functionality
Mastering
USM
USM Members 
Licensing Training
Mastering
USM
Share Workspaces and Objects with New & Existing Internal 
Users as Viewer
Non Licensing Action - Share Internally
Mastering
USM
Share Workspaces and Objects with External Users as Viewer, 
Commenter or Editor Cannot Share
Non Licensing Action - Share Externally
Mastering
USM
Publish Sheet “Edit by Anyone” for Anyone with URL
NOTE: Feature Permits Any User to Edit via “Indirect Sheet Access” logic, does not require 
User Login
Non Licensing Action - Edit Publish Sheet Anyone
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business 
Free
✔ Member ✔Guest
✔ Prov. Member ✔Viewer
✔ Internal
✔ External
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Mastering
USM
Dynamic View “View” Shared to User, Shared to Group, Shared to Domain
NOTE: Feature Permits Editing of Designated Field(s) by Users Shared to via 
“Indirect Sheet Access” logic, requires User Login
Non Licensing Action - Dynamic View Edit
Dynamic View:
● Requires Enterprise or Business Plan
● Dynamic View is a Premium App requiring 
separate licensing from Core App
● Shared Domains requires Safe Sharing 
Domain Approval if Safe Sharing is 
enabled
Mastering
USM
WorkApps “App Role” Shared to User, Shared to Group
NOTE: Feature Permits Viewing and/or Editing of Designated Sheet(s) by 
Users Assigned to a Role via “Indirect Sheet Access” logic, requires User 
Login
Non Licensing Action - WorkApps Role
Mastering
Non Licensing Action - Publish Reports USM
Publish Report for Users Shared to Workspace or Report
NOTE: Feature Permits All Shared To Users to View, requires User Login
Mastering
USM
Publish Dashboards with Wide Internal Viewership, 
Requires User Login
Non Licensing Action - Publish Dashboards
Mastering
USM
Create & Share Forms with Users
Non Licensing Action - Create Form
Mastering
USM
Create Sheet Automations for User Updating
Non Licensing Action - Create Update Requests
Mastering
Create Sheet Automations for User Approvals Non Licensing Action - Create Approval Requests USM
Create Sheet Automations for User Approval Review
Mastering
USM Share Smartsheet Workspace to Group > Viewer Permission & 
Group User Takes “iMLA” Action Licensing Action - Sharing Workspace to Group @>Viewer
Upgrade Logic: Upon 1st “Internal Provisional 
Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
Shared To Internal User(s) Group Members Takes “iPMQA” Action
NOTE: User will not 
receive any 
error/notification if 
performing action 
against Previously 
Downgraded Viewer, 
action will be discarded.
Shared To User will 
receive notification of 
invitation to edit, 
however will not be able 
to edit & will not be 
upgraded to a Licensed 
User (i.e. “Member”)
Mastering
USM Share Smartsheet Workspace to Internal User > Viewer 
Permission & User Takes “iMLA” Action
Licensing Action - Sharing Workspace to User @>Viewer
Shared To Internal User Takes “iPMQA” Action
NOTE: User will not 
receive any 
error/notification if 
performing action 
against Previously 
Downgraded Viewer, 
action will be discarded.
Shared To User will 
receive notification of 
invitation to edit, 
however will not be able 
to edit & will not be 
upgraded to a Licensed 
User (i.e. “Member”)
Upgrade Logic: Upon 1st “Internal Provisional 
Level Qualifying Action (iPMQA)” User is 
upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan 
Core Asset
● Approve Sharing Permission Request for 
a Plan Core Asset
● Delete a Plan Core Asset
Mastering
USM
Approve Internal User Request to Edit & User Takes “iPMQA” Action
Licensing Action - Approving Edit Request
Upgrade Logic: Upon 1st “Internal Provisional Member Qualifying 
Action (iPMQA)” User is upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core Asset
● Approve Sharing Permission Request for a Plan Core Asset
● Delete a Plan Core Asset
NOTE: User will not receive any error/notification if performing 
action against Previously Downgraded Viewer, action will be 
discarded.
Shared To User will receive notification of invitation to edit, 
however will not be able to edit & will not be upgraded to a 
Licensed User (i.e. “Member”)
Mastering
USM
Publish Sheet “Edit by Anyone” for Users Shared to Workspace or Sheet
NOTE: Feature Permits All Shared To Users to Edit via “Indirect Sheet Access” logic, requires User Login
Licensing Action - Edit Publish Sheet Shared To
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
 Business Free
✔ Member ✔Guest
✔ Prov. Member ✔Viewer
✔ Internal
✔ External
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Upgrade Logic: Upon 1st “Internal Provisional Member Qualifying 
Action (iPMQA)” User is upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core Asset
● Approve Sharing Permission Request for a Plan Core Asset
● Delete a Plan Core Asset
Mastering
USM
Publish Sheet “Edit by Anyone” for all Smartsheet Plan Users
NOTE: Feature Permits All Plan Users to Edit via “Indirect Sheet Access” logic, requires User Login, does 
not require user to be Shared to Sheet
Licensing Action - Edit Publish Sheet Plan Users
✔Centralized
✔Decentralize
d
✔ Enterprise Pro
✔ Business 
Free
✔ Member Guest
✔ Prov. Member ✔Viewer
✔ Internal
 External
Plan
Type
Op.
Mode
Plan 
User
Plan
Align
Upgrade Logic: Upon 1st “Internal Provisional Member Qualifying 
Action (iPMQA)” User is upgraded to Internal Provisional Member:
● Create Comment in Plan Core Asset
● Edit Plan Core Asset
● Create Plan Core Asset
● Modify Sharing Permissions for a Plan Core Asset
● Approve Sharing Permission Request for a Plan Core Asset
● Delete a Plan Core Asset
Mastering
USM
Mastering USM
Analysis Design
Mastering
Context - Analysis Design USM
USM functions introduce a series of new licensing related actions, each of which have multiple variables that must be 
accounted for in order to achieve Operational Certainty. USM also introduces a higher frequency of licensing related 
changes.
Mastering USM Analysis Design - Standardized Variables
● Action - A Unique USM action typically taken by a Plan Authorized Asset User (AAU)
● Conditions - A group of variables and viable variable values that must be in place for the AAU to take the USM action
● Current State Visual - An edited screenshot driven visual reference of the relevant current state prior to the action
● Modified State Visual - An edited screenshot driven visual reference of the relevant modified state post action
● Current State Variables - An acronym notated table referencing the relevant current values prior to the action
● Modified State Variables - An acronym notated table referencing the relevant updated values post action
NOTE: The “Operational Mode” (i.e. Op. Mode) Variable value is one of the key variables that drive USM. Mastering USM 
incorporates this by creating unique USM Action pages in each instance where there is an operational difference between 
plans operating in Centralized Mode (i.e. 1 Smartsheet Organizational Plan) vs. Decentralized Mode (i.e. >1 Smartsheet 
Organizational Plan)
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer: 
Workspaces
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔ Centralized
 Decentralized
Workspace Owner User Plan Share Permission
 CoBranded 
Projects S J E U E
 Employee Benefits C D I G V
 Engineering 
Designs C D I G E
 Eng - R798 Design C D I U E
 J798 - My Designs C D I U O
 J832 - Joint 
Product S J E G E
 New Products C D I G A
Workspace Owner User Plan Share Permission
 CoBranded Projects S J E U E
 Employee Benefits C D I RG R
 Engineering Designs C D I RG R
 Eng - R798 Design C D I U V
 J798 - My Designs C D I U V*
 J832 - Joint Product S J E G E
 New Products C D I RG R
Design Elements - Mastering USM
Action
Modified
State
Variables
Current
State
Variables
Current
State
Visual
Modified
State
Visual
✔ SysAdmin
 
Plan
Role Conditions
Mastering
USM
Owner User Plan Share Permission Role
C = Current Plan D = Current Default Plan of User** 
Authenticates Login, Creates Assets, 
Creates API Tokens, Logs Login Activity, 
Performs Group Admin, Performs Plan 
Asset Admin, Performs Sys Admin 
functions if permitted by default plan 
membership
I = Internal 
Plan
(determined 
by user email 
domain)
U = Shared to 
User Directly
O = Owner
(User is Creator of Asset(s), holds Admin asset or 
workspace permission)
M = Member
(User is a member of the Smartsheet Group)
S = Separate Plan
(Decentralized Operation 
Internal or External, 
Centralized Operation 
External)
J = Joined Plan
(All plans User belongs to which are not 
current Default Plan of User)
E = External 
Plan
(determined 
by user email 
domain)
G = Shared to 
Group for which 
User is a member
A = Admin asset or workspace permission RGP = Removed from Group via Permissions
(User was removed from the Smartsheet Group when downgraded from a 
Member / Provisional Member to Viewer or No Access Seat Type AND the 
Group was shared to at least one Plan owned Asset at Commenter, Editor 
or Admin permission level)
CorS = Plan owner 
could be either the 
Current Plan or a 
Separate plan based 
upon User Default plan
RG = User 
Removed from 
Group (If Group has 
Commentor or > 
Permissions to =>1 
Plan Asset)
E = Editor asset or workspace permission RGO = Removed from Group Ownership role when downgraded 
from a Member / Provisional Member to Viewer or No Access Seat Type, 
all owned groups continue to be manageable by Plan SysAdmins
RU = User 
Removed from 
Asset or 
Workspace 
Sharing 
C = Commenter asset or workspace permission MSG = Member / Provisional Member of Separate Internal Plan 
provided Group Admin privilege AND end user changed Default Plan 
to this specific plan
V = Viewer asset or workspace permission (V*
Workspace Assets created by user not shared with any 
other user / group at Admin permission assets could be 
“Unmanaged”) 
RPA = Removed from Plan Asset Admin role when downgraded 
from a Member / Provisional Member to Viewer or No Access Seat Type
R = Asset or Workspace permissions removed EX = Excluded from Data Retention policy monitoring, plan is not 
users Default Plan, no Assets created in this plan
ER = Editor Permissions Retained (Users shared 
directly to WorkApp or Dynamic View retain Editor 
capabilities after downgrade to Viewer, this is subject to 
change by Smartsheet)
RAP = Reduced API permissions; the tokens remain valid, the user's 
effective API permissions will be limited by their viewer role. They won't be 
able to perform actions that require editor or admin privileges
Variable
Assignment
Design Element - Mastering USM
Dependent Independent Dependent Dependent Independent Dependent
Mastering USM - Variable Assignments
Mastering
USM Downgrade Internal Plan Member / Provisional Member to Viewer: 
Workspaces
Action
Action
Mastering USM - Design Element: Action
Mastering USM “Action” details an action that can be 
taken by a Smartsheet User which is unique to USM.
While some Actions can appear similar, each unique 
Action has distinct operational attribute(s)
Mastering
USM
Plan
Type
Op.
Mode
✔ Enterprise ✔ Pro
✔ Business Free
✔ Centralized
 Decentralized
Conditions
Conditions
✔ SysAdmin
 
Plan
Role
Mastering USM - Design Element: Conditions
Mastering USM “Conditions” are a group of attributes the 
Smartsheet User is required to have in order to 
perform the USM Action.
Example: The attribute “Plan Type” contains the 
values Enterprise, Business, Pro & Free. The 
Conditions for each USM Action document which plan 
type(s) the Smartsheet User profile performing the 
USM Action meet eligibility requirements.
Mastering
USM
Current
State
Visual
Mastering USM - Design Element: Current State Visual
Mastering USM “Current State Visual” documents an example of the current 
functionality and end user app experience the Smartsheet User who is the 
target of the specific USM Action.
Smartsheet End User features are the aggregate of Smartsheet Assets the 
targeted Smartsheet User has visibility into inside and outside the 
organization. Many of the USM Downgrade USM Actions result in a 
combination of reduced functionality and visibility into Assets within their plan
Mastering
USM
Modified
State
Visual
Mastering USM - Design Element: Modified State Visual
Mastering USM “Modified State Visual” documents an example of the revised 
functionality and end user app experience the target Smartsheet User having 
the specific USM Action applied will experience.
These Modified State Visuals explain what changes could be experienced 
after the USM Downgrade USM Action
Mastering
USM
Workspace Owner User Plan Share Permission
 CoBranded 
Projects S J E U E
 Employee Benefits C D I G V
 Engineering 
Designs C D I G E
 Eng - R798 Design C D I U E
 J798 - My Designs C D I U O
 J832 - Joint 
Product S J E G E
 New Products C D I G A
Current
State
Variables
Mastering USM - Design Element: Current State Variables
Mastering USM “Current State Variables” detail all relevant Smartsheet attributes the 
companion “Current State Visual” display for the end user app experience of the 
Smartsheet User who is the target of the specific USM Action.
Smartsheet feature attributes collectively explain the logic behind the functionality 
of the specific Smartsheet feature. The Mastering USM “Variable Assignments Guide” 
explains each of the feature attribute values.
Mastering
USM
Workspace Owner User Plan Share Permission
 CoBranded Projects S J E U E
 Employee Benefits C D I RG R
 Engineering Designs C D I RG R
 Eng - R798 Design C D I U V
 J798 - My Designs C D I U V*
 J832 - Joint Product S J E G E
 New Products C D I RG R
Modified
State
Variables
Mastering USM - Design Element: Modified State Variables
Mastering USM “Modified State Variables” detail which Smartsheet attributes were 
modified by the specific USM Action. The companion “Modified State Visual” 
display for the end user app experience of the Smartsheet User who is the target
of the specific USM Action.
Smartsheet feature attributes collectively explain the logic behind the functionality 
of the specific Smartsheet feature. The Mastering USM “Variable Assignments Guide” 
explains each of the feature attribute values.
Mastering
USM
USM User 
Attributes
Mastering
Context - USM User Attributes USM
The architecture of USM depends upon Smartsheet Legacy Collaborator Model (LCM) for a number of operational elements 
including the relationship of USM Users to the USM Plan, the use of the Smartsheet API and which subset of USM Plan 
Users can perform licensing actions.
To address this Roll Point has developed & documented 5 key distinct USM “User Attributes”
Mastering USM - USM User Attributes
● USMU - USM User, every user (Internal & External) who is a member of a Smartsheet USM Plan is a USMU
● PU - Plan User, Primarily comprised of Internal USM Members and Internal Viewers owing to LCM operational 
design. Plan Users are manageable via the Smartsheet API and LCM Originated Plan Reports
● AAU - Authorized Asset User, the subset of Smartsheet USM Plan members who by either USM Seat Type (Member, 
Provisional Member, Guest*) or User Role (i.e. SysAdmin, Group Admin, Plan Asset Admin) who can perform USM 
Direct or Indirect Licensing Actions
● GM - Group Managers, the subset of Smartsheet USM Plan members who have been assigned either the SysAdmin 
or Group Admin role enabling them to perform USM Indirect Licensing Actions
● UAM - Unmanaged Managers, the subset of Smartsheet USM Plan members who have been assigned either the 
SysAdmin or Plan Asset Admin role enabling them to perform USM Direct Licensing Actions
*Guests with a Plan Asset(s) Highest Permission level of Editor-Can-Share on 1 or more Plan Assets are classified as USM AAU Users
Mastering Smartsheet User Attributes: USM
USM Overview - User Attribute Categories
USM User 
(USMU)
Authorized 
Asset User 
(AAU)
Plan User 
(PU)
Create 
Assets
Upgrade 
Users
Downgrade 
Users4
Internal Member X X X X X
Internal Provisional Member X X X
1 X X
Internal Viewer X X
2
External Member X X X
External Provisional Member X X X
Guest X X
2 X3
External Viewer X
Group Manager (GM) X X X X
5 X
Unmanaged Asset Manager (UAM) X X X X
6 X
SysAdmin X X X X
7 X X
Mastering
USM Smartsheet USM User Architecture:
Database of USM Seat Types & Attributes
USM Users comprise all Users within a 
Smartsheet Plan that have Created or 
been Shared To a Plan Asset Tom Zylstra
Senior Consultant
Mastering Smartsheet USM Authorized Asset User Architecture: USM
Database of USM AAU Types & Attributes
Authorized Asset Users (AAU)are a 
subset of USM Users Capable of 
Plan Asset Sharing Actions Tom Zylstra
Senior Consultant
Mastering Smartsheet USM Plan User Architecture: USM
Database of USM Plan Seat Types & Attributes
Plan Users are a Subset of Internal 
USM Users Manageable by Legacy 
Smartsheet Administrative Tools Tom Zylstra
Senior Consultant
Mastering Smartsheet USM Authorized Asset User Architecture: USM
Database of USM GM Types & Attributes
Group Managers (GM)are a subset 
of USM Users Capable of Plan Asset 
Sharing Actions Tom Zylstra
Senior Consultant
Actions:
● Creating a Smartsheet Group and adding Users to the Group
● Adding Users to a Group
Possible USM Upgrade Impacts:
● If Group is currently or in the future Shared To a Plan Asset at >Viewer 
Permission all Group Members who are Internal Viewers will be upgraded to 
Internal Provisional Members
● If Group is currently or in the future Shared To a Plan Asset at Admin 
Permission all Group Members who are External Viewers or Guests will be 
upgraded to External Provisional Members
● If Group is currently or in the future Shared To a Plan Asset at Editor Can 
Share Permission all Group Members who are External Viewers or Guests will 
become Authorized Asset Users (AAU)
Mastering Smartsheet USM Authorized Asset User Architecture: USM
Database of UAM Types & Attributes
Unmanaged Asset Managers 
(UAM)are a subset of USM Users 
Authorized to Approve Unmanaged 
Asset Sharing Requests
Tom Zylstra
Senior Consultant
Actions:
● Approving a Sharing Permission request for an Unmanaged Asset
Possible USM Upgrade Impacts:
● If requestor is approved for >Admin Permission and is an Internal Member / 
Provisional Member the Asset will become a “Managed Asset”
● If requestor is approved for >Viewer Permission and is an Internal Viewer the 
user will be upgraded to an Internal Provisional Member & AAU
● If requestor is approved for Admin Permission and is an External Viewer or 
Guest the user will be upgraded to an External Provisional Member & AAU
● If requestor is approved for Editor Can Share Permission and is an External 
Viewer or Guest the user will become an Authorized Asset User (AAU)
Thank You
Mastering USM Feedback?
Please use the Mastering USM
Feedback Form
Looking for USM Guidance?

=== MASTERING USM GLOSSARY (v6.04) ===
Mastering USM - Glossary
Term Definition Origin
A Context: Refers to User having Admin Permission
Level of specific Plan Assets
Definition: A =Admin, a Smartsheet Plan Member /
Provisional Member who has been Shared to a Plan
Asset (Workspace or Sheet) with Admin permissions
USM
Action Context: Specific to USM operation
Definition:A distinct action taken by either an
Authorized User, SysAdmin, Plan Asset Admin,
Group Admin or Smartsheet USM Shift Algorithm.
Distinct is noted by having one or more Conditions
for a specific action that are unique (i.e.
Decentralized Operational Mode vs. Centralized
Operational Mode)
USM
Software X Term
Admin Permission Context: Specific to the Sharing function for Core
App assets in Smartsheet
Definition: Admin permission level is the second
highest permission level available in Smartsheet and
applies to Core App assets (Workspaces, Sheets)
Admin permission level capabilities include Sharing
to others, Unsharing / modifying currently Shared to
LCM
Term Definition Origin
USM does not monitor DynamicView View Shared
Users, Shared Groups or Shared Domains
If a USM User is Downgraded the user may lose
access to DynamicView Views shared to the user via
Shared to Group(s) that the USM Downgrade
process determines the current Group Highest
Permission (HP) level is higher than the downgraded
users maximum highest permission level
(Internal/External Viewer HP is Viewer, Guest is
Editor Can Share)
LCM
LCM
Downgrades Context: Refers to USM Plan Viewer or Guest Seat
Type
Definition: USM Policy limits Plan Users to one AAU
initiated upgrade from Internal Viewer to Internal
Provisional Member and from External Viewer or
Guest to External Provisional Member.
Either a USM Automatic Downgrade at NTURPC or
SysAdmin manual Downgrade to Internal Viewer,
External Viewer or Guest prevents the user from
USM
Term Definition Origin
becoming a Provisional Member again and reduces
their Effective Permissions to their downgraded USM
Seat Type of Viewer or Guest.
The user can only be upgraded to an Internal
Member or External Member manually by a Plan
SysAdmin
LCM
Editor Can Share
Permission
E+S
Context: Refers to User or Group having Editor Can
Share Permission Level of specific Plan Assets
Definition: E+S = Editor Can Share, a Smartsheet
Plan Member / Provisional Member / Guest who has
been Shared to a Plan Asset (Workspace or Sheet)
with Editor Can Share permissions
LCM
E Context: Refers to User having either Editor Can
Share or Editor Cannot Share Permission Level of
specific Plan Assets
Definition: E = Editor, a Smartsheet Plan Member /
Provisional Member / Guest who has been Shared to
a Plan Asset (Workspace or Sheet) with Editor
permissions
LCM
Editor Cannot Share Context: Refers to User or Group having Editor
Term Definition Origin
Permission
E-S
Cannot Share Permission Level of specific Plan
Assets
Definition: E-S = Editor Cannot Share, a
Smartsheet Plan Member / Provisional Member /
Guest who has been Shared to a Plan Asset
(Workspace or Sheet) with Editor Cannot Share
permissions
EDV Context: Refers to modifications to Sharing
permissions for a Plan Dynamic View a Smartsheet
User was Shared to
Definition: EDV = Editor Dynamic View
Plan Member / Provisional Member downgraded to
Viewer retains access to Dynamic Views shared
directly to the User, Shared to the users Email
Domain or Shared To a Group the User is a member
of
Plan External Member / Provisional Member
downgraded to Guest retains access to Dynamic
Views shared directly to the User, Shared to the
users Email Domain or Shared To a Group the User
is a member of
USM
Software X Term
Term Definition Origin
NOTE: Dynamic Views and WorkApps utilize
modified Permission logic allowing “Viewers” to Edit
content if permitted
Enterprise Context: Smartsheet Plan Types
Definition: A Smartsheet Enterprise Plan is the top
level Smartsheet Plan
LCM
Effective Permission
(EP)
Context: Smartsheet Core Feature
Definition: EPr Logic was introduced in August,
2025 and applies to all Users when accessing a Plan
Asset Shared to Directly or via a Group the User is a
member of.
EP logic executes every time a Plan User opens a
Plan Asset querying the Users current Seat TYpe.
Permission to the asset is the lower of:
● Directly Shared To or Shared To group
“Assigned Permission” level
● Seat Type Maximum Permission level (Seat
Type Viewer = Maximum Viewer Permission,
Seat Type Guest = Maximum Editor Can Share
permission)
regardless of the Directly Shared To or Shared To
USM
Term Definition Origin
group “Assigned Permission” level.
EP Context: Refers to both the User/Admin performing
the specific USM Action and the target user of the
USM Action
Definition: EP =External Plan
For organizations operating in Decentralized
Operational Mode; Smartsheet External Plans are
determined by the email address of the User
matched against either the email address of the
“Main Contact” across all Smartsheet USM Plans
within the Region (US & EU)
For organizations operating in Centralized
Operational Mode; Smartsheet External Plans are
determined by the email address of the User
matched against validated/activated Domains with
User Auto Provisioning (UAP) enabled across all
Smartsheet USM Plans within the Region (US & EU)
LCM
EPM Context: Smartsheet Operational Mode
Definition: EPM = Enterprise Plan Manager, known
as a “Shared” Organizational Operational Mode
where one Enterprise Plan serves as the “Main” Plan
and an unlimited number of Enterprise Plans are
LCM
Term Definition Origin
interconnected as “Managed” Plans
ER Context: Refers to modifications to Sharing
permissions for a Plan Dynamic View or WorkApp a
Smartsheet User was Shared to
Definition: ER = Editor Permissions Retained
Plan Member / Provisional Member downgraded to
Viewer retains access to Dynamic Views and
WorkApps shared directly to the User
Plan External Member / Provisional Member
downgraded to Guest retains access to Dynamic
Views and WorkApps shared directly to the User or
via Group if Group Highest Permission across all
Shared to Plan Assets is Editor Cannot Share
NOTE: Dynamic Views and WorkApps utilize
modified Permission logic allowing “Viewers” to Edit
content if permitted
USM
Software X Term
EWA Context: Refers to modifications to Sharing
permissions for a Plan WorkApp a Smartsheet User
was Shared to
Definition: EWA = Editor WorkApps
USM
Software X Term
Term Definition Origin
Plan Member / Provisional Member downgraded to
Viewer retains access to Dynamic Views and
WorkApps shared either directly to the User or via
Group membership
Plan External Member / Provisional Member
downgraded to Guest retains access to Dynamic
Views and WorkApps shared directly to the User or
via Group
NOTE: Dynamic Views and WorkApps utilize
modified Permission logic allowing “Viewers” to Edit
content if permitted
EX Context: Refers to Enterprise Plans utilizing the
optional Data Retention feature
Definition: EX = User Excluded from Data
Retention
Excluded from Data Retention policy monitoring,
plan is not users Default Plan, no Assets created in
this plan
LCM
Software X Term
External Context: Relationship of a Smartsheet Asset or
User relative to a Smartsheet Plan
Definition: External Users are all users that are not
LCM
Term Definition Origin
members of the Organization managing the USM
Plan, commonly determined by the email domain of
the user. External Smartsheet Assets are created in
a Smartsheet plan other than the current plan
External Collaborator Context: Relationship of a User relative to a
Smartsheet Plan
Definition: External Users are all users that are not
members of the Organization man
USM External User Seat Types are External
Members, External Provisional Members, Guests and
External Visitors
LCM
External Business
Plan
Context: Relationship of a Smartsheet Plan to the
current plan
Definition: External business plans are plans
owned by an organization external to the current
plan organization. NOTE: Organizations can have a
mix of multiple internal plans of the types
Enterprise, Business or Pro
LCM
External Enterprise
Plan
Context: Relationship of a Smartsheet Plan to the
current plan
Definition: External business plans are plans
LCM
Term Definition Origin
owned by an organization external to the current
plan organization. NOTE: Organizations can have a
mix of multiple internal plans of the types
Enterprise, Business or Pro
External Member Context: Relationship of a User relative to a
Smartsheet Plan
Definition: External Users are all users that are not
members of the Organization managing the current
plan
USM User Seat Type of External Member is a user
who is not a member of the organization who has
Admin permissions to at least one Plan Asset and
who has completed provisional membership
USM
External Member
Level Action
eMLA
NOTE: eMLA Deprecated with 10/27/25 USM Policy Change
preventing User Level Upgrade Actions for Previously Downgraded
External Provisional Members /Members
Context: Specific “Qualifying Actions” taken by an
External USM User
Definition: eMLA = External Member Level Action,
a current USM External Viewer or USM Guest taking
a “Qualifying Action” on a Plan Asset that
automatically upgrades the user to a USM External
USM
Software X Term
Term Definition Origin
Provisional Member
eMLA Qualifying Actions:
1. Modify permissions for a Plan Asset
(Workspace, Sheet, Report, Dashboard,
Collection) (requires Admin permissions to a
Plan Asset)
2. Modify permissions for a Plan content file in a
file library (requires Admin permissions to a
Plan Asset)
3. Approve permission requests for a Plan Asset
(Workspace, Sheet, Report, Dashboard,
Collection) (requires Admin permissions to a
Plan Asset)
4. Delete a Plan Asset (Workspace, Sheet,
Report, Dashboard, Collection) (requires
Admin permissions to a Plan Asset)
5. Create, Edit, or Delete a Plan Summary Sheet
Field (requires Admin permissions to a Plan
Asset)
6. Create, Edit, or Delete a Plan Sheet
Automation (requires Admin permissions to a
Plan Asset)
7. Create, Edit, or Delete a Plan Sheet Shared
Filter (requires Admin permissions to a Plan
Asset)
8. Create, Edit, or Delete a Plan Sheet
Term Definition Origin
Users & Groups
API Tokens Context: Smartsheet Core App Feature
Definition: Plan Members and Provisional Members
for whom the Plan is the Users current Default Plan
can create API Tokens that can be used for
integrations and utilities. If the Plan Member /
Provisional Member is also a SysAdmin User the API
Tokens created by these users also serve as
authorization to use Smartsheet plan level features
such as The Smartsheet Public API and Event
Reporting
LCM
Approval Requests Context: Smartsheet USM Seat Type Viewer
Capabilities
Definition: USM Viewers can perform an unlimited
number of Approval Requests
LCM
Approved
Email/Domain
Context: Condition aspect of some USM Actions
Definition: Optional Safe Sharing feature enabled,
user targeted for Sharing is currently approved for
external collaboration either by their email address
or the domain of their email address
LCM
Asset Context: Smartsheet CoreApp digital objects LCM
Term Definition Origin
Conditional Formatting (requires Admin
permissions to a Plan Asset)
9. Create, Edit, Delete a Plan Sheet Form
(requires Admin permissions to a Plan Asset)
10. Create Plan Sheet Proof, Create Proof Info
Column, Create Proof Comment, Add New
Proof Version, Delete Proof
11. Enable, Disable Plan Sheet Publish - Read
Only Full (requires Admin permissions to a
Plan Asset)
12. Format Plan Sheet Column (requires Admin
permissions to a Plan Asset)
13. Create, Edit, or Delete Plan Sheet Column
(requires Admin permissions to a Plan Asset)
14. Edit or Delete a Plan Report (requires
Admin permissions to a Plan Asset)
15. Edit or Delete a Plan Dashboard (requires
Admin permissions to a Plan Asset)
16. Create a Plan Core Asset (i.e. Workspace,
Sheet, Report, Dashboard) NOTE: This
Qualifying Action is rare, as it requires the
Internal Plan to be the Default Plan of the
External Viewer / Guest
External Provisional
Member Qualifying
Action
Context: Specific actions taken by a USM External
Guest Seat Type User
Term Definition Origin
ePMQA
Definition: ePMQA = External Provisional Member
Qualifying Action, a current USM Plan Guest taking
an action on a Plan Asset that automatically
upgrades the user to a USM External Provisional
Member
eMLA Qualifying Actions:
1. Modify permissions for a Plan Asset
(Workspace, Sheet, Report, Dashboard,
Collection) (requires Admin permissions to a
Plan Asset)
2. Modify permissions for a Plan content file in a
file library (requires Admin permissions to a
Plan Asset)
3. Approve permission requests for a Plan Asset
(Workspace, Sheet, Report, Dashboard,
Collection) (requires Admin permissions to a
Plan Asset)
4. Delete a Plan Asset (Workspace, Sheet,
Report, Dashboard, Collection) (requires
Admin permissions to a Plan Asset)
5. Create, Edit, or Delete a Plan Summary Sheet
Field (requires Admin permissions to a Plan
Asset)
6. Create, Edit, or Delete a Plan Sheet
Automation (requires Admin permissions to a
Plan Asset)
Term Definition Origin
7. Create, Edit, or Delete a Plan Sheet Shared
Filter (requires Admin permissions to a Plan
Asset)
8. Create, Edit, or Delete a Plan Sheet
Conditional Formatting (requires Admin
permissions to a Plan Asset)
9. Create, Edit, Delete a Plan Sheet Form
(requires Admin permissions to a Plan Asset)
10. Create Plan Sheet Proof, Create Proof Info
Column, Create Proof Comment, Add New
Proof Version, Delete Proof
11. Enable, Disable Plan Sheet Publish - Read
Only Full (requires Admin permissions to a
Plan Asset)
12. Format Plan Sheet Column (requires Admin
permissions to a Plan Asset)
13. Create, Edit, or Delete Plan Sheet Column
(requires Admin permissions to a Plan Asset)
14. Edit or Delete a Plan Report (requires
Admin permissions to a Plan Asset)
15. Edit or Delete a Plan Dashboard (requires
Admin permissions to a Plan Asset)
16. Create a Plan Core Asset (i.e. Workspace,
Sheet, Report, Dashboard) NOTE: This
Qualifying Action is rare, as it requires the
Internal Plan to be the Default Plan of the
External Viewer / Guest
Term Definition Origin
External Non-User Context: Relationship of a User relative to a
Smartsheet Plan
Definition: External Non Users are all users that
are not members of the Organization managing the
current plan
USM User Seat Type of External Non User is a user
who is not a member of the organization who has
not used the Smartsheet service to date
USM
Software X Term
External Pro Plan Context: Relationship of a Smartsheet Plan to the
current plan
Definition: External business plans are plans
owned by an organization external to the current
plan organization. NOTE: Organizations can have a
mix of multiple internal plans of the types
Enterprise, Business or Pro
LCM
External Provisional
Member
Context: Relationship of a User relative to a
Smartsheet Plan
Definition: External Users are all users that are not
members of the Organization managing the current
plan
USM User Seat Type of External Provisional Member
USM
Term Definition Origin
is a user who is not a member of the organization
who has performed at least one “External Member
Level Action (eMLA)” on a Plan Asset and who has
not completed provisional membership
External Viewer Context: Relationship of a User relative to a
Smartsheet Plan
Definition: External Users are all users that are not
members of the Organization managing the current
plan
USM User Seat Type of External Viewer is a user
who is not a member of the organization who has a
highest permission level of Viewer across all Plan
Asset(s) Shared To
USM
Free Context: Relationship of a Smartsheet Plan to the
current plan
Definition: Free Plans are also referred to as
“Individual Plans” that contain only one user and are
not managed by their organization. Common
Smartsheet Free Plan use cases are organizational
users who either have not joined an organizational
Enterprise, Business or Pro plan or Individuals
whose email domain is personal and provided by an
Internet Service Provider
LCM
Term Definition Origin
G Context: Refers to the method by which the
Smartsheet User was Shared to a Smartsheet Asset
Definition: G = Shared to Group for which User is
a Member
There are two methods available for Users for
Sharing Smartsheet Asset(s) to other Smartsheet
Users. Assets can be Shared to Smartsheet
Group(s) within the plan of the Asset being Shared.
Smartsheet Groups contain members that are
composed of Smartsheet Users selected by Plan
Smartsheet Group Admins / SysAdmins.
Assets can also be Shared directly to a Smartsheet
Users email address.
LCM
GHP Context: Refers to a Group a User is currently a
member of
Definition: GHP = Group Highest Permission
The current Highest Shared to Permission level
across all Plan Assets shared to the group
USM
Software X Term
Group Admin Context: USM Seat Type Role
Definition: Group Admin = A USM Internal Member
LCM
Term Definition Origin
or Internal Provisional Member accorded the role of
Group Admin. Group Managers can create and modify
Smartsheet Groups
GM
Group Manager
Context: USM Seat Type Role
Definition: Group Manager = A USM Internal
Member or Internal Provisional Member accorded the
role of Group Admin or SysAdmin. Group Managers
can create and modify Smartsheet Groups
LCM
Software X Term
Groups Context: Smartsheet Plan Feature
Definition: Smartsheet Groups are created within
the current plan by Group Managers for whom the
current plan is the Default Plan. Smartsheet Groups
can be restricted to Plan Users or unrestricted
LCM
Guest Context: Relationship of a User relative to a
Smartsheet Plan
Definition: Guests are users that are not members
of the Organization managing the current plan that
are Shared To plan assets at specific minimum and
maximum permissions
USM User Seat Type of Guest is a user who is not a
member of the organization who has a highest
USM
Term Definition Origin
permission level of Editor Can Share across all Plan
Asset(s) Shared To and a minimum permission level
of Commenter across all Plan Asset(s) Shared To
Guests frequently have Authorized Asset User (AAU)
capabilities to Share Plan Assets due to having a
current highest permission level across all Plan Assets
Shared To the user either directly or via Plan Group
membership of Editor Can Share
Guest Level Action
GLA
Context: Specific actions taken by an External USM
User
Definition: GLA = Guest Level Action, a current
USM External Viewer taking an action on a Plan
Asset that automatically modifies the user to a USM
Guest
GLA actions include:
1. Comment in Plan Sheet
2. Edit Plan Sheet
3. Share Plan Asset
NOTE: Guest Level Actions apply to Enterprise &
Business Plans, GLA actions taken by an External
Viewer in a Pro Plan upgrades the user to an
External Provisional Member
USM
Software X Term
Term Definition Origin
Highest Permissions
HP
Context: The Highest Level of Permission a User or
Group currently has across all Plan Asset(s)
Definition: HP Permission levels are:
Owner
Admin
Editor Can Share
Editor Cannot Share
Commenter
Viewer
A USM Seat Types “HP” is the aggregate of the
Highest Permission level of any Plan Asset Shared
Directly to the User or via Membership in a Plan
Group. NOTE: A USM User who creates =>1 Plan
Asset is automatically a Member or Provisional
Member
USM
I Context: Refers to both the User/Admin performing
the specific USM Action and the target user of the
USM Action
Definition: I =Internal Plan
For organizations operating in Decentralized
Operational Mode; Smartsheet Internal Plans are
LCM
Term Definition Origin
determined by the email address of the User
matched against either the email address of the
“Main Contact” across all Smartsheet USM Plans
within the Region (US & EU)
For organizations operating in Centralized
Operational Mode; Smartsheet Internal Plans are
determined by the email address of the User
matched against validated/activated Domains with
User Auto Provisioning (UAP) enabled across all
Smartsheet USM Plans within the Region (US & EU)
Independent Context: Mastering USM Attribute
Definition: Independent is an attribute of a subset
of Mastering USM Variables which operate
independently of other Mastering USM Variables
having specific values in support of the USM
Action/Condition
USM
Software X Term
Indirect Sheet
Access
ISA
Context: Sheet Access Permission technology
utilized by several Smartsheet features
Definition:
DynamicView & WorkApps utilize an “Indirect Sheet
Access” logic so Viewers can Edit Sheets for which
they do not have the standard “Direct Sheet Access”
Edit or Admin permissions, rather Viewer permission
LCM
Term Definition Origin
Definition: Unique Instance of a Smartsheet
CoreApp object created within a Smartsheet Plan,
object types are:
1. Sheet
2. Report
3. Dashboard
4. Folder (a unique asset, however not Shareable)
Asset Status Context: Plan Assets
Definition: Plan Owned & Managed Assets
(Workspaces, Sheets, Reports, Dashboards)
LCM
Authentication Context: Plan User Login to Smartsheet
Definition: Plan Configured Authentication
Method(s) enabled for Plan Users to validate their
identity
LCM
Authorized Asset
User (AAU)
Context: Refers to all users within a plan capable of
performing USM specific action(s) on Plan Assets
Definition: Plan USM Users of one or more Seat
Types:
5. Plan SysAdmin
6. Plan Group Admin
7. Plan Asset Admin
USM
Software X Term
Term Definition Origin
or no Direct Sheet Access permission.
These features use a proxy intermediary to take the
users edit action and deliver it to the Sheet, sitting
in between the Viewer and the Sheet and
incorporating the metadata of the Viewer user,
additionally providing View Cell History credit to the
User.
Dynamic View - View Shared To User, Shared to
Group, Shared to Domain with Field(s) configured as
Editable
WorkApps - App managed role based access
control of editor
Internal Context: Relationship of a Smartsheet Asset or
User relative to a Smartsheet Plan
Definition: Internal Users are all users that are
members of the Organization managing the USM
Plan, commonly determined by the email domain of
the user. Internal Smartsheet Assets are created in
the current Smartsheet plan
LCM
Internal Member Context: Relationship of a User relative to a
Smartsheet Plan
Definition: Internal Users are all users that are
USM
Term Definition Origin
members of the Organization managing the current
plan
USM User Seat Type of Internal Member is a user
who is a member of the organization who has
Commenter permissions to at least one Plan Asset
and who has completed provisional membership
Internal Business
Plan
Context: Relationship of a Smartsheet Plan to the
current plan
Definition: Internal business plans are plans owned
by an organization. NOTE: Organizations can have a
mix of multiple internal plans of the types
Enterprise, Business or Pro
LCM
Internal Enterprise
Plan
Context: Relationship of a Smartsheet Plan to the
current plan
Definition: Internal enterprise plans are plans
owned by an organization. NOTE: Organizations can
have a mix of multiple internal plans of the types
Enterprise, Business or Pro
LCM
Internal Member
Level Action
iMLA
NOTE: iMLA Deprecated with 10/27/25 USM Policy Change
preventing User Level Upgrade Actions for Previously Downgraded
Internal Provisional Members /Members
USM
Software X Term
Term Definition Origin
Context: Specific actions taken by an Internal USM
User
Definition: iMLA = Internal Member Level Action, a
current USM Internal Viewer taking an action on a
Plan Asset that automatically upgrades the user to a
USM Internal Provisional Member
iMLA Qualifying Actions:
1. Comment on a Plan core asset (requires
>Viewer permissions to a Plan Asset)
2. Edit a Plan core asset (requires => Editor
Cannot Share permissions to a Plan Asset)
3. Create a Plan core asset
4. Modify Sharing Permissions for a Plan Core
Asset
5. Approve permission requests for a Plan sheet,
dashboard, workspace, or collection (requires
Admin permissions to a Plan Asset)
6. Delete a Plan sheet, dashboard, workspace, or
collection (requires Admin permissions to a
Plan Asset)
Internal Provisional
Member Qualifying
Action
Context: Specific actions taken by a USM Internal
Viewer Seat Type User
Definition: iPMQA = Internal Provisional Member
Qualifying Action, a current USM Internal Viewer
USM
Software X Term
Term Definition Origin
iPMQA taking an action on a Plan Asset that automatically
upgrades the user to a USM Internal Provisional
Member
iMLA Qualifying Actions:
1. Comment on a Plan core asset (requires
>Viewer permissions to a Plan Asset)
2. Edit a Plan core asset (requires => Editor
Cannot Share permissions to a Plan Asset)
3. Create a Plan core asset
4. Modify Sharing Permissions for a Plan Core
Asset
5. Approve permission requests for a Plan sheet,
dashboard, workspace, or collection (requires
Admin permissions to a Plan Asset)
6. Delete a Plan sheet, dashboard, workspace, or
collection (requires Admin permissions to a
Plan Asset)
Internal Non-User Context: Relationship of a User relative to a
Smartsheet Plan
Definition: Internal Non Users are all users that
are members of the Organization managing the
current plan
LCM
Term Definition Origin
USM User Seat Type of Internal Non User is a user
who is a member of the organization who has not
used the Smartsheet service to date
Internal Pro Plan Context: Relationship of a Smartsheet Plan to the
current plan
Definition: Internal pro plans are plans owned by
an organization. NOTE: Organizations can have a
mix of multiple internal plans of the types
Enterprise, Business or Pro
LCM
IPM Context: Refers to Internal Users who are
Provisional Members of the Target Plan
Definition: IPM = Internal Provisional Member, a
Smartsheet User internal to the Plan organization
that was Shared to a Plan Asset (Workspace or
Sheet) at any permission level on a date after the
most recent Plan USM True-Up Reconciliation
completion date
USM
Internal Provisional
Member
Context: Relationship of a Smartsheet Plan to the
current plan
Definition: Internal pro plans are plans owned by
an organization. NOTE: Organizations can have a
mix of multiple internal plans of the types
USM
Term Definition Origin
Enterprise, Business or Pro
USM User Seat Type of Internal Provisional Member
is a user who is a member of the organization who
has performed at least one “Internal Member Level
Action (iMLA)” on a Plan Asset and who has not
completed provisional membership
Internal Viewer
IV
Context: Relationship of a User relative to a
Smartsheet Plan
Definition: Internal Users are all users that are
members of the Organization managing the current
plan
USM User Seat Type of Internal Viewer is a user
who is a member of the organization who has a
highest permission level of Viewer across all Plan
Asset(s) Shared To
USM
J
Joined
Context: Refers to the “User Plan” for both the
User/Admin performing the specific USM Action and
the target user of the USM Action
Definition: J =Joined Plan, Plan User belongs to
which is not current Default Plan of User)
Note: Centralized Operational Mode organization
USM
Software X Term
Term Definition Origin
users cannot be a member of more than one
Internal Plan and unlimited External Plans.
Decentralized Operational Mode organization users
can be members of unlimited Internal and External
Plans.
LCM Context: Type of Smartsheet Plan Licensing Model
Definition: LCM = Legacy Collaborator Model, prior
to July of 2024 all Smartsheet Plans utilized the LCM
licensing model of Licensed Users, Non-Licensed
Users and External Collaborators. Aspects of the
User Subscription Model (USM) reference LCM
USM
Licensed User Context: LCM Seat Type
Definition: Licensed User is an LCM Internal User
who has been licensed by the Smartsheet Plan
SysAdmin to create and administer an unlimited
number of Plan Assets
LCM
Login History Context: Logging of User Activity
Definition: Smartsheet logs the login / logout date
+ time for all USM Plan Users for whom the plan is
the users default plan via the “Login History” report
LCM
M Context: Refers to a Smartsheet Group LCM
Term Definition Origin
Membership
Definition: M =Member, Plan User is a member of a
Plan Group
Note: If permitted by the Plan, Group members can
be comprised of both Internal and External Users
Member Context: USM Seat Type
Definition: Member = A USM Internal or External
Seat Type defined by having Authorized Asset User
(AAU) capabilities to Create and / or Share an
unlimited number of Plan Assets
USM
Modified State
Variables
Context: Mastering USM Design Element
Definition: Modified State Variable = detail which
Smartsheet attributes were modified a specific USM
Action
USM
Software X Term
Modified State Visual Context: Mastering USM Design Element
Definition: Modified State Visual = a visual display
for the end user app experience of the Smartsheet
User who is the target of the specific USM Action
USM
Software X Term
NTURPC Context: USM Seat Type USM
Term Definition Origin
Next True Up Period
Reconciliation Period
Conclusion
Definition: NTURPC = An Internal Provisional Plan
Member who will automatically be downgraded to an
Internal Viewer unless upgraded by a Plan
SysAdmin prior to the Next True Up Reconciliation
Period Conclusion date
An External Provisional Plan Member who will
automatically be downgraded to a Guest* unless
upgraded by a Plan SysAdmin prior to the Next True
Up Reconciliation Period Conclusion date
Next True Up Period alternatively referred to as
“Next Review Period”
*Pro Plans do not have Guest Seat Types, External
Provisional Members of these Plans will be
automatically downgraded to an External Viewer
Seat Type
Software X Term
Non Licensed User Context: LCM Seat Type
Definition: Non-Licensed User is an LCM Internal
User who can view and edit an unlimited number of
Plan Assets Shared To them directly or via Plan
Group memberships
LCM
Term Definition Origin
NU Context: Some USM Actions directed towards users
result in different results depending upon the status
of the targeted user
Definition: The targeted Users Smartsheet “Profile”
NU = Non User, an individual who is not currently
using the Smartsheet service
LCM
Software X Term
O
Owner
Context: Refers to Ownership of Plan Assets
Definition: O =Owner, the Smartsheet Plan Member
/ Provisional Member who either created or was
promoted to the Ownership of a Plan Asset
(Workspace or Sheet) Owner permissions include all
Admin permissions
Default Plan is the Internal or External USM Plan
which they have been assigned / or selected to serve
as their Default Plan when using Smartsheet. The
Users Default Plan is the exclusive plan for creating
and/or owning Assets
Note: The user optionally selects / changes their
Default plan if they are a USM Member / Provisional
Member / Guest / Viewer on two or more USM plans
(internal and/or external)
LCM
Operational Mode Context: Smartsheet service method of operation LCM
Term Definition Origin
8. Plan Member
9. Provisional Plan Member
10. Plan Guest who has been Shared to a Plan
Asset (Workspace or Sheet) with Editor Can
Share permissions
Business Context: Smartsheet Plan Types
Definition: A Smartsheet Business Plan is one level
below an Enterprise Plan
LCM
C Context: Owner of the Smartsheet Asset
Definition: C=Current Plan, the plan the USM
Action being taken will affect
LCM
Centralized
Centralized
Enterprise Plan
CM
Context: Organizational Operation of Smartsheet
Definition: Centralized Operational Mode is
characterized by a single Smartsheet Plan (usually
Enterprise) managing all organizational Smartsheet
Assets and Users
LCM
Collaborate -
Dynamic Views
Context: Actions Available to USM Viewer Seat
Types
Definition: The DynamicView Smartsheet Premium
Application supports Sharing a Dynamic View “View”
LCM
Term Definition Origin
selected by organization
Definition: Centralized Operational Mode = A single
Smartsheet Enterprise Plan manages all
organization Smartsheet Users and Smartsheet
Assets
Decentralized Operational Mode = Multiple
Smartsheet Plans of potential varied Plan Types are
deployed to manage organizational Smartsheet
Users and Smartsheet Assets
Owner Permission /
Status
Context: Smartsheet Asset Ownership
Definition: Each Smartsheet Plan Asset is created
by a Plan User who is also the initial Owner of the
Asset and assigned the Permission level of Admin.
Asset Ownership can be transferred among Plan
Users who are USM Plan Members
LCM
Permission Context: Varying capabilities to Smartsheet Plan
Asset(s)
Definition: Plan Asset Permission levels from
highest to lowest capabilities:
Owner
Admin
LCM
Term Definition Origin
Editor Can Share
Editor Cannot Share
Commenter
Viewer
Plan Context: A unique digital container within the
Smartsheet service that contains Smartsheet
Assets, Smartsheet Users and Plan specific
operational (i.e. Platform) settings
Definition: Smartsheet Plans from highest to
lowest features:
Enterprise
Business
Pro
Free
LCM
Plan Admin Action Context: USM Actions Upgrading User(s) Taken by
Plan Administrators
Definition: Plan Group Managers, Plan Unmanaged
Asset Managers and SysAdmins each have a specific
USM action that can result in upgrading USM Users
to Members / Provisional Members
LCM
Software X Term
Plan Align Context: The User Profile of the User Taking an
Action in Mastering USM
USM
Term Definition Origin
Definition: The Users “Alignment” with the Current
plan determines if the User can take the desired
action (i.e. Add a User to a Group) Plan Alignment is
either Internal or External and in most cases the
Alignment must be Internal
Software X Term
Plan Asset
Plan Core Asset
Context: A Smartsheet Asset Created in the
Smartsheet Plan by a Plan Member / Provisional
Member
Definition: Smartsheet Plan Assets include:
Sheets
Reports
Dashboards
Workspaces
LCM
Plan Asset Admin Context: USM Seat Type Role
Definition: Plan Asset Admin = A USM Internal
Member or Internal Provisional Member accorded the
role of Plan Asset Admin. Authorized to review and
approve/decline user requests for Sharing to
Unmanaged Assets
LCM
Plan End User Action Context: USM Actions Upgrading User(s) Taken by
Authorized Asset Users (AAU)
USM
Term Definition Origin
Definition: Plan Authorized Asset Users (AAU) have
specific USM actions that can result in upgrading
USM Users to Members / Provisional Members
Software X Term
Plan Type Context: A unique digital container within the
Smartsheet service that contains Smartsheet
Assets, Smartsheet Users and Plan specific
operational (i.e. Platform) settings
Definition: Smartsheet Plans from highest to
lowest features:
Enterprise
Business
Pro
Free
LCM
Plan User Context: Specific USM Seat Type Role
Definition: Plan User = A USM Seat Type that is
also a “Plan User” which is a Legacy Collaborator
Model construct. Internal Members and Internal
Viewers are Plan Users, Internal Provisional
Members are generally not Plan Users with some
exceptions
LCM
Policy Compliant Context: Smartsheet Optional Data Retention & LCM
Term Definition Origin
Data Egress Features
Definition: Enterprise Plans with these optional
features support policies creating required
compliance actions for Plan Users affected
Previous
Downgrades
Context: USM Seat Type Member Licensing Policy
Definition: Plan USM Members can be Downgraded
a maximum of 2 times, after which the user is
permanently limited to a USM Plan Seat Type of
Viewer
USM
Prior Seat Type Context: USM Plan User Upgraded via “Triggers” to
Provisional Member
Definition: USM Internal Viewers are recategorized
to USM Seat Type of Internal Provisional Member
when both a Plan Asset has been Shared to the User
at a Permission level of Commenter or greater and
the user takes an iMLA (Internal Member Level
Action) on a Plan Asset
USM External Guests are recategorized to USM Seat
Type of External Provisional Member when both a
Plan Asset has been Shared to the User at a
Permission level of Admin and the user takes an
eMLA (External Member Level Action) on a Plan
USM
Term Definition Origin
Asset
Pro Context: Smartsheet Plan Types
Definition: A Smartsheet Pro Plan is the entry level
Smartsheet Plan supporting multiple users
LCM
Profile Context:Some USM Actions directed towards users
result in different results depending upon the
configuration of the targeted user
Definition: User relationship with the Smartsheet
service
USM
Proof Review
Requests
Context: Smartsheet USM Seat Type Viewer
Capabilities
Definition: USM Viewers can perform an unlimited
number of Proof Review Requests
LCM
Provisional Member Context: USM Seat Type
Definition: Provisional Member = A USM Internal or
External Seat Type defined by having Authorized
Asset User (AAU) capabilities to Create and / or
Share an unlimited number of Plan Assets. The
Provisional Status of the user will automatically
convert to a Member at the conclusion of the Plan’s
USM
Term Definition Origin
next USM True Up reconciliation unless downgraded
prior.
Qualifying Action Context: USM User Seat Type Change
Definition: Qualifying Action - A specific group of
end user actions that when taken by either an
Internal Viewer (Internal Member Level Action) or
External Viewer / Guest (External Member Level
Action) that result in the user being upgraded to an
Internal Provisional Member or External Provisional
Member
Pre-Requisite: The user must have been granted
Sharing Permission to one or more Plan Assets at a
Permission level that permits the Qualifying Action
to be performed. For Internal Viewers the
permission level is Commenter or greater. For
External Viewers / Guests the permission level is
Admin
USM
R Context: Refers to modifications to Sharing
permissions for an Asset a Smartsheet User was
Shared to
Definition: R = Asset or Workspace Permissions
Removed
USM
Software X Term
Term Definition Origin
Plan Member / Provisional Member downgraded to
Viewer automatically removed from Group
membership if Group had Commenter or >
Permissions to =>1 Plan Asset
Plan External Member / Provisional Member
downgraded to Guest automatically removed from
Group membership if Group had Admin Permissions
to =>1 Plan Asset
RAP Context: Refers to modifications to Sharing
permissions for a Plan Dynamic View or WorkApp a
Smartsheet User was Shared to
Definition: RAP = Reduced API Permissions
Plan Member / Provisional Member downgraded to
Viewer retains reduced functionality for API Tokens
created prior to downgrade. Read-Only API Token
operations will continue to function, create and edit
operations will not function
Default Plan is the Internal or External USM Plan
which they have been assigned / or selected to serve
as their Default Plan when using Smartsheet. The
Users Default Plan is the exclusive plan for creating
API Tokens
USM
Software X Term
Term Definition Origin
Note: The user optionally selects / changes their
Default plan if they are a USM Member / Provisional
Member / Guest / Viewer on two or more USM plans
(internal and/or external)
Reduced Context: Result of a USM User Downgrade Action
Definition: Certain USM Seat Type downgrade
actions will result in the downgraded user retaining
access to specific plan assets but in a reduced
capability (i.e. Viewer vs Editor)
USM
Software X Term
Removed Context: Result of a USM User Downgrade Action
Definition: Certain USM Seat Type downgrade
actions will result in the downgraded user having
access to specific plan assets removed (i.e.
downgrade member to viewer)
USM
RG Context: Refers to modifications to Sharing
permissions for an Asset a Smartsheet User was
Shared to
Definition: RG = Internal Member Removed from
Group
Plan Internal Member / Provisional Member
downgraded to Viewer automatically removed from
USM
Software X Term
Term Definition Origin
Group membership if Group had Commenter or >
Permissions to =>1 Plan Asset
RGE+S Context: Refers to Smartsheet External Provisional
Member / Member Downgraded to a Guest with a
maximum permission of Editor Cannot Share on all
existing Plan Assets
Definition: RGE+S = Retained Group Membership
w Editor Can Share Permission to Plan Asset(s)
The USM Admin Center TrueUp function of
“Downgraded to a Guest with a maximum
permission of Editor Cannot Share on all existing
Plan Assets” will not downgrade the permission level
of the user to any assets Shared to Groups the user
is currently a member of for which the highest
permission of all current plan assets Shared to is
Editor Can Share. This will result in the user
retaining their Authorized Asset User “AAU” status
and capability. The user will also remain a member
of these Group(s)
USM
Software X Term
RGG Context: Refers to modifications to Sharing
permissions for an Asset a Smartsheet User was
Shared to
USM
Software X Term
Term Definition Origin
to USM Viewer Seat Types with limited editing
capabilities
Collaborate -
WorkApps
Context: Actions Available to USM Viewer Seat
Types
Definition: The WorkApps Smartsheet feature
supports Sharing a WorkApps “Apps” to USM Viewer
Seat Types with limited editing capabilities
LCM
CO
Commenter
Permission
Context: Refers to User having Commenter
Permission Level of specific Plan Assets
Definition: CO = Commenter, a Smartsheet Plan
Member / Provisional Member / Guest who has been
Shared to a Plan Asset (Workspace or Sheet) with
Commenter permissions
LCM
Conditions Context: Mastering USM Term for Specific Variables
Definition: Conditions are a set of USM attributes
(Plan Type, Operational Mode, Plan Role, etc.) for
which a combination of current values are required
to be able to perform a USM action
USM
Software X Term
CorS Context: Owner of the Smartsheet Asset
Definition: CorS=Current or Separate Plan, Plan
LCM
Software X Term
Term Definition Origin
Definition: RGG = External Member Removed from
Group, removing the User from access to all Plan
Asset(s) shared to the Group*
Plan External Member / Provisional Member
downgraded to Guest automatically removed from
Group membership if Group had Admin Permissions
to =>1 Plan Asset. *NOTE: see RARG for exceptions
Plan External Member / Provisional Member
downgraded to Viewer automatically removed from
Group membership if Group had >Viewer
Permissions to =>1 Plan Asset
RGO Context: Refers to Smartsheet User removed from
Group Admin Capability, Plan SysAdmins retain
management of Group(s) created by User
Definition: RGO = Removed from Group Ownership
Plan Member / Provisional Member downgraded to
Viewer or No Access automatically removed from
Plan Group Admin capability if plan is Members
Default Plan
Default Plan is the Internal or External USM Plan
which they have been assigned / or selected to serve
USM
Software X Term
Term Definition Origin
as their Default Plan when using Smartsheet. The
Users Default Plan is the exclusive plan for creating /
managing Groups if provided the Group Admin
capability
Note: The user optionally selects / changes their
Default plan if they are a USM Member / Provisional
Member / Guest / Viewer on two or more USM plans
(internal and/or external)
RGP Context: Refers to Smartsheet User removed from
Plan Group Membership
Definition: RGP = Removed from Group via
Permissions
Plan Member / Provisional Member downgraded to
Viewer automatically removed from Group
membership if Group had Commenter or >
Permissions to =>1 Plan Asset
Plan External Member / Provisional Member
downgraded to Guest automatically removed from
Group membership if Group had Admin Permissions
to =>1 Plan Asset
USM
Software X Term
Role Context: Refers to specific function(s) a
Smartsheet User has been assigned within a USM
USM
Term Definition Origin
Plan
Definition: End User or Administrative User
assigned area of functionality within a Smartsheet
Plan
● USMU - USM User, every user (Internal &
External) who is a member of a Smartsheet
USM Plan is a USMU
● PU - Plan User, Primarily comprised of Internal
USM Members and Internal Viewers owing to
LCM operational design. Plan Users are
manageable via the Smartsheet API and LCM
Originated Plan Reports
● AAU - Authorized Asset User, the subset of
Smartsheet USM Plan members who by either
USM Seat Type (Member, Provisional Member,
Guest*) or User Role (i.e. SysAdmin, Group
Admin, Plan Asset Admin) who can perform
USM Direct or Indirect Licensing Actions
● GM - Group Managers, the subset of
Smartsheet USM Plan members who have
been assigned either the SysAdmin or Group
Admin role enabling them to perform USM
Indirect Licensing Actions
● UAM - Unmanaged Managers, the subset of
Smartsheet USM Plan members who have
Software X Term
Term Definition Origin
been assigned either the SysAdmin or Plan
Asset Admin role enabling them to perform
USM Direct Licensing Actions
“User Attributes” is an interchangeable term for Role
RPA Context: Refers to Smartsheet User removed from
Plan Asset Admin Capability
Definition: RPA = Removed from Plan Asset Admin
Plan Member / Provisional Member downgraded to
Viewer or No Access automatically removed from
Plan Asset Admin capability if plan is Members
Default Plan
Default Plan is the Internal or External USM Plan
which they have been assigned / or selected to serve
as their Default Plan when using Smartsheet. The
Users Default Plan is the exclusive plan for serving as
a Plan Asset Admin if provided the Plan Asset Admin
capability
Note: The user optionally selects / changes their
Default plan if they are a USM Member / Provisional
Member / Guest / Viewer on two or more USM plans
(internal and/or external)
USM
Software X Term
Term Definition Origin
S Context: Owner of the Smartsheet Asset
Definition: S=Separate Plan, a different plan from
the plan the USM Action being taken will affect
Note: in Decentralized Operational Mode the plan
could be Internal or External, in Centralized
Operational Mode the plan will be External)
USM
Software X Term
Safe Sharing Context: Standard Smartsheet Enterprise Plan
Feature
Definition: If enabled, Safe Sharing limits the
External Users Plan Assets can be Shared To
LCM
Share Context: Standard Smartsheet Feature
Definition: Authorized Asset Users (AAU) can
initiate collaboration with other Internal and/or
External Users and Plan Groups of any Plan Asset
the AAU currently has Editor Can Share or Admin
permissions
The AAU can “Share To” any combination of Users
and Groups at any Permission level up to the AAU’s
current permission level for the asset
LCM
Shared To Context: Standard Smartsheet Feature LCM
Term Definition Origin
Definition: Users that have been granted
permission to access Plan Asset(s) are referred to as
having been “Shared To”
Sheets Context: Smartsheet Core Feature
Definition: Sheets are the most common Plan
Asset type and are used extensively by Dashboards
and Reports
LCM
Submit Forms Context: Smartsheet USM Seat Type Viewer
Capabilities
Definition: USM Viewers can perform an unlimited
number of Smartsheet Form Submissions
LCM
SysAdmin Context: USM Seat Type Role
Definition: SysAdmin = A USM Internal Member or
Internal Provisional Member accorded the role of
System Admin. Authorized to review and
approve/decline user requests for Sharing to
Unmanaged Assets, Create Groups, Manage all Plan
Groups, Manage all Plan Platform Settings, Add
Users, Remove Users
LCM
Target Op Mode Context: Some USM Actions directed towards users LCM
Term Definition Origin
external to their organization result in different
results depending upon the configuration of
Smartheet at the external organization
Definition: The Smartsheet Operational Mode of
the target users organization. C = Centralized
Operational Mode, a single Smartsheet Plan, D =
Decentralized Operational Mode, multiple
Smartsheet Plans
Transition to USM Context: Existing Smartsheet Plan Conversion
Definition: Smartsheet Plans managed by the
Legacy Collaborator Model (LCM) will be converted
to User Subscription Model in a one time procedure,
the conversion is referred to as a “Transition” to
USM and the transition includes a USM “Transition
Member Count Calculator” that calculates the
Highest Permission (HP) on Plan Assets for each
user.
All LCM Users will be initially classified as USM Seat
Type of Viewer except for LCM Licensed Users who
are initially classified as Members
USM
Trial User Context: New Plan User Initial Classification
Definition: Trial User is an LCM feature where new
LCM
Term Definition Origin
Internal Plan Users were accorded a 30 day trial
with full “Licensed User” functionality. USM
Provisional Members operate in a manner very
similar to Trial Users
U Context: Refers to the method by which the
Smartsheet User was Shared to a Smartsheet Asset
Definition: U =Shared to User Directly
There are two methods available for Users for
Sharing Smartsheet Asset(s) to other Smartsheet
Users. Assets can be Shared to Smartsheet
Group(s) within the plan of the Asset being Shared.
Smartsheet Groups contain members that are
composed of Smartsheet Users selected by Plan
Smartsheet Group Admins / SysAdmins.
Assets can also be Shared directly to a Smartsheet
Users email address.
LCM
UAM Context: USM Seat Type Role
Definition: UAM = Unmanaged Asset Manager, A
USM Internal Member or Internal Provisional Member
accorded the role of Plan Asset Admin or SysAdmin.
Unmanaged Asset Managers can review and approve
Sharing requests to all Plan Unmanaged Assets
LCM
Term Definition Origin
Unmanaged Asset
Unmanaged Plan
Asset
UPA
Context: Refers to Smartsheet Plan Assets
presently without an Owner or Admin
Definition: All Smartsheet Plan Assets are created
by an Internal USM Member or Internal Provisional
Member. When the Member who created the plan
asset has a change to their USM Seat Type status
(i.e. Member to Viewer, Member to Removed /
Deactivated User) AND the Plan Asset has not been
Shared To any other Users / Groups at the
permission level of Admin for which at least one of
these users remains a Plan Member the Asset is
classified as an “Unmanaged Asset” for which when
a user requests Shared To permission on the asset
all Plan Asset Managers and SysAdmins are notified
to review / approve the Sharing Request.
NOTE: Unmanaged Assets continue to operate
normally for all Shared To users other than a lack of
Admin user assignment at present
LCM
User Context: An Individual collaborating in a
Smartsheet USM Plan
Definition: USM Seat Types are:
Internal Member
LCM
Term Definition Origin
Internal Provisional Member
Internal Viewer
External Member
External Provisional Member
Guest
External Viewer
User Plan Context: User Alignment with Smartsheet Plans
Definition: LCM = Users had one Internal Plan,
USM = Users can have unlimited Internal & External
Plans
USM
Software X Term
USM Context: Type of Smartsheet Plan Licensing Model
Definition: USM = User Subscription Model, a new
Smartsheet service subscription model first
introduced in July of 2024.
USM includes 4 primary Seat Types spanning
internal and external users and licensing is
determined primarily by Plan Assets Shared To the
user
USM
USM Algorithm Context: Smartsheet USM “Shift” from Legacy
Collaborator Model
Definition: The USM Shift Algorithm is a retroactive
USM
Software X Term
Term Definition Origin
owner could be either the Current Plan or a Separate
plan based upon User Default plan
Note: in Decentralized Operational Mode the plan
could be Internal or External, in Centralized
Operational Mode the plan will be External)
Create Assets Context: Plan Members / Provisional Members
creating Smartsheet Assets (Workspaces, Sheets,
Reports, Dashboards) within the Plan
Definition: Smartsheet Assets created, owned and
managed by the Smartsheet Plan
LCM
Current State
Variables
Context: Mastering USM Term for Specific Variables
Definition: USM Current State Variables are the
attributes of a Smartsheet Object or User at the
time a USM action is taken. NOTE: Often these
variables are modified by the USM action taken
USM
Software X Term
Current State Visual Context: Mastering USM Term for Specific Variables
Definition: USM Current State Visual are graphical
displays of current state variables which are the
attributes of a Smartsheet Object or User at the
time a USM action is taken. NOTE: Often these
USM
Software X Term
Term Definition Origin
reclassification engine that performs an audit when
the LCM Plan is converted or “Shifted” or
“Transitioned” to USM of all all Plan Assets, all Plan
Users and all External Collaborators, classifying the
users into 7 USM Seat Types depending upon
historical activity
Update Requests Context: Smartsheet USM Seat Type Viewer
Capabilities
Definition: USM Viewers can perform an unlimited
number of Sheet Update Requests
LCM
USM Internal-Non
User
Context: Internal Individual who is not presently a
Smartsheet User
Definition: Internal Non-Users have not used
Smartsheet and when initially using Smartsheet
certain processes are performed depending upon
the organizations Smartsheet Operational Mode
USM
Software X Term
V
Viewer Permission
Context: Refers to User or Group having Viewer
Permission Level of specific Plan Assets
Definition: Viewer = A Smartsheet Plan Member /
Provisional Member / Guest or Group that has been
Shared to a Plan Asset (Workspace or Sheet) with
Viewer permissions
LCM
Term Definition Origin
Variable Assignment Context: Mastering USM Analysis Term
Definition: Analysis of the impact(s) of a USM
Action includes a number of specific Smartsheet
attributes, the valid values for each of these
attributes represent the “variable assignments” of
the action
USM
Software X Term
View Published
Assets
Context: Smartsheet USM Seat Type Viewer
Capabilities
Definition: USM Viewers can view an unlimited
number of Published Plan Assets depending upon
the published asset setting (i.e. Plan Users, Anyone
with the Link, Shared to Users)
LCM
View Shared Assets Context: Smartsheet USM Seat Type Viewer
Capabilities
Definition: USM Viewers can view an unlimited
number of Plan Assets shared to them at Viewer
level permission
LCM
Viewer Context: USM Seat Type
Definition: Viewer = A USM Internal or External
Seat Type defined by having a maximum current
permission level for all Shared To Plan Assets either
USM
Term Definition Origin
directly or via Plan Group memberships of Viewer
WorkApps Context: Smartsheet Premium App
Definition: WorkApp “Apps” can contain a
combination of Smartsheet assets (Sheets, Forms,
Reports, Dashboards, DynamicViews) which are
shared to Users and/or Groups at varying
permission levels
LCM
Workspaces Context: Smartsheet CoreApp Asset Container
Definition: Top level container containing any
combination of Smartsheet CoreApp Assets:
● Sheets
● Reports
● Dashboards
● Folders
Users and Groups can be shared to a Workspace,
providing dynamic access to all current and future
Workspace assets
LCM
XPM Context: Refers to External Users who are
Provisional Members of the Target Plan
Definition: XPM = External Provisional Member, a
Smartsheet User external to the Plan organization
that was Shared to a Plan Asset (Workspace or
USM
Term Definition Origin
Sheet) at Admin permission level on a date after the
most recent Plan USM True-Up Reconciliation
completion date
Term Definition Origin
variables and corresponding visuals are modified by
the USM action taken
D Context: Refers to both the User/Admin performing
the specific USM Action and the target user of the
USM Action
Definition: D =Default Plan, each Smartsheet user
has a single USM or LCM plan which they have been
assigned / or selected to serve as their Default Plan
when using Smartsheet. The Default Plan is the
exclusive plan for performing the following standard
and optionally authorized features:
Login Authentication
Asset Creation
API Token Creation
Login Activity Logging
Group Administrator
Plan Asset Administration
SysAdmin Administration
Note: The user optionally selects / changes their
Default plan if they are a USM Member / Provisional
Member / Guest / Viewer on two or more USM plans
(internal and/or external)
USM
Software X Term
Data Egress Context: Optional Smartsheet Enterprise Plan
Platform Feature
LCM
Term Definition Origin
Definition: Data Egress enables multiple policies
for controlling the egress of Plan Assets. Data
Egress uses Smartsheet Plan Groups to apply the
policy to Users
Data Retention Context: Optional Smartsheet Enterprise Plan
Platform Feature
Definition: Data Retention enables a policy for
deleting Plan owned Sheets. Data Retention uses
Smartsheet Plan Groups to apply the policy to Sheet
Users who created the Sheets
LCM
Decentralized
Decentralized
Operational Mode
DM
Context: Organizational Operation of Smartsheet
Definition: Decentralized Operational Mode is
characterized by a two or more Smartsheet Plans
managing organizational Smartsheet Assets and
Users
LCM
Default
Default Plan
Context: Attributes of a Specific Smartsheet Plan
Definition: A Smartsheet Users “Default Plan” is
the plan that defines a users Smartsheet Login
Authentication, location for if/when the user creates
Smartsheet Assets including API Tokens and is the
plan a User can be provided the roles of Plan Asset
USM
Term Definition Origin
Admin, Group Admin and SysAdmin
Dependent Context: Mastering USM Attribute
Definition: Dependent is an attribute of a subset of
Mastering USM Variables which are dependent upon
other Mastering USM Variables having specific
values in order for the Dependent USM Variable to
support the Action/Condition
USM
Software X Term
Disabled or N/A Context: Condition aspect of some USM Actions
Definition: Optional Safe Sharing feature either
Not Enabled or feature not available for plan
LCM
DO
Dynamic Views
Context: DynamicView View Sharing Permissions -
Shared Domains
Definition: DO = Shared to Domain
The “Shared Domains” feature is an Access Control
that does require the user to Authenticate to their
current Smartsheet Default Plan. The DynamicView
Plan Safe Sharing feature is either Not Enabled or
Enabled with the Dynamic View “Shared to Domain”
domains included in the Safe Sharing “Approved
Domains” with the exception of domains that are
validated and activated in the DynamicView Plan
LCM
Software X Term
sales@thesoftwarex.com © 2025-2026 - Software X - All Rights Reserved v6.04 Page -9
`;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.rollpointllc.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array required' });
    }
    if (messages.length > 20) {
      return res.status(429).json({ error: 'Conversation too long. Please start a new session.' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: messages
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Anthropic API error:', error);
      return res.status(response.status).json({ error: error.error?.message || 'API error' });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error('Proxy error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
