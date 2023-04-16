# Member

## Properties

`.roleCollection`

> The role collection of this member<br> **type** [Collection](https://abal.moe/Eris/docs/Collection)<[Role](https://abal.moe/Eris/docs/Role)>

`.highestRole`

> The highest role of this member<br> **type** [Role](https://abal.moe/Eris/docs/Role)

`.roleColor`

> The role of the member that defines their color<br> **type** [Role](https://abal.moe/Eris/docs/Role)?

`.displayName`

> The member's nickname or username<br> **type** [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Methods

### send(content, file)

> Send a message to the member
> | Parameter | Description |
> |-----------|-------------|
> | content | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
> | file | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> \| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) (optional) |
> | file.file | [Buffer](https://nodejs.org/api/buffer.html) |
> | file.name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

> Returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Message](https://abal.moe/Eris/docs/Message)>

### timeout(timeout, reason)

> Timeout the member
> | Parameter | Description |
> |-----------|-------------|
> | timeout | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)?<br>Time in milliseconds of the timeout. Set to null to instantly remove timeout |
> | reason | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The reason to be displayed in audit logs |

> Returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### setNickname(nick, reason)

> Set the user's server nickname
> | Parameter | Description |
> |-----------|-------------|
> | nick | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?<br>The new nickname of the user, "" to remove |
> | reason | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The reason to be displayed in audit logs |

> Returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
