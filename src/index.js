/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangles = 0;
  for (i = 0; i < preferences.length; i++) {
  for (j = i; j < preferences.length; j++) {
    var a = preferences[i];
    var b = preferences[a] - j;
    var c = preferences[b] - j;
    if (j == c) {
      triangles++;
      }
    }
  }
  return triangles;
};
