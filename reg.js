function checker () {
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let who = document.getElementById("selection").value;

    if (name == null || name.length < 3){
        alert("Ваше имя должно быть не менее 3 символов");
    }
    else if (age < 14 || age >30) {
        alert("Вы некорректно ввели возраст");
    }
    else if (who != "student"){
        alert("Вход только для студентов");
    }
    else{
        alert("Переходим в калькулятор")
        window.location.href = "calculator.html";
    }

}