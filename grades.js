module.exports = {
  letterGrade: function(num){
    if(num >= 97){
      return 'A+';
    }
    else if(num >= 94 && num <= 96){
      return 'A';
    }
    else if(num >= 90 && num <= 93){
      return 'A-';
    }
    else if(num >= 87 && num <= 89){
      return 'B+';
    }
    else if(num >= 84 && num <= 86){
      return 'B';
    }
    else if(num >= 80 && num <= 83){
      return 'B-';
    }
    else if(num >= 77 && num <= 79){
      return 'C+';
    }
    else if(num >= 74 && num <= 76){
      return 'C';
    }
    else if(num >= 70 && num <= 73){
      return 'C-';
    }
    else if(num >= 67 && num <= 69){
      return 'D+';
    }
    else if(num >= 64 && num <= 66){
      return 'D';
    }
    else if(num >= 60 && num <= 63){
      return 'D-';
    }
    else if(num >= 0 && num <= 59){
      return 'F';
    }
  },
  
  average: function(array){
    var result = 0;
    for(i = 0; i < array.length; i++){
      result = result + array[i];
    }
    return result/array.length;
  },
  median: function(array){
    array.sort();
    var half = Math.floor(array.length/2);
    if(array.length % 2){
      return array[half];
      }
      else{
      return (array[half-1] + array[half]) / 2;
      }
    },
};