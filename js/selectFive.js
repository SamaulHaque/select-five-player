/*--------------------------------------------------------------
          Common Fucntion-1 for  select 5 player start here
----------------------------------------------------------------*/
function getPlayerTitle(nameId){
    const getplayerName=document.getElementById(nameId);
    const playerName=getplayerName.innerText;
    return playerName;
}

/*--------------------------------------------------------------
          Common Fucntion-2 for  select 5 player start here
----------------------------------------------------------------*/
function selectedFivelist(playerID){
    let list = document.querySelector("#select-five"),
    listLi = list.getElementsByTagName("li"),
    listLength = listLi.length;
    if(listLength==5){
      alert("You Can't Select More Than Five Players. \nYou Already Select Five Players.");
      return ;
    } 
    const SelectPlayerName=getPlayerTitle(playerID)
    const listContainer=document.getElementById('select-five');
    const orderList=document.createElement('li');
    orderList.innerText=SelectPlayerName;
    listContainer.appendChild(orderList);
}

/*--------------------------------------------------------------
  Common Fucntion-3 for Select Button Event Handler start here
----------------------------------------------------------------*/
function eventHandler(buttonID){
  document.getElementById(buttonID).addEventListener('click',function(){
    selectedFivelist(buttonID);
    document.getElementById(buttonID).style.backgroundColor='gray';
    document.getElementById(buttonID).disabled = true;
  })
}

/*--------------------------------------------------------------
            Event Handler Function Call
----------------------------------------------------------------*/
eventHandler('messi-btn');
eventHandler('ronaldo-btn');
eventHandler('di-maria-btn');
eventHandler('dybala-btn');
eventHandler('pique-btn');
eventHandler('salah-btn');
