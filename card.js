import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import clear from "clear";
import open from "open";

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        // Use chalk to style headers
        name: `Toss an ${chalk.bold("email")}?`,
        value: () => {
          open("mailto:kasra_tabrizi@hotmail.com");
          console.log(
            "\nLooking forward to hearing your message and replying to you!🖐\n"
          );
        },
      },
      {
        name: "Exit",
        value: () => {
          console.log("Good bye, have a nice day!\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.hex("#EEB58B")("                     Kasra Tabrizi"),
  handle: chalk.white("@harshhhdev"),
  fact: chalk.hex("#a6c90d").bold(
    `HTML5, CSS3, JS, REACT, Figma, SASS, GIT, 
                      Bootstrap, NodeJS, Material UI`
  ),
  github: chalk.hex("#19c54d")("https://github.com/kasratabrizi"),
  website: chalk.hex("#e6e6e6")("https://kasratabrizi.com"),
  linkedin: chalk.hex("#6a61f1")("https://www.linkedin.com/in/kasratabrizi/"),
  npx: chalk.hex("#A1AB00")("npx kasratabrizi"),

  labelFact: chalk.hex("#FF6262").bold("          My Skills:"),
  labelGitHub: chalk.hex("#59FFC8").bold("         GitHub:"),
  labelWebsite: chalk.hex("#59FFC8").bold("        Website:"),
  labelLinkedin: chalk.hex("#59FFC8").bold("        Linkedin:"),
  labelCard: chalk.hex("#FFF976").bold("                  Card:"),
};

const me = boxen(
  [
    `${data.profileImage}`,
    `${data.name}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelWebsite}  ${data.website}`,
    `${data.labelLinkedin}  ${data.linkedin}`,
    ``,
    `${data.labelFact}  ${data.fact}`,
    ``,
    `${chalk.bold("Hi there! I'm Kasra.👋")}`,
    `${chalk.bold("I'm a frontend developer / designer based in Spain🌞")}`,
    `${chalk.bold("Passionate about coding, design and coffee.")}`,
    `${chalk.bold("Toss me an email if you want to collab!😉")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "double",
    borderColor: "#EEB58B",
  }
);

// Show the boxen
console.log(me);

prompt(questions).then((answer) => answer.action());
