import { Funo as FunoClass } from './src/Funo'

if (!process.env.TOKEN) throw new Error('TOKEN is not set in ENV')

export const Funo = new FunoClass().init()