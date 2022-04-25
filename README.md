# Before you begin you need an REPLIER API Key and account see : <https://www.repliers.com/#developer>

```js

import {client} from "api/client";
import {getListing} from "api/listings";
//Set your API key
client.init('REPLIERS-API_KEY');

//Start requesting data
await getListing(mlsNumber);

```

## If you need to change the fetch method ie use node-fetch add your preferred fetch as the second param

```js
import fetch from "node-fetch";

client.init('REPLIERS-API_KEY',fetch);

```
