import { makeAutoObservable } from 'mobx';

export interface ConversationMessage {
  content: string
  id: string
}

export interface Conversation {
  messages: ConversationMessage[]
  user: string
}

export class ClientDemoStore {
  conversations: Conversation[] = [{
    messages: [{
      content: 'Hello',
      id: Math.random().toString()
    }],
    user: 'Tom'
  }]

  get findConvo() {
    return (user: string) => this.conversations.find(c => c.user === user)
  }

  constructor() {
    makeAutoObservable(this);
  }

  sendMessage(msg: string) {
    this.conversations[0].messages.push({
      content: msg,
      id: Math.random().toString()
    })
  }

}

const clientDemo = new ClientDemoStore()

export default clientDemo
