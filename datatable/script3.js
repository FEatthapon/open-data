document.addEventListener("DOMContentLoaded", function () {
  let originalData = []; // เก็บข้อมูลต้นฉบับไว้เพื่อใช้ในการกรอง

  fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      originalData = data; // เก็บข้อมูลต้นฉบับไว้ในตัวแปร originalData
      displayData(data);
    })
    .catch((error) => console.error("เกิดข้อผิดพลาดในการดึงข้อมูล:", error));

  function displayData(data) {
    const tbody = document.getElementById("dataDisplay");
    tbody.innerHTML = ""; // เคลียร์ข้อมูลที่อยู่ในตารางทุกครั้งที่แสดงข้อมูลใหม่

    data.forEach((item) => {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = item.Id;
      row.appendChild(idCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = item.ProvinceName;
      row.appendChild(nameCell);

      const areaCell = document.createElement("td");
      areaCell.textContent = item.Region;
      row.appendChild(areaCell);

      const populationCell = document.createElement("td");
      populationCell.textContent = item.Area;
      row.appendChild(populationCell);

      const linkCell = document.createElement("td");
      const linkButton = document.createElement("a");
      linkButton.textContent = "ดูข้อมูล";
      linkButton.href = item.url; // เปลี่ยน URL ตามต้องการ
      linkButton.classList.add("btn", "btn-outline-primary");
      linkButton.target = "_blank"; // เปิดหน้าเว็บในหน้าต่างใหม่
      linkCell.appendChild(linkButton);
      row.appendChild(linkCell);

      tbody.appendChild(row);
    });
  }

  document
    .getElementById("searchButton")
    .addEventListener("click", function () {
      const searchTerm = document
        .getElementById("searchInput")
        .value.toLowerCase();

      const filteredData = originalData.filter((item) => {
        return (
          item.ProvinceName.toLowerCase().includes(searchTerm) ||
          item.Region.toLowerCase().includes(searchTerm) ||
          item.Area.toString().includes(searchTerm)
        );
      });

      displayData(filteredData);
    });
});
