//数组的常见方法
//map （some,every,filter,forEach） es5
//find findIndex es6
//reduce 收敛/叠加

//for of
//Array.from
//of()

// 1)reduce 返回的结果是叠加后的结果
//函数的返回结果会作为下一次循环的prev
let result = [1, 2, 3, 4, 5].reduce((prev, next, currIndex, ary) => {
  if (ary.length - 1 === currIndex) {
    return (prev + next) / ary.length;
  }
  return prev + next;
}, 0);
console.log(result);

let total = [{ price: 10 }, { price: 20 }, { price: 30 }].reduce(
  (prev, next, currIndex, ary) => {
    return prev.price + next.price;
  },
  0
);
console.log(total);

Array.prototype.myReduce = function(fn, prev) {
  for (let i = 0; i < this.length; i++) {
    if (typeof prev === "undefined") {
      prev = fn(this[i], this[i + 1], i + 1, this);
      ++i;
    } else {
      prev = fn(prev, this[i], i, this);
    }
  }
  return prev;
};
let total = [1, 2, 3].myReduce((prev, next, currIndex, ary) => {
  return prev + next;
}, 0);
console.log(total);

//把一个数组展平
let flat = [[1, 2, 3], [4, 5, 6]].reduce((prev, next, index, ary) => {
  return [...prev, ...next];
});
console.log(flat);

//2) forEach
Array.prototype.forEach = function(fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i);
  }
};
[1, 2, 3].forEach((item, index) => {
  console.log(item, index);
});

//3).map 有返回值 返回值是一个新数组
Array.prototype.map = function(fn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i], i));
  }
  return arr;
};
let ary = [1, 2, 3].map(item => {
  return item * 2;
});
console.log(ary);

//4).filter 过滤 如果返回true表示留下 返回false表示删除
let arr = [1, 2, 3];
let newArr=arr.filter(item => {
  return item > 2;
});
console.log(newArr)

//5).find查找 返回查找的那一项 找到后就不会继续查找
let f=[1,2,3].find(item=>{
    return item===5
})
console.log(f)

//6).some 找到后返回true
let s=[1,2,3].some(item=>{
    return item===2
})
console.log(s)

//7).includes
[1,2,3].includes(3)

//8).Array.from() 将类数组转换成数组
function a(){
console.log(eval(Array.from(arguments).join('+')))
}
a(1,2,3)

//常见的类数组 htmlCollection arguments {0:1,1:2,2:3,length:3}

//of()
let ary=Array.of(3)
console.log(ary)