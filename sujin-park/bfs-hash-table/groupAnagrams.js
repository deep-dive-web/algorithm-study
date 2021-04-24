/**
 * 49. Group Anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const mapping = {};
    
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
      
    if(mapping[sorted] !== undefined) {
      mapping[sorted].push(str);
    } else {
      mapping[sorted] = [str];
    }
  }
    
  return Object.values(mapping);
};