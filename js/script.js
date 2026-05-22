function greetings() {
    var dayTime = new Date().getHours();
    var hours = dayTime.getHours();
    var greeting;
    if (hours < 12) { 
        greeting = "Good Morning!";
    } else if (hourse < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    return greeting + "" + fname + "!";
}
