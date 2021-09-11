import { PermissionResolvable, Message, Role, CategoryChannel, TextChannel, VoiceChannel } from "discord.js";
import { prefix } from "../config.json";
import { command } from "../interfaces/command";
import { argumentos } from "../functions/funciones";
// ----------------------------- Crear curso -----------------------------
let nombre = ['crearcurso','newcourse'];
export let crearCurso: command = {
    name: nombre,
    description: 'Este comando sirve para crear un nuevo curso',
    use: `${prefix}[${nombre}]`,
    permission: ["ADMINISTRATOR"],
    interaction: true,
    action: async (message: Message): Promise<void> => {
        try {
            const args: Array<string> = argumentos(message);
            let command: string = args.shift()?.toLowerCase() || '';
            let prefijo: string = message.content.slice(0,prefix.length);
            let msg: string='';
            let courseName: string = args.join(' ') || '';
            
            if(
                prefijo === prefix &&
                crearCurso.name.includes(command) &&
                message.guild &&
                message.member &&
                message.member.hasPermission(crearCurso.permission) &&
                crearCurso.interaction
            ){
                let channelRolesPermissions: PermissionResolvable = ['VIEW_CHANNEL','SEND_MESSAGES','CONNECT','SPEAK'];
                
                let everyoneRoleId: string = message.guild.roles.everyone.id;
                
                let courseRole: Role = await message.guild.roles.create({
                    data: {
                        name: courseName,
                    },
                    reason: `Rol del curso ${courseName}`
                });
                
                let newCategory: CategoryChannel = await message.guild.channels
                    .create(courseName, {
                        type: 'category',
                        reason: 'Nueva categoria para curso',
                        permissionOverwrites: [
                            {
                                id: courseRole.id,
                                allow: channelRolesPermissions
                            },
                            {
                                id: everyoneRoleId,
                                deny: channelRolesPermissions
                            }
                        ]
                    });

                const CATEGORY_ID: string = newCategory.id;

                let newChat: TextChannel = await message.guild.channels
                    .create(courseName, {
                        type: 'text',
                        parent: CATEGORY_ID,
                        topic: `Canal para el curso ${courseName}`,
                        reason: 'Nuevo canal para estudio',
                    });

                let newCmd: TextChannel = await message.guild.channels
                    .create('comandos', {
                        type: 'text',
                        reason: 'Nuevo canal para comandos',
                        parent: CATEGORY_ID
                    });

                let newVoice: VoiceChannel = await message.guild.channels
                    .create(`Voz ${courseName}`, {
                        type: 'voice',
                        reason: 'Nuevo canal para hablar',
                        parent: CATEGORY_ID
                    });
                msg=`Canales para el curso «${courseName}» creados con exito`;
                message.channel.send(msg);
            }
        } catch (error) {
            console.log(error);
        }
    }
}