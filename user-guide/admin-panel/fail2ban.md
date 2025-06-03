# Fail2Ban

Fail2Ban provides automated protection against brute-force attacks by monitoring system logs and temporarily banning IP addresses that show malicious behavior.

## Whitelist IPs Overview

**URL:** `/admin/fail2ban/whitelist-ips`
![Fail2Ban Whitelist Interface](/screenshots/admin-fail2ban.png)

### Interface Elements

#### Navigation Bar
- **Fail2Ban**: Main security section
- **Whitelist IPs**: Currently selected
- **List** view: Active view

#### Top Bar
- **New Whitelist IP** button: Add IP addresses to whitelist

#### Management Tabs
- **Whitelist IPs**: Configure trusted IP addresses (current tab)
- **Banned IPs**: View and manage banned addresses
- **Fail2Ban Settings**: Configure global settings

#### Empty State
- Displays "No Whitelist IPs" when no entries exist
- Clean interface for immediate action

## Creating Whitelist IP

**URL:** `/admin/fail2ban/whitelist-ips/create`
![Create Whitelist IP Interface](/screenshots/admin-fail2ban-create.png)

### Whitelist IP Configuration

1. **Whitelist IP Field**
    * Enter IP address to whitelist
    * Supports single IP addresses
    * Required field for creation

2. **Add Comment Section**
    * Optional description field
    * Document purpose or reason
    * Helps maintain organization

### Action Buttons
- **Create**: Save whitelist entry
- **Create & create another**: Quick successive entries
- **Cancel**: Abort operation

## Fail2Ban Settings

**URL:** `/admin/fail2ban/settings`
![Fail2Ban Settings Interface](/screenshots/admin-fail2ban-settings.png)

### Settings Tabs

#### General Tab

##### Enable Jails
- Toggle to activate all jails globally
- Description: "Enabling this option will activate all jails."

##### Save Changes Button
- Applies all modifications

#### Actions Tab

##### Report Actions

1. **Destination Email**
    * Email address for notifications
    * Format: Default null
    * Description: "This is the email address where notifications will be sent based on the configurations in the jail (conf.local.d/*) files."

2. **Sender**
    * Email sender configuration
    * Format: Default null
    * Description: "The sender email address is used specifically for certain actions in the configuration files to define who the notifications come from."

3. **MTA (Mail Transfer Agent)**
    * Dropdown selection
    * Options: Select mail system
    * Description: "Specify the email sending method for Fail2Ban: use sendmail for the default option, or switch to mail to use a traditional email system."

4. **Protocol**
    * Communication protocol selection
    * Options: Various protocols available
    * Description: "Specify the communication protocol used by Fail2Ban for its actions: by default, it uses TCP for reliable data transmission."

5. **Port**
    * Network port configuration
    * Default: 0-65535
    * Description: "Specify the range of ports to be banned, which is generally set individually for each specific jail. By default, it covers all ports from 0 to 65535."

6. **Ban Action**
    * Default action configuration
    * Dropdown selection
    * Description: "Sets the default action for banning, which can be customized globally or for individual sections in the jail.local file."

##### Save Changes Button
- Applies all action configurations

#### Jails Tab

##### Available Jails

1. **SSHD Jail**
    * Toggle for SSH protection
    * Description: "Turning on this option will activate the SSHD jail, which helps protect your SSH service from unauthorized access."

2. **Apache Jail**
    * Toggle for Apache protection
    * Description: "Turning on this option will activate the Apache jail, which helps protect your Apache server from unauthorized access and malicious activity."

3. **vsFTPD Jail**
    * Toggle for FTP protection
    * Description: "Turning on this option will activate the vsFTPD jail, which helps protect your vFTPD server from unauthorized access and malicious activity."

##### Save Changes Button
- Applies all jail configurations

## Feature Structure

### Navigation Hierarchy
- Security → Fail2Ban → Whitelist IPs/Banned IPs/Settings
- Logical organization for security features
- Easy access from main navigation

### Settings Management
1. **General Settings**
    * Global jail activation
    * System-wide configurations

2. **Action Configuration**
    * Email notification setup
    * Protocol specifications
    * Ban action parameters

3. **Jail Management**
    * Service-specific protection
    * Independent toggle controls
    * Customizable security layers

## Best Practices

### Configuration Management
- Start with default settings
- Enable jails for active services
- Configure email notifications
- Test configurations thoroughly
- Document all changes

### Security Considerations
- Monitor ban patterns
- Adjust thresholds based on attacks
- Keep whitelist minimal
- Use comments for accountability
- Regular security audits

### Email Configuration
- Use valid destination email
- Configure proper sender address
- Select appropriate MTA
- Test notification delivery
- Monitor email alerts

## Troubleshooting

### Common Issues
- Email notifications not working
- Jails not activating properly
- Configuration conflicts
- Port specification errors

### Resolution Steps
1. Verify email settings
2. Check MTA configuration
3. Confirm jail status
4. Review system logs
5. Restart Fail2Ban service
6. Contact support if needed

## Integration Points

### Related Security Features
- Firewall Rules
- Security Scan
- API Keys
- Linux Web Users

### System Dependencies
- Works alongside firewall
- Integrates with system logs
- Requires mail server for notifications
- Service-specific log monitoring

## Monitoring and Maintenance

### Regular Tasks
- Review active jails
- Check notification delivery
- Monitor false positives
- Update configurations
- Verify service protection

### Reporting
- Track ban statistics
- Analyze attack patterns
- Document security incidents
- Generate compliance reports

## System Requirements

### Prerequisites
- Active AdminBolt subscription
- Security module enabled
- Mail server configured
- Proper permissions
- System log access

### Technical Specifications
- Supports multiple services
- Email notification system
- Port range configuration
- Protocol selection options
- Real-time protection

## Management Benefits
- Centralized security management
- Automated threat response
- Service-specific protection
- Flexible ban configurations
- Email notification system
- Whitelist and blacklist control
- Multi-service jail system
- Real-time log monitoring