import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatBotComponent } from "./components/chat-bot/chat-bot.component";

const routes: Routes = [
    {
        path: "chat-bot",
        component: ChatBotComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }