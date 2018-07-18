 function wordConvert(number){

    var numberList = [
        {value: 10000000, str: "million"},
        {value: 1000, str: "thousand"},
        {value: 100, str: "hundred"},
        {value: 90, str: "ninety"},
        {value: 80, str: "eighty"},
        {value: 70, str: "seventy"},
        {value: 60, str: "sixty"},
        {value: 50, str: "fifty"},
        {value: 40, str: "forty"},
        {value: 30, str: "thirty"},
        {value: 20, str: "twenty"},
        {value: 19, str: "nineteen"},
        {value: 18, str: "eighteen"},
        {value: 17, str: "seventeen"},
        {value: 16, str: "sixteen"},
        {value: 15, str: "fifteen"},
        {value: 14, str: "fourteen"},
        {value: 13, str: "thirteen"},
        {value: 12, str: "twelve"},
        {value: 11, str: "eleven"},
        {value: 10, str: "ten"},
        {value: 9, str: "nine"},
        {value: 8, str: "eight"},
        {value: 7, str: "seven"},
        {value: 6, str: "six"},
        {value: 5, str: "five"},
        {value: 4, str: "four"},
        {value: 3, str: "three"},
        {value: 2, str: "two"},
        {value: 1, str: "one"}
      ];

      var result = '';
      for (var any of numberList) {
        if(number>=any.value){
          if(number<=90){
            result += any.str;
            number -= any.value;
            if(number>0) result += ' ';
          }else{
            var a =  Math.floor(number / any.value);
            console.log(a);
            var b = number % any.value;
            if(b>0){
              return wordConvert(t) + ' ' + any.str +' ' + wordConvert(b);
            }else{
              return wordConvert(t) + ' ' + any.str;
            }

          }
        }
      }
      return result;
    }