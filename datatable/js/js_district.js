document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 11; // จำนวนรายการต่อหน้า
  let currentPage = 1; // หน้าปัจจุบัน
  let totalPages = 0; // จำนวนหน้าทั้งหมด
  let originalData = []; // เก็บข้อมูลต้นฉบับไว้เพื่อใช้ในการกรอง

  // เรียกใช้ฟังก์ชันเพื่อโหลดข้อมูลในหน้าแรก
  fetchDistrictData(currentPage);

  function fetchDistrictData(page) {
    const itemsPerPage = 11; // จำนวนรายการต่อหน้า
    const url = `http://localhost:3000/api/districts?page=${page}&itemsPerPage=${itemsPerPage}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        originalData = data.districts; // เก็บข้อมูลต้นฉบับไว้ในตัวแปร originalData
        totalPages = data.pages; // กำหนดจำนวนหน้าทั้งหมด
        displayData(originalData);
        createPagination(); // สร้าง pagination
      })
      .catch((error) => {
        console.error("Error fetching district data:", error);
        // Handle error gracefully, such as displaying an error message to the user
      });
  }

  function displayData(data) {
    const tbody = document.getElementById("dataDisplay");
    tbody.innerHTML = ""; // เคลียร์ข้อมูลที่อยู่ในตารางทุกครั้งที่แสดงข้อมูลใหม่

    data.forEach((item) => {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = item.id;
      row.appendChild(idCell);

      const codeCell = document.createElement("td");
      codeCell.textContent = item.code;
      row.appendChild(codeCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = item.districtsname;
      row.appendChild(nameCell);

      tbody.appendChild(row);
    });

    // Display total data count
    const totalData = document.getElementById("totalData");
    totalData.textContent = `พบข้อมูลทั้งหมด: ${originalData.length} รายการ`;

    // สร้าง pagination หลังแสดงข้อมูล
    createPagination();
  }

  function createPagination() {
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = "";

    // Previous button
    const previousButton = document.createElement("a");
    previousButton.classList.add("pagination-item", "previous");
    previousButton.textContent = "Previous";
    previousButton.addEventListener("click", function () {
      if (currentPage > 1) {
        currentPage--;
        fetchDistrictData(currentPage);
      }
    });
    paginationContainer.appendChild(previousButton);
    // Page number links
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.classList.add("pagination-item", "page-link");
      pageLink.textContent = i;
      pageLink.addEventListener("click", function (event) {
        event.preventDefault();
        currentPage = parseInt(event.target.textContent);
        fetchDistrictData(currentPage);
      });
      if (currentPage === i) {
        pageLink.classList.add("active");
      }
      paginationContainer.appendChild(pageLink);
    }

    // Next button
    const nextButton = document.createElement("a");
    nextButton.classList.add("pagination-item", "next");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", function () {
      if (currentPage < totalPages) {
        currentPage++;
        fetchDistrictData(currentPage);
      }
    });
    paginationContainer.appendChild(nextButton);
  }

  document
    .getElementById("searchButton")
    .addEventListener("click", function () {
      const searchTerm = document
        .getElementById("searchInput")
        .value.toLowerCase();
      const filteredData = originalData.filter((item) => {
        return item.districtsname.toLowerCase().includes(searchTerm);
      });
      if (filteredData.length > 0) {
        displayData(filteredData);
        totalPages = Math.ceil(filteredData.length / itemsPerPage); // คำนวณจำนวนหน้าใหม่
        createPagination(); // สร้าง pagination ใหม่
      } else {
        const tbody = document.getElementById("dataDisplay");
        tbody.innerHTML = "<tr><td colspan='3'>ไม่พบข้อมูลที่ค้นหา</td></tr>"; // เมื่อไม่พบข้อมูล ก็จะไม่ต้องสร้าง pagination ใหม่
        document.getElementById("pagination").innerHTML = "";
      }
      document.getElementById("searchInput").value = "";
    });
});
