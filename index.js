window.kittens =["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name)
{
  kittens.push(name);
}
function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten()
{
  kittens.pop();
}
function destructivelyRemoveFirstKitten()
{
   kittens.shift();
}
function appendKitten(name)
{ var result= new Array();
  result=[...kittens,name];
  return result;
}
function prependKitten(name)
{
  var result= new Array();
  result=[name,...kittens];
  return result;

}
function removeLastKitten()
{
  var result= new Array();
  result=kittens.slice(0,kittens.length-1);
  return result;
}
function removeFirstKitten()
{
  var result= new Array();
  result=kittens.slice(1);
  return result;
}
