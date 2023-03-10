import { BaseCommand, Command, Message } from '../../Structures'
import { IArgs } from '../../Types'
import axios from 'axios'

@Command('joke', {
    description: 'sends a random joke for you.',
    category: 'fun',
    usage: `joke`,
    cooldown: 5,
    exp: 30,
    dm: false
})
export default class extends BaseCommand {
    public override execute = async (M: Message, args: IArgs): Promise<void> => {
        await axios
            .get(`https://v2.jokeapi.dev/joke/Any`)
            .then((response) => {
                // console.log(response);
                const text = `š *Category:* ${response.data.category}\nš *Joke:* ${response.data.setup}\nšļø *Delivery:* ${response.data.delivery}`
                M.reply(text)
            })
            .catch((err) => {
                M.reply(`ā  An error occurred.`)
            })
    }
}
