var origin1 = window.location.origin;
var method = "js/data.json";



$.getJSON(method, function (data) {
  var pageSize = 2;
  var totalPages = Math.round(data.length / pageSize);
  var currentPage = 1;
  var sliceStart = (currentPage * pageSize) - pageSize;
  var sliceEnd = currentPage * pageSize;

  var listPerPage = data.slice(sliceStart, sliceEnd);
  console.log(listPerPage);

  var tableHeader = `
  <table class="table tbl-profile">
  <thead>
    <tr><th>Name</th><th>Position</th></tr>
  </thead>
  <tbody>
  `;
  var tableBody = `

  `;
  for (var i = 0; i < listPerPage.length; i++) {
    tableBody += `<tr><td>${listPerPage[i].username}</td><td>${listPerPage[i].position}</td></tr>`;
  }


  var tableFooter = `
      </tbody>
      </table>
  `;
  var pagination = `
  <ul class="pagination">
  `;
  for (var i = 0; i < totalPages; i++) {
    pagination += `
        <li class="page-number" onclick="clickPagination(${i + currentPage})">${i + currentPage}</li>
    `;
  }
  pagination += `
  </ul>
  `;



  var table = tableHeader + tableBody + tableFooter + pagination;

  document.getElementsByClassName("profile-table")[0].innerHTML = table


})


function clickPagination(num) {
  console.log('pagenumber', num)
  var active = document.getElementsByClassName('page-number');
  console.log('active',active)

}



