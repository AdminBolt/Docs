const fs = require('fs')
const path = require('path')

// Get the absolute path to the project root
const projectRoot = path.resolve(__dirname, '..', '..')
console.log('Project root:', projectRoot)

// Create necessary directories
const publicDir = path.join(__dirname, '..', 'public')
const logosDir = path.join(publicDir, 'logos')

console.log('Creating directories:')
console.log('- Public dir:', publicDir)
console.log('- Logos dir:', logosDir)

// Create directories if they don't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
  console.log('Created public directory')
}
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true })
  console.log('Created logos directory')
}

// Try multiple possible source locations for the logo
const possibleSourceLocations = [
  path.join(projectRoot, 'src', 'assets', 'adminbolt-icon.svg'),
  path.join(projectRoot, 'assets', 'adminbolt-icon.svg'),
  path.join(projectRoot, 'public', 'adminbolt-icon.svg'),
  path.join(__dirname, '..', 'assets', 'adminbolt-icon.svg')
]

const destLogo = path.join(logosDir, 'adminbolt-icon.svg')

console.log('\nLooking for logo file in:')
possibleSourceLocations.forEach(loc => console.log('-', loc))

let logoFound = false
for (const sourceLogo of possibleSourceLocations) {
  if (fs.existsSync(sourceLogo)) {
    console.log('\nFound logo at:', sourceLogo)
    fs.copyFileSync(sourceLogo, destLogo)
    console.log('Logo copied successfully to:', destLogo)
    logoFound = true
    break
  }
}

if (!logoFound) {
  console.error('\nError: Logo file not found in any of the expected locations!')
  console.log('\nPlease ensure the logo file exists in one of these locations:')
  possibleSourceLocations.forEach(loc => console.log('-', loc))
  process.exit(1)
} 