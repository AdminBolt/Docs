# Security Commands

These commands help you manage security features, SSL certificates, and related services in the Adminbolt system.

## `bolt-cli run-auto-ssl`

Runs the automatic SSL certificate issuance and renewal process for domains.

### Options:

- `--domain`: Specify a particular domain to process
- `--format`: Output format

### Example:

```bash
bolt-cli run-auto-ssl --domain=example.com
```

## `bolt-cli ssl-health-check`

Checks the health and validity of SSL certificates.

### Example:

```bash
bolt-cli ssl-health-check
```

## `bolt-cli run-security-scan`

Runs a comprehensive security scan on the system.

### Example:

```bash
bolt-cli run-security-scan
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



```

``` 