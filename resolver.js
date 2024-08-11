const dns = require('dns');
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

function resolveDomain(domain) {
    const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

    if (data[domain]) {
        console.log(`${data[domain]}`);
    } else {
        dns.resolve(domain, (err, addresses) => {
            if (err) {
                console.error(`Error resolving domain: ${err.message}`);
                return;
            }

            console.log(`${addresses[0]}`);
        });
    }
}

function addMapping(domain, ip) {
    const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

    data[domain] = ip;

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

const args = process.argv.slice(2);
if (args.includes('--add') && args.includes('--ip') && args.includes('--domain')) {
    const ip = args[args.indexOf('--ip') + 1];
    const domain = args[args.indexOf('--domain') + 1];
    addMapping(domain, ip);
} else {
    const domain = args[0];
    if (domain) {
        resolveDomain(domain);
    } else {
        console.error('Please provide a domain name to resolve or use --add to add a custom mapping.');
    }
}
