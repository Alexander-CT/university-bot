import { GuildMember, PermissionResolvable } from "discord.js";
export interface command {
    name: string | Array<string>,
    mencion?: GuildMember,
    description: string,
    use: string,
    permission: PermissionResolvable,
    interaction: Boolean,
    action: Function
}
