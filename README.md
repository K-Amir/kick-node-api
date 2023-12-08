# kick-node-api

Node.js library to use with Kick api

## Installation

```bash
npm install kick-node-api
```

## Usage

```javascript
import { getChannelData, getChatroomMessagesByChannelId } from "kick-node-api";

// returns channel info
const data = await getChannelData("bluewool");

// gets every chat message  from the stream
getChatroomMessagesByChannelId(res.chatroom.id, (message) => {});
```

## Contributing

Pull requests are welcome.
