function sumNumber(num1 ,num2){

    if (num1+num2<100 )
    return true

    else 
    return false

}
 
//exercice 2:

function isEqual(num1 ,num2){

    if (num1==num2 )
    return true

    else 
    return false

}
//exercice3:
function IsONeSum(num1,num2,num3){
if (num1*num2>num3)
return true
else
return false


}

//exercice4:

function isEmpty(string){

    if (string== "")

    return true

     else 
     
     return false
    
}
//exercice 5:
function isEqualZero(nombre){
    if(nombre<=0)
    return true
    else 
    return false
}
//exercice 6:
function isDivisible(n){
    if (n%100 ==0)
    return true
    else 
    return false
}
//exercice 7:
function isEqualSTr(string1, string2){
    if (string1.length == string2.length )
    return true
    else return
    false
}

//exercice8:
function oneDevideBy( num1,num2){
    if (num1 %num2==0)
    return true
    else 
    return false
}
//exercice9:
function moodToday(mood){
    if (mood=="") return "Today, I am feeling neuter"
    else
    return "Today, I am feeling"+" "+mood
    
}
//exercice10:
function isEvenOrOdd(num){
    if (num % 2==0)
    return "even"
    else 
    return "odd"
   
}
//exercice 11:
function Match (string1, string2){
  
    if(string1.toLowerCase()==string2.toLowerCase())
    return true
    else 
    return false
    }

//exercice12:
function getCase(string){
    if(string==string.toLowerCase())
    return "lower"
    else 
    if(string==string.toUpperCase())
    return "upper"
    else
    return "mix"
}
//exercice13:
function swappName(First, LAST){
    return LAST+" "+First
}
//exercice14:

function AlphabetSoup(mot){
    let splitstring=mot.split("")
    let sortstring=splitstring.sort()
    let joinstring=sortstring.join(")")
      return joinstring 
  }


//exercice 15:
function onlyCase(str){
    if (str==str.toUpperCase() ||str==str.toLowerCase()) return true
    return false
}
//exercice 16:
function checkEnding(str1, str2){
        return str1.endsWith(str2)
}
//exercice17:
function incrementOrDecrement(nombre){
    if(nombre%2==0) return nombre-1
    else
    return nombre+1
  }



