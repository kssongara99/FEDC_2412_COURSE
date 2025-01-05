function pattern(N) {
    for(let i=1;i<=N;i++){
        let bag="";
        for(let j=1;j<=N;j++){
            if(j%3==0 )continue;
            if(j%7==0 )break;
            if(j==i) bag+=j;
            else if(j<i) bag+=j;
            else bag+="  ";
        }
    console.log(bag)
    }
}
pattern(8)