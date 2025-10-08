let speech = new SpeechSynthesisUtterance;
let textarea = document.querySelector(".para")
let button = document.querySelector(".btns")
let voices = [];
let voiceSelect = document.querySelector("select")

speechSynthesis.onvoiceschanged = () => {   // ya event listener tab trigger hota ha jab voices load ho jati hein
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]    // yahan per default value humna 0 index wali add ker di
    //  textarea.innerHTML=""
    speech.text = textarea.innerHTML
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i) // here in option i is the value in the html it will be eaual to their index new optiion aik tera method ha js ka ander jo option create karna ka liya use hota ha isma first option ha or dosra argument iski value ka liya ha
    })
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]    // humna new option bnata wagt her index iski value ma add kiya tha yani jo item 3 index per tha iski value ma 3 add kiyaa tha four per four
})


//  button.addEventListener("click",()=>{
//     console.log("button is clicked")
//    speech.text = textarea.innerText.trim();
//    console.log(speech.text)

//    window.speechSynthesis.cancel();

//    window.speechSynthesis.speak(speech)

//  })

button.addEventListener("click", () => {

    setTimeout(() => {
        speech.text = textarea.value
        console.log(speech.text);

        speechSynthesis.cancel();
        speechSynthesis.speak(speech);
    }, 0);
});


window.addEventListener("keypress",(e)=>{
  if(e.key=="Enter"){
    speech.text=textarea.value;
    speechSynthesis.cancel();
    speechSynthesis.speak(speech)
  }
})