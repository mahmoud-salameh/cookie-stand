'use strict';

function getRandomnumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);

}
const parenetElement = document.getElementById('salmonCookies');
let cookies1 = {
  name: 'seattle',
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  total: 0,
  avg: 6.3,
  getcookie: function (min, max) {
    let number = Math.floor(getRandomnumber(min, max)*this.avg);
    this.total = this.total+number;
    return number;
  },



  render: function () {
    const parenetElement = document.getElementById('salmonCookies');

    let articleElement = document.createElement('article');

    parenetElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.time.length; i++) {
      let liElement = document.createElement('li');
      if (i === this.time.length-1){
        liElement.textContent = this.time[i]+' '+ this.total+' cookies.';
      }else{
        liElement.textContent = this.time[i]+' '+ this.getcookie(23, 65)+' cookies.';
      }


      ulElement.appendChild(liElement);
    }


  },
};


cookies1.render();
console.log(cookies1);



let cookies2 = {
  name: 'Tokyo',
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  total: 0,
  avg: 1.2,
  getcookie: function (min, max) {
    let number = Math.floor(getRandomnumber(min, max)*this.avg);
    this.total = this.total+number;
    return number;
  },



  render: function () {
    const parenetElement = document.getElementById('salmonCookies');

    let articleElement = document.createElement('article');

    parenetElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.time.length; i++) {
      let liElement = document.createElement('li');
      if (i === this.time.length-1){
        liElement.textContent = this.time[i]+' '+ this.total+' cookies.';
      }else{
        liElement.textContent = this.time[i]+' '+ this.getcookie(3, 24)+' cookies.';
      }


      ulElement.appendChild(liElement);
    }


  },
};


cookies2.render();
console.log(cookies2);




let cookies3 = {
  name: 'Dubai',
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  total: 0,
  avg: 3.7,
  getcookie: function (min, max) {
    let number = Math.floor(getRandomnumber(min, max)*this.avg);
    this.total = this.total+number;
    return number;
  },



  render: function () {
    const parenetElement = document.getElementById('salmonCookies');

    let articleElement = document.createElement('article');

    parenetElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.time.length; i++) {
      let liElement = document.createElement('li');
      if (i === this.time.length-1){
        liElement.textContent = this.time[i]+' '+ this.total+' cookies.';
      }else{
        liElement.textContent = this.time[i]+' '+ this.getcookie(11, 38)+' cookies.';
      }


      ulElement.appendChild(liElement);
    }


  },
};


cookies3.render();
console.log(cookies3);


let cookies4 = {
  name: 'Paris',
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  total: 0,
  avg: 2.3,
  getcookie: function (min, max) {
    let number = Math.floor(getRandomnumber(min, max)*this.avg);
    this.total = this.total+number;
    return number;
  },



  render: function () {
    const parenetElement = document.getElementById('salmonCookies');

    let articleElement = document.createElement('article');

    parenetElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.time.length; i++) {
      let liElement = document.createElement('li');
      if (i === this.time.length-1){
        liElement.textContent = this.time[i]+' '+ this.total+' cookies.';
      }else{
        liElement.textContent = this.time[i]+' '+ this.getcookie(20, 38)+' cookies.';
      }


      ulElement.appendChild(liElement);
    }


  },
};


cookies4.render();
console.log(cookies4);





let cookies5 = {
  name: 'Lima',
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  total: 0,
  avg: 4.6,
  getcookie: function (min, max) {
    let number = Math.floor(getRandomnumber(min, max)*this.avg);
    this.total = this.total+number;
    return number;
  },



  render: function () {
    const parenetElement = document.getElementById('salmonCookies');

    let articleElement = document.createElement('article');

    parenetElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    articleElement.appendChild(h2Element);

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < this.time.length; i++) {
      let liElement = document.createElement('li');
      if (i === this.time.length-1){
        liElement.textContent = this.time[i]+' '+ this.total+' cookies' ;
      }else{
        liElement.textContent = this.time[i]+' '+ this.getcookie(2, 16)+' cookies.';
      }


      ulElement.appendChild(liElement);
    }


  },
};


cookies5.render();
console.log(cookies5);


