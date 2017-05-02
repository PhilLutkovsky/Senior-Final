var exports = module.exports = {};

function PasswordMessage(m){
  this.name = "PasswordMessage"
  this.message = "m"

}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);

      if(unicode>=min && unicode<=max){
        return true;
    }
      else {
        return false;
    }

}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
let hasUpper = false;
try{
  let j=0;
  for(var i=0; i<str.length; i++){

  }
}
}


exports.containsLower =function(str){
let hasLower = false;
try{
  for(let i=0; i<str.length; i++){
    hasLower = inRange(str[i],97,122);
    if(hasLower == true){
      break;
    }
    else {
      
    }
  }
}
}


exports.containsNumerical =function(str){
let hasNum = false;
try{
  for(let i=0; i<str.length; i++){
    hasNum = inRange(str[i], 48, 57);
    if(hasNum == true){
      break;
    }
  }
    else{

    }
}
}


exports.containsSpecial =function(str){

}
