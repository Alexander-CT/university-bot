import { Client, Message, Role, Channel, MessageMentions, RoleData, RoleManager, Guild, GuildMember, User, MembershipStates, UserFlags, Collection, RoleResolvable, PermissionOverwrites, CategoryChannel, GuildChannelManager, GuildCreateChannelOptions, GuildChannel, TextChannel } from "discord.js";

import { prefix } from "../config.json";
import { bot } from "../public/variables";
import { argumentos } from "../functions/funciones";
import { command } from "../interfaces/command";
// ----------------------------- Lista de cursos -----------------------------
let nombre = ['listar', 'list'];
export let listar: command = {
    name: nombre,
    description: 'Este comando sirve para crear un nuevo curso',
    use: `${prefix}[${nombre}]`,
    permission: ["ADMINISTRATOR"],
    interaction: true,
    action: async (message: Message): Promise<void> => {
        try {
            let args: Array<string> = argumentos(message);
            let command: string = args.shift()?.toLowerCase() || '';
            let prefijo: string = message.content.slice(0,prefix.length);
            if (
                prefijo === prefix &&
                listar.name.includes(command) &&
                message.guild &&
                message.member &&
                message.member.hasPermission(listar.permission) &&
                listar.interaction
            ) {
                let listedChannels: Array<String>=[];
                let channel_list: Collection<string, GuildChannel> = message.guild.channels.cache;

                channel_list.forEach((channel: GuildChannel) => { 
                    listedChannels.push(channel.name);
                });
                message.channel.send(`Tienes acceso a: ${listedChannels.join(',')}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}