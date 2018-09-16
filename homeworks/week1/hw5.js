export const add = (a, b) => {
  
  //利用字串反轉，讓個位數對齊
  var a1=a.split('').reverse()
  var b1=b.split('').reverse()
  var arr=[]
  //偵測 a、b 字串哪個比較長?比較長就用它的長度去短的補0
  var addTimes= a.length>=b.length? a.length:b.length


  for(var i=0;i<addTimes;i++){

    //數字會回傳truthy，而以下會回傳falsy：false、null、undefined、0、"" ( empty string )、NaN ( Not a Number )，可參閱此教學https://stackoverflow.com/questions/7540397/convert-nan-to-0-in-javascrip，
    //不是數字的都替代為0
    a1[i]=a1[i]||0
    b1[i]=b1[i]||0

    //型態轉換:把字串轉數字，並進行位數相加的計算
    arr[i]=a1[i]*1+b1[i]*1

    //進位：如果位數相加>10，要進位到下一位數
    if(arr[i-1]>=10){
      var carry=1
      arr[i-1]=arr[i-1]-10
      arr[i]=arr[i]+carry
    }
  }


  //把反的陣列反轉回來，並變回字串
  return arr.reverse().join('')
}