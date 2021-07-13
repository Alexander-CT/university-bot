import { EILSEQ } from "constants";
import { Client, Message, Role, Channel, MessageMentions, RoleData, RoleManager, Guild, GuildMember, User, MembershipStates, UserFlags, Collection, RoleResolvable, PermissionOverwrites, CategoryChannel, GuildChannelManager, GuildCreateChannelOptions } from "discord.js";
import { NOTFOUND, resolveSoa } from "dns";
import { type } from "os";
import { types } from "util";
import { prefix } from "../config.json";
// import {} from "../functions/command";
async function reubicar(message: Message) {
    try {
        if (message.member?.hasPermission(['ADMINISTRATOR']) && message.guild!==null) {
            const args: User | Role | Array<string> | Message = message.content.slice(prefix.length).trim().split(' ');
            // var ver: RegExp = /[<@,>,&,!]/g;
            // var userT: any = message.guild?.roles.cache.find(user => user.id == args[1].replace(ver, ''));
            // var role_rm: any = message.guild?.roles.cache.find(role => role.id == args[2].replace(ver, ''));
            // var role_add: any = message.guild?.roles.cache.find(role => role.id == args[3].replace(ver, ''));
            // if (args[0] && args[1] && args[2] && args[3] && userT && role_rm && role_add) {
            var quitar: RegExp = /[<&!@#>]/g;
            // var charss: any = quitar;
            let listWords: Array<string> | RegExp | RegExpMatchArray | String = [];
            // args.forEach((word: any) => { 
            //     listWords.push(word);
            // });
            // for (let i = 1; i <= args.length; i++) {
            //     listWords.push(args[i].match(/<@/));
            // }
            let condicionRegExp: RegExp = /\d{18}/g;
            for (let i = 1; i <= args.length; i++) {
                let match: RegExpMatchArray | null = args[i].match(condicionRegExp);
                if(args!==null && match!==null && args[i]!== null){
                    listWords.push(match.toString());
                }
            }
            listWords.forEach((element: string) => {
                element.replace(quitar,'');
            });
            
            // var contar: RegExpMatchArray | String | Array<string> =
            //     args[1].match(/<@/g)?.length &&
            //     args[2].match(/<@/g)?.length &&
            //     args[3].match(/<@/g)?.length;
            // for (let i = 1; i <= args.length; i++) {
            //     listWords = args[i].replace(quitar,'');
            // }
            // var targetUser_id = args[1].replace(quitar, '').toLowerCase();
            // var role_rm_id = args[2].replace(quitar, '').toLowerCase();
            // var role_add_id = args[3].replace(quitar, '').toLowerCase();
            // var buscar = (
            //     message.guild?.roles.cache.find(role => role.id == role_rm_id) &&
            //     message.guild?.roles.cache.find(role => role.id != role_add_id)
            // );
            // if (args[0] && args[1] && args[2] && args[3] && listWords.length == 3) {
            if (listWords.length == 3) {
                // var quitar: RegExp = /[<@,>,&,!]/g;

                // var targetUser_id = args[1].replace(quitar, '').toLowerCase();
                // var role_rm_id = args[2].replace(quitar, '').toLowerCase();
                // var role_add_id = args[3].replace(quitar, '').toLowerCase();

                // var ver: any = quitar;
                // var contar = args.match(quitar).length;
                // if(contar < 3 || contar > 3){  }
                // for(var i=0; i<targetUser_id.length; i++){
                //    if (ver.indexOf(targetUser_id.charAt(i),0)!=-1){
                //       return 1;
                //    }
                // }
                // if(targetUser_id as  User ||
                //     role_rm_id as Role ||
                //     role_add_id as Role){
                //         message.channel.send('Syntax error');
                // }
                let targetUser_id: string = listWords[0];
                let role_rm_id: string = listWords[1];
                let role_add_id: string = listWords[2];
                
                let targetUser: GuildMember | undefined = message.guild.members.cache.find(user => user.id == targetUser_id);
                // targetUser?.guild.member.name;
                let rol_rm: Role | undefined = message.guild.roles.cache.find(role => role.id == role_rm_id);
                let rol_add: Role | undefined = message.guild.roles.cache.find(role => role.id == role_add_id);
                console.log(typeof targetUser_id, targetUser_id);
                console.log(typeof role_rm_id, role_rm_id);
                console.log(typeof role_add_id, role_add_id);

                // let targetUser2 = message.guild.members.cache.get(targetUser_id);
                // targetUser2?.guild.member.name;
                // var role_rm: any = message.guild?.roles.cache.find(role => role.id == rol_rm_id);
                // var role_add: any = message.guild?.roles.cache.find(role => role.id == rol_add_id);
                if(targetUser!==undefined && targetUser.guild.member!==null && rol_rm !== undefined && rol_add !== undefined){
                    targetUser.roles.remove(role_rm_id);
                    targetUser.roles.add(role_add_id);
                    let buscar =
                        message.guild.roles.cache.find(role => role.id != role_rm_id) &&
                        message.guild.roles.cache.find(role => role.id == role_add_id);
                    if (buscar !== undefined) {
                        message.channel.send(`El estudiante ${targetUser.guild.member.name} ha sido reubicado con exito de ${rol_rm.name} a ${rol_add.name}`);
                    } else {
                        message.channel.send('Syntax error, por favor, ingrese la sintaxis correcta.');
                    }
                }
                
            } else {
                message.channel.send(`No ha proporcionado suficientes argumentos, ${message.author}!`);
            }
            console.log(typeof args[1], args[1]);
            console.log(typeof args[2], args[2]);
            console.log(typeof args[3], args[3]);

        } else {
            message.reply('No tienes permiso para hacer esto');
        }
    } catch (error) {
        console.log(error);
        message.channel.send('Parece que ha ocurrido un error, lo sentimos (╥﹏╥)');
    }
}

export {
    reubicar as reub
};
