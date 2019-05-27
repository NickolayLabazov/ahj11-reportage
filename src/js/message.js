// import Image from './imageclass.js';
const moment = require('moment');

export default class Message {
  constructor(parent, object) {
    this.parent = parent;
    this.messageObject = object;
    this.table = null;
  }

  create() {
    this.table = document.createElement('table');
    const tr = document.createElement('tr');
    const tdImg = document.createElement('td');
    const tdContent = document.createElement('td');
    tdImg.setAttribute('class', 'tdImg');
    // tdContent.setAttribute('class', 'tdContent');
    try{this.parent.insertBefore(this.table, this.parent.childNodes[0])}
    catch(e){
      this.parent.appendChild(this.table);
    }
    
    this.table.appendChild(tr);
    tr.appendChild(tdImg);
    tr.appendChild(tdContent);
    //const time = moment().format('hh:mm:ss DD.MM.YY');
    tdContent.innerHTML = `${this.messageObject.time}</br>${this.messageObject.data}`;
    // tdContent.innerHTML = this.messageObject.data;
    if (this.messageObject.type === 'goal') {
      tdImg.innerHTML = '&#9917';
    }
    if (this.messageObject.type === 'freekick') {
      tdImg.innerHTML = '&#8252';
    }
  }
}
