var submitted=false;

function pageload(){
        document.getElementsByClassName('loader')[0].classList.add('show')
};

function fun(){
        window.location='#';
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('mobile').value='';
        document.getElementById('Message').value='';
        document.getElementById('response').style.display='block';
        document.getElementById('formdata').style.display='none';
        document.getElementById('show').style.display='block';
        document.getElementById('response').style.width='300px';
        document.getElementById('down2').style.width='300px';
};

function fun2(){
        document.getElementById('response').style.display='none';
        document.getElementById('formdata').style.display='block';
        document.getElementById('show').style.display='none';
        document.getElementById('down2').style.width='231px';
}

function scroll(){
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
                document.getElementsByTagName('header')[0].style.position='fixed';
                document.getElementsByTagName('header')[0].style.zIndex=1;
                document.getElementsByTagName('header')[0].style.width='98%';
                document.getElementsByTagName('header')[0].style.margin='0% 1% 0%';
                document.getElementById('blank').style.display='block';
                document.getElementById('blank').style.visibility='hidden';
                
                document.getElementsByClassName('headArea')[0].classList.add('hide');
                document.getElementsByClassName('headArea')[1].classList.add('hide');
                
        }
        else{
                document.getElementsByTagName('header')[0].style.position='';
                document.getElementsByTagName('header')[0].style.zIndex='';
                document.getElementsByTagName('header')[0].style.width='';
                document.getElementById('blank').style.display='none';
                document.getElementById('blank').style.visibility='';
                
                document.getElementsByTagName('header')[0].style.margin='';
                document.getElementsByClassName('headArea')[0].classList.remove('hide')
                document.getElementsByClassName('headArea')[1].classList.remove('hide');
        }
}
