function fastestIsPalindrome(str) {
    var len = Math.floor(str.length / 2);
    //console.log(len);
    let flag = 0;
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1]) {
        console.log(false);
        break;
      }
      else {
        flag = 1;
      }
      if(flag == 1) {
          console.log(true);
      }
  }
  fastestIsPalindrome("malayalam");
  fastestIsPalindrome("niggah");