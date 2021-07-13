import { Client, Message, Role, Channel, MessageMentions, RoleData, RoleManager, Guild, GuildMember, User, MembershipStates, UserFlags, Collection, RoleResolvable, PermissionOverwrites, CategoryChannel, GuildChannelManager, GuildCreateChannelOptions, GuildChannel, TextChannel } from "discord.js";
import { NOTFOUND, resolveSoa } from "dns";
import { type } from "os";
import { types } from "util";
import { prefix } from "../config.json";
import { bot } from "../bot";
import { argumentos } from "./funciones";
// ----------------------------- Lista de cursos -----------------------------

async function listing(message: Message) {
    try {
        let args = argumentos(message);
        let command: Array<string> | string | undefined = args.shift()?.toLowerCase();
        if (
            message.member?.hasPermission(['SEND_MESSAGES']) &&
            message.guild !== null
        ) {
            let listedChannels: Array<String>=[];
            let channel_list: Collection<string, GuildChannel> | Array<string> = message.guild.channels.cache;
            
            channel_list.forEach((channel: GuildChannel) => { 
                listedChannels.push(channel.name);
            });
            message.channel.send(`Tienes acceso a: ${listedChannels.join(',')}`);
        }
        if(message.member?.hasPermission(['SEND_MESSAGES'])!) {
            message.reply('No tienes permiso para hacer esto');
        }
    } catch (error) {
        console.log(error);
    }
}

export {
    listing as listar
}