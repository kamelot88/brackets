module.exports = function check(str, bracketsConfig) {
      const newAr = [],
            array = str.split("");
      for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < bracketsConfig.length; j++) {
  
              if (array[i] === bracketsConfig[j][0]) {
                  if (bracketsConfig[j][0] === bracketsConfig[j][1]
                      && newAr[newAr.length - 1] === bracketsConfig[j][0]) {
                        newAr.pop();
                  } else {
                    newAr.push(array[i]);
                  }
              } else if (array[i] === bracketsConfig[j][1]) {
  
                  if (newAr[newAr.length - 1] !== bracketsConfig[j][0]) {
                      return false;
                  } else {
                    newAr.pop();
                  }
              } else {
              }
          }
      }
      return (newAr.length === 0);
