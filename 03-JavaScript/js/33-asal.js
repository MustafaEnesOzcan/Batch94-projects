function hesapla(){

let sayi = document.querySelector("#girilenSayi").value;
if(!sayi || isNaN(sayi) || sayi<=1 ){
    alert("uygun bir sayı giriniz");
    return;

}
let kontrol = 0;

for(let i = 2 ; i<sayi ; i++){
    if(sayi%i==0){
        kontrol++;

    }
}
if(kontrol ==0 ){
    document.querySelector("#aaa").innerHTML="girilen sayı asaldır."

}else{
    document.querySelector("#aaa").innerHTML="girilen sayı değildir."
}
}