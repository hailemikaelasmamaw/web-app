

//let countEl = document.getElementById("count-el")
//let saveEl = document.getElementById("save-el")
//let count = 0

//console.log(countEl)
//console.logn(saveEl)

//function  increment() {
   //count += 1
   //countEl.innerText = count



//function save() {
  //let countStr = count + "-"

  //saveEl.textContent += countStr
  //countEl.innerText = 0}
  //let mypoints = 10
 //function add3points() {
   //add3points = mypoints + 3}
//function removepoints() {}
 //let num1 = 3
 //let num2 = 9
 //document.getElementById("num1-el").textContent = num1
 //document.getElementById("num2-el").textContent = num2
 //let sumE1 = document.getElementById("sum-el")
 //function add() {
 //  let result = num1 + num2
  // sumE1.textContent= sum: result}
//   let firstcard = 5
//   let secondcard = 4
//   let sum = firstcard + secondcard
//   let message = ""
//   let messageEl = document.getElementById("message-el")
//   let sumE1 = document.getElementById("sum-el")

// function startgame(){
//   if(sum > 21) {
//     message = "do you want to draw another card ?"
//   }
//   else if (sum === 21) {
//     message = "you win the game:" 
//   }
//   else{
//     message = "you are out of the game!"
//   }
//   messageEl.textContent = message
//   sumE1.textContent = "sum: " + sum
// }
// let myself = ["hailemikael", 22, true
// ]
// console.log(myself[0])

  
// for (let i = 10; i < 101; i = i + 10){
//   console.log(i)
// }
// let sentence = ["haile","mikael","asmamaw"]
// greetingEl = document.getElementById("greeting-el")

// for ( let i =0 ; i < sentence.length; i ++) {
//   greetingEl.textcontent += sentence
//   }



// function  rolldice() {
//   let randomnumber = math.floor(math.random() * 6) + 1
//   console.log(randomnumber)
// }

// let likedocumentries = true
// let likstartup = true

// if ("likedocumentries === true || likstartup === true")

//  function recommendmovie() {
//   console.log ("hey man,there is a new documntry check that out")
// }
// let person =  {
//   name  : "haile",  
//   age : 22,
//   country : "ethiopia"
// }
// function logdata() {
//   person.name + "is" + person.age + "years old live in " + person.country
// }
 //let largecountries = ["china","india","usa","indonesia"]

// let fruit = ["apple","orrange"]
// let appleshef = document.getElementById("apple-shelf")
// let orrangeshelf = document.getElementById("orrange-shelf")

// function sort() {
//   for (let i = o; i < fruit.length ; i ++)
//     if (fruit[i] === "apple") {
//       appleshef.textContent += orrange

//     }
//     else if ( fruit[i] === "orrange") {
//       orrangeshelf.textContent = 
      
//     }

// }

// let save = document.getElementById("save-input")

// save.addEventListener("click" , function() {
//   console.log("saving the input element")
// })
 let myleads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
 const inputEl = document.getElementById("input-el")
 const inputBtn = document.getElementById("input-btn")
 const container = document.getElementById("ulEl")

 inputBtn.addEventListener("click", function() {
   myleads.push(inputEl.value)
   inputEl.value = ""
   renderleads()

 })
function renderleads(){
  let listitems = ""
  for ( let i = 0; i < myleads.length; i++) {
     listitems +=
    <li>

      <a target='_blank' href ='${myleads[i]}'>
        ${myleads[i]}
      </a> 

    </li>
   console.log(renderleads)
  }
}