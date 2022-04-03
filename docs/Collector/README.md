# Collector

Collect messages and component interactions.

---

## textable.createMessageCollector(options)

> Create a new message collector and start it
> | Parameter | Description |
> |-----------|-------------|
> | options | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) (optional)<br>The options of the collector |
> | options.maxReceived | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (optional)<br>Whether deleted messages will be counted to end the collector
> | options.filter | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) (optional)<br>The filter that will be applied to the collector |
> | options.onRun | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) (optional)<br>Emitted after an object is saved |
> | options.onEnd | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) (optional)<br>Emitted after collector ends |
> | options.timeout | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (optional)<br>Collector duration in milliseconds.
> | options.idle | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (optional)<br>Whether the collector timeout will be restarted after saving an element |
> | options.max | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (optional)<br>The limit of objects in the collector |

> Returns [Collector](Collector.md)<'messageCreate'>

## client.createChannelMessageCollector(channelID, options)

> Create a new message collector and start it
> | Parameter | Description |
> |-----------|-------------|
> | channelID | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The ID of the channel |
> | options | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) (optional)<br>The options of the collector |
> | options.maxReceived | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (optional)<br>Whether deleted messages will be counted to end the collector
> | options.filter | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) (optional)<br>The filter that will be applied to the collector |
> | options.onRun | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) (optional)<br>Emitted after an object is saved |
> | options.onEnd | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) (optional)<br>Emitted after collector ends |
> | options.timeout | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (optional)<br>Collector duration in milliseconds.
> | options.idle | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (optional)<br>Whether the collector timeout will be restarted after saving an element |
> | options.max | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (optional)<br>The limit of objects in the collector |

> Returns [Collector](Collector.md)<'messageCreate'>

## message.createComponentCollector(options)

> Create a new component interaction collector and start it
> | Parameter | Description |
> |-----------|-------------|
> | options | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) (optional)<br>The options of the collector |
> | options.maxReceived | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (optional)<br>Whether deleted messages will be counted to end the collector
> | options.filter | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) (optional)<br>The filter that will be applied to the collector |
> | options.onRun | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) (optional)<br>Emitted after an object is saved |
> | options.onEnd | [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) (optional)<br>Emitted after collector ends |
> | options.timeout | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (optional)<br>Collector duration in milliseconds.
> | options.idle | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (optional)<br>Whether the collector timeout will be restarted after saving an element |
> | options.max | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (optional)<br>The limit of objects in the collector |

> Returns [Collector](Collector.md)<'interactionCreate'>
