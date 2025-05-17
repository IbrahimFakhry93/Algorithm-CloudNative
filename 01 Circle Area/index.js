//! 01 – Circle Area – Algorithm – Model – Code

//* inputs => processes => output

//* main concept of computer function that it is a central processing unit

//* algorithm interacts with data inputs

//* inputs can be numbers, texts, files, videos, images
//* inputs data can be stream from a network, read information of desk, information of a system

//& Modelling of an algorithm

//* modelling is a mediator between the code and the algorithm

//* UML: unified model language

//* uml contains diagrams to describe different parts of the software

//* arrow in flow chart represents the data flow

//* flow chart is a low level design which is last layout design which will be converted to a converted
//* low level design is the delivery by software designer or principal software engineers who can hand over

//^ look up the model image
//* we used https://app.diagrams.net/

//& Algorithm code:

function circleArea(r) {
  const area = Math.PI * r ** 2;
  return area;
}

// console.log(circleArea(10)); //* 314.1592653589793

//*=============================================================

//& task:

//* calculate parallelogram area

//? Mathematical formula: (Algorithm)

//* A = b * h

//* b: base length, height

//? Modelling:

//^ look up : parallelogram.png

//? Code:

function parallelogramArea(b, h) {
  const area = b * h;
  return area;
}

console.log(parallelogramArea(10, 20)); //* 200

//*=============================================================

//& task:

//* also: trapezoid area

//? Modelling:

//^ look up : parallelogram.png

//? Code:

function trapezoidArea(a, b, h) {
  const area = ((a + b) / 2) * h;
  return area;
}

console.log(trapezoidArea(10, 25, 16)); //* 280
