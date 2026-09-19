// Reviewed and cleaned up from the original AI-generated implementation.

function calculateSum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function doubleValue(value) {
  return value * 2;
}

function fetchData() {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    throw new Error("API_URL must be configured");
  }

  console.log(`fetching from ${apiUrl}`);
  return { ok: true };
}

module.exports = { calculateSum, doubleValue, fetchData };
