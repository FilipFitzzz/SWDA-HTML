function nameLength(){
    var name = document.querySelector('#name').value;

    if(name.length <= 5 ){
        alert('Кратко име')
    } else if(name.length >= 5 && name.length <= 8 ){
        alert('Име со средна големина')
    } else if(name.length >8 ){
        alert('Долго име')
    }

}