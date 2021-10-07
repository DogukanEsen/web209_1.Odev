function Toplama() {
    var Sayi1=document.getElementById("Sayi1").value;
    var Sayi2=document.getElementById("Sayi2").value;
    var Sonuc=parseInt(Sayi1)+parseInt(Sayi2);
    document.getElementById("sonuc").innerHTML=Sonuc;
}
function Cikarma(){
    var Sayi1=document.getElementById("Sayi1").value;
    var Sayi2=document.getElementById("Sayi2").value;
    var Sonuc=parseInt(Sayi1)-parseInt(Sayi2);
    document.getElementById("sonuc").innerHTML=Sonuc;
    }
function Carpma(){
    var Sayi1=document.getElementById("Sayi1").value;
    var Sayi2=document.getElementById("Sayi2").value;
    var Sonuc=parseInt(Sayi1)*parseInt(Sayi2);
    document.getElementById("sonuc").innerHTML=Sonuc;
    }
function Bolme(){
    var Sayi1=document.getElementById("Sayi1").value;
    var Sayi2=document.getElementById("Sayi2").value;
    var Sonuc=parseInt(Sayi1)/parseInt(Sayi2);
    document.getElementById("sonuc").innerHTML=Sonuc;
    }

