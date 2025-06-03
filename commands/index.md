# Adminbolt Commands

Adminbolt provides a comprehensive set of console commands to manage various aspects of your shared hosting environment. 

## Available Command Categories

- **User Management**: Commands for managing customer accounts
- **Web Management**: Commands for managing web hosting, domains, and related services
- **Network**: Commands for managing network configurations and DNS
- **Mail**: Commands for mail server configuration and management
- **Security**: Commands for security features, SSL certificates, and firewall management
- **Automation**: Commands for automation tasks

## Using Commands

To run an Adminbolt command, use the following syntax:

```bash
bolt-cli <command-name> [options]
```

For example, to run the firewall command:

```bash
bolt-cli firewall --action=allow --port=80 --zone=public
```

## Getting Help

You can get help for any command by running:

```bash
bolt-cli <command-name> --help
```

This will display the command description, available options, and usage examples.

Explore the sidebar for detailed documentation on each command category. 