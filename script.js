document.addEventListener('DOMContentLoaded' , () =>
    {
     const logo = document.getElementById('logo');
     setTimeout(() =>{
        logo.style.opacity= '1';
     },500);

     const enrollbtn = getElementById('enrollbtn');
     const menu = getElementById ('enrollmenu');

     enrollbtn.addEventListener('click', () => {
        if (menu.style.display ==='block'){
            menu.style.display = 'none';
        }
        else{
            menu.style.display = 'block';
        }
     });
     document.addEventListener('click', (event) =>{
        if(!enrollbtn.contains(event.target) && !menu.contains(event.target)){
            menu.style.display ='none'
        }
     });
});

document.getElementById('form').addEventListener('submit',function(event)
{
   event.preventDefault();

   const onlineId = document.getElementById('onlineId').value;
   const password = document.getElementById('password').value;
   const user = 'celebrare';
   const pass = '12345';

   if (onlineId === user && password=== pass){
       document.querySelector('.container') .style.transition = 'all 3s'
       document.querySelector('.image').style.width='100%';
       document.querySelector('.image').style.height='100%';
       document.querySelector('.login').style.display='none';
   }
   else{
       alert('Invalid Id or Password')
   }
});