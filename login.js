var list_usernames = [];

function newUser() {
  var username = document.getElementById("username").value;
  console.log(username);

  if (localStorage.getItem("list_usernames") != null) {
    list_usernames = JSON.parse(localStorage.getItem("list_usernames"));
  }

  if (list_usernames.includes(username)) {
    alert("This username is taken!");
  }

  if (!list_usernames.includes(username)) {
    list_usernames.push(username);
    // window.location = "Joannsdumhtml.html";
  }

  localStorage.setItem("dict_usernames", JSON.stringify(list_usernames));
}
