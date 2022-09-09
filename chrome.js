
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const saveTabBtn = document.getElementById('savetab-btn')
// let myleads = `["www.netnaija.com"]`
// myleads=JSON.parse(myleads)
// myleads.push('www.epicleads.com')
// myleads=JSON.stringify(myleads)
// console.log(typeof myleads)
let myleads=[]
let oldleads=[]
const InputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
// first step to storing
// localStorage.setItem('myleads','www.netnaija.com')
// second step
// console.log(localStorage.getItem("myleads"))
// third step
// localStorage.clear() 

saveTabBtn.addEventListener('click', function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem('myleads',JSON.stringify(myleads))
        render(myleads)
    
    })
   
})

const leadsfromlocalstorage=JSON.parse(localStorage.getItem('myleads'))

if (leadsfromlocalstorage){
    myleads=leadsfromlocalstorage
    render(myleads)
}

deleteBtn.addEventListener('dblclick', function(){
     
    localStorage.clear()
    myleads = []
    render(myleads)
})


inputBtn.addEventListener('click', function(){
    myleads.push(InputEl.value)
    console.log(myleads)
    InputEl.value=''

    localStorage.setItem('myleads', JSON.stringify(myleads))
     render(myleads)

     console.log(localStorage.getItem('myleads'))

})
function render(leads) {
    let listitems=''
    for(let i=0; i<leads.length; i++){
         listitems +=`
         <li>
            <a target='_blank' href='${leads[i]}'>${leads[i]}
            </a>
         </li>
         `
    }
    ulEl.innerHTML = listitems
}

// const welcomeEl= document.getElementById('welcome-el')

// function greetUser(greeting, name){
//     welcomeEl.textContent = `${greeting}, ${name}`
// }
// greetUser('hello','james')

// function add(num1,num2){
//     return num1 + num2
// }

// console.log(add(2,7))

// function getfirst(arr){
//     return arr[2]
// }
// let firstcard= getfirst([10,2,5])
// console.log(firstcard)