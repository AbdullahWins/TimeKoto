````markdown
# Timekoto

Timekoto is an npm package that provides a utility function for generating timestamps based on a provided prop. It offers a simple way to obtain timestamps in either seconds or milliseconds, depending on your requirements.

## Installation

To install Timekoto, you can use npm or yarn:

```bash
npm install timekoto

# or

yarn add timekoto
```
````

## Usage

Import the `timekoto` function from the package:

```javascript
const { Timekoto } = require("timekoto");
```

Then, call the `Timekoto` function and pass either `'s'` for seconds or `'m'` for milliseconds:

```javascript
const timestampInSeconds = Timekoto();
console.log(timestampInSeconds); // Outputs the timestamp in seconds

const timestampInSeconds = Timekoto("s");
console.log(timestampInSeconds); // Outputs the timestamp in seconds

const timestampInMilliseconds = Timekoto("m");
console.log(timestampInMilliseconds); // Outputs the timestamp in milliseconds
```

The `Timekoto` function calculates and returns the timestamp format based on the provided prop value.

**Note:** If you provide an invalid prop value, the function will throw an error indicating that you should use either `'s'` for seconds or `'m'` for milliseconds.

## License

Timekoto is licensed under the [MIT License](https://opensource.org/licenses/MIT). You are free to use and modify this package according to your needs.

## Contributions

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/abdullahwins/Timekoto).

## Contact

For any questions or inquiries, you can reach us on [GitHub](https://github.com/abdullahwins).

---

Thank you for choosing Timekoto! We hope this package simplifies your timestamp retrieval tasks effectively.

```

```
