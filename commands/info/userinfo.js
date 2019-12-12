const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require('moment');
const { getMember, formatDate } = require("../../functions.js");

module.exports = {
    name: "userinfo",
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';
      
          let user;

    if (message.mentions.users.first()) {
         user = message.mentions.users.first();
    } else {
         user = message.author;
     }

        // User variables
        const created = formatDate(member.user.createdAt);
 //.setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
        const embed = new RichEmbed()
        .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
        .setThumbnail(user.avatarURL)
        .setTitle(`${user.username}#${user.discriminator}`)
        .addField('ID:', `${user.id}`, true)
        .addField('Nickname:', `${member.nickname !== null ? `${member.nickname}` : 'None'}`, false)
        .addField('Account Created:', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY')}`, true)
        .addField('Joined server:', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY')}`, true)
        .addField('Roles:', member.roles.map(roles => `${roles.name}`).join(', '), false)
        .setTimestamp()
        .setFooter('Made by Drivet Development');
      

        message.channel.send(embed);
    }
}