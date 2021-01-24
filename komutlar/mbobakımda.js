const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()
.setAuthor(`FASE`, client.user.avatarURL())
.setColor('BLACK')
.setDescription(`**:point_down:|--:diamond_shape_with_a_dot_inside: **FEAR RolePlay Bakımdadır**:diamond_shape_with_a_dot_inside:--|:point_down_tone2:\n :pray: **Sunucumuz şuanda bakıma alınmış verdi-\nğimiz rahatsızlık yüzünden özür dileriz :pray:\n -----------------------------------------------------\n :pencil: Aktif Olunca Burdan Haberdar Olabilirsiniz  \n @everyone`)  
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
	name : 'bakımda',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
//DÜZENLENECEK