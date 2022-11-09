let html = null;
fetch("https://chainid.network/chains.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    html = renderTableRows(data);
    const tbody = document.querySelector("#prices-table tbody");
    tbody.insertAdjacentHTML("beforeend", html);
  });
function renderTableRows(dataFromNetwork) {
  let chains = [];
  dataFromNetwork.forEach(function (item) {
    chains.push(`<tr>
            <td>${item.name}</td>
            <td>${item.chain}</td>
            <td>${item.chainId}</td>
            <td>${item.networkId}</td>
        </tr>`);
      });
  return chains.join("");
}

