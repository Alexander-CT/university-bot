import { Client, Message, Role, Channel, MessageMentions, RoleData, RoleManager, Guild, GuildMember, User, MembershipStates, UserFlags, Collection, RoleResolvable, PermissionOverwrites, CategoryChannel, GuildChannelManager, GuildCreateChannelOptions, Snowflake, GuildChannel, TextChannel, VoiceChannel } from "discord.js";
import { NOTFOUND, resolveSoa } from "dns";
import { type } from "os";
import { types } from "util";
import { prefix } from "../config.json";
import { command } from "./command";
import { argumentos } from "./funciones";
let saludar: command = {
    name:  'hi',
    description: 'Este comando sirve para saludar',
    action: async (message: Message) => {
        try {
            let args = argumentos(message);
            let command: Array<string> | string | undefined = args.shift()?.toLowerCase();
            if (
                message.member?.hasPermission(['SEND_MESSAGES']) &&
                args.length === 0 &&
                message.guild !== null &&
                command == saludar.name
            ) {
                message.channel.send(`Hello world`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}
export {
    saludar
}