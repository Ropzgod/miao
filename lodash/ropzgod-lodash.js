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
  },

  drop: function (ary,n = 1) {
    var array = []
    for (var i = n; i < ary.length; i++) {
      array.push(ary[i])
    }
    return array
  },

  dropRight: function (ary, n = 1) {
    var array = []
    for (var i = 0; i < ary.length - n; i++) {
      array.push(ary[i])
    }
    return array
  },


  // Fills elements of array with value from start up to, but not including, end.
  // @param {Array} array
  fill: function (ary, value, start = 0, end = array.length) {
    for (var i = start; i <= end - 1; i++) {
      ary[i] = value
    }
    return ary
  },



  flatten: function (ary) {
    var result = []
    for (var i = 0; i < ary.length - 1; i++) {

        if (!ary[i].length) {
          result.push(ary[i])
        }
      for (var j = 0; j < ary[i].length; j++) {
        result.push(ary[i][j])
      }
    }
    return result
  },

  flattenDeep: function (ary) {
    var result = []
    for (var i = 0; i < ary.length - 1; i++) {
      if (!ary[i].length) {
        result.push(ary[i])
      }
      flattenDeep(ary[i])
      //digui
      //return digui yihou fanhui zhi
      // daoxu charu

    }
  },

  fromPairs: function (ary) {
    var result = {}
    for (var i = 0; i < ary.length; i++) {
      result[ary[i][0]] = ary[i][1]
    }
    return result
  },

  head: function (ary) {
    var result = []
    if (ary.length == 0) {
      return undefined
    } else {
      return ary[0]
    }
  },

  indexOf: function (ary,value,formIndex = 0) {

  }














}
