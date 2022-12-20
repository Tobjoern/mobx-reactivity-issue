import { trace } from 'mobx';
import React from 'react';
import { Conversation } from '../store/demo';

export default function ConversationItem({ convo }: { convo: Conversation }) {
  const lastMessage = convo.messages[convo.messages.length - 1];


  return (
    <div>
      <p>Last message: {lastMessage.content} {convo.messages.length}</p>
    </div>
  );
}
