// fetch("https://reqres.in/api/users/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "COntent-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Rheza",
//     job: "Fullstack Developer",
//   }),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// fetch("https://reqres.in/api/users/x")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       return Promise.reject({
//         status: response.status,
//       });
//     }
//   })
//   .then((json) => console.log(json))
//   .catch((error) => {
//     if (error.status == 404) {
//       console.log("Sorry! Data Not Found");
//     }
//   });

// fetch("https://reqres.in/api/users/x")
//   .then((response) => response.json)
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

// LATIHAN FETCH DARI MOCKAPI

// fetch("https://63a3f9ae9704d18da09a463d.mockapi.io/users")
//   .then((response) => response.json())
//   .then((json) =>
//     json.map((i) => {
//       console.log(i.name);
//     })
//   );
