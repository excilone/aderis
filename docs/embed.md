# EmbedConstructor

EmbedConstructor to create embeds easily.

---

## Properties

`.author`

> The author of the embed<br> **type** [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?

`.color`

> The color of the embed<br> **type** [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)?

`.description`

> The description of the embed<br> **type** [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?

`.fields`

> The fields of the embed<br> **type** [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>?

`.footer`

> The footer of the embed<br> **type** [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?

`.image`

> The image of the embed<br> **type** [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?

`.thumbnail`

> The thumbnail of the embed<br> **type** [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)?

`.timestamp`

> The timestamp of the embed<br> **type** [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)? | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)?

`.title`

> The title of the embed<br> **type** [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?

`.url`

> The url of the embed title<br> **type** [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?

## Constructor

`new EmbedConstructor(data)`

> | Parameter | Default | Description                                                                                                                                                                                                      |
> | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | data      | `{}`    | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) (optional)<br>The data of the embed. [See](https://discord.com/developers/docs/resources/channel#embed-object) |

## Methods

### setTitle(title)

> Sets the title of the embed
> | Parameter | Description |
> |-----------|-------------|
> | title | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The new title of the embed |

> Returns [this](embed.md)

### setDescription(description)

> Sets the description of the embed
> | Parameter | Description |
> |-----------|-------------|
> | description | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The new description of the embed |

> Returns [this](embed.md)

### setURL(url)

> Sets the title URL of the embed
> | Parameter | Description |
> |-----------|-------------|
> | url | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The new URL of the title |

> Returns [this](embed.md)

### setTimestamp(timestamp)

> Sets the timestamp of the embed
> | Parameter | Description |
> |-----------|-------------|
> | timestamp | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)<br>The new timestamp of the embed |

> Returns [this](embed.md)

### setColor(color)

> Sets the color of the embed
> | Parameter | Description |
> |-----------|-------------|
> | color | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)<br>The new color of the embed |
> | g | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (optional) |
> | b | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (optional) |

> Returns [this](embed.md)

### setFooter(footer, iconURL)

> Sets the footer of the embed
> | Parameter | Description |
> |-----------|-------------|
> | footer | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<br>The new footer of the embed|
> | footer.text | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The footer text |
> | footer.icon_url | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The icon URL of the new footer |
> | iconURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The URL of the new footer icon

> Returns [this](embed.md)

### setImage(image)

> Sets the image of the embed
> | Parameter | Description |
> |-----------|-------------|
> | image | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<br>The new image of the embed |
> | image.url | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The url of the new embed image |

> Returns [this](embed.md)

### setThumbnail(thumbnail)

> Sets the thumbnail of the embed
> | Parameter | Description |
> |-----------|-------------|
> | thumbnail | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<br>The new thumbnail of the embed |
> | thumbnail.url | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The url of the new embed thumbnail |

> Returns [this](embed.md)

### setAuthor(author, iconURL, url)

> Sets the author of the embed
> | Parameter | Description |
> |-----------|-------------|
> | author | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<br>The new author of the embed |
> | author.name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The name of the author |
> | author.icon_url | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The icon url of the author |
> | author.url | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The url of the author |
> | iconURL | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The icon url of the author |
> | url | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The url of the author |

> Returns [this](embed.md)

### setFields(fields)

> Sets the fields of the embed
> | Parameter | Description |
> |-----------|-------------|
> | fields | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> |
> | fields[].name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The name of the field |
> | fields[].value | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The value of the field |
> | fields[].inline | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (optional) |

> Returns [this](embed.md)

### addField(field, value, inline)

> Add a field to the embed
> | Parameter | Description |
> |-----------|-------------|
> | field | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The new field of the embed or the name |
> | field.name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The name of the field |
> | field.value | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The value of the field |
> | field.inline | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (optional) |
> | value | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (optional)<br>The value of the field |
> | inline | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (optional) |

> Returns [this](embed.md)

### addFields(...fields)

> Add fields to the embed
> | Parameter | Description |
> |-----------|-------------|
> | fields | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> \| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>> |
> | fields[].name | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The name of the field |
> | fields[].value | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The value of the field |
> | fields[].inline | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (optional) |

> Returns [this](embed.md)

### toJSON()

> Returns [APIEmbed](https://discord.com/developers/docs/resources/channel#embed-object)
