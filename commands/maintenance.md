# System Maintenance Guide

This guide covers the maintenance and management commands available in the Adminbolt system. These commands help you maintain system health and manage web services.

## System Maintenance Commands

### System Repair
Use this command to perform automated system repairs and maintenance tasks.

```bash
bolt-cli run-repair
```

**What it does:**
- Scans for system inconsistencies
- Repairs configuration files
- Optimizes system performance
- Cleans up temporary files
- Validates system integrity

> **Note:** It's recommended to run this command during off-peak hours.

## Domain Management Commands

### Domain Configuration Repair
Fixes issues with domain configurations and ensures proper setup.

```bash
bolt-cli run-domain-repair
```

**Features:**
- Validates domain configurations
- Fixes SSL certificate issues
- Repairs DNS settings
- Corrects virtual host configurations
- Ensures proper domain routing

> **Warning:** Back up your domain configurations before running this command.

### Domain Health Check
Monitors and verifies domain connectivity and health.

```bash
bolt-cli ping-domains
```

**Capabilities:**
- Checks domain response times
- Verifies DNS resolution
- Tests SSL certificate validity
- Monitors HTTP/HTTPS accessibility
- Reports domain health status

## Best Practices

1. **Regular Maintenance**
   - Run `bolt-cli run-repair` weekly
   - Schedule maintenance during low-traffic periods
   - Monitor system logs after maintenance

2. **Domain Management**
   - Regularly check domain health with `bolt-cli ping-domains`
   - Address issues promptly when detected
   - Keep domain configurations backed up

3. **Troubleshooting**
   If you encounter issues:
   1. Check system logs
   2. Run `bolt-cli run-repair`
   3. Verify domain health with `bolt-cli ping-domains`
   4. Run `bolt-cli run-domain-repair` if domain issues persist

## Command Quick Reference

| Command | Purpose | Frequency |
|---------|----------|-----------|
| `bolt-cli run-repair` | System-wide maintenance and repairs | Weekly |
| `bolt-cli run-domain-repair` | Fix domain configuration issues | As needed |
| `bolt-cli ping-domains` | Check domain health status | Daily |

> **Note:** Always monitor system performance after running maintenance commands.

## Additional Resources

- [System Monitoring Guide](./monitoring.md)
- [Troubleshooting Guide](./troubleshooting.md)
- [Domain Management Guide](./domain-management.md)

## Support

If you encounter issues that cannot be resolved using these commands, please contact our support team:
- Email: support@adminbolt.com
- Support Portal: https://support.adminbolt.com 