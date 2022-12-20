import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from '../store/storeContext';

function SpecificConversation() {
  const store = useStore();

  const convo = store.demoStore.findConvo('Tom');

  return (
    <div>
      <p>{convo ? convo.messages.length : 0}</p>
    </div>
  );
}

export default observer(SpecificConversation);
