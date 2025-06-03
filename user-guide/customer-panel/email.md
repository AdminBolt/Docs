# Email Management

The Email Management section provides tools to create and manage email accounts for your domains.

## Email Accounts Overview
**URL:** `/customer/email-accounts-page`

![Email Accounts Interface](/screenshots/email-accounts-list.png)

### Interface Elements

#### Top Bar
- **New email account** button: Create new email accounts
- **Search** field: Filter accounts by name or domain
- **Documentation** link: Access detailed help resources

#### List View Columns
- **Account @ Domain**: Email address and associated domain
- **Restrictions**: Account status and limitations
- **Storage**: Used/Allocated space
- **Actions**: Available operations
  - Login to Webmail
  - Manage Account
  - Connect Devices

#### List Controls
- **Per page** dropdown: Adjust number of visible accounts
- **Sort options**: Order by account name or domain
- **Pagination**: Navigate through multiple pages

### Quick Actions
For each email account, you can:
- **Login to Webmail**: Direct access to web interface
- **Manage**: Configure account settings
- **Connect Devices**: Set up email clients

## Creating an Email Account
**URL:** `/customer/email-accounts-page/create`

![Create Email Account Interface](/screenshots/email-accounts-create.png)

### Required Information
1. **Username**
   - Enter the local part of the email address (before @)
   - Will be combined with selected domain

2. **Domain Selection**
   - Choose from your available domains
   - Forms the complete email address (username@domain.com)

3. **Password Setup**
   - Set password now (recommended)
   - Or set login link to alternate email address
   - Generate secure password option available
   - Password strength indicator included

### Optional Settings
Toggle the "Optional Settings" switch to configure:
- Storage quota
- Spam filtering level
- Auto-reply settings
- Forwarding options

### Creation Options
- **Create**: Set up single account
- **Create & create another**: Create multiple accounts
- **Cancel**: Exit without creating

## Managing Email Accounts
**URL:** `/customer/email-accounts-page/manage`

From the email accounts list, you can:
- View account usage and storage statistics
- Change passwords and security settings
- Adjust quotas and restrictions
- Configure spam filters and forwarding
- Set up email clients and devices
- Enable/disable account access

## Email Client Configuration
**URL:** `/customer/email-accounts-page/[account]/settings`

Each email account provides:
- IMAP/POP3 settings
- SMTP configuration
- Webmail access
- SSL/TLS security options
- Authentication details

## Search and Filter
**URL:** `/customer/email-accounts-page` (with search parameters)

Use the search bar to quickly find specific email accounts by:
- Email address
- Domain name
- Account status 