// Assign to variables
let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let city = document.querySelector('#city');
let addBtn = document.querySelector('#addBtn');
let tbody = document.querySelector('tbody');
let clearBtn = document.querySelector('clearBtn');
let printDetailsContainer = document.querySelector('.printDetailsContainer');
let tableArr = [];
let superArrObject = [];
// add 
addBtn.addEventListener('click', function(e){
    e.preventDefault();
    // if the value of the inputs is fullfilled 
    if(userName.value && email.value && phone.value && city.value){
        tableArr.push({
            userName:userName.value,
            email:email.value,
            phone:phone.value,
            city:city.value
        })
        console.log(tableArr[0].userName);
        
        for(let i = 0; i<tableArr.length;i++){
            //create elements 
            let tr = document.createElement('tr');
            let tdName = document.createElement('td');
            let tdEmail = document.createElement('td');
            let tdPhone = document.createElement('td');
            let tdCity = document.createElement('td');
            let tdContainer = document.createElement('td');
            let printDetailsBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            // taking details from the inputs
            tdName.innerText = tableArr[i].userName;
            tdEmail.innerText = tableArr[i].email;
            tdPhone.innerText = tableArr[i].phone;
            tdCity.innerText = tableArr[i].city;
            printDetailsBtn.innerText = "print";
            deleteBtn.innerText = "delete";
            
            // Adding class 
            tdName.classList.add('col');
            tdEmail.classList.add('col');
            tdPhone.classList.add('col');
            tdCity.classList.add('col');

            // print button
            printDetailsBtn.classList.add('btn');
            printDetailsBtn.classList.add('btn-warning')
            printDetailsBtn.classList.add('print')
            
            // delete Btn
            deleteBtn.classList.add('btn');
            deleteBtn.classList.add('btn-danger')
            deleteBtn.classList.add('deleteBtn')
            
            // styling 
            tdContainer.classList.add('col');
            printDetailsBtn.style.width ="40%"
            deleteBtn.style.width ="50%"
            deleteBtn.style.margin ="6px"

            //append to tr
            tr.appendChild(tdName);
            tr.appendChild(tdEmail);
            tr.appendChild(tdPhone);
            tr.appendChild(tdCity);
            tr.appendChild(tdContainer)
            tdContainer.appendChild(printDetailsBtn)
            tdContainer.appendChild(deleteBtn)

            // append tr to tbody 
            tbody.appendChild(tr);

            //obj for pushing the variables to the array
            obj = {
                name:tdName.textContent,
                email:tdEmail.textContent,
                phone:tdPhone.textContent,
                city:city.value
            };
            // print eventListener
            printDetailsBtn.addEventListener('click',(e)=>{
                let card = document.createElement('div');

                let cardName = e.target.parentNode.parentElement.cells[0].textContent;
                let cardEmail = e.target.parentNode.parentElement.cells[1].textContent;
                let cardPhone = e.target.parentNode.parentElement.cells[2].textContent;
                let cardCity = e.target.parentNode.parentElement.cells[3].textContent;

                card.innerHTML = `
                <div class="container text-center">
                    <div class="card"  style="width: 15rem;">
                        <div class="card-body bg-warning text-dark">
                            <h5 class="card-title">${cardName}</h5>
                            <h6 class="card-subtitle mb-2">${cardEmail}</h6>
                            <p class="card-text ">${cardPhone}</p>
                            <p class="card-text ">${cardCity}</p>
                        </div>
                    </div>
                </div>
                `;
                printDetailsContainer.appendChild(card)
            });

            // remove
            deleteBtn.addEventListener('click',(e)=>{
                e.target.parentElement.parentElement.remove();
            });

            // push obj to superArrObject 
            superArrObject.push(obj);

            //tableArr equal 0 for reset the table  
            tableArr.length = 0;

            // reset inputs
            userName.value = "";
            email.value = "";
            phone.value = "";
        }
    }else{
        alert('please enter all the fields');
        console.error('תמלא הכל יא חרא');
    }
})

//clear all 
clearBtn.addEventListener('click',(e)=>{
    e.target.parentElement.parentElement.parentElement.remove();
});