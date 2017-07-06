import Mortgage from './mortgage2';
import {Polygon, MyPoly, Square, Rectangle, Triple, MyDate, ExtendedUint8Array, MyAudio, Stack} from './polygon';

document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let mortgage = new Mortgage(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);
    let html = "";
    mortgage.amortization.forEach((year, index) => html += `
        <tr>
            <td>${index + 1}</td>
            <td class="currency">${Math.round(year.principalY)}</td>
            <td class="stretch">
                <div class="flex">
                    <div class="bar principal"
                         style="flex:${year.principalY};-webkit-flex:${year.principalY}">
                    </div>
                    <div class="bar interest"
                         style="flex:${year.interestY};-webkit-flex:${year.interestY}">
                    </div>
                </div>
            </td>
            <td class="currency left">${Math.round(year.interestY)}</td>
            <td class="currency">${Math.round(year.balance)}</td>
        </tr>
    `);
    document.getElementById("amortization").innerHTML = html;

    
// Classes are used just like ES5 constructor functions:
let p = new Polygon(300, 400);
p.sayName();
console.log('The width of this polygon is ' + p.width);

// let inst = new MyPoly();
// inst.getPolyName();

let s = new Square(5);
s.sayName();
console.log('The area of this square is ' + s.area);
s = new Square(9);
console.log('The area of this square after set new data is ' + s.area);


// let r = new Rectangle(50, 60);
// r.sayName();

// console.log(Triple.triple());
// console.log(Triple.triple(6));
//console.log(BiggerTriple.triple(3));
// var tp = new Triple();
// console.log(tp.triple()); tp.triple is not a function

// var aDate = new MyDate();
// console.log(aDate.getTime());
// console.log(aDate.getFormattedDate());
// var eua = new ExtendedUint8Array();
// console.log(eua.byteLength);

// var player = new MyAudio();
// player.controls = true;
// player.lyrics = 'Never gonna give you up';
// document.querySelector('body').appendChild(player);
// console.log(player.lyrics);

// // Note: The V8 in Chrome 42 supports subclassing built-ins but Arrays.
// // Subclassing arrays supported in Chrome 43.

var stack = new Stack();
stack.push('world');
stack.push('hello');
console.log(stack.top());
console.log(stack.length);

});