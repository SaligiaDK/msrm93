/*
 * @Author: wangshuai
 * @Date: 2018-06-22 15:02:37
 * @Last Modified by: wangshuai
 * @Last Modified time: 2018-06-22 15:52:26
 */
/**
 * @name 二分算法(折半算法)
 * @important 数组为有序数组
 */

// 非递归算法
function binary_search_1( arr, key ) {
  var low = 0
  var high = arr.length - 1
  while ( low <= high ) {
    var mid = parseInt( ( high + low ) / 2 )
    if ( key === arr[mid] ) {
      // 关键值正好是中间值
      return mid
    } else if ( key > arr[mid] ) {
      // 关键值大于中间值
      low = mid + 1
      // 区间最小值要等于中间值加一，然后进行下次循环
    } else if ( key < arr[mid] ) {
      // 关键值小于中间值
      high = mid - 1
      // 区间最大值要等于中间值剪一，然后进行下次循环
    } else {
      // 未找到情况下，返回-1
      return -1
    }
  }
}

// 递归算法
function binary_search_2( arr, low, high, key ) {
  if ( low > high ) {
    return -1
  }
  var mid = parseInt( ( +high + low ) / 2 )
  if ( arr[mid] === key ) {
    return mid
  } else if ( arr[mid] < key ) {
    low = mid + 1
    return binary_search_2( arr, low, high, key )
  } else if ( arr[mid] > key ) {
    high = mid - 1
    return binary_search_2( arr, low, high, key )
  }
}

// 案例
var arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 23, 44, 68]
// var res1 = binary_search_1( arrs, 23 )
// console.log( res1 )
// var res2 = binary_search_2( arrs, 0, arrs.length - 1, 5 )
// console.log( res2 )
