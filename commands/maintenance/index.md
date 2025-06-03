# Maintenance Commands Overview

This section covers all maintenance-related commands in the Adminbolt system. These commands help you maintain system health, manage domains, perform repairs, and ensure optimal performance.

## Categories

### [System Repair](./system)
System-wide maintenance and repair commands for keeping your server healthy.
- `bolt-cli run-repair` - Automated system repairs
- `bolt-cli system-check` - System health verification

### [Domain Management](./domains)
Commands for managing and maintaining domain configurations.
- `bolt-cli run-domain-repair` - Fix domain configuration issues
- `bolt-cli ping-domains` - Check domain connectivity

### [Health Checks](./health)
System and service health monitoring commands.
- `bolt-cli health-check` - Complete system health audit
- `bolt-cli service-status` - Check service statuses

### [Backup & Restore](./backup)
Data backup and restoration commands.
- `bolt-cli create-backup` - Create system backups
- `bolt-cli restore-backup` - Restore from backups

## Quick Search

Find maintenance commands quickly:

```bash
# Search all maintenance commands
bolt-cli search #maintenance

# Search specific categories
bolt-cli search #maintenance #domain    # Domain-related maintenance
bolt-cli search #maintenance #backup    # Backup-related commands
bolt-cli search #maintenance #health    # Health check commands
```

## Best Practices

1. **Regular Maintenance**
   - Run system repairs weekly
   - Perform health checks daily
   - Create backups according to schedule
   - Monitor domain health regularly

2. **Troubleshooting**
   - Start with health checks
   - Review system logs
   - Use specific repair commands
   - Document all maintenance actions

For detailed information about specific commands, please visit the respective category pages. 