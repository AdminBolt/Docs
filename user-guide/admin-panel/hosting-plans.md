# Hosting Plans

The Hosting Plans section provides a centralized interface to create, view, edit, and manage hosting service tiers within your AdminBolt environment.

## Hosting Plans Overview
**URL:** `/admin/hosting-plans`

![Hosting Plans Interface](/screenshots/admin-hosting-plans.png)

### Interface Elements

#### Top Bar
- **New hosting plan** button: Create new reseller accounts
- **Search** field: Filter plans by name or features

#### List View Columns
- **Name**: Hosting plan identifier
- **Additional Services**: Supplementary offerings included
- **Features**: Key capabilities and resources provided
- **Actions**: Available operations
    - Edit Plan Details
    - Delete Plan

#### List Controls
- **Per page** dropdown: Adjust number of visible plans
- **Pagination**: Navigate through multiple pages

### Quick Actions
For each hosting plan, you can:
- **Edit**: Modify plan specifications and resources
- **Delete**: Remove hosting plans from the system

## Creating Hosting Plan
**URL:** `/admin/hosting-plans/create`
![Create Hosting Plan Interface](/screenshots/admin-hosting-plans-create.png)

### General Tab Information
1. **Default Server Application Type**
    - Select technology stack
    - Required field with descriptive helper text
   
2. **PHP Version**
    - Select PHP version for the hosting plan
    - Required field with dropdown selection

3. **Default database server type**
    - Select database technology
    - Required field with descriptive helper text
   
4. **Plan Details**
    - **Name**: Plan identifier
    - **Description**: Detailed explanation of plan features

### Hosting Parameters Tab
1. **Storage & Bandwidth**
    - **Disk Space**: Maximum disk space allocation in MB
    - **Bandwidth**: Monthly bandwidth limit in MB

2. **Account Limits**
    - **Databases**: Maximum number of databases
    - **FTP Accounts**: Maximum number of FTP accounts
    - **Email Accounts**: Maximum number of email accounts

3. **Domain Configuration**
    - **Subdomains**: Maximum number of subdomains
    - **Parked Domains**: Maximum number of parked domains
    - **Addon Domains**: Maximum number of addon domains

4. **Additional Features**
    - **SSL Certificates**: Number of included SSL certificates
    - **Daily Backups**: Number of automated backups
    - **Free Domain**: Number of free domains included

### Email Parameters Tab
1. **Email Configuration**
    - **Max aliases**: Maximum number of email aliases
    - **Max possible mailboxes**: Maximum number of mailboxes

2. **Quota Settings**
    - **Default mailbox quota**: Default storage per mailbox in MB
    - **Max quota per mailbox**: Maximum storage per mailbox in MB
    - **Domain quota**: Total email storage per domain in MB

### Advanced Tab
1. **Additional Configuration**
    - **Additional Services**: Optional extra services
    - **Features**: Optional premium features
    - Dropdown selections for specialized services

### Creation Options
- **Create**: Set up single hosting plan
- **Create & create another**: Create multiple plans consecutively
- **Cancel**: Exit without creating

## Editing Hosting Plan
**URL:** `/admin/hosting-plans/plan_id/edit`
![Edit Hosting Plan Interface](/screenshots/admin-hosting-plans-edit.png)

The edit interface provides the same fields as the creation form, allowing you to:
- Modify technology stack settings
- Adjust resource allocations
- Update account limitations
- Configure email parameters
- Edit additional services and features
- 
## Edit Form Sections

- **General**: Basic plan settings and technologies
- **Hosting Parameters**: Resource allocations and limits
- **Email Parameters**: Email service configurations
- **Advanced**: Additional services and features

### Save Options
- **Save Changes** - Apply modifications to the reseller account
- **Cancel** - Discard changes and return to reseller list
- **Delete**: Remove the plan (button in top-right corner)

## Deleting Hosting Plan
![Delete Hosting Plan Interface](/screenshots/admin-hosting-plans-delete.png)

The deletion process includes:
- Confirmation dialog to prevent accidental deletion
- Warning about permanent removal of reseller data
- Cancel option to abort the deletion process
- Confirm button to proceed with removal

## Hosting Plans Management Benefits
The Hosting Plans section streamlines service management by providing:
- Centralized plan configuration for consistent service delivery
- Flexible resource allocation across different service tiers
- Comprehensive email service configuration
- Simplified technology stack management
- Fine-grained control of account limitations