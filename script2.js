// ฟังก์ชันแสดงข้อมูล
function displayData(data) {
    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = `
      <p>ID: ${data.id}</p>
      <p>Name: ${data.name}</p>
      <p>Capital: ${data.capital}</p>
      <p>Area: ${data.area}</p>
      <p>Population: ${data.population}</p>
    `;
  }
  
  // ดึงข้อมูล JSON จากไฟล์
  fetch('peopie.json')
    .then(response => response.json())
    .then(data => {
      // กำหนดการทำงานเมื่อกดปุ่ม
      document.getElementById("btn1").addEventListener("click", () => {
        displayData(data[0]);
      });
  
      document.getElementById("btn2").addEventListener("click", () => {
        displayData(data[1]);
      });
  
      document.getElementById("btn3").addEventListener("click", () => {
        displayData(data[2]);
      });
    });
  