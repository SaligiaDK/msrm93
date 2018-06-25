/*
 * @Author: wangshuai
 * @Date: 2018-06-22 15:52:50
 * @Last Modified by: wangshuai
 * @Last Modified time: 2018-06-22 16:35:04
 */
/**
 * @name 排序
 */

// 1 冒泡排序

function bubble_sort( arr ) {
  for ( let i = 0; i < arr.length - 1; i++ ) {
    for ( let j = 0; j < arr.length - i - 1; j++ ) {
      if ( arr[j] > arr[j + 1] ) {
        var swap = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = swap
      }
    }
  }
}

var arr1 = [3, 1, 5, 7, 2, 4, 9, 6, 8, 10, 23]
bubble_sort( arr1 )
console.log( arr1 )

// 2 快速排序

function quick_sort( arr ) {
  if ( arr.length <= 1 ) {
    return arr
  }
  var pivoIndex = Math.floor( arr.length / 2 )
  var pivot = arr.splice( pivoIndex, 1 )[0]

  var left = []
  var right = []

  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i] < pivot ) {
      left.push( arr[i] )
    } else {
      right.push( arr[i] )
    }
  }

  return quick_sort( left ).concat( [pivot], quick_sort( right ) )
}

var arr2 = [5, 6, 2, 1, 3, 8, 7, 1, 2, 3, 4, 7]
console.log( quick_sort( arr1 ) )

// 3 插入排序

function insert_sort( arr ) {
  var i = 1
  var len = arr.length
  for ( ; i < len; i++ ) {
    var j = i
    var key = arr[j]
    while ( --j > -1 ) {
      if ( arr[j] > key ) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = key
  }

  return arr
}

var arr3 = [2, 34, 54, 2, 5, 1, 7]
console.log( insert_sort( arr3 ) )
