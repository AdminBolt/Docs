# Network Commands

These commands help you manage network configurations, DNS settings, and related services in the Adminbolt system.

## `bolt-cli flush-dns`

Flushes the DNS cache to ensure updated DNS records are used.

### Example:

```bash
bolt-cli flush-dns
```

## `bolt-cli firewall`

Manages firewall rules, allowing you to control port access and security zones.

### Options:

- `--action`: The action to perform (allow, deny, delete)
- `--port`: The port number to configure
- `--zone`: The firewall zone to apply the rule to (defaults to 'public')

### Example:

```bash
bolt-cli firewall --action=allow --port=80 --zone=public
```

This command lets you manage firewall rules by allowing, denying, or deleting port access rules in specified zones.

## `bolt-cli run-firewall-fix`

Runs fixes for common firewall issues or misconfigurations.

### Example:

```bash
bolt-cli run-firewall-fix
```

## `bolt-cli get-status`

Gets the current system and network status information.

### Example:

```bash
bolt-cli get-status
```

## `bolt-cli health-check`

Performs a general system health check including network connectivity.

### Example:

```bash
bolt-cli health-check
``` 