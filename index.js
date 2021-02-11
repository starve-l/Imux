const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
const express = require("express");
const config = require("./config/config.json");
const client = new Discord.Client();

console.log("[AHC] Logging in...")

client.on("ready", () => {
    console.log("[Imux] Successfully logged in as " + client.user.tag);
    client.user.setStatus('dnd');
    client.user.setActivity(`You`, {
    type: "WATCHING",
    });
    let presence = new Discord.ClientPresence(client, )
});

client.on("message", message => {


});