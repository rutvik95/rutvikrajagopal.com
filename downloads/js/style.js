var answer = prompt("Download page is a Work In Progress. Enter passcode: \-Rutvik Rajagopal");

if (answer === "rutvikrvr") {
    alert("ACCESS GRANTED");
    location.href = "index.html";
    break;


} else {
    alert("ACCESS DENIED");
    location.href = "404.html";

}

