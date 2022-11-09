function renderTableRows(rows) {
    let chains = [];
    console.log(rows)
    rows.forEach(function (item) {
      chains.push(`<tr>
        <td>${item.name}</td>
        <td>${item.chain}</td>
        <td>${item.chainId}</td>
        <td>${item.networkId}</td>
    </tr>`);
    });
  return chains.join('');
  }