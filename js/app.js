'use strict';

const table = document.createElement('table');

function getRandomnumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);

}

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// eslint-disable-next-line no-unused-vars
const parenet = document.getElementById('salmonCookies');
function PatCookies(name, min, max, avg){
  this.min = min;
  this.max = max;
  this.name = name;
  this.total = 0;
  this.avg = avg;
  this.cookies = [];
  this.costomerperhour =[];
  PatCookies.allcitys.push(this);


}
PatCookies.allcitys = [];


PatCookies.prototype.getcookie = function () {
  for (let i = 0; i < hour.length; i++){
    let number = Math.ceil(getRandomnumber(this.min, this.max) *this.avg);
    this.total = this.total+number;
    // console.log(number);
    this.cookies.push(number);
  }return this.cookies;

};

let seattle = new PatCookies('seattle', 23, 65, 6.3);
seattle.getcookie();

let tokyo= new PatCookies('Tokyo', 3, 24, 1.2);
tokyo.getcookie();

let dubai = new PatCookies('Dubai', 11, 38, 3.7);
dubai.getcookie();
let paris = new PatCookies('Paris', 20, 38, 2.3);
paris.getcookie();
let lima = new PatCookies('Lima', 2, 16, 4.6);
lima.getcookie();

PatCookies.prototype.render = function (){

  this.getcookie();

  const tr = document.createElement('tr');
  table.appendChild('tr');

  let td =document.createElement('td');
  tr.appendChild('td');
  td.textContent =this.name;

  for(let i = 0; i < hour.length; i++){
    let tablecontent = document.createElement('td');
    tr.appendChild(tablecontent);
    tablecontent.textContent = this.cookies[i];

  }
  let td1 = document.createElement('td');
  tr.appendChild('td1');
  td1.textContent =this.total;
};

function headRaw(){
  let tr1 =document.createElement('tr');
  table.appendChild(tr1);

  let th = document.createElement('th');
  tr1.appendChild(th);
  th.textContent = '';

  for(let i = 0; i < hour.length; i++);{
    let th =document.createElement('th');
    tr1.appendChild(th);
    th.textContent = hour[i];
  }

  let th2 = document.createElement('th');
  tr1.appendChild(th2);
  th2.textContent = 'Daily Location Total';

}

function tfooter(){
  let tablefoot = document.createElement('tr');
  table.appendChild(tablefoot);

  let th =document.createElement('th');
  tablefoot.appendChild(th);
  th.textContent = 'total';

  let totalTotals = 0;
  for(let i = 0; i < hour.length; i++) {

    let th = document.createElement('th');
    let hourTotal = 0;
    for(let j = 0; j < PatCookies.allcitys.length; j++){
      hourTotal += PatCookies.allcitys[j].cookies[i];
      totalTotals += PatCookies.allcitys[j].cookies[i];
    }
    th.textContent = hourTotal;
    tablefoot.appendChild(th);
  }
  let th2 =document.createElement('th');
  tablefoot.appendChild(th2);
  th2.textContent = totalTotals;
}


function render() {
  for(let i = 0; i < PatCookies.allcitys.length; i++){
    PatCookies.allcitys[i].render();
  }
}
headRaw();
render();
tfooter();
