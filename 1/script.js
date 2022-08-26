let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let city = document.querySelector('#city');
let addBtn = document.querySelector('#addBtn');
let tbody = document.querySelector('tbody');
let tableArr = [];


addBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(userName.value && email.value && phone.value && city.value){
        tableArr.push({
            userName:userName.value,
            email:email.value,
            phone:phone.value,
            city:city.value
        })
        console.log(tableArr[0].userName);

        for(let i = 0; i<tableArr.length;i++){
            let tr = document.createElement('tr');
            tr.innerHTML = `
                            <tr>
                                <td class ="col">${tableArr[0].userName}</td>
                                <td class ="col">${tableArr[0].email}</td>
                                <td class ="col">${tableArr[0].phone}</td>
                                <td class ="col">${tableArr[0].city}</td>
                            </tr>
            `;
            tbody.append(tr);
            tableArr.shift();

            //reset inputs
            userName.value = "";
            email.value = "";
            phone.value = "";
            city.value = "";
        }
    }else{
        alert('please enter all the fields');
        console.error('תמלא הכל יא חרא');
    }
})
