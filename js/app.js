'use strict';

const table = document.createElement('table');

function getRandomnumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);

}
// eslint-disable-next-line no-unused-vars
const parenetElement = document.getElementById('salmonCookies');
function PatCookies(name, time, min, max, avg, total){
  this.min = min;
  this.max = max;
  this.name = name;
  this.time = time;
  this.total = 0;
  this.avg = avg;
  this.cookies = [];
  this.total =total;

}

PatCookies.prototype.getcookie = function (min, max) {
  let number = Math.ceil(getRandomnumber(min, max) *this.avg);
  this.total = this.total+number;
  this.cookies.push(number);
  return number;
};

PatCookies.prototype.render = function () {
  const parenetElement = document.getElementById('salmonCookies');

  let articleElement = document.createElement('article');

  parenetElement.appendChild(articleElement);

  const h2Element = document.createElement('h2');
  h2Element.textContent = this.name;
  articleElement.appendChild(h2Element);



  const tr2 = document.createElement('tr');
  table.appendChild(tr2);


  let bodyArray = ['seattle'];
  for(let i = 0; i < bodyArray.length; i++) {
    const tdBody = document.createElement('td');
    tr2.appendChild(tdBody);
    tdBody.textContent = bodyArray[i];
  }


  const tr3 = document.createElement('tr');
  table.appendChild(tr3);

  let bodyArray2 = ['tokyo'];
  for(let i = 0; i < bodyArray2.length; i++) {
    const tdBody = document.createElement('td');
    tr3.appendChild(tdBody);
    tdBody.textContent = bodyArray2[i];
  }
  const tr4 = document.createElement('tr');
  table.appendChild(tr4);

  let bodyArray3 = ['dubie'];
  for(let i = 0; i < bodyArray3.length; i++) {
    const tdBody = document.createElement('td');
    tr4.appendChild(tdBody);
    tdBody.textContent = bodyArray3[i];
  }
  const tr5 = document.createElement('tr');
  table.appendChild(tr5);

  let bodyArray4 = ['paris'];
  for(let i = 0; i < bodyArray4.length; i++) {
    const tdBody = document.createElement('td');
    tr5.appendChild(tdBody);
    tdBody.textContent = bodyArray4[i];
  }

  const tr6 = document.createElement('tr');
  table.appendChild(tr6);

  let bodyArray5 = ['lima'];
  for(let i = 0; i < bodyArray5.length; i++) {
    const tdBody = document.createElement('td');
    tr6.appendChild(tdBody);
    tdBody.textContent = bodyArray5[i];
  }

  const tr7 = document.createElement('tr');
  table.appendChild(tr7);

  let bodyArray6 = ['lima'];
  for(let i = 0; i < bodyArray6.length; i++) {
    const tdBody = document.createElement('td');
    tr7.appendChild(tdBody);
    tdBody.textContent = bodyArray6[i];
  }




  const ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);

  for (let i = 0; i < this.time.length; i++) {
    let liElement = document.createElement('li');
    if (i === this.time.length-1){
      liElement.textContent = this.time[i]+' '+ this.total+' cookies.';
    }else{
      liElement.textContent = this.time[i]+' '+ this.getcookie(this.min, this.max)+' cookies.';
    }
    ulElement.appendChild(liElement);
  }

};


// let seattle = new PatCookies('seattle', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'], 23, 65, 6.3);

// let tokyo= new PatCookies('Tokyo', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'], 3, 24, 1.2);

// let dubai = new PatCookies('Dubai', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'], 11, 38, 3.7);

// let paris = new PatCookies('Paris', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'], 20, 38, 2.3);

// let lima = new PatCookies('Lima', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'], 2, 16, 4.6);

// seattle.render();

// tokyo.render();

// dubai.render();

// paris.render();

// lima.render();

function tableRender(){

  const parenetElement = document.getElementById('tabledata');


  let articleElement = document.createElement('article');
  tabledata.appendChild(articleElement);

  let table = document.createElement('table');
  articleElement.appendChild(table);

  const tr1 = document.createElement('tr');
  table.appendChild(tr1);

  let headArray = ['city','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2m', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
  for(let i = 0; i < headArray.length; i++) {
    const th = document.createElement('th');
    tr1.appendChild(th);
    th.textContent = headArray[i];
  }

  const tr3 = document.createElement('tr');
  table.appendChild(tr3);
  let bodyArray1 = [];
  for(let i = 0; i < bodyArray1.length; i++) {
    const tdBody = document.createElement('td');
    tr3.appendChild(tdBody);
    tdBody.textContent = bodyArray1[i];
  }

  let bodyArray = ['seattle','tokyo','dubie','paris','lima'];
  for(let i = 0; i < bodyArray.length; i++) {
    const tr2 = document.createElement('tr');
    table.appendChild(tr2);
    const tdBody = document.createElement('td');
    tr2.appendChild(tdBody);
    tdBody.textContent = bodyArray[i];
  }


  //   const tr3 = document.createElement('tr');
  //   table.appendChild(tr3);

  //   let bodyArray2 = ['tokyo'];
  //   for(let i = 0; i < bodyArray2.length; i++) {
  //     const tdBody = document.createElement('td');
  //     tr3.appendChild(tdBody);
  //     tdBody.textContent = bodyArray2[i];
  //   }
  //   const tr4 = document.createElement('tr');
  //   table.appendChild(tr4);

  //   let bodyArray3 = ['dubie'];
  //   for(let i = 0; i < bodyArray3.length; i++) {
  //     const tdBody = document.createElement('td');
  //     tr4.appendChild(tdBody);
  //     tdBody.textContent = bodyArray3[i];
  //   }
  //   const tr5 = document.createElement('tr');
  //   table.appendChild(tr5);

  //   let bodyArray4 = ['paris'];
  //   for(let i = 0; i < bodyArray4.length; i++) {
  //     const tdBody = document.createElement('td');
  //     tr5.appendChild(tdBody);
  //     tdBody.textContent = bodyArray4[i];
  //   }

  //   const tr6 = document.createElement('tr');
  //   table.appendChild(tr6);

  //   let bodyArray5 = ['lima'];
  //   for(let i = 0; i < bodyArray5.length; i++) {
  //     const tdBody = document.createElement('td');
  //     tr6.appendChild(tdBody);
  //     tdBody.textContent = bodyArray5[i];
  //   }

  //   const tr7 = document.createElement('tr');
  //   table.appendChild(tr7);

//   let bodyArray6 = ['lima'];
//   for(let i = 0; i < bodyArray6.length; i++) {
//     const tdBody = document.createElement('td');
//     tr7.appendChild(tdBody);
//     tdBody.textContent = bodyArray6[i];
//   }
}

tableRender();
