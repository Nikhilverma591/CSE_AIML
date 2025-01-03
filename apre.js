/*function getData(){
    fetch("https://api.github.com/users/Nikhilverma591").then((response)=>{
        const data = response.json();
        console.log(data);
        return data;
    }).then((response) => {
        const data = document.getElementById("parent");
        data.innerHTML= response.login;
        //console.log(response[0])
        
    })
}*/
const getData = () => {
    fetch("https://api.github.com/users/Nikhilverma591")
      .then((res) => res.json())
      .then((data) => {
        display(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  
  
  const display = (data) => {
    const parentDiv = document.getElementById("parent");
    const avatarImg = document.getElementById("avatar");
    avatarImg.style.display = "none";
    parentDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p><strong>Username:</strong> ${data.login}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Public Repos:</strong> ${data.public_repos}</p>
      <img src="${data.avatar_url}" alt="Avatar" width="150" />
    `;
  };
