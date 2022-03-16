const wordSearch = (letters, word) => {
    let letters2 = [];
    for (const iterator of letters[0]) {
      letters2.push([]);
    }
    for (let rows = 0; rows < letters.length; rows++) {
      for (let columns = 0; columns < letters[rows].length; columns++) {
        letters2[columns].push(letters[rows][columns]);
      }
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = letters2.map(ls => ls.join(''));
    let axis = [horizontalJoin, verticalJoin];
    for (let i = 0; i < axis.length; i++) {
      for (const l of axis[i]) {
        if (l.includes(word)) {
          return true;
        }
      }
    }
    return false;
  };
  
  module.exports = wordSearch;