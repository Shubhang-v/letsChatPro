function addUser()
{
    user_name = document.getElementById("login_inp").value;
    document.getElementById("login_inp").innerHTML = "";
    localStorage.setItem("User Name", user_name);
    window.location = "kwitter_room.html";
}