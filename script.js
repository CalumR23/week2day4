

var clickBtn = document.getElementById("clickButton")
var numClick = document.getElementById("clickNum")
var clicks = 0


clickBtn.addEventListener("click", function()
    {
        clicks++
        console.log(clicks)
        numClick.innerHTML = clicks
    }
)