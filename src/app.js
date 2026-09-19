// Simple starter application.
const APP_PORT = process.env.APP_PORT || 3000;

function main() {
  const message = "app is running";
  console.log(message);
  console.log("listening on port " + APP_PORT);
}

main();
