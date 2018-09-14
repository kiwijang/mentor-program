export const isPrime = (n) => {
  for(var i=2; i<=n; i++){
    if(n%i===0){
      var mynum=i
      if(mynum<n){
        return false
      }else{
        return true
      }
    }
  }
}