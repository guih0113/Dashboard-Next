import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
return (
    <Card className="flex-1">
        <CardHeader>
            <div className="flex items-center justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-800">
                    Últimos clientes
                </CardTitle>
                <CircleDollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>
                Novos clientes nas últimas 24 horas
            </CardDescription>
        </CardHeader>

        <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/466935947_1111174137347168_7431472182720722317_n.jpg?ccb=11-4&oh=01_Q5AaIUGyvScib4z7ST70g3U9BCJpZobc2-ndvPzSuEGR82BG&oe=67F56BD3&_nc_sid=5e03e0&_nc_cat=109"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Guilherme Henrique</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">gui.henriquess13@gmail.com</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/466935947_1111174137347168_7431472182720722317_n.jpg?ccb=11-4&oh=01_Q5AaIUGyvScib4z7ST70g3U9BCJpZobc2-ndvPzSuEGR82BG&oe=67F56BD3&_nc_sid=5e03e0&_nc_cat=109"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Guilherme Henrique</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">gui.henriquess13@gmail.com</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/466935947_1111174137347168_7431472182720722317_n.jpg?ccb=11-4&oh=01_Q5AaIUGyvScib4z7ST70g3U9BCJpZobc2-ndvPzSuEGR82BG&oe=67F56BD3&_nc_sid=5e03e0&_nc_cat=109"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Guilherme Henrique</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">gui.henriquess13@gmail.com</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/466935947_1111174137347168_7431472182720722317_n.jpg?ccb=11-4&oh=01_Q5AaIUGyvScib4z7ST70g3U9BCJpZobc2-ndvPzSuEGR82BG&oe=67F56BD3&_nc_sid=5e03e0&_nc_cat=109"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Guilherme Henrique</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">gui.henriquess13@gmail.com</span>
                </div>
            </article>
        </CardContent>
    </Card>
);
}
