const {Client, mergeDefault} = require("discord.js")
const config = require("./config.json")

const  client = new Client({
    intents:[
        "GuildMembers",
        "Guilds",
    ]
})

client.login(config.token)
client.on("ready", () => {
    console.log(`${client.user.username} is ready `)
})

client.on("voiceStateUpdate", async(oldState, newState) => {
    if(newState && newState.channel){
        if(config.member_id = newState.member.id){
            newState.channel.members.forEach((m) => {
                if(m.id != config.member_id){
                    setTimeout(() => {
                        m.voice.disconnect().catch(() => {}).then(() => {
                            console.log(`Disconnect ${m.user.username} success`)
                        })
                    },2000)
                }
            })
        }else{
            const chechk_data = await newState.channel.members.filter((m) => m.id == config.member_id)
            if(chechk_data){
                setTimeout(() => {
                    newState.member.voice.disconnect().catch(() =>{}).then(() => {
                        console.log(`Disconnect ${newState.member.user.username} success`)
                    })
                },2000)
            }
        }
    }
})