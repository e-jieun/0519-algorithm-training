const numberArr = [1, 2, 3, 4, 5];
console.log(numberArr);

// console.log(numberArr.shift(0));
// !왼쪽버튼을 누르면 맨 앞 요소를 마지막에 추가하고 맨 앞 요소를 지워준다
// console.log(numberArr.reduce(element => numberArr.concat(element.shift(0))));
// ?reduce()에서 대체 뭘 계속해서 누적시켜야 하지?

// !shift는 어차피 첫번째 요소를 제거해주니까 인덱스를 넣어줄 필요가 없음, 누적되는 문제도 해결했다 => concat()으로 변한 부분까지 결합시켜주면 된다
console.log(numberArr.concat(numberArr.push(numberArr.shift())));

// if(numberArr.concat(numberArr.slice(0,1))){
  // console.log(numberArr.shift(0));
// }

// !오른쪽버튼을 누르면 맨 뒤 요소를 마지막에 추가하고 맨 마지막 요소를 지워준다
console.log(numberArr.concat(numberArr.unshift(numberArr.pop())));  //[ 5, 2, 3, 4, 4 ]
// ?[5, 1, 2, 3, 4]

// 길이를 반환한다
// 마지막 요소를 추출해서 첫번째에 넣어줬는데 1이 없어짐
console.log(numberArr);

// ?값을 누적하는 것이 꼭 필요한데.... reduce()를 사용?