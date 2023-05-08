function handleSubmit(){
    //lấy gtri input email vaf chuyền sang in thường
    const emailValue = document.getElementById('email').value.toLocaleUpperCase();
    //lấy element của p hiển thị lỗi
    const errorEmail = document.getElementById('error-email');
    //check định dạng phải email k ???
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //dùng match để kiểm tra vs email vừa nhập
    const checkEmail = emailValue.match(regex);
    // lấy phần chứa thôngtin user
    const info = document.querySelector('.info');
    console.log('check section',info);
    // lấy element để kiểm tra thông tiin đăng nhập
    const submitEmail = document.querySelector('.submit-email');

    if (checkEmail) {
        info.style.display = 'block';
        submitEmail.style.display = 'none';
        errorEmail.innerHTML = '';
    } else {
        errorEmail.innerHTML = 'error email';
    }


    
}

function handleOnmouseover(thisElement){
    const viewMore = thisElement.querySelector('.control-view');
    viewMore.style.display = 'block';
}

function handleOnmouseout(thisElement){
    const viewMore = thisElement.querySelector('.control-view');
    if(!viewMore.classList.value.includes('.less-more')){
        viewMore.style.display = 'none';
    }
}

function handleViewMore(thisElement){
    const jobInfos = thisElement.closest('.job-infos');
    const viewMore = jobInfos.querySelector('.control-view');
    const noiDung = jobInfos.querySelectorAll('.noi-dung');
    if (viewMore.classList.value.includes('view-more')){
        noiDung.forEach((thisElement) => {            
            thisElement.style.display = 'inline-block';
        });
        viewMore.classList.remove('view-more');
        viewMore.classList.add('less-more');
        viewMore.innerHTML = 'Less more';
    } else {
        noiDung.forEach((thisElement) => { 
            console.log(thisElement);           
            thisElement.style.display = 'none';
        });
        viewMore.classList.remove('less-more');
        viewMore.classList.add('view-more');
        viewMore.innerHTML = 'View more';
    }
}