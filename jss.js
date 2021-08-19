 var icon_menu = document.querySelector('.bar');
 var menu_mobi = document.querySelector('.menu');
 var menu_li  =document.querySelectorAll('.menu21');


 icon_menu.addEventListener('click', function(){

    menu_mobi.classList.toggle('open');
    icon_menu.classList.toggle('open');

 });

 for(let i = 0; i< menu_li.length; i++){
        menu_li[i].addEventListener('click',function(){

            var menucap2 = menu_li[i].childNodes[2].style.display;
            if(menucap2 === 'block'){
                menu_li[i].childNodes[2].style.display = 'none';
            }else{
                closeAll(menu_li);
                menu_li[i].childNodes[2].style.display = 'block';
              
            }
           
        });
    
 }

 function closeAll(arr){
    for(var i = 0 ; i <arr.length; i++){
        arr[i].childNodes[2].style.display = 'none';
    }
 }






