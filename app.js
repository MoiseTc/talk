const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
//
const greetings = ['what up',
'you look great',
'how are you doing',
'Good and you but i have a vigina'
];
const weather = [
    'it looks like it could rain',
    'beautifull day'
]
const john = [
    'you are so gross',
    'disgusting please stop it'
]
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition ();

recognition.onstart = function () {
    console.log('voice is activated,you can to microphoneee');
    
};

recognition.onresult = function (event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};
//add the listner to the btn

btn.addEventListener('click',() =>{
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'i dont know what you said ';

    if(message.includes('how are you')){
      const finalText = greetings[Math.floor(Math.random() * greetings.length)];
      speech.text = finalText;
    }
    if(message.includes('hello this is me')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
     }
    if(message.includes('good morning')){
        const finalText = weather[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
     }
     if(message.includes(' have you ever pooped')){
        const finalText = john[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
     }
     if(message.includes('can you poop')){
        const finalText = john[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
     }
     
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);

}