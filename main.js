let yes = document.getElementById('yes');
let no = document.getElementById('no');
let question = document.getElementById('question');
let bothBtns = document.querySelectorAll('button');

// mouse hover change the button text
no.addEventListener('mouseover', function (){
        no.textContent = "Yes"
        yes.textContent = "No"
});

no.addEventListener('mouseout', function (){
    no.textContent = "No"
    yes.textContent = "Yes"
});

// On clicking btn display the message and create a new element
bothBtns.forEach(function(button) {
    button.addEventListener('click',function(){
        if (yes.textContent === "Yes"){
            window.alert("I knew it 😁");
        }
        if (no.textContent === "Yes"){
            window.alert("I knew it 😁");
        }
        yes.parentElement.remove();
        question.textContent = "Why are you gay ?"
        let parent=question.parentElement;
        var inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.id = "myInput";
        inputElement.name = "myInput";
        inputElement.placeholder = "Why ?";
        inputElement.classList = "px-3 py-2 w-9/12 h-10 border border-1 border-purple-500 rounded";
        parent.appendChild(inputElement);
    });
});
