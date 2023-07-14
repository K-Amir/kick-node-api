# kick-node-api

Node.js library to use with Kick api

## Installation

```bash
npm install kick-node-api
```

## Usage

```javascript
import { getChannelData } from "kick-node-api";
import { getChatroomMessagesByChannelId } from "kick-node-api";

// returns channel info
const data = await getChannelData("xQc");

// gets every chat message  from the stream
getChatroomMessagesByChannelId(res.chatroom.id, (message) => {});
```

## Contributing

Pull requests are welcome.
