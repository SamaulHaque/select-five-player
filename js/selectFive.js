/*--------------------------------------------------------------
                    Fucntion for select 5 player start here
----------------------------------------------------------------*/
function getPlayerTitle(nameId){
    const getplayerName=document.getElementById(nameId);
    const playerName=getplayerName.innerText;
    return playerName;
}

function list(playerID){
    let list = document.querySelector("#select-five"),
    listLi = list.getElementsByTagName("li"),
    listLength = listLi.length;
    if(listLength==5){
      alert("You Can't Select More Than Five Players. \nYou Already Select Five Players");
      return ;
    } 
    const SelectPlayerName=getPlayerTitle(playerID)
    const listContainer=document.getElementById('select-five');
    const orderList=document.createElement('li');
    orderList.innerText=SelectPlayerName;
    listContainer.appendChild(orderList);
}

/*--------------------------------------------------------------
            Select 5 Player Button Event Handler start here
----------------------------------------------------------------*/

// messi button event handler
document.getElementById('messi-btn').addEventListener('click',function(){
  list('lionel-massi');
  document.getElementById("messi-btn").style.backgroundColor='gray';
  document.getElementById("messi-btn").disabled = true;
})

// ronaldo button event handler
document.getElementById('ronaldo-btn').addEventListener('click',function(){
  list('ronaldo');
  document.getElementById("ronaldo-btn").style.backgroundColor='gray';
  document.getElementById("ronaldo-btn").disabled = true;
})

// di maria button event handler
document.getElementById('di-maria-btn').addEventListener('click',function(){
  list('di-maria');
  document.getElementById("di-maria-btn").style.backgroundColor='gray';
  document.getElementById("di-maria-btn").disabled = true;
})

// dybala button event handler
document.getElementById('dybala-btn').addEventListener('click',function(){
  list('dybala');
  document.getElementById("dybala-btn").style.backgroundColor='gray';
  document.getElementById("dybala-btn").disabled = true;
})

// pique button event handler
document.getElementById('pique-btn').addEventListener('click',function(){
  list('pique');
  document.getElementById("pique-btn").style.backgroundColor='gray';;
  document.getElementById("pique-btn").disabled = true;
})

// salah button event handler
document.getElementById('salah-btn').addEventListener('click',function(){
  list('salah');
  document.getElementById("salah-btn").style.backgroundColor='gray';
  document.getElementById("salah-btn").disabled = true;
})
