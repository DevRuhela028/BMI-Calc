var flag = false;
function handleClick(){
    const ele = document.getElementById('hi')
    const ele2 = document.getElementById('we')
    console.log(typeof(ele.value))
    if(ele.value === "" || ele2.value === ""){
        alert('invalid input')
        return;
    }
    if(flag == true) return;
    var x = ele.value;
    var y = ele2.value;
    var z = y / (x*x)
    z = z.toFixed(2)
    const ele3 = document.createElement('h2');
    ele3.innerText = "Your BMI is :"+z;
    const ele4 = document.getElementById('res')
    ele4.appendChild(ele3)
    const ele5 = document.createElement('h2');
    if(z < 18.5) ele5.innerText = "underweight"
    else if(z < 24.9) ele5.innerText = "Normal"
    else if(z < 29.9) ele5.innerText = "Overweight"
    else if(z < 34.9) ele5.innerText = "Obesity- I"
    else if(z < 39.9) ele5.innerText = "Obesity - II"
    else ele5.innerText = "Extreme Obesity"
    const ele6 = document.getElementById('category')
    ele6.appendChild(ele5)
    flag = true;
}
function reset(){
    const e1 = document.getElementById('hi')
    const e2 = document.getElementById('we')
    e1.value = "none"
    e2.value = "none"
    location.reload()
}