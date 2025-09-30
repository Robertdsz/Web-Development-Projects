
import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from "fs";

inquirer
    .prompt([{
        message: "What's your link?",
        name: "link"
    }])
    .then((answers) => {
        const link = answers.link;
        var qr_png = qr.image(link);
        qr_png.pipe(fs.createWriteStream("link.png"));

        fs.writeFile("link.txt", link, (err) => {
            if (err) throw err;
            console.log("The file has been saved");
        })
    })
    .catch((error) => {
        if(error.isTtyError){

        } else {

        }
    });