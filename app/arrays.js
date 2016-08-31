exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var i=0;
    if(arr.hasOwnProperty(item)){
      while (i<arr.length){
        if(arr[i]===item){
          break;
        }else {
          i++;
        }
        return i+1;
      }
    }else{
      return -1;
    }
  },

  sum: function(arr) {
    var sum=0;
    for(var i=0; i<arr.length; i++){
      sum +=arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var newarr=[];
    for(var i=0; i<arr.length; i++){
      if(arr[i]!==item){
        newarr.push(arr[i]);
      }
    }
    return newarr;
  },

  removeWithoutCopy: function(arr, item) {
    for(var i=0; i<arr.length; i++){
      if(arr[i]===item){
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.length=arr.length-1;
    return arr;
  },

  prepend: function(arr, item) {
    var arr1=[];
    arr1.push(item);
    for(var i=0; i<arr.length; i++){
      arr1.push(arr[i]);
    }
    return arr1;

  },

  curtail: function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat: function(arr1, arr2) {
    for (var i=0; i<arr2.length; i++){
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    var count=0;
    for(var i=0; i<arr.length; i++){
      if(arr[i]===item){
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    arr.sort();
    var i=0;
    var arr1=[];
    var count=0;
    while(i<arr.length){
      var forward=i+1;
      if(arr[i]!==arr[forward] && count!==0){
        arr1.push(arr[i]);
        i=forward;
        count=0;
      }else if((arr[i]!==arr[forward] && count===0)){
        i=forward;
      }else{
        forward++;
        count++;
        i++;
      }
    }
    return arr1;

  },

  square: function(arr) {
    for(var i=0; i<arr.length; i++){
      arr[i]*=arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var arr1=[];
    for(var i=0; i<arr.length; i++){
      if(arr[i]===target){
        arr1.push(i);
      }
    }
    return arr1;
  }
};
