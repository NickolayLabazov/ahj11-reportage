import './css/style.css';
import favicon from './img/favicon.ico';

import './js/app.js';

const fav = document.createElement('link');
fav.setAttribute('rel', 'shortcut icon');
fav.setAttribute('href', `.${favicon}`);
fav.setAttribute('type', 'image/x-icon');
document.head.appendChild(fav);


/*
import Message from './js/message.js';

const eventSource = new EventSource("http://localhost:7072/sse");
eventSource.addEventListener('message', (evt) => {
    let message = new Message(document.body, JSON.parse(evt.data));
    message.create();
console.log(JSON.parse(evt.data));
});
eventSource.addEventListener('open', (evt) => {

console.log('connected');
});
eventSource.addEventListener('error', (evt) => {

    console.log('error');
});

        */
