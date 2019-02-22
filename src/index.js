/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  var triangles = 0;
  for (i = 0; i < preferences.length; i++) {
   for (j = 0; j < preferences.length; j++) {
    for (k = 0; k < preferences.length; k++) {
    if ((preferences[i]-1==k && preferences[k]-1 ==j && preferences[j]-1==i)||
    (preferences[i]-1==j&& preferences[k]-1 ==i&& preferences[j]-1==k))
      triangles++;
      }
    }
  }
  return triangles/6;
};
