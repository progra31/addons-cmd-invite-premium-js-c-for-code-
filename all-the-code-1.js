//-------------------------------------------------------------------
//launch cmd : node "C:\Users\freda\Desktop\programmation\java script et html\programmes\cmd-invite.js"
// ! commande pour le terminal !
//-------------------------------------------------------------------
// Program Start
// Language : JS

// very importent never remove the comments


//variable setup

let startoption = "none"
let mode = "basic"
let debug_to_enable = "off"
let invite_version = "1.45.164626781"



// --- RESET ET STYLES ---
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const UNDERLINE = "\x1b[4m";

// --- COULEURS DU TEXTE (Avant-plan) ---
const BLACK = "\x1b[30m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const MAGENTA = "\x1b[35m";
const CYAN = "\x1b[36m";
const WHITE = "\x1b[37m";
const BRIGHT_BLACK = "\x1b[90m";
const BRIGHT_RED = "\x1b[91m";
const BRIGHT_GREEN = "\x1b[92m";
const BRIGHT_YELLOW = "\x1b[93m";
const BRIGHT_BLUE = "\x1b[94m";
const BRIGHT_MAGENTA = "\x1b[95m";
const BRIGHT_CYAN = "\x1b[96m";
const BRIGHT_WHITE = "\x1b[97m";

// --- COULEURS DE FOND ---
const BG_BLACK = "\x1b[40m";
const BG_RED = "\x1b[41m";
const BG_GREEN = "\x1b[42m";
const BG_YELLOW = "\x1b[43m";
const BG_BLUE = "\x1b[44m";
const BG_MAGENTA = "\x1b[45m";
const BG_CYAN = "\x1b[46m";
const BG_WHITE = "\x1b[47m";
const BG_BRIGHT_BLACK = "\x1b[100m";
const BG_BRIGHT_RED = "\x1b[101m";
const BG_BRIGHT_GREEN = "\x1b[102m";
const BG_BRIGHT_YELLOW = "\x1b[103m";
const BG_BRIGHT_BLUE = "\x1b[104m";
const BG_BRIGHT_MAGENTA = "\x1b[105m";
const BG_BRIGHT_CYAN = "\x1b[106m";
const BG_BRIGHT_WHITE = "\x1b[107m";




// openBrowser(lien) = ouvrir dans navigateur

const { exec } = require('child_process');

function openBrowser(url) {
    let command;

    // Détermine la commande selon le système d'exploitation
    switch (process.platform) {
        case 'win32': // Windows
            command = `start "" "${url}"`;
            break;
        case 'darwin': // macOS
            command = `open "${url}"`;
            break;
        default: // Linux et autres
            command = `xdg-open "${url}"`;
            break;
    }

    exec(command, (error) => {
        if (error) {
            console.error("Impossible d'ouvrir le navigateur :", error);
        } else {
            console.log(`Navigateur ouvert sur : ${url}`);
        }
    });
}














console.log(CYAN + "Cmd Invite Pro (advenced edition)" + RESET);
console.log(CYAN + "Version : " + GREEN + "Stable" + RESET)

//ajout de question ci dessous :
const prompt = require('prompt-sync')();

console.log("Starting :");
console.log("Language set to english !");
console.log(GREEN + "Accesibility Boosted" + RESET)
console.log("-------------------------------------------------------");


// Boucle principale de l'invite de commande ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
while (true) {
  let command = prompt("> ");

  if (command === "help") {
    console.log("empty cmd = display information")
    console.log(CYAN + "Basic commands : help, clear, time, exit, debug" + RESET);
    console.log(YELLOW + "old : " + BRIGHT_YELLOW + "start.get, start.set" + RESET)
    console.warn(RED + "[ONLY IF DEBUG IS ENABLED] " + BRIGHT_RED + "DEBUG : debug.execute, debug.test" + RESET)



  } else if (command === "clear") {
    console.clear();
  } else if (command === "time") {
    console.log("Current time : " + new Date().toLocaleTimeString());
  } else if (command === "exit") {
    console.log(RED + "Program Closed" + RESET);
    let lastmsg = prompt("</>");
    console.log("Credits :")
    console.log()
    // progra31
    console.log("Owner : Progra31")
    // progra31
    console.log()
    console.log("year of creation : 2026")
    console.log()
    prompt("- And thanks to YOU for trying this cmd invite -")
    console.clear()
    break;

// start option

  } else if (command === "start.set") {
    console.clear()
    console.log("Staring mode edition launched")
    let newstaring = prompt(startoption + " -> ")
    console.warn("actual:" + startoption)
    console.warn("changing_to:" + newstaring)
    startoption = newstaring
    console.error("new_value:" + startoption)
    prompt("press enter to continue")
    console.clear()
  } else if (command === "start.get") {
    console.log(startoption)

// debug

  } else if (command === "debug") {
    console.log(CYAN + "debug main cmd" + RESET)
    console.log("actual mode : " + mode)
    console.log("on : to enable")
    console.log("off : to dislable")
    debug_to_enable = prompt()
    if(command === "debug" && debug_to_enable === "on") {
      console.log("enabled")
      mode = "debug"
    } else if(command === "debug" && debug_to_enable !== "on") {
      console.log("dislabled")
      mode = "basic"
    }

    console.clear

  } else if(mode === "debug" && command === "debug.execute") {
    console.clear()
    console.log("Welcome in manual code exectuer here you can only execute 1 line of code")
    console.log(RED + BOLD + "Security information : " + RESET + CYAN + "never use code you dont know here it's for your security" + RESET)
    debugmanualcode = prompt("-} ")
    console.log("your code is " + debugmanualcode)
    console.log("start of code exectution soon press enter to continue or close the window to cancel" + RESET)
    prompt()
    console.clear()
    eval(debugmanualcode)
    prompt(RED + "[" + CYAN + "END OF DEBUG" + RED + "]" + RESET)
    console.warn(RESET)
    console.clear()
  } else if(mode === "debug" && command === "debug.test") {
    console.log("launching color testing")
    console.log()

    // Texte simple coloré
    console.log(GREEN + "green" + RESET);
    console.log(YELLOW + "yellow" + RESET);
    console.log(RED + "red" + RESET);
    // Texte combiné avec du gras
    console.log(BOLD + BLUE + "Information :" + RESET + " working");
    // Texte sur fond coloré
    console.log(BG_RED + WHITE + BOLD + " DANGER " + RESET + " fake error");

    prompt("End of testing press enter to continue")
    console.clear()



} else if(command === "mod") {
   console.log(RESET + "-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("---------------------------------------------------------------------------------------------------------------")
    console.log("--------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("--------------------------------------------------------------" + BLUE + "-" + RESET + "---------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-----------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("--------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------")
    console.log("-------------------------------------------------------------------------------------------------------------------------------------" + RESET)
  
  prompt("Press enter to launch")

  console.clear()
    console.log("Information : (modded)");
    console.log()
    console.log("number signification :")
    console.log("0 : basic")
    console.log("1 : variable manager")
    console.log("2 : open in browser")
    console.log()
    console.log();
    console.log("list of modded cmd (just enter the number) :");
    console.log(MAGENTA + "0" + YELLOW + "or" + MAGENTA + "0.1 : " + BRIGHT_MAGENTA + "leave mod cmd invite" + RESET);
    console.log(MAGENTA + "0.2 : " + BRIGHT_MAGENTA + "clear screen" + RESET);
    console.log()
    console.log(GREEN + "1 : " + BRIGHT_GREEN + "get all variable value" + RESET)
    console.log()
    console.log(GREEN + "2 : " + BRIGHT_GREEN + "open a custom link " + BRIGHT_YELLOW + "(in browser) (need a browser instaled)" + RESET)
    console.log(GREEN + "2 : " + BRIGHT_GREEN + "open github " + BRIGHT_YELLOW + "(in browser) (need a browser instaled)" + RESET)
    console.log(GREEN + "2 : " + BRIGHT_GREEN + "open youtube " + BRIGHT_YELLOW + "(in browser) (need a browser instaled)" + RESET)
    console.log();

    let mod_action;
    while (mod_action !== "0") {
      mod_action = prompt(BRIGHT_MAGENTA + "-" + BRIGHT_GREEN + "number" + BRIGHT_MAGENTA + "-" + BRIGHT_YELLOW + ">" + RESET);

      if (mod_action === "0.1" || mod_action === "0") {
        console.log("Exiting mod menu...");
        prompt("press enter to launch cmd invite")
        console.clear()
      } else if(mod_action === "0.2") {
        console.clear()
      } else if(mod_action === "1") {
        console.log("not every variable can be get here")
        console.log("startoption : " + startoption)
        console.log("mode : " + mode)
        console.log("command " + command)
        console.log("mod_action : " + mod_action)
        console.log()
        console.log("variables without name :")
        console.log(BG_BRIGHT_GREEN + BLACK + Math.random() + RESET)
        console.log()
      } else if(mod_action === "2") {
        console.log("enter your link to open in browser")
        let mod_browser_link = prompt("-=}")
        openBrowser(mod_browser_link)
      } else if(mod_action === "2.1") {
        openBrowser("https://github.com/")
      } else if(mod_action === "2.2") {
        openBrowser("https://youtube.com")
      } else {
        console.log(RED + "Error, try to instal the module again" + RESET);
        console.log(YELLOW + "aditional information from the module : " + BG_WHITE + BLACK + "None" + RESET)
      }
    }

    
  }
  else if (command === "") {
    console.clear()
    console.log("Information :")
    console.log("last update : 2026")
    console.log("version : " + invite_version)
    console.log("execution number : " + Math.random())
    prompt()
    console.clear()
  } else {
    console.log(RED + "Unknown command : " + YELLOW + command + RESET);
    console.log(YELLOW + "If you try to use an existing cmd try again " + RESET + RED + "|" + RESET + BLUE + BG_YELLOW + "(if it's a cmd from a modification try to instal the modification again)" + RESET)
  }
}
