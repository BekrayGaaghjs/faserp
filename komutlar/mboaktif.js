const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()
.setAuthor(`FASE`, client.user.avatarURL())
.setColor('BLACK')
.setDescription(`**:diamond_shape_with_a_dot_inside: **FASE RolePlay** :diamond_shape_with_a_dot_inside:\n :mega:**Sunucumuz Aktif!!**:mega:\n :diamonds:**Server İP** |:pushpin: **connect 176.98.41.129  **:diamonds:\n :diamonds:**TeamSpeak **|:pushpin:  **185.171.1.102:9417:diamonds:\n @everyone`)  
  .setImage(`https://cdn.discordapp.com/attachments/692417186811084930/802532607824363540/standard_6.gif`)

            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'aktif',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
//DÜZENLENECEK