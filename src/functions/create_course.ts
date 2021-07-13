import { Client, Message, Role, Channel, MessageMentions, RoleData, RoleManager, Guild, GuildMember, User, MembershipStates, UserFlags, Collection, RoleResolvable, PermissionOverwrites, CategoryChannel, GuildChannelManager, GuildCreateChannelOptions, Snowflake, GuildChannel, TextChannel, VoiceChannel } from "discord.js";
import { NOTFOUND, resolveSoa } from "dns";
import { type } from "os";
import { types } from "util";
import { prefix } from "../config.json";
import { command } from "./command";
import { argumentos } from "./funciones";
// ----------------------------- Crear curso -----------------------------
let crearCurso: command = {
    name:  'crearcurso',
    description: 'Este comando sirve para crear un nuevo curso',
    action: async (message: Message) => {
        try {
            const args = argumentos(message);
            let command: Array<string> | string | undefined = args.shift()?.toLowerCase();
            let msg: string='';
            // If general
            if(
                message.member?.hasPermission(['ADMINISTRATOR']) &&
                args.length === 1 &&
                message.guild !== null &&
                command === crearCurso.name
            ){
                let nombre_curso = args[0].toString();
                let new_category: CategoryChannel = await message.guild.channels
                    .create(nombre_curso, {
                        type: 'category',
                        reason: 'Nueva categoria para curso'
                    });

                const CATEGORY_ID: string = new_category.id;

                let new_chat: TextChannel = await message.guild.channels
                    .create(nombre_curso, {
                        type: 'text',
                        parent: CATEGORY_ID,
                        // permissionOverwrites: [
                        //     {
                        //         id: args[1],
                        //         allow: ['SEND_MESSAGES']
                        //     }
                        // ],
                        topic: `Canal para el curso ${nombre_curso}`,
                        reason: 'Nuevo canal para estudio'
                    });

                let new_cmd: TextChannel = await message.guild.channels
                    .create('comandos', {
                        type: 'text',
                        reason: 'Nuevo canal para comandos',
                        parent: CATEGORY_ID
                    });

                let new_voice: VoiceChannel = await message.guild.channels
                    .create(`Voz ${nombre_curso}`, {
                        type: 'voice',
                        reason: 'Nuevo canal para hablar',
                        parent: CATEGORY_ID
                    });
                msg=`Canales para el curso ${nombre_curso} creados con exito`;
            }
            // if(!message.member?.hasPermission(['ADMINISTRATOR'])) {
            //     msg='No tienes permiso para hacer esto';
            // }
            // else if (args.length !== 1){
            //     msg='La cantidad de argumentos es incorrecta.';
            // }else{
            //     msg='Parece que hubo un error';
            // }
            message.channel.send(msg);
        } catch (error) {
            console.log(error);
        }
    }
}
export {
    crearCurso
}