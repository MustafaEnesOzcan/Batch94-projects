const hesapla = () => {
  const sayi =  document.querySelector("#txtSayi").value;
  if(!sayi || isNaN(sayi)|| sayi<0){
    alert("en az bir pozitif bir tam sayı giriniz");
    return;

  }
  let carpim = 1 ;
  for(let i = 1 ; i<=sayi ; i++){
    carpim = carpim * i ;
  }
  document.querySelector("#sonuc").innerHTML=`${sayi} sayısının faktoriyeli ${carpim}`;
  
}