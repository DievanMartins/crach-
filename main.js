//variables
const button = document.querySelector('#send');
let img = document.querySelector('#img');
let image = document.querySelector('#image');

//function data
function enterData(){
    let people = document.querySelector('#name').value;
    let office = document.querySelector('#office').value;
    if(people === '' || office === ''){
        alert('Preencha os dados corretamente!')
        return;
    }
    let areaName = document.querySelector('.area-name');
    areaName.innerHTML = people.toUpperCase();
    let areaOffice = document.querySelector('.area-office');
    areaOffice.innerHTML = office.toUpperCase();
}

//function img
function imgPreview(event){
    if(img.files[0].size > 1048576){
        alert('A imagem selecionada possui mais de 1Mb.');
        return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(img.files[0])
    reader.onload = function () {
        let urlImg = reader.result;
        let newImg = document.createElement('img');
        newImg.setAttribute("src", urlImg);
        newImg.style=`width: 100%;
                    height:100%; border-radius: 5px;`;
        image.appendChild(newImg)
    }
}

//event 
img.addEventListener('change', imgPreview);
button.addEventListener('click', enterData);