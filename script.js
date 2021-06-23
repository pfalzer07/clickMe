'use strict';

let colors = [
  'red',
  'orangered',
  'orange',
  '#ffc926',
  'yellow',
  '#93ff26',
  '#93ff26',
  '#5cff26',
  '#26ff5c',
  '#26ff5c',
  '#26ff93',
  '#26ffc9',
  'cyan',
  '#26c9ff',
  '#2693ff',
  '#265cff',
  '#2626ff',
  '#5c26ff',
  '#9326ff',
  '#c926ff',
  '#ff26ff',
  '#ff26c9',
  '#ff2693',
  '#ff265c',
];

const elements = document.querySelectorAll('.element');
const btnElement = document.getElementById('button');

// //Predefined colors
const changeColors = function (colors) {
  let color = colors[0];
  colors.splice(0, 1);
  colors.push(color);
};

// With random colors
const setColors = function () {
  for (let i = 11; i > -1; i--) {
    elements[i].style.backgroundColor = `${colors[i]}`;
  }
  console.log(colors.length - 1);
};
setColors();

let myHoverInterval = null;

btnElement.addEventListener('mouseover', function () {
  if (myHoverInterval != null) {
    return;
  }
  btnElement.innerText = 'MAGIC';
  myHoverInterval = setInterval(function () {
    changeColors(colors);
    setColors();
  }, 100);
});

btnElement.addEventListener('mouseout', function () {
  btnElement.innerText = 'HOOVER ME';
  if (myHoverInterval != null) {
    clearInterval(myHoverInterval);
    myHoverInterval = null;
  }
});
