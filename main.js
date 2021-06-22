let employeeIdentity = prompt("What is your name?");
let weeklyDay = prompt("What day is it today?");
let hoursWorked = prompt("How many hours have you worked this week?");
let longWeekend = prompt("If Thursday or Friday, is the next day a holiday?")

let greeting;
let response;
if (weeklyDay === "Monday" || weeklyDay === "monday") {
    greeting = "Welcome, my kitty, to Garfield's hated weekday!"
} else if (weeklyDay === "Tuesday" || weeklyDay === "tuesday") {
    greeting = "It's TACO Tuesday today...just not here."
} else if (weeklyDay === "Wednesday" || weeklyDay === "wednesday") {
    greeting = "You actually made it to Hump-day. Hoorah..."
} else if (weeklyDay === "Thursday" || weeklyDay === "thursday") {
    greeting = "We're almost done with you for this week. We can't wait."
    if (longWeekend === "yes") {
        response = "A holiday? on Friday??? Ugh! Take your long weekend, then."
    } else {
        response = "No long weekend for you."
    }
}   else if (weeklyDay === "Friday" || weeklyDay === "friday") {
    greeting = "You fulfilled your weekly quota. You may leave...for now."
    if (longWeekend === "yes") {
        response = "Garfield is envious of your holiday."
    } else {
        response = "Garfield is laughing at you."
    }
} else {
    greeting = "Have a droll weekend, my kitty."
}

let message;
if (hoursWorked > 40) {
    message = "We appreciate your dedication, but we're not without mercy. Slow down."
} else if (hoursWorked < 40) {
    message = "You're slacking off. I'm watching you."
} else  {
    message = "At-par must be a thing with you."
}

document.write(`<h3>Good morning, ${employeeIdentity}. ${greeting}</h3>`);
document.write(`<h4>${employeeIdentity}, ${message}</h4>`);
document.write(`<h5>Oh, ${employeeIdentity}. ${response}</h5>`)