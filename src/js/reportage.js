import Message from './message.js';

export default class Report {
  constructor(parent, url) {
    this.parent = parent;
    this.url = url;
    this.report = null;
    this.events = null;
  }

  async create() {
    this.report = document.createElement('div');
    this.report.setAttribute('class', 'report');
    this.parent.appendChild(this.report);

    const response = await fetch(`${this.url}/?events`, {
      method: 'GET',     
    });

    if (response.ok) {
      const events = await response.text();
      this.events = JSON.parse(events);
      console.log(this.events);
      for(let event of this.events){
        console.log(event.count)
        const message = new Message(this.report, event);
        message.create();
      }
    }


    const eventSource = new EventSource(`${this.url}/sse`);
    eventSource.addEventListener('message', (evt) => {
      const message = new Message(this.report, JSON.parse(evt.data));
      message.create();
      console.log(JSON.parse(evt.data));
    });
    eventSource.addEventListener('open', (evt) => {
      console.log('connected');
    });
    eventSource.addEventListener('error', (evt) => {
      console.log('error');
    });
  }

 
}
