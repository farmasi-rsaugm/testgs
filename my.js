function testGS () {

    const url = "https://script.google.com/macros/s/AKfycbzHI5UmWPc0Ym_MXUHJUcvCReaOkSPOveXNK4rjx5iFdTHrZKGUxNijDqnLFqPhue1P/exec";
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
    
            document.getElementById("app").textContent = d[0].status;
        
        })
}

document.getElementById("btn").addEventListener("click",testGS);