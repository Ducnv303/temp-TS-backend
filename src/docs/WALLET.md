## ScreeHavin Wallet API

[[_TOC_]]

### API Get List address book

> Description: This is API get list address book

- Version: `{1.0}`
- Endpoint: `/v1/wallet/address-book`
- Authentication: [Signature Topic](#signature)
- Method: `GET`
- Query:
  
| Name             | require | Description |
| ---------------- | :-----: | ----------: |
| `friend_address` |         |             |
| `page`           |         |             |
| `page_size`      |         |             |


- Response: `JSON Object`

| Name                |      Type      |       Description |
| ------------------- | :------------: | ----------------: |
| `error_code`        |    `Number`    |        Error code |
| `message`           |    `String`    |  Message response |
| `data`              | `Json Object`  |     Data Response |
| `data.address_book` | `Array String` | List address book |


### API Add address book

> Description: This is API add address book

- Version: `{1.0}`
- Endpoint: `/v1/wallet/address-book`
- Authentication: [Signature Topic](#signature)
- Method: `POST`
- BODY:
  
| Name             | require  | Description |
| ---------------- | :------: | ----------: |
| `friend_address` | `String` |             |
| `friend_name`    | `String` |             |

- Response: `JSON Object`

| Name         |     Type      |      Description |
| ------------ | :-----------: | ---------------: |
| `error_code` |   `Number`    |       Error code |
| `message`    |   `String`    | Message response |
| `data`       | `Json Object` |    Data Response |

### API delete address book

> Description: This is API delete address book

- Version: `{1.0}`
- Endpoint: `/v1/wallet/address-book/:id`
- Authentication: [Signature Topic](#signature)
- Method: `Delete`
- params:
  
| Name | require |     Description |
| ---- | :-----: | --------------: |
| `id` |   [x]   | id address book |


- Response: `JSON Object`

| Name         |     Type      |      Description |
| ------------ | :-----------: | ---------------: |
| `error_code` |   `Number`    |       Error code |
| `message`    |   `String`    | Message response |
| `data`       | `Json Object` |    Data Response |


### Signature

| Name          | Require? |     Type |                                             Description |
| ------------- | :------: | -------: | ------------------------------------------------------: |
| `x-address`   |   [x]    | `String` |                                Address wallet developer |
| `x-signature` |   [x]    | `String` | Sign `message` from api get nonce with user private key |
| `x-nonce`     |   [x]    | `Number` |                        Nonce create `Message signature` |
| `x-time`      |   [x]    | `Number` |                         Time create `Message signature` |