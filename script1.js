function getDetails()
{
    const userName = document.getElementById("userId").value;
    if(!userName)
    {
        alert("Please enter your username");
        return;
    }

    fetch(`https://leetcodestats.cyclic.app/${userName}`)
    .then(response => {
        if(!response.ok)
        {
            console.error("Unable to fetch details");
            alert("Unable to fetch details");
        }
        return response.json();
    })
    .then(data => {
        display(data);
    })
    .catch(error => {
        console.error("There was an error",error);
        alert("There was an error");
    });
}



function display(data)
{
    const details = document.getElementById("details");
    details.innerHTML = `
    <p>Total solved <span>${((data.totalSolved * 100) / data.totalQuestions).toFixed(2)}&percnt;</span></p>
    <p>Easy solved <span>${((data.easySolved * 100) / data.totalEasy).toFixed(2)}&percnt;</span></p>
    <p>Medium solved <span>${((data.mediumSolved * 100) / data.totalMedium).toFixed(2)}&percnt;</span></p>
    <p>Hard solved <span>${((data.hardSolved * 100) / data.totalHard).toFixed(2)}&percnt;</span></p>
    <p>Overall ranking <span>${data.ranking}</span></p>
    <button id="jsbutton" onClick="clearData()">Reset</button>`;
}

function clearData()
{
    const details = document.getElementById("details");
    details.innerHTML = "";
    const inputElement = document.querySelector('input[type="text"]');
    inputElement.value = "";
}
