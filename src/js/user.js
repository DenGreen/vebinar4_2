export default function test1(data){
  let sortArr = data;
  
 return sortArr.sort((a, b) => (a.health < b.health && -1) || (a.health > b.health && 1) || 0);
}