var ropzgod = {
  chunk: function (ary, size) {
    var array1 = []
    var array2 = []
    for (var i = 0; i < size; i++) {
      array1.push(ary[i])
    }
    for (var i = size; i < ary.length; i++) {
      array2.push(ary[i])
    }
    var array = [array1,array2]
    return array
  },

  compact: function(ary) {
    var array = []
    // for (var i = 0; i < ary.length; i++) {
    //   if (ary[i]) {
    //     array.push(ary[i])
    //   }
    ary.forEach(item => {
      if (item) {
        array.push(item)
      }
    });
    return array
  }















}
