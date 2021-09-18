const url = "https://script.google.com/macros/s/AKfycbzHI5UmWPc0Ym_MXUHJUcvCReaOkSPOveXNK4rjx5iFdTHrZKGUxNijDqnLFqPhue1P/exec";

function testGS () {
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
    
            document.getElementById("app").textContent = d[0].status;

            // console.log(arr);
        
        })
}
document.getElementById("btn").addEventListener("click",testGS);

function addGS () {
    
    fetch(url, {
        method :"POST",
        mode : "no-cors",
        cache : "no-cache",
        headers : {
            "content-type" : "application/json"
        },
        redirect : "follow",
        body : JSON.stringify({name : "Hendra Kusuma", username : "hendra", user_rolde_id : "3"})
    });
}
document.getElementById("btn2").addEventListener("click",addGS);
