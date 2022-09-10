function compatibilityRating() {
    let yourName = document.getElementById("your-name").value;
    let theirName = document.getElementById("their-name").value;
    let compatability = (yourName.length + theirName.length + 2) * 10;
    document.getElementById("comptibilityPercentage").innerHTML = `${compatability}% compatible!`;
}
