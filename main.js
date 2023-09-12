const yes = document.getElementById('yes');
const no = document.getElementById('no');
const question = document.getElementById('question')
no.addEventListener('mouseover', function fun(){
        no.textContent = "Yes"
        yes.textContent = "No"
});

no.addEventListener('mouseout', function fun(){
    no.textContent = "No"
    yes.textContent = "Yes"
});

no.addEventListener('click',function sun(){
    if (yes.textContent == "Yes"){
        window.alert("I knew it 😁");
    }
    if (no.textContent == "Yes"){
        window.alert("I knew it 😁");
    }
    yes.parentElement.remove();
    question.textContent = "Why are you gay ?"
    let parent=yes.parentElement;
    var inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.id = "myInput";
    inputElement.name = "myInput";
    parent.appendChild(inputElement);

});

yes.addEventListener('click',function sun(){
    if (yes.textContent == "Yes"){
        window.alert("I knew it 😁");
    }
    if (no.textContent == "Yes"){
        window.alert("I knew it 😁");
    }
    yes.parentElement.remove();
    question.textContent = "Why are you gay ?"
    let parent=question.parentElement;
    var inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.id = "myInput";
    inputElement.name = "myInput";
    inputElement.placeholder = "why ?";
    inputElement.classList = "px-4 py-2";
    parent.appendChild(inputElement);
});

