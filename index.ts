import { Client, IntentsBitField } from "discord.js"

const client = new Client({
    intents: [
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.Guilds,
    ]
})

client.login(process.env.TOKEN)