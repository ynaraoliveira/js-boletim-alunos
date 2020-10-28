function createTd (dataTableTd, type = 'body') {
  const td = document.createElement('td')
  td.classList.add(`td-${type}`)
  td.textContent = dataTableTd;
  return td;
}

function createTr(dataTableTr, type = 'body') {
  const tr = document.createElement('tr');

  for (const dataTd in dataTableTr) {
    const td = createTd(dataTableTr[dataTd], type)
    tr.appendChild(td)
  }
  
  return tr
}

function mountTable(dataTable) {
  const tableAlunos = document.querySelector('.table-alunos');
  const keys = Object.keys(dataTable[0])
  const tHead = createTr(keys, 'head')
  tableAlunos.appendChild(tHead)

  dataTable.map(dataTableBody => {
    const values = Object.values(dataTableBody);
    const tBody = createTr(values);

    tableAlunos.appendChild(tBody)
  })
}