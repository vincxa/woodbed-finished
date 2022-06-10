$('.firstsldier').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    merge:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
    
});
$('.secondslider').owlCarousel({
    items:3,
    loop:true,
    margin:104,
    merge:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        415:{
            items:4
        },
        1000:{
            items:3
        }
    }
    
    
});

function show(){
    let z = document.getElementById('fasi').style.height;
    let width = screen.width;
    if(z == 0 & width >415){
        document.getElementById('fasio').innerHTML = 'ფასი&#8722;'
        document.getElementById('fasi').style.height = '60px';
        document.getElementById('fasi').style.marginTop = '20px';
        document.getElementById('fasi').style.marginBottom = '20px'
    }
    else if(z == '60px'& width >415){
        document.getElementById('fasio').innerHTML = 'ფასი&#43;'
        document.getElementById('fasi').style.height = '0px';
        document.getElementById('fasi').style.marginTop = '0px';
        document.getElementById('fasi').style.marginBottom = '0px'
    }
    else if(z == 0 & width <= 415){
        document.getElementById('fasio').innerHTML = 'ფასი&#8722;'
        document.getElementById('fasi').style.height = '20px';
        document.getElementById('fasi').style.marginTop = '5px';
        document.getElementById('fasi').style.marginBottom = '5px'
    }
    else if(z == '20px'& width <= 415){
        document.getElementById('fasio').innerHTML = 'ფასი&#43;'
        document.getElementById('fasi').style.height = '0px';
        document.getElementById('fasi').style.marginTop = '0px';
        document.getElementById('fasi').style.marginBottom = '0px'
    }
    else{
        document.getElementById('fasio').innerHTML = 'ფასი&#8722;'
        document.getElementById('fasi').style.height = '60px';
        document.getElementById('fasi').style.marginTop = '20px';
        document.getElementById('fasi').style.marginBottom = '20px'
    }
}
function shows(){
    let z = document.getElementById('feri').style.height
    let width = screen.width;
    if(z == 0 & width > 415){
        document.getElementById('ferio').innerHTML = 'ფერი&#8722;'
        document.getElementById('feri').style.height = '80px';
    }
    else if(z == '80px' & width > 415){
        document.getElementById('ferio').innerHTML = 'ფერი&#43;'
        document.getElementById('feri').style.height = '0px';
    }
    else if(z == 0 & width <= 415){
        document.getElementById('ferio').innerHTML = 'ფერი&#8722;'
        document.getElementById('feri').style.height = '40px';
    }
    else if(z == '40px' & width <= 415){
        document.getElementById('ferio').innerHTML = 'ფერი&#43;'
        document.getElementById('feri').style.height = '0px';
    }
    else{
        document.getElementById('ferio').innerHTML = 'ფერი&#8722;'
        document.getElementById('feri').style.height = '80px';
    }
}
function check(){
    if(document.getElementById('innerferip').innerHTML == ''){
        document.getElementById('innerferip').innerHTML = '&#10004'
        console.log(document.getElementById('innerferip').innerHTML)
    }
    else if(document.getElementById('innerferip').innerHTML == '✔'){
        document.getElementById('innerferip').innerHTML = ''
    }
}
function secondcheck(){
    if(document.getElementById('secondinnerferip').innerHTML == ''){
        document.getElementById('secondinnerferip').innerHTML = '&#10004'
        console.log(document.getElementById('innerferip').innerHTML)
    }
    else if(document.getElementById('secondinnerferip').innerHTML == '✔'){
        document.getElementById('secondinnerferip').innerHTML = ''
    }
}
function thirdcheck(){
    if(document.getElementById('thirdinnerferip').innerHTML == ''){
        document.getElementById('thirdinnerferip').innerHTML = '&#10004'
        console.log(document.getElementById('thirdinnerferip').innerHTML)
    }
    else if(document.getElementById('thirdinnerferip').innerHTML == '✔'){
        document.getElementById('thirdinnerferip').innerHTML = ''
    }
}
function gafiltre(){
    var num1, num2, number1, number2, firstcolor, secondcolor, thirdcolor;
    num1 = document.getElementById("minnumber").value;
    num2 = document.getElementById("maxnumber").value;
    number1 = num1 ;
    number2 = num2 ;
    firstcolor = document.getElementById('innerferip').innerHTML;
    secondcolor = document.getElementById('secondinnerferip').innerHTML;
    thirdcolor = document.getElementById('thirdinnerferip').innerHTML;
    parseInt(number1) ;
    parseInt(number2) ;
    console.log(number1) ;
    console.log(number2) ;
    if(num1 == ''|| number1 >=0 & number1 <400  & num2 == ''||number2>800 & firstcolor == '' & secondcolor == '' & thirdcolor == ''){
        document.getElementById('forezerozero').style.width = '400px';
        document.getElementById('forezerozero').style.height = '570px';
        document.getElementById('forezerozero').style.overflow = 'visible';
        document.getElementById('forezerozeroo').style.width = '400px';
        document.getElementById('forezerozeroo').style.height = '570px';
        document.getElementById('forezerozeroo').style.overflow = 'visible';
        document.getElementById('foretwozero').style.width = '400px';
        document.getElementById('foretwozero').style.height = '570px';
        document.getElementById('foretwozero').style.overflow = 'visible';
        document.getElementById('forefivezero').style.width = '400px';
        document.getElementById('forefivezero').style.height = '570px';
        document.getElementById('forefivezero').style.overflow = 'visible';
        document.getElementById('fivezerozero').style.width = '400px';
        document.getElementById('fivezerozero').style.height = '570px';
        document.getElementById('fivezerozero').style.overflow = 'visible';
        document.getElementById('sixzerozero').style.width = '400px';
        document.getElementById('sixzerozero').style.height = '570px';
        document.getElementById('sixzerozero').style.overflow = 'visible';
        document.getElementById('sixzerozeroo').style.width = '400px';
        document.getElementById('sixzerozeroo').style.height = '570px';
        document.getElementById('sixzerozeroo').style.overflow = 'visible';
        document.getElementById('seventwozero').style.width = '400px';
        document.getElementById('seventwozero').style.height = '570px';
        document.getElementById('seventwozero').style.overflow = 'visible';
        document.getElementById('sevenfivezero').style.width = '400px';
        document.getElementById('sevenfivezero').style.height = '570px';
        document.getElementById('sevenfivezero').style.overflow = 'visible';
        document.getElementById('sevenfivezeroo').style.width = '400px';
        document.getElementById('sevenfivezeroo').style.height = '570px';
        document.getElementById('sevenfivezeroo').style.overflow = 'visible';
        document.getElementById('bearpic').style.width = '400px';
        document.getElementById('bearpic').style.height = '570px';
        document.getElementById('bearpic').style.overflow = 'visible';
    }
    else if(number1 >= 0 & number1 < 400 & number2 >= 0 & number2 < 400 & firstcolor == '' & secondcolor == '' & thirdcolor == ''){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('forefivezero').style.width = '0px';
        document.getElementById('forefivezero').style.height = '0px';
        document.getElementById('forefivezero').style.overflow = 'hidden';
        document.getElementById('fivezerozero').style.width = '0px';
        document.getElementById('fivezerozero').style.height = '0px';
        document.getElementById('fivezerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozero').style.width = '0px';
        document.getElementById('sixzerozero').style.height = '0px';
        document.getElementById('sixzerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozeroo').style.width = '0px';
        document.getElementById('sixzerozeroo').style.height = '0px';
        document.getElementById('sixzerozeroo').style.overflow = 'hidden';
        document.getElementById('seventwozero').style.width = '0px';
        document.getElementById('seventwozero').style.height = '0px';
        document.getElementById('seventwozero').style.overflow = 'hidden';
        document.getElementById('sevenfivezero').style.width = '0px';
        document.getElementById('sevenfivezero').style.height = '0px';
        document.getElementById('sevenfivezero').style.overflow = 'hidden';
        document.getElementById('sevenfivezeroo').style.width = '0px';
        document.getElementById('sevenfivezeroo').style.height = '0px';
        document.getElementById('sevenfivezeroo').style.overflow = 'hidden';
        document.getElementById('bearpic').style.width = '0px';
        document.getElementById('bearpic').style.height = '0px';
        document.getElementById('bearpic').style.overflow = 'hidden';
    }
    else if(number1 <= 400 & number1>=0 & number2 >= 400 & number2 < 420 & firstcolor == '' & secondcolor == '' & thirdcolor == ''){
        document.getElementById('forezerozero').style.width = '400px';
        document.getElementById('forezerozero').style.height = '5700px';
        document.getElementById('forezerozero').style.overflow = 'visible';
        document.getElementById('forezerozeroo').style.width = '400px';
        document.getElementById('forezerozeroo').style.height = '570px';
        document.getElementById('forezerozeroo').style.overflow = 'visible';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('forefivezero').style.width = '0px';
        document.getElementById('forefivezero').style.height = '0px';
        document.getElementById('forefivezero').style.overflow = 'hidden';
        document.getElementById('fivezerozero').style.width = '0px';
        document.getElementById('fivezerozero').style.height = '0px';
        document.getElementById('fivezerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozero').style.width = '0px';
        document.getElementById('sixzerozero').style.height = '0px';
        document.getElementById('sixzerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozeroo').style.width = '0px';
        document.getElementById('sixzerozeroo').style.height = '0px';
        document.getElementById('sixzerozeroo').style.overflow = 'hidden';
        document.getElementById('seventwozero').style.width = '0px';
        document.getElementById('seventwozero').style.height = '0px';
        document.getElementById('seventwozero').style.overflow = 'hidden';
        document.getElementById('sevenfivezero').style.width = '0px';
        document.getElementById('sevenfivezero').style.height = '0px';
        document.getElementById('sevenfivezero').style.overflow = 'hidden';
        document.getElementById('sevenfivezeroo').style.width = '0px';
        document.getElementById('sevenfivezeroo').style.height = '0px';
        document.getElementById('sevenfivezeroo').style.overflow = 'hidden';
        document.getElementById('bearpic').style.width = '0px';
        document.getElementById('bearpic').style.height = '0px';
        document.getElementById('bearpic').style.overflow = 'hidden';
    }
    
    else if(number1 <= 420 & number1 > 400 & number2 >= 420 & number2 < 450 & firstcolor == '' & secondcolor == '' & thirdcolor == ''){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';;
        document.getElementById('foretwozero').style.width = '400px';
        document.getElementById('foretwozero').style.height = '570px';
        document.getElementById('foretwozero').style.overflow = 'visible';
        document.getElementById('forefivezero').style.width = '0px';
        document.getElementById('forefivezero').style.height = '0px';
        document.getElementById('forefivezero').style.overflow = 'hidden';
        document.getElementById('fivezerozero').style.width = '0px';
        document.getElementById('fivezerozero').style.height = '0px';
        document.getElementById('fivezerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozero').style.width = '0px';
        document.getElementById('sixzerozero').style.height = '0px';
        document.getElementById('sixzerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozeroo').style.width = '0px';
        document.getElementById('sixzerozeroo').style.height = '0px';
        document.getElementById('sixzerozeroo').style.overflow = 'hidden';
        document.getElementById('seventwozero').style.width = '0px';
        document.getElementById('seventwozero').style.height = '0px';
        document.getElementById('seventwozero').style.overflow = 'hidden';
        document.getElementById('sevenfivezero').style.width = '0px';
        document.getElementById('sevenfivezero').style.height = '0px';
        document.getElementById('sevenfivezero').style.overflow = 'hidden';
        document.getElementById('sevenfivezeroo').style.width = '0px';
        document.getElementById('sevenfivezeroo').style.height = '0px';
        document.getElementById('sevenfivezeroo').style.overflow = 'hidden';
        document.getElementById('bearpic').style.width = '0px';
        document.getElementById('bearpic').style.height = '0px';
        document.getElementById('bearpic').style.overflow = 'hidden';
    }
    else if(number1 <= 450 & number1 > 420 & number2 >= 450 & number2 < 500 & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('forefivezero').style.width = '400px';
        document.getElementById('forefivezero').style.height = '570px';
        document.getElementById('forefivezero').style.overflow = 'visible';
        document.getElementById('fivezerozero').style.width = '0px';
        document.getElementById('fivezerozero').style.height = '0px';
        document.getElementById('fivezerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozero').style.width = '0px';
        document.getElementById('sixzerozero').style.height = '0px';
        document.getElementById('sixzerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozeroo').style.width = '0px';
        document.getElementById('sixzerozeroo').style.height = '0px';
        document.getElementById('sixzerozeroo').style.overflow = 'hidden';
        document.getElementById('seventwozero').style.width = '0px';
        document.getElementById('seventwozero').style.height = '0px';
        document.getElementById('seventwozero').style.overflow = 'hidden';
        document.getElementById('sevenfivezero').style.width = '0px';
        document.getElementById('sevenfivezero').style.height = '0px';
        document.getElementById('sevenfivezero').style.overflow = 'hidden';
        document.getElementById('sevenfivezeroo').style.width = '0px';
        document.getElementById('sevenfivezeroo').style.height = '0px';
        document.getElementById('sevenfivezeroo').style.overflow = 'hidden';
        document.getElementById('bearpic').style.width = '0px';
        document.getElementById('bearpic').style.height = '0px';
        document.getElementById('bearpic').style.overflow = 'hidden';
    }
    else if(number1 > 450 & number1 <= 500 & number2 >= 500 & number2 < 600 & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('forefivezero').style.width = '0px';
        document.getElementById('forefivezero').style.height = '0px';
        document.getElementById('forefivezero').style.overflow = 'hidden';
        document.getElementById('fivezerozero').style.width = '400px';
        document.getElementById('fivezerozero').style.height = '570px';
        document.getElementById('fivezerozero').style.overflow = 'visible';
        document.getElementById('sixzerozero').style.width = '0px';
        document.getElementById('sixzerozero').style.height = '0px';
        document.getElementById('sixzerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozeroo').style.width = '0px';
        document.getElementById('sixzerozeroo').style.height = '0px';
        document.getElementById('sixzerozeroo').style.overflow = 'hidden';
        document.getElementById('seventwozero').style.width = '0px';
        document.getElementById('seventwozero').style.height = '0px';
        document.getElementById('seventwozero').style.overflow = 'hidden';
        document.getElementById('sevenfivezero').style.width = '0px';
        document.getElementById('sevenfivezero').style.height = '0px';
        document.getElementById('sevenfivezero').style.overflow = 'hidden';
        document.getElementById('sevenfivezeroo').style.width = '0px';
        document.getElementById('sevenfivezeroo').style.height = '0px';
        document.getElementById('sevenfivezeroo').style.overflow = 'hidden';
        document.getElementById('bearpic').style.width = '0px';
        document.getElementById('bearpic').style.height = '0px';
        document.getElementById('bearpic').style.overflow = 'hidden';
        
    }
    else if(number1 > 500 & number1 <= 600 & number2 >= 600 & number2 < 720 & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('forefivezero').style.width = '0px';
        document.getElementById('forefivezero').style.height = '0px';
        document.getElementById('forefivezero').style.overflow = 'hidden';
        document.getElementById('fivezerozero').style.width = '0px';
        document.getElementById('fivezerozero').style.height = '0px';
        document.getElementById('fivezerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozero').style.width = '400px';
        document.getElementById('sixzerozero').style.height = '570px';
        document.getElementById('sixzerozero').style.overflow = 'visible';
        document.getElementById('sixzerozeroo').style.width = '400px';
        document.getElementById('sixzerozeroo').style.height = '570px';
        document.getElementById('sixzerozeroo').style.overflow = 'visible';
        document.getElementById('seventwozero').style.width = '0px';
        document.getElementById('seventwozero').style.height = '0px';
        document.getElementById('seventwozero').style.overflow = 'hidden';
        document.getElementById('sevenfivezero').style.width = '0px';
        document.getElementById('sevenfivezero').style.height = '0px';
        document.getElementById('sevenfivezero').style.overflow = 'hidden';
        document.getElementById('sevenfivezeroo').style.width = '0px';
        document.getElementById('sevenfivezeroo').style.height = '0px';
        document.getElementById('sevenfivezeroo').style.overflow = 'hidden';
        document.getElementById('bearpic').style.width = '0px';
        document.getElementById('bearpic').style.height = '0px';
        document.getElementById('bearpic').style.overflow = 'hidden';
    }
    else if(number1 > 600 & number1 <= 720 & number2 >= 720 & number2 < 750 & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('forefivezero').style.width = '0px';
        document.getElementById('forefivezero').style.height = '0px';
        document.getElementById('forefivezero').style.overflow = 'hidden';
        document.getElementById('fivezerozero').style.width = '0px';
        document.getElementById('fivezerozero').style.height = '0px';
        document.getElementById('fivezerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozero').style.width = '0px';
        document.getElementById('sixzerozero').style.height = '0px';
        document.getElementById('sixzerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozeroo').style.width = '0px';
        document.getElementById('sixzerozeroo').style.height = '0px';
        document.getElementById('sixzerozeroo').style.overflow = 'hidden';
        document.getElementById('seventwozero').style.width = '400px';
        document.getElementById('seventwozero').style.height = '570px';
        document.getElementById('seventwozero').style.overflow = 'visible';
        document.getElementById('sevenfivezero').style.width = '0px';
        document.getElementById('sevenfivezero').style.height = '0px';
        document.getElementById('sevenfivezero').style.overflow = 'hidden';
        document.getElementById('sevenfivezeroo').style.width = '0px';
        document.getElementById('sevenfivezeroo').style.height = '0px';
        document.getElementById('sevenfivezeroo').style.overflow = 'hidden';
        document.getElementById('bearpic').style.width = '0px';
        document.getElementById('bearpic').style.height = '0px';
        document.getElementById('bearpic').style.overflow = 'hidden';
    }
    else if(number1 > 720 & number1 <= 750 & number2 >= 750 & number2 < 800 & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('forefivezero').style.width = '0px';
        document.getElementById('forefivezero').style.height = '0px';
        document.getElementById('forefivezero').style.overflow = 'hidden';
        document.getElementById('fivezerozero').style.width = '0px';
        document.getElementById('fivezerozero').style.height = '0px';
        document.getElementById('fivezerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozero').style.width = '0px';
        document.getElementById('sixzerozero').style.height = '0px';
        document.getElementById('sixzerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozeroo').style.width = '0px';
        document.getElementById('sixzerozeroo').style.height = '0px';
        document.getElementById('sixzerozeroo').style.overflow = 'hidden';
        document.getElementById('seventwozero').style.width = '0px';
        document.getElementById('seventwozero').style.height = '0px';
        document.getElementById('seventwozero').style.overflow = 'hidden';
        document.getElementById('sevenfivezero').style.width = '400px';
        document.getElementById('sevenfivezero').style.height = '570px';
        document.getElementById('sevenfivezero').style.overflow = 'visible';
        document.getElementById('sevenfivezeroo').style.width = '400px';
        document.getElementById('sevenfivezeroo').style.height = '570px';
        document.getElementById('sevenfivezeroo').style.overflow = 'visible';
        document.getElementById('bearpic').style.width = '0px';
        document.getElementById('bearpic').style.height = '0px';
        document.getElementById('bearpic').style.overflow = 'hidden';
    }
    else if(number1 >= 750 & number1 <800 & number2 >= 800 & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('forefivezero').style.width = '0px';
        document.getElementById('forefivezero').style.height = '0px';
        document.getElementById('forefivezero').style.overflow = 'hidden';
        document.getElementById('fivezerozero').style.width = '0px';
        document.getElementById('fivezerozero').style.height = '0px';
        document.getElementById('fivezerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozero').style.width = '0px';
        document.getElementById('sixzerozero').style.height = '0px';
        document.getElementById('sixzerozero').style.overflow = 'hidden';
        document.getElementById('sixzerozeroo').style.width = '0px';
        document.getElementById('sixzerozeroo').style.height = '0px';
        document.getElementById('sixzerozeroo').style.overflow = 'hidden';
        document.getElementById('seventwozero').style.width = '0px';
        document.getElementById('seventwozero').style.height = '0px';
        document.getElementById('seventwozero').style.overflow = 'hidden';
        document.getElementById('sevenfivezero').style.width = '0px';
        document.getElementById('sevenfivezero').style.height = '0px';
        document.getElementById('sevenfivezero').style.overflow = 'hidden';
        document.getElementById('sevenfivezeroo').style.width = '0px';
        document.getElementById('sevenfivezeroo').style.height = '0px';
        document.getElementById('sevenfivezeroo').style.overflow = 'hidden';
        document.getElementById('bearpic').style.width = '400px';
        document.getElementById('bearpic').style.height = '570px';
        document.getElementById('bearpic').style.overflow = 'visible';
    }
    else if(number1 > 400 & number1 <= 420 & number2 >=800||num2 ==""  & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '400px';
        document.getElementById('foretwozero').style.height = '570px';
        document.getElementById('foretwozero').style.overflow = 'visible';
        document.getElementById('forefivezero').style.width = '400px';
        document.getElementById('forefivezero').style.height = '570px';
        document.getElementById('forefivezero').style.overflow = 'visible';
        document.getElementById('fivezerozero').style.width = '400px';
        document.getElementById('fivezerozero').style.height = '570px';
        document.getElementById('fivezerozero').style.overflow = 'visible';
        document.getElementById('sixzerozero').style.width = '400px';
        document.getElementById('sixzerozero').style.height = '570px';
        document.getElementById('sixzerozero').style.overflow = 'visible';
        document.getElementById('sixzerozeroo').style.width = '400px';
        document.getElementById('sixzerozeroo').style.height = '570px';
        document.getElementById('sixzerozeroo').style.overflow = 'visible';
        document.getElementById('seventwozero').style.width = '400px';
        document.getElementById('seventwozero').style.height = '570px';
        document.getElementById('seventwozero').style.overflow = 'visible';
        document.getElementById('sevenfivezero').style.width = '400px';
        document.getElementById('sevenfivezero').style.height = '570px';
        document.getElementById('sevenfivezero').style.overflow = 'visible';
        document.getElementById('sevenfivezeroo').style.width = '400px';
        document.getElementById('sevenfivezeroo').style.height = '570px';
        document.getElementById('sevenfivezeroo').style.overflow = 'visible';
        document.getElementById('bearpic').style.width = '400px';
        document.getElementById('bearpic').style.height = '570px';
        document.getElementById('bearpic').style.overflow = 'visible';
    }
    else if(number1 > 420 & number1 <= 450 & number2 >=800||num2==""  & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('forefivezero').style.width = '400px';
        document.getElementById('forefivezero').style.height = '570px';
        document.getElementById('forefivezero').style.overflow = 'visible';
        document.getElementById('fivezerozero').style.width = '400px';
        document.getElementById('fivezerozero').style.height = '570px';
        document.getElementById('fivezerozero').style.overflow = 'visible';
        document.getElementById('sixzerozero').style.width = '400px';
        document.getElementById('sixzerozero').style.height = '570px';
        document.getElementById('sixzerozero').style.overflow = 'visible';
        document.getElementById('sixzerozeroo').style.width = '400px';
        document.getElementById('sixzerozeroo').style.height = '570px';
        document.getElementById('sixzerozeroo').style.overflow = 'visible';
        document.getElementById('seventwozero').style.width = '400px';
        document.getElementById('seventwozero').style.height = '570px';
        document.getElementById('seventwozero').style.overflow = 'visible';
        document.getElementById('sevenfivezero').style.width = '400px';
        document.getElementById('sevenfivezero').style.height = '570px';
        document.getElementById('sevenfivezero').style.overflow = 'visible';
        document.getElementById('sevenfivezeroo').style.width = '400px';
        document.getElementById('sevenfivezeroo').style.height = '570px';
        document.getElementById('sevenfivezeroo').style.overflow = 'visible';
        document.getElementById('bearpic').style.width = '400px';
        document.getElementById('bearpic').style.height = '570px';
        document.getElementById('bearpic').style.overflow = 'visible';
    }
    else if(number1 >450 & number1 <=500  & number2 > 800 ||number2 =='' & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('forefivezero').style.width = '0px';
        document.getElementById('forefivezero').style.height = '0px';
        document.getElementById('forefivezero').style.overflow = 'hidden';
        document.getElementById('fivezerozero').style.width = '400px';
        document.getElementById('fivezerozero').style.height = '570px';
        document.getElementById('fivezerozero').style.overflow = 'visible';
        document.getElementById('sixzerozero').style.width = '400px';
        document.getElementById('sixzerozero').style.height = '570px';
        document.getElementById('sixzerozero').style.overflow = 'visible';
        document.getElementById('sixzerozeroo').style.width = '400px';
        document.getElementById('sixzerozeroo').style.height = '570px';
        document.getElementById('sixzerozeroo').style.overflow = 'visible';
        document.getElementById('seventwozero').style.width = '400px';
        document.getElementById('seventwozero').style.height = '570px';
        document.getElementById('seventwozero').style.overflow = 'visible';
        document.getElementById('sevenfivezero').style.width = '400px';
        document.getElementById('sevenfivezero').style.height = '570px';
        document.getElementById('sevenfivezero').style.overflow = 'visible';
        document.getElementById('sevenfivezeroo').style.width = '400px';
        document.getElementById('sevenfivezeroo').style.height = '570px';
        document.getElementById('sevenfivezeroo').style.overflow = 'visible';
        document.getElementById('bearpic').style.width = '400px';
        document.getElementById('bearpic').style.height = '570px';
        document.getElementById('bearpic').style.overflow = 'visible';
    }
    // else if(number1 >500 & number1 <=600  & number2 > 800 ||num2 =='' & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
    //     document.getElementById('forezerozero').style.width = '0px';
    //     document.getElementById('forezerozero').style.height = '0px';
    //     document.getElementById('forezerozero').style.overflow = 'hidden';
    //     document.getElementById('forezerozeroo').style.width = '0px';
    //     document.getElementById('forezerozeroo').style.height = '0px';
    //     document.getElementById('forezerozeroo').style.overflow = 'hidden';
    //     document.getElementById('foretwozero').style.width = '0px';
    //     document.getElementById('foretwozero').style.height = '0px';
    //     document.getElementById('foretwozero').style.overflow = 'hidden';
    //     document.getElementById('forefivezero').style.width = '0px';
    //     document.getElementById('forefivezero').style.height = '0px';
    //     document.getElementById('forefivezero').style.overflow = 'hidden';
    //     document.getElementById('fivezerozero').style.width = '0px';
    //     document.getElementById('fivezerozero').style.height = '0px';
    //     document.getElementById('fivezerozero').style.overflow = 'hidden';
    //     document.getElementById('sixzerozero').style.width = '400px';
    //     document.getElementById('sixzerozero').style.height = '570px';
    //     document.getElementById('sixzerozero').style.overflow = 'visible';
    //     document.getElementById('sixzerozeroo').style.width = '400px';
    //     document.getElementById('sixzerozeroo').style.height = '570px';
    //     document.getElementById('sixzerozeroo').style.overflow = 'visible';
    //     document.getElementById('seventwozero').style.width = '400px';
    //     document.getElementById('seventwozero').style.height = '570px';
    //     document.getElementById('seventwozero').style.overflow = 'visible';
    //     document.getElementById('sevenfivezero').style.width = '400px';
    //     document.getElementById('sevenfivezero').style.height = '570px';
    //     document.getElementById('sevenfivezero').style.overflow = 'visible';
    //     document.getElementById('sevenfivezeroo').style.width = '400px';
    //     document.getElementById('sevenfivezeroo').style.height = '570px';
    //     document.getElementById('sevenfivezeroo').style.overflow = 'visible';
    //     document.getElementById('bearpic').style.width = '400px';
    //     document.getElementById('bearpic').style.height = '570px';
    //     document.getElementById('bearpic').style.overflow = 'visible';
    // }
    // else if(number1 >600 & number1 <=720  & number2 >= 800 ||number2 =='' & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
    //     document.getElementById('forezerozero').style.width = '0px';
    //     document.getElementById('forezerozero').style.height = '0px';
    //     document.getElementById('forezerozero').style.overflow = 'hidden';
    //     document.getElementById('forezerozeroo').style.width = '0px';
    //     document.getElementById('forezerozeroo').style.height = '0px';
    //     document.getElementById('forezerozeroo').style.overflow = 'hidden';
    //     document.getElementById('foretwozero').style.width = '0px';
    //     document.getElementById('foretwozero').style.height = '0px';
    //     document.getElementById('foretwozero').style.overflow = 'hidden';
    //     document.getElementById('forefivezero').style.width = '0px';
    //     document.getElementById('forefivezero').style.height = '0px';
    //     document.getElementById('forefivezero').style.overflow = 'hidden';
    //     document.getElementById('fivezerozero').style.width = '0px';
    //     document.getElementById('fivezerozero').style.height = '0px';
    //     document.getElementById('fivezerozero').style.overflow = 'hidden';
    //     document.getElementById('sixzerozero').style.width = '0px';
    //     document.getElementById('sixzerozero').style.height = '0px';
    //     document.getElementById('sixzerozero').style.overflow = 'hidden';
    //     document.getElementById('sixzerozeroo').style.width = '0px';
    //     document.getElementById('sixzerozeroo').style.height = '0px';
    //     document.getElementById('sixzerozeroo').style.overflow = 'hidden';
    //     document.getElementById('seventwozero').style.width = '400px';
    //     document.getElementById('seventwozero').style.height = '570px';
    //     document.getElementById('seventwozero').style.overflow = 'visible';
    //     document.getElementById('sevenfivezero').style.width = '400px';
    //     document.getElementById('sevenfivezero').style.height = '570px';
    //     document.getElementById('sevenfivezero').style.overflow = 'visible';
    //     document.getElementById('sevenfivezeroo').style.width = '400px';
    //     document.getElementById('sevenfivezeroo').style.height = '570px';
    //     document.getElementById('sevenfivezeroo').style.overflow = 'visible';
    //     document.getElementById('bearpic').style.width = '400px';
    //     document.getElementById('bearpic').style.height = '570px';
    //     document.getElementById('bearpic').style.overflow = 'visible';
    // }
    // else if(number1 >= 0 & number1 <400|| num1 ==""  & number2 < 450 &number2 >=420 & firstcolor == '' & secondcolor == '' & thirdcolor == '' ){
    //     document.getElementById('forezerozero').style.width = '400px';
    //     document.getElementById('forezerozero').style.height = '570px';
    //     document.getElementById('forezerozero').style.overflow = 'visible';
    //     document.getElementById('forezerozeroo').style.width = '400px';
    //     document.getElementById('forezerozeroo').style.height = '570px';
    //     document.getElementById('forezerozeroo').style.overflow = 'visible';
    //     document.getElementById('foretwozero').style.width = '400px';
    //     document.getElementById('foretwozero').style.height = '570px';
    //     document.getElementById('foretwozero').style.overflow = 'visible';
    //     document.getElementById('forefivezero').style.width = '0px';
    //     document.getElementById('forefivezero').style.height = '0px';
    //     document.getElementById('forefivezero').style.overflow = 'hidden';
    //     document.getElementById('fivezerozero').style.width = '0px';
    //     document.getElementById('fivezerozero').style.height = '0px';
    //     document.getElementById('fivezerozero').style.overflow = 'hidden';
    //     document.getElementById('sixzerozero').style.width = '0px';
    //     document.getElementById('sixzerozero').style.height = '0px';
    //     document.getElementById('sixzerozero').style.overflow = 'hidden';
    //     document.getElementById('sixzerozeroo').style.width = '0px';
    //     document.getElementById('sixzerozeroo').style.height = '0px';
    //     document.getElementById('sixzerozeroo').style.overflow = 'hidden';
    //     document.getElementById('seventwozero').style.width = '0px';
    //     document.getElementById('seventwozero').style.height = '0px';
    //     document.getElementById('seventwozero').style.overflow = 'hidden';
    //     document.getElementById('sevenfivezero').style.width = '0px';
    //     document.getElementById('sevenfivezero').style.height = '0px';
    //     document.getElementById('sevenfivezero').style.overflow = 'hidden';
    //     document.getElementById('sevenfivezeroo').style.width = '0px';
    //     document.getElementById('sevenfivezeroo').style.height = '0px';
    //     document.getElementById('sevenfivezeroo').style.overflow = 'hidden';
    //     document.getElementById('bearpic').style.width = '0px';
    //     document.getElementById('bearpic').style.height = '0px';
    //     document.getElementById('bearpic').style.overflow = 'hidden';
    // }
    else{
        document.getElementsByClassName('chamonatvalisinner').innerHTML= "shedegi ver modizebna"
    }
}
