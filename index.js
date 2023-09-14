const Discord = require("discord.js");
const fetch = require("node-fetch");
const Database = require("@replit/database");
const keepAlive = require("./server")
const client = new Discord.Client();
keepAlive()
function getQuote() {
  return fetch("")
    .then(res => {
      return res.json();
    })
    .then(data => {
      return { quote: data[0][""], author: data[0][""] };
    });
}
client.on("", () => {
  console.log(``);
  client.user.setPresence({
        status: '',
        activity: {
            name: "",
            type: ""
        }
});
  sendQuote();
  setInterval(sendQuote, );
});

function sendQuote() {
  const channel = client.channels.cache.get(process.env.ID); 

  if (channel) {
    getQuote().then(quoteData => {
      const embed = new Discord.MessageEmbed()
        .setColor("#00FFFF")
        .setTitle("")
        .setDescription()
        .setFooter();

      channel.send(embed);
    });
  }
}

client.login(process.env.TOKEN);
