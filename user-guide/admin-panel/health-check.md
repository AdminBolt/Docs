# Health Check

Health Check provides comprehensive monitoring and management of system services categorized by their function and operational status.

## Health Check Overview

**URL:** `/admin/health-check`
![Health Check Interface](/screenshots/admin-health-check.png)

### Interface Elements

#### Main Display Table
- **Name Column**: Service names with sorting capability
- **Status Column**: Current running state of services
- **Installed Column**: Installation status indicator
- **Action Controls**: Install/Reinstall, Restart, and Status Log options

#### Status Indicators
- **Running**: Green label for active services
- **Not Running**: Red label for inactive services
- **Installed**: Orange icon for installed services
- **Not Installed**: Orange icon with "NOT" prefix for uninstalled services

#### Search Functionality
- **Search Box**: Allows filtering services by name
- **Quick Access**: Rapidly locate specific services

### Service Categories

#### Database Services
- **MySQL**: Database management system
- **PHPMyAdmin**: Database administration tool

#### Mail Services
- **Dovecot**: IMAP/POP3 mail server
- **Postfix**: Mail transfer agent
- **Roundcube**: Webmail client
- **Rspamd**: Spam filtering system
- **OpenDKIM**: Email authentication system

#### Network Services
- **Vsftpd**: FTP server
- **PowerDNS**: DNS server

#### Other Services
- **Fail2Ban**: Intrusion prevention
- **Firewalld**: Firewall management
- **Git**: Version control
- **Supervisor**: Process control
- **MyApache**: Web server
- **Softaculous**: Application installer
- **File Manager**: File system management
- **Local Api**: API services
- **JetBackup**: Backup solution
- **php8.4-php-fpm**: PHP processor

## Feature Functionality

### Service Management
- Install and reinstall system services
- Start, stop, and restart services
- Monitor service operational status
- Review service logs and diagnostics

### System Monitoring
- Track service health in real-time
- Identify inactive or problematic services
- Categorize services by function
- Maintain system stability

### Installation Control
- Install missing services on demand
- Manage service dependencies
- Ensure consistent system configuration
- Streamline service deployment

### Status Logging
- Access detailed service logs
- Troubleshoot service issues
- Track historical service performance
- Monitor system reliability

## Navigation Integration

### System Menu Structure
- System → Health Check
- Integrated with other system monitoring tools

### Related Features
- App Health
- Linux Packages
- Panel Log
- Supervisor Log
- System Updates
- Cron Jobs
- Settings

## Best Practices

### Service Maintenance
- Regularly restart services showing degraded performance
- Monitor services with high resource consumption
- Keep all services updated to latest versions
- Maintain proper configuration of interdependent services

### System Stability
- Address non-running critical services promptly
- Implement regular service checks
- Document service configuration changes
- Maintain backup configurations

## Troubleshooting

### Common Scenarios
- Services showing "Not Running" status
- Failed service installations
- Service restart failures
- Service configuration conflicts

### Resolution Steps
1. Check service status logs
2. Verify service dependencies
3. Review system resource availability
4. Reinstall problematic services
5. Restart dependent services

## System Integration

### Complementary Tools
- Works with System Updates
- Integrates with Supervisor Log
- Supports Linux Packages
- Compatible with App Health monitoring

## System Requirements

### Prerequisites
- Active AdminBolt subscription
- Proper system permissions
- Linux environment (AlmaLinux 9.5 shown)
- Network connectivity

### Technical Specifications
- Real-time service monitoring
- Comprehensive service management
- Multi-category service organization
- Low-overhead status tracking

## Maintenance Guidelines

### Regular Tasks
- Weekly review of all service statuses
- Monthly service update cycle
- Address non-running services promptly
- Verify email service configuration regularly

### Best Practices
- Keep all services updated
- Monitor resource utilization
- Implement proper service security
- Maintain detailed service logs

## Management Benefits
- Centralized service control
- At-a-glance system health overview
- Categorical service organization
- One-click service management
- Integrated status monitoring
- Simplified troubleshooting access
- Rapid service deployment
- Enhanced system reliability    