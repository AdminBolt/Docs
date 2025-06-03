# Installing Adminbolt

Adminbolt can be installed on Linux servers using the provided installation scripts. The installation process is straightforward and automated.

## System Requirements

- **Operating System**: AlmaLinux 9 (only supported OS)
- **RAM**: Minimum 2GB (4GB recommended)
- **CPU**: 2 cores minimum
- **Disk Space**: At least 20GB available
- **Root Access**: Required for installation

## Installation Methods

### Stable Release

The stable release is recommended for production environments:

```bash
cd /home && curl -o install -L https://license.adminbolt.com/mirrorlist/any/any/adminbolt-bash-installer-0.4.3-stable.sh && sh install
```

### Development Release

The development release contains the latest features but may be less stable:

```bash
cd /home && curl -o install -L https://license.adminbolt.com/mirrorlist/any/any/adminbolt-bash-installer-0.4.3-dev.sh && sh install
```

### Specific Version

You can install a specific version if needed:

```bash
cd /home && curl -o install -L https://license.adminbolt.com/mirrorlist/any/any/adminbolt-bash-installer-0.4.3-dev.sh && sh install
```

## Post-Installation

After the installation completes, you can access the Adminbolt control panel at:

```
https://yourserver-ip.com:8443
```

The installation script will create an initial admin account. The credentials will be displayed at the end of the installation process.

## Installation Options

During installation, you will be prompted to configure:

1. **Master Domain**: The primary domain for your server
2. **Administrator Email**: Used for system notifications and SSL certificates
3. **Nameservers**: DNS nameservers for your domains
4. **Services**: Select which services to install (Web, Mail, DNS, etc.)

## Common Issues

If you encounter any issues during installation:

1. Check server requirements are met
2. Ensure the server has internet connectivity to download packages
3. Verify that required ports are not blocked by a firewall
4. Check installation logs at `/var/log/adminbolt-install.log`

For further assistance, please contact support or visit our community forums. 