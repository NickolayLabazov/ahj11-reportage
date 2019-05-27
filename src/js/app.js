import Report from './reportage.js';

const url = 'http://localhost:7073';
const report = new Report(document.body, url);
report.create();
