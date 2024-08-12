# DNS Mapping Tool

This Node.js application allows you to resolve domain names to IP addresses and manage custom domain-to-IP mappings using a JSON file.

## Features

- **Resolve Domain**: Resolves domain names to their IP addresses. First checks if there's a custom mapping; if not, it queries DNS.
- **Add Mapping**: Adds or updates a custom domain-to-IP mapping in a JSON file.

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system.

2. Clone or download the repository to your local machine.

3. Navigate to the project directory and install dependencies (if any):

    ```bash
    npm install
    ```

## Usage

### Resolving a Domain

To resolve a domain name, simply run the script with the domain as an argument:

```bash
node resolver.js example.com
```

- The script first checks for a custom mapping in `data.json`. If a mapping exists, it returns the mapped IP address.
- If no mapping is found, it performs a DNS resolution and returns the first IP address found.

### Adding a Mapping

To add or update a custom domain-to-IP mapping, use the `--add`, `--ip`, and `--domain` flags:

```bash
node resolver.js --add --domain example.com --ip 93.184.216.34
```

- `--add` specifies that you're adding or updating a mapping.
- `--domain` specifies the domain name.
- `--ip` specifies the IP address.

This will update the `data.json` file with the new mapping.

### Example

**Resolve a Domain:**

```bash
node resolver.js example.com
```

Output:

```
93.184.216.34
```

**Add a Mapping:**

```bash
node resolver.js --add --domain example.com --ip 93.184.216.34
```

**Resolve the Added Domain:**

```bash
node resolver.js example.com
```

Output:

```
93.184.216.34
```

## Data Storage

The application uses a file named `data.json` in the same directory as the script to store custom domain-to-IP mappings. The format of the `data.json` file is:

```json
{
    "example.com": "93.184.216.34"
}
```

## Error Handling

- If an error occurs during DNS resolution, an error message will be displayed.
- If required flags are missing when adding a mapping, or if no domain is provided for resolution, an error message will be shown.

## Contributing

Feel free to fork the repository, make changes, and submit pull requests. For significant changes or additions, please open an issue to discuss.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
