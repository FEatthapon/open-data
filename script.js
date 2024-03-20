                                            //--- แบบตาราง ---//
// fetch('peopie.json')
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function(data) {
//         appendData(data)
//     })
//     .catch(function (err) {
//         console.log('error: ' + err)
//     })

                          //------- สามารถเขียนในอีกรูปแบบนึงได้รีกว่า arrow --------//
    // fetch('peopie.json')
    //     .then(response => response.json())
    //     .then(data => appendData(data))
    //     .catch(err => { console.log('error: ' + err)})

// function appendData(data) {
    
//                                         //------- 1 --------//
//         var mainContainer = document.getElementById("myData")
//         for (var i = 0; i < data.length; i++){
//             var div = document.createElement("div")
//             div.innerHTML = "ID: " + data[i].id + "<br>" + "จังหวัด: " + data[i].name + "<br>" + 'เมืองหลวง: ' + data[i].capital + "<br>" + 'ขนาดพื้นที่: ' + data[i].area + "<br>" + 'ประชากร: ' + data[i].population

//                                         //---- วิธีเขียนอีกแบบให้มันสั่นลง ----//
//             // div.innerHTML = `ID: ${data[i].id}  จังหวัด: ${data[i].name}  เมืองหลวง: ${data[i].capital} ขนาดพื้นที่:  ${data[i].area} ประชากร:  ${data[i].population} `
            
//             mainContainer.appendChild(div)  
//         }
// }
//                                         //------- 2 --------//
//         // const container = document.getElementById("myData");
//         // data.province.forEach(province => {
//         // const innerDiv = document.createElement("div");
//         // innerDiv.classList.add("inner");
//         // innerDiv.innerHTML = `
//         //     <p>ID: ${province.id}</p> 
//         //     <p>จังหวัด: ${province.name}</p>
//         //     <p>เมืองหลวง: ${province.capital}</p>
//         //     <p>ขนาดพื้นที่: ${province.area}</p>
//         //     <p>ประชากร: ${province.population}</p>
//         //     <hr>
//         //     `
 

//   container.appendChild(innerDiv);
// });
// }                                     