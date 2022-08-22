
/*--------------------------------------------------------------
                    Budget section start here
----------------------------------------------------------------*/
//function for calculte event handler
function amountFieldValue(fieldID){
    const getFieldValue=document.getElementById(fieldID);
    const getFieldValueString=getFieldValue.value;
    const fieldValue=parseFloat(getFieldValueString);
    getFieldValue.value=fieldValue;
    getFieldValue.value='';
    return fieldValue;
}

//calculat event handler
document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerAmount=amountFieldValue('per-player-amonut');

    if(isNaN(perPlayerAmount)){
        alert("Please Enter a Valid Number. \nInput Field Can't Be Empty.");
        return;
    }
    
    const playerExpenses=document.getElementById('player-expenses');
    let list = document.querySelector("#select-five"),
    listLi = list.getElementsByTagName("li"),
    listLength = listLi.length;
    const playerExpensesTotal=perPlayerAmount*listLength;
    playerExpenses.innerText=playerExpensesTotal;
})

//calculate total event handler
document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const managerAmount=amountFieldValue('manager-amonut');
    const coachAmount=amountFieldValue('coach-amount');
    if(isNaN(managerAmount && coachAmount)){
        alert("Please Enter a Valid Number. \nInput Field Can't Be Empty.");
        return;
    }

    const playerExpensesAmonut=document.getElementById('player-expenses');
    const playerExpensesAmonutString=playerExpensesAmonut.innerText;
    const expensesAmount=parseFloat(playerExpensesAmonutString);
    playerExpensesAmonut.innerText=expensesAmount;

    const totalExpenses=expensesAmount+managerAmount+coachAmount;

    const totalField=document.getElementById('total-amount');
    totalField.innerText=totalExpenses;
})
