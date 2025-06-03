# Updating Adminbolt

Keeping your Adminbolt control panel up to date ensures you have access to the latest features, security patches, and improvements. This guide explains how to update your Adminbolt installation.

## Automatic Updates

Adminbolt includes an automatic update system that makes it easy to keep your control panel current.

### Using the Admin Dashboard

The simplest way to update Adminbolt:

1. Log in to your **Admin Dashboard**
2. Go to **System Settings** → **System Updates**
3. Check for available updates
4. Click **Update Now** if a new version is available

The system will automatically download and install the update, then restart necessary services.

## Command Line Updates

For server administrators who prefer using the command line, Adminbolt provides the `bolt-updater` tool.

### Installing/Updating the Updater

#### YUM/DNF (RHEL, CentOS, Fedora)

The simplest way to install or update Bolt Updater on RPM-based systems is using the yum or dnf package manager:

```bash
# Using yum
sudo yum install bolt-updater
# Update bolt-updater
sudo yum update bolt-updater

# Using dnf
sudo dnf install bolt-updater
# Update bolt-updater
sudo dnf update bolt-updater
```

> **Note:** Always update the bolt-updater tool before updating Adminbolt to ensure you have the latest update capabilities.

### Basic Usage

```bash
bolt-updater
```

Running this command without options will check for and install the latest version from the stable branch.

### Update Options

| Option | Description |
|--------|-------------|
| `--list-versions` | List all available versions |
| `--version=x.y.z` | Install a specific version |
| `--branch=NAME` | Install from a specific branch (default: stable) |
| `--dry-run` | Check what would be updated without making changes |
| `--update-self` | Update the bolt-updater tool itself |

### Examples

Check available versions:
```bash
bolt-updater --list-versions
```

Update to a specific version:
```bash
bolt-updater --version=1.2.3
```

Check what would be updated without making changes:
```bash
bolt-updater --dry-run
```

Update the updater tool:
```bash
bolt-updater --update-self
```

## After Updating

After completing an update:

1. **Clear your browser cache** to ensure you're seeing the latest interface
2. **Check the dashboard** for any migration notices or additional steps
3. **Test key features** to make sure everything is working as expected

## Troubleshooting

If you encounter issues during the update:

- **Check the update logs** at `/var/log/adminbolt/update.log`
- Make sure your server meets the [system requirements](../installation.md)
- If problems persist, contact support or check the [forums](https://forum.adminbolt.com) 