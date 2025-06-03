# Jet Backup

Jet Backup is a powerful backup management solution integrated into the AdminBolt platform, providing comprehensive backup and restoration capabilities for Linux environments.

## Jet Backup Overview

**URL:** `/admin/jet-backup`
![Jet Backup Interface](/screenshots/admin-jet-backup.png)

### Interface Elements

#### Status Section
- **Current Status**: Running state of JetBackup
- **Service**: jetbackup5-linux
- **License**: Unlicensed

#### Web Interface
- **Accessibility**: Indicates web interface availability
- **Access Button**: "Access JetBackup"
  - Opens the full JetBackup management interface

#### Quick Actions
- **Restart Service**: 
  - Initiates JetBackup service restart
  - Displays confirmation modal
  - Warns about potential interruption of active backup operations
- **Manage License**: 
  - Opens license management modal
  - Allows input of license key
  - Validates license credentials

#### Refresh Status Button
- Located in top-right corner
- Manually updates current service status
- Refreshes all status information


#### Recent Logs
- Provides system and backup-related log entries
- Shows license validation attempts
- Displays service initialization and task execution logs


## JetBackup Status Details
Comprehensive breakdown of current system configuration:

| Property | Description                   |
|----------|-------------------------------|
| Status   | Current installation state    |
| Service  | Running condition             | 
| Version  | Installed JetBackup version   | 
| License Status | Current licensing state       | 
| Config Path  | Configuration file location   |
| Web Accessible | Interface availability        |
| Backup Storage Usage  | Current storage allocation    |
| Last Backup  | Most recent backup timestamp  |

### Recent Logs
- Provides detailed system event tracking
- Displays:
  - Timestamp of events
  - Process IDs
  - System messages
  - License validation attempts
  - Automated task executions

## Licensing Management

### License Key Input
- Modal-based interface
- Single input field for license key
- Validation process for submitted key
- Options to:
  - Submit new license
  - Cancel operation

## Service Restart Process

### Confirmation Modal
- Warns about potential backup interruption
- Clear explanation of restart implications
- Two-button interface:
  - **Cancel** button: Abort restart
  - **Confirm** button: Proceed with service restart

## Troubleshooting and Best Practice

### Common Issues
- License validation failures
- Service connectivity problems
- Backup storage configuration

### Recommended Actions
- Regularly update license
- Monitor service status
- Review recent logs
- Ensure continuous backup coverage

## System Integration

### Supported Environments
- Linux-based hosting platforms
- Web server configurations
- Diverse backup storage options

### Security Considerations
- Secure license management
- Encrypted communication
- Access control mechanisms

## Management Benefits
- Centralized backup solution
- Flexible configuration options
- Comprehensive logging
- Easy service management


