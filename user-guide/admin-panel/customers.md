# Customers

The Customers section provides a centralized interface to create, view, edit, and manage customer accounts within your hosting environment.

## Customers Overview
**URL:** `/admin/customers`

![Customers Interface](/screenshots/admin-customers.png)

### Interface Elements

#### Top Bar
- **New customer** button: Create new customer
- **Search** field: Filter customers by name or email

#### List View Columns
- **Customer Name**: Full name of the account holder
- **Email**: Primary contact email address
- **Owner**: Account ownership assignment
- **Actions**: Available operations
    - Edit Customer Details
    - Delete Customer Account

#### List Controls
- **Per page** dropdown: Adjust number of visible accounts
- **Sort options**: Order by customer name, email, or owner
- **Pagination**: Navigate through multiple pages

### Quick Actions
For each customer, you can:
- **Edit**: Modify customer information and settings
- **Delete**: Remove customer accounts from the system

## Creating Customer
![Create Customer Interface](/screenshots/admin-customers-create.png)

### Required Information
1. **Name**
    - Full name of the customer
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
![Edit Customer Interface](/screenshots/admin-customers-edit.png)

The edit interface provides the same fields as the creation form, allowing you to:
- Update contact information
- Change login credentials
- Modify company details
- Adjust address information
- Save changes or cancel modifications

## Edit Form Sections

- **Customer Information** - Name and basic details
- **Contact Details** - Email and phone information
- **Company Information** - Business-related data
- **Address Information** - Location and shipping details

### Save Options
- **Save Changes** - Apply modifications to the customer account
- **Cancel** - Discard changes and return to customer list

## Deleting Customers
![Delete Customer Interface](/screenshots/admin-customers-delete.png)

The deletion process includes:
- Confirmation dialog to prevent accidental deletion
- Warning about permanent removal of customer data
- Cancel option to abort the deletion process
- Confirm button to proceed with removal

## Customer Management Benefits
The Customers Management section streamlines administration by providing:
- Centralized customer information storage
- Quick access to account details
- Simple creation and modification workflows
- Secure customer deletion with confirmation
- Efficient searching and filtering capabilities