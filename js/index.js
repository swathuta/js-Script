const today = new Date();
const currentHour = today.getHours();
let message = "Hello";

//if it is morning, show "Good morning" message
if (currentHour <= 12){
    message = "Good morning, beautiful world!";
//if it is midday, show "Hello" message
} else if (currentHour > 12 && currentHour <= 17){
    message = "hello beautiful world!";
} else if(currentHour > 17){
    message = "Good ebening";
}
const handleClick = () => {
    alert(message);
}
//if it is evening, show "Good evening message
