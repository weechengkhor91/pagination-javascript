const mockData = [
  {
    username: "Linda",
    position: "Manager"
  },
  {
    username: "Fiona",
    position: "Financer"
  },
  {
    username: "Michelle",
    position: "Administrator"
  },
  {
    username: "Wing",
    position: "Front End Supervisor"
  },
  {
    username: "Devin",
    position: "IOS Developer"
  },
  {
    username: "Linda",
    position: "Manager"
  },
  {
    username: "Fiona",
    position: "Financer"
  },
  {
    username: "Michelle",
    position: "Administrator"
  },
  {
    username: "Wing",
    position: "Front End Supervisor"
  },
  {
    username: "Devin",
    position: "IOS Developer"
  },
  {
    username: "Linda",
    position: "Manager"
  },
  {
    username: "Fiona",
    position: "Financer"
  },
  {
    username: "Michelle",
    position: "Administrator"
  },
  {
    username: "Wing",
    position: "Front End Supervisor"
  },
  {
    username: "Devin",
    position: "IOS Developer"
  }
];

function pagination(currentPage, lastPage) {
  let current = currentPage, // current = 1
    last = lastPage, // last = 20
    delta = 1, // you have to adjust here
    left = current - delta, // left = 1 - 2 = -1
    right = current + delta + 1, // right = 1 + 2 - 1 = 4
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }
  // range = [ 1, 2, 3, 20 ]

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        // you have to adjust here
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }
  // rangeWithDots = [1, 2, 3, '...', 20]

  return rangeWithDots;
}

function onInit(current) {
  let dataLength = mockData.length;
  let pageSize = 2;
  let totalPages = Math.round(dataLength / pageSize);
  let currentPage = current;

  let sliceStart = currentPage * pageSize - pageSize;
  let sliceEnd = currentPage * pageSize;
  let listPerPage = mockData.slice(sliceStart, sliceEnd);

  let tableHeader = `
      <table class="table tbl-profile">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
              </tr>
        </thead>
        <tbody>
      `;

  let tableBody = ``;

  for (let i = 0; i < listPerPage.length; i++) {
    tableBody += `
            <tr>    
              <td>${listPerPage[i].username}</td>
              <td>${listPerPage[i].position}</td>
            </tr>`;
  }

  let tableFooter = `
        </tbody>
      </table>
  `;

  let tablePagination = pagination(currentPage, totalPages);

  let footerPagination = `<ul class="pagination">`;

  for (let i = 0; i < tablePagination.length; i++) {
    const now = tablePagination[i];
    footerPagination += `
        <li class="page-number" onclick="onInit(${now})">${now}</li>
    `;
  }

  footerPagination += `</ul>`;

  let tableEl = tableHeader + tableBody + tableFooter + footerPagination;

  document.getElementsByClassName("profile-table")[0].innerHTML = tableEl;
}

onInit(1);

/*$.getJSON(method, function(data) {
  var pageSize = 2;
  var totalPages = Math.round(data.length / pageSize);
  var currentPage = 1;
  var sliceStart = currentPage * pageSize - pageSize;
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
        <li class="page-number" onclick="clickPagination(${i +
          currentPage})">${i + currentPage}</li>
    `;
  }
  pagination += `
  </ul>
  `;

  var table = tableHeader + tableBody + tableFooter + pagination;

  document.getElementsByClassName("profile-table")[0].innerHTML = table;
});

function clickPagination(num) {
  console.log("pagenumber", num);
  var active = document.getElementsByClassName("page-number");
  console.log("active", active);
}*/
