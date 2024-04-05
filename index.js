import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userNumber",
    message: "please enter the amount of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter a valid number";
        }
        else if (input > 60) {
            return "seconds must be less than 60";
        }
        else {
            return true;
        }
    },
});
let input = res.userNumber;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("timer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const second = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
