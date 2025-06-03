# Mail Commands

These commands help you manage mail server configurations and services in the Adminbolt system.

## `bolt-cli mailcow-admin-password-update`

Updates the admin password for the Mailcow mail server.

### Example:

```bash
bolt-cli mailcow-admin-password-update
```

## `bolt-cli mailcow-domains-sync`

Synchronizes domains and email accounts with the Mailcow mail server.

### Example:

```bash
bolt-cli mailcow-domains-sync
```

## Related Commands

Some mail-related functionality may also be controlled through these security commands:

- `bolt-cli run-auto-ssl` - Configures automatic SSL certificates which can improve mail server security
- `bolt-cli ssl-health-check` - Verifies SSL certificates are valid, which is essential for mail services 