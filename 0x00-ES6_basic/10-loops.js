export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    value = appendString + value; // Update each value directly
  }
  return array;
}
