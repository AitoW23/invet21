module.exports = { 
    name: "report",
    description: "reports a user of the guild",
    usage: "!report <user> <reason>",
    accessableby: "Members",
run: async (client, message, args) => {

    let target = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!target) return message.channel.send("Please provide a valid user! Note: you must have channel called reports to get all reports from members!")

    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send(`Please provide a reason for reporting **${target.user.tag}**!`)

    let sChannel = message.guild.channels.find(x => x.name === "reports")

    message.channel.send("Your report has been filled to the staff team. Thank you!").then(m => m.delete(15000))
    sChannel.send(`**${message.author.tag}** has reported **${target.user.tag}** for **${reason}**.`)
    }

}