const username = document.getElementById('username')
const addbtn = document.getElementById('adduser')
const btn = addbtn.innerText
const displayrecord = document.getElementById('records')
let userarray = []
const obj = localStorage.getItem('user')
if (obj!=null) {
    userarray= JSON.parse(obj)
}
let edit_id = null

display()
// console.log(userarray)
addbtn.onclick= ()=>{
   const name = username.value
   if (edit_id!=null) {
    userarray.splice(edit_id,1,{'name':name})
    edit_id = null
   } else {
    
       userarray.push({'name':name})
   }
//    document.write(name)
savedata(userarray)
username.value = ''

addbtn.innerText = btn
}

function savedata(userarray){
    const str=JSON.stringify(userarray)
     localStorage.setItem('user',str)
     display()
}

function display() {
    let state = ''
    userarray.forEach((item,i)=>{
        state+=`
        <tr>
        <th>${i + 1}</th>
        <td>${item.name}</td>
        <td>
        <i class="fa-solid fa-pen-to-square" onclick='EditInfo(${i})' style="margin-right:10px"></i>
        <i class="fa-solid fa-trash-can" onclick='DeleteInfo(${i})'></i>
        </td>
       </tr>
        `
    })
        displayrecord.innerHTML = state
}
function EditInfo(id) {
   edit_id = id
   username.value = userarray[id].name
   addbtn.innerText = 'save change'
}
function DeleteInfo(id) {
    userarray.splice(id,1)
    savedata(userarray)
    display()
}