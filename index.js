//model Haye Mored Niaz
var RPC = require("discord-rpc");
const startTimestamp = new Date();
var rpc = new RPC.Client({
  transport: "ipc"
});

//Faghat Baraye Zibae
require("colors");

//bara config.json
var config = require("../config.json")

let map = new Map();

//check kardan config.json
if (config.CLIENT_ID.length != 18) throw new SyntaxError("ERROR! Lotfan Yek Client Id Motabar Vared Konid!")
if (config.rpc_activity.buttons.length > 2) throw new SyntaxError("Bishtar Az 2 Buttons Nemitavan Dasht!")

if (config.rpc_activity.buttons.length == 2) {
  try {
    const stringlength = 100;
    console.log("\n")
    console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) +                            "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) +                            "┃".bold.brightGreen)
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
  } catch {
    /* */
  }
}

const fs = require('fs');
const configfilepath = './config.json';

try {
  const stringlength = 69;
  console.log("\n")
  console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
  console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) +                                                      "┃".bold.brightGreen)
  console.log(`     ┃ `.bold.brightGreen + `Negah Kardan Be Taghirat ${configfilepath}`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `Negah Kardan Be Taghirat ${configfilepath}`.length) + "┃".bold.brightGreen)
  console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) +                                                      "┃".bold.brightGreen)
  console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
} catch {
  /* */
}

fs.watch(configfilepath, (event, filename) => {
  if (filename) {
    if (!map.has("cooldown")) {
      map.set("cooldown")
      config = require("../config.json");
      set_rpc("re")
      setTimeout(() => {
        map.delete("cooldown")
      }, 200)
    }
  }
});

rpc.on("ready", () => {
  set_rpc()
  setTimeout(() => {
    set_rpc();
  }, 60e3)

  //log that it's ready
  try {
    const stringlength = 69;
    console.log("\n")
    console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + `  Discord Rich Presence Ready | Sakhte Shode Tavasot : Noise | Arya Jk#1597`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  Discord Rich Presence Ready | Sakhte Shode Tavasot : Arya Jk`.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + `  |-> ${`Displaying for: `.magenta}${rpc.user.username}#${rpc.user.discriminator}`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  |-> Displaying for: ${rpc.user.username}#${rpc.user.discriminator}`.length) + "┃".bold.brightGreen)
    console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
    console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
  } catch {
    /* */
  }
});


rpc.login({
  clientId: config.CLIENT_ID,
})


async function set_rpc(option) {
  if (!map.has("rpccooldown")) {
    map.set("rpccooldown")
    if (option == "re") {
      //Dar console Log Shavad
      try {
        const stringlength = 69;
        console.log("\n")
        console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
        console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
        console.log(`     ┃ `.bold.brightGreen + `  Discord Rich Presence Changed - Reapplied | Sakhte Shode Tavasot : Arya Jk`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  Discord Rich Presence Changed - Reapplied | Sakhte Shode Tavasot : Arya Jk`.length) + "┃".bold.brightGreen)
        console.log(`     ┃ `.bold.brightGreen + `  |-> ${`Displaying for: `.magenta}${rpc.user.username}#${rpc.user.discriminator}`.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length - `  |-> Displaying for: ${rpc.user.username}#${rpc.user.discriminator}`.length) + "┃".bold.brightGreen)
        console.log(`     ┃ `.bold.brightGreen + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightGreen)
        console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
      } catch {
        /* */
      }
    }
    //set kardan activity
    await rpc.setActivity(config.rpc_activity)
    //cooldown dar 15 sanie az peyn miravad (15 seconds)
    setTimeout(() => {
      map.delete("rpccooldown");
    }, 15000)
  }
  //agar dar cooldown bod
  else {
    //etelaat ra log kon
    try {
      const stringlength = 69;
      console.log("\n")
      console.log(`     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightRed)
      console.log(`     ┃ `.bold.brightRed + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightRed)
      console.log(`     ┃ `.bold.brightRed + `  Nemishe Rpc RA Taghir Dad , Shoma Dar Cooldown Hastid`.bold.brightRed + " ".repeat(-1 + stringlength - ` ┃ `.length - `  COULD NOT CHANGE THE RPC, cause YOU ARE ON COOLDOWN`.length) + "┃".bold.brightRed)
      console.log(`     ┃ `.bold.brightRed + " ".repeat(-1 + stringlength - ` ┃ `.length) + "┃".bold.brightRed)
      console.log(`     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightRed)
    } catch {
      /* */
    }
  }
}
