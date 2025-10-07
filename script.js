let speech=new SpeechSynthesisUtterance();
let textarea=document.querySelector(".para")
let button=document.querySelector(".btns")
let voices=[];
let voiceSelect=document.querySelector("select")

window.speechSynthesis.onvoiceschanged =()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0]
    //  textarea.innerHTML=""
    speech.text=textarea.value
    voices.forEach((voice,i)=>{
        voiceSelect.options[i]= new Option(voice.name,i)
    })
}

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]
})


 button.addEventListener("click",()=>{
   speech.text=textarea.textContent;

   window.speechSynthesis.cancel();

   window.speechSynthesis.speak(speech)

 })