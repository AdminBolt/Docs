---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Adminbolt"
  text: "Modern Linux Control Panel"
  tagline: Lightning-fast & intuitive hosting management platform
  image:
    src: /logos/adminbolt-icon.svg
    alt: Adminbolt
    light: /logos/adminbolt-light.svg
    dark: /logos/adminbolt-dark.svg
  actions:
    - theme: brand
      text: 🚀 Quick Install
      link: /installation
    - theme: alt
      text: 📖 Documentation
      link: /user-guide/
    - theme: alt
      text: 🛠️ Updating
      link: /user-guide/updating/

features:
  - icon: 🌐
    title: Web Hosting Management
    details: Effortlessly manage websites, domains, and SSL certificates through an intuitive interface
    link: /user-guide/customer-panel/domains
  - icon: ✉️
    title: Integrated Mail Server
    details: Seamless Mailcow integration for professional email hosting with spam protection
    link: /user-guide/customer-panel/email
  - icon: 🔒
    title: Advanced Security
    details: Built-in firewall, SSL certificates, and security tools to keep your servers protected
    link: /user-guide/admin-panel/security
  - icon: 📊
    title: Resource Monitoring
    details: Real-time monitoring of server resources, traffic, and performance metrics
    link: /user-guide/admin-panel/monitoring
  - icon: 🔄
    title: Automated Backups
    details: Scheduled backups and easy restore options for peace of mind
    link: /user-guide/customer-panel/backups
  - icon: ⚡
    title: High Performance
    details: Optimized for speed with built-in caching and performance tuning options
    link: /user-guide/admin-panel/performance

highlights:
  - title: Why Choose Adminbolt?
    items:
      - title: Modern Technology Stack
        icon: 🛠️
        details: Built with cutting-edge technologies for optimal performance and security
      - title: User-Friendly Interface
        icon: 💻
        details: Clean, intuitive design that makes server management a breeze
      - title: Extensive Documentation
        icon: 📚
        details: Comprehensive guides and tutorials for all skill levels
      - title: Active Development
        icon: 🔄
        details: Regular updates and new features based on community feedback

footer:
  message: Released under the MIT License
  copyright: Copyright © 2024 Adminbolt
---

## ⚡ Quick Installation

```bash
cd /home && curl -o install -L https://license.adminbolt.com/mirrorlist/any/any/adminbolt-bash-installer-0.4.3-dev.sh && sh install
```

Access your control panel at: `https://yourserver-ip:8443`

## 🎯 Key Features

- **One-Click Installers** - Deploy popular applications with a single click
- **Multi-Server Support** - Manage multiple servers from one dashboard
- **API Integration** - Automate tasks with our comprehensive API
- **Custom Branding** - White-label option for hosting providers
- **Multi-Language** - Interface available in multiple languages
- **24/7 Monitoring** - Real-time alerts and notifications

## 💡 Getting Started

Check out our [installation guide](/installation) for detailed setup instructions, or dive into the [documentation](/user-guide/) to explore all features.
