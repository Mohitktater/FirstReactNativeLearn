
export const existsInArray = (array, value) => {
    
    
    for (let i = 0; i < array.length; i++) {
        if (array[i]['id'] === value) {
          return true;
          console.log('yes exists');
        }
    }
    return false;
  }