//[Easy]
function sameNecklace(strOne, strTwo) {
  return (strOne + strOne).indexOf(strTwo, 1) >= 0;
}

//true -> icolen is a substring of "nicolenicole"
console.log(sameNecklace("nicole", "icolen"));

//[Intermediate]
