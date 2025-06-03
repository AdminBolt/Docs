# User Management Commands

These commands help you manage customer accounts in the Adminbolt system.

## `bolt-cli create-admin-account`

Creates a new administrator account in the system.

### Example:

```bash
bolt-cli create-admin-account
```

This command will prompt you for the necessary information to create a new admin account, including:
- Admin name
- Email address
- Password

The command prevents the creation of duplicate admin accounts with the same email address.

## `bolt-cli create-customer-account`

Creates a new customer account in the system.

### Example:

```bash
bolt-cli create-customer-account
```

This command will prompt you for the necessary information to create a new customer account, including:
- Customer name
- Email address
- Password
- Account type and permissions

After successfully creating a customer account, you'll be able to manage the account's hosting subscriptions, domains, and other settings through the Adminbolt interface.

## `bolt-cli reset-admin-account-password`

Resets the password for an existing administrator account.

### Example:

```bash
bolt-cli reset-admin-account-password
```

This command will interactively prompt you for:
1. Admin email address
2. New password

### Usage Example:

```bash
$ bolt-cli reset-admin-account-password
Resetting admin account password...
Enter email: admin@example.com
Enter password: ********
Admin account password reset successfully
```

### Important Notes:
- The command verifies the admin account exists before attempting the password reset
- An error message is displayed if the admin account is not found
- Passwords are securely hashed before storage
- Password input is hidden for security 