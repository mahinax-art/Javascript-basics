//条件分岐

let age = 17;
let ticket = true;

if (age >= 18 && ticket){
    console.log("入場OK");
}else{
    console.log("入場NG");
}



let score = 78

if(score >= 80){
    console.log("素晴らしい！")
}else if(score >=60){
    console.log("ギリギリ合格")
}else{
    console.log("ザンネン、不合格")
}

//繰り返し処理

for(let a = 0; a <= 5; a++){
    console.log("こんにちは");
};

for(let i = 1; i <= 5; i++){
    console.log(i + "番目");
};