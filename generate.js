const list = [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Droid Sans",
    "Helvetica Neue"
];

const compiled = list.join(", ");

console.log(`module.exports = "${compiled}";`);
