import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../store/storeContext';
import ConversationItem from './ConversationItem';

function ConversationItems() {
  const store = useStore();

  return (
    <div>
      {store.demoStore.conversations.map((convo) => (
        <ConversationItem convo={convo} key={convo.user}></ConversationItem>
      ))}
      <button
        onClick={() => {
          store.demoStore.sendMessage('Hello from the other side');
          console.log('Added message!')
        }}
      >
        Add Message
      </button>
    </div>
  );
}

export default observer(ConversationItems);
