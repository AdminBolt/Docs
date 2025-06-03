# Resellers

The Resellers section provides a centralized interface to create, view, edit, and manage reseller accounts within your hosting environment.

## Resellers Overview
**URL:** `/admin/resellers`

![Customers Interface](/screenshots/admin-resellers.png)

### Interface Elements

#### Top Bar
- **New Resellers** button: Create new reseller accounts
- **Search** field: Filter resellers by name or email

#### List View Columns
- **Reseller Name**: Full name of the reseller account
- **Email**: Primary contact email address
- **Actions**: Available operations
    - Edit Reseller Details
    - Delete Reseller Account

#### List Controls
- **Per page** dropdown: Adjust number of visible resellers
- **Sort options**: Order by reseller name or email
- **Pagination**: Navigate through multiple pages

### Quick Actions
For each reseller, you can:
- **Edit**: Modify reseller information and settings
- **Delete**: Remove reseller accounts from the system

## Creating Resellers
![Create Customer Interface](/screenshots/admin-resellers-create.png)

### Required Information
1. **Name**
    - Full name of the reseller
    - Required field marked with asterisk

2. **Login Credentials**
    - **Username** - Account login identifier (required)
    - **Password** - Secure password for account access (required)

3. **Contact Details**
    - **Email** - Primary email address (required)
    - **Phone** - Contact phone number (optional)

### Optional Information
1. **Company Information**
    - Company or organization name
    - Business details if applicable

2. **Address Information**
    - Expandable section for customer address details
    - Collapsible for streamlined interface with:
        - Street address field with house icon
        - City and State fields arranged side-by-side
        - ZIP/Postal code and Country fields in two-column format

### Creation Options
- **Create**: Set up single customer account
- **Create & create another**: Create multiple customer accounts
- **Cancel**: Exit without creating

## Editing Customer Information
![Edit Customer Interface](/screenshots/admin-resellers-edit.png)

The edit interface provides the same fields as the creation form, allowing you to:
- Update contact information
- Change login credentials
- Modify company details
- Adjust address information
- Save changes or cancel modifications

## Edit Form Sections

- **Reseller Information** - Name and basic details
- **Contact Details** - Email and phone information
- **Company Information** - Business-related data
- **Address Information** - Location and shipping details

### Save Options
- **Save Changes** - Apply modifications to the reseller account
- **Cancel** - Discard changes and return to reseller list

## Deleting Customers
![Delete Customer Interface](/screenshots/admin-resellers-delete.png)

The deletion process includes:
- Confirmation dialog to prevent accidental deletion
- Warning about permanent removal of reseller data
- Cancel option to abort the deletion process
- Confirm button to proceed with removal

## Resellers Management Benefits
The Resellers Management section streamlines administration by providing:
- Centralized reseller information storage
- Quick access to account details
- Simple creation and modification workflows
- Secure reseller deletion with confirmation
- Efficient searching and filtering capabilities