# Hosting Subscriptions

The Hosting Subscriptions section provides a comprehensive interface for managing website hosting accounts and domains across your AdminBolt environment.

## Hosting Subscription Overview
**URL:** `/admin/hosting-subscriptions`

![Customers Interface](/screenshots/admin-hosting-subscriptions.png)

### Interface Elements

#### Top Bar
- **Create hosting subscription** button: Set up new hosting accounts
- **Search** field: Filter subscriptions by domain or customer
- **Filter** button: Refine subscription listing by various criteria
- 

#### List View Columns
- **Domain**: Website domain name with lock indicator for secure sites
- **System username**: Auto-generated system account identifier
- **Customer**: Associated customer account
- **Created at**: Timestamp of subscription creation
- **Actions**: Context menu with available operations

#### List Controls
- **Per page** dropdown: Adjust number of visible subscriptions
- **Sort options**: Order by domain, username, customer, or creation date
- **Pagination**: Navigate through multiple results

### Quick Actions
The context menu provides access to the following operations:
- **View**: Display subscription details
- **Edit**: Modify subscription settings
- **Open website**: Visit the live site in a new tab
- **Open website (local)**: Access local development version
- **Suspend**: Temporarily disable the subscription
- **Delete**: Permanently remove the subscription
- **Activity History**: View subscription event log


## Creating Hosting Subscription
![Create Customer Interface](/screenshots/admin-hosting-subscription-create.png)

### Required Information
1. **Domain**
    - Full domain name for the website
    - Required field marked with asterisk
    - Domain configuration tool available

2. **Customer**
    - Select customer account to associate with the subscription
    - Required field with dropdown selection
    - "+" button to create new customer while creating subscription

3. **Hosting Plan**
    - Select subscription tier/package
    - Determines resources and capabilities
    - Required field with dropdown selection

### Advanced
Toggle the "Advanced" checkbox to access additional configuration options:
- **System Username**: Custom server account identifier
- **System Password**: Secure access credentials


### Creation Options
- **Create**: Set up the subscription with specified parameters
- **Cancel**: Exit without creating

## Viewing Hosting Subscription Details
![View Hosting Subscription Interface](/screenshots/admin-hosting-subscription-view.png)

The view interface provides a comprehensive overview of the subscription:
- Domain information
- Associated customer
- Applied hosting plan
- Advanced settings (when configured)

### View Options
- **Close**: Return to the subscriptions list
- Context menu remains accessible for quick actions

## Editing Hosting Subscriptions
![Edit Customer Interface](/screenshots/admin-hosting-subscription-edit.png)

The edit interface allows modification of subscription parameters:
- Change hosting plan assignment
- Update advanced settings (when available)
- Maintain the same domain and customer association

## Edit Form Sections
1. **Hosting Plan** 
   - Dropdown selection with the available hosting plans
   - Required field marked with asterisk

### Save Options
- **Save changes**: Apply modifications to the subscription
- **Cancel**: Discard changes and return to subscription list

## Suspending Hosting Subscriptions
![Suspend Hosting Subscription Interface](/screenshots/admin-hosting-subscription-suspend.png)

The suspension process includes:
- Confirmation dialog to prevent accidental suspension
- Warning about service interruption
- Option to cancel or confirm the operation

### Suspension Effect
- Temporarily disables website access
- Preserves all account data and settings
- Can be reversed by reactivating the subscription

## Deleting Hosting Subscription
![Delete Hosting Subscription Interface](/screenshots/admin-hosting-subscription-delete.png)

The deletion process includes:
- Confirmation dialog to prevent accidental deletion
- Warning about permanent removal of reseller data
- Cancel option to abort the deletion process
- Confirm button to proceed with removal

## Activity History
![Activity History Hosting Subscription Interface](/screenshots/admin-hosting-subscription-activity-history.png)

The activity history provides:
- Chronological log of subscription events
- Search functionality for specific activities
- Timestamp and description of each action
- Visual indicators for different event types
- Close button to return to the main interface

## Hosting Subscription Management Benefits
The Hosting Subscriptions section streamlines website administration by providing:
- Centralized domain and hosting management
- Quick access to subscription settings and status
- One-click website access and administration
- Comprehensive activity tracking
- Simplified customer account association