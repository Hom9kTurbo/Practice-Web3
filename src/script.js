

let html = null;
fetch("https://chainid.network/chains.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    html = renderTableRows(data);
    const tbody = document.querySelector("#prices-table tbody");
    tbody.insertAdjacentHTML("beforeend", html);
    getElement();
  });
function renderTableRows(dataFromNetwork) {
  let chains = [];
  let ID = 0;
  dataFromNetwork.forEach(function (item) {
    ID++;
    chains.push(`<tr>
            <td>${item.name}</td>
            <td>${item.chain}</td>
            <td>${item.chainId}</td>
            <td>${item.networkId}</td>
            <td><button id="${ID}" class="btn" value="${item.rpc[0]}">Last block for ${item.shortName}</button></td>
        </tr>`);
  });
  return chains.join("");
}
function getElement(){
  let buttons = document.querySelectorAll(".btn")
  buttons.forEach(function(button){
    button.addEventListener("click", function(){
      let web3 = new Web3(button.value)

      web3.eth.getBlockNumber().then(number => {
        if (number){
          button.innerHTML=number
        }
      }).catch(()=> button.innerHTML = "access denied")
    })
  })
}