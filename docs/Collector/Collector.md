# Collector

Collector class for limited event use

---

## Properties

`.event`

> The event at which the collector will be running <br> **type** [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

`.idle`

> **type** [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

`.max`

> The Collector limit<br> **type** [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)?

`.timeout`

> The Collector time limit<br> **type** [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)?

`.collected`

> **type** [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>

`.data`

> **type** [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

`.ended`

> If the collector has already finished <br> **type** [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

`.received`

> The number of objects received <br> **type** [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

`.endReason`

> **type** [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

## Methods

### filter?(...args)

> The filter collector
> | Parameter | Description |
> |-----------|-------------|
> | args | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)[]<br>The arguments of the event |
> Returns [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>

### onEnd?(reason, collected)

> When the collector ends
> | Parameter | Description |
> |-----------|-------------|
> | reason | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<br>The reason the collector has ended with |
> | collected | [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)<[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)> |
> Returns unknown

### onRun?(...args)

> When the collector is running
> | Parameter | Description |
> |-----------|-------------|
> | args | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)[]<br>The arguments of the event |
> Returns unknown

### run(...args)

> | Parameter | Description                                                                                         |
> | --------- | --------------------------------------------------------------------------------------------------- |
> | args      | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)[] |
>
> Returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### cancelRun(value)

> | Parameter | Description                                                                                       |
> | --------- | ------------------------------------------------------------------------------------------------- |
> | value     | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
>
> Returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)>

### start()

> Start the collector<br>
> Returns [this](Collector.md)

### collect(...args)

> Returns the key to be used to collect the object
> | Parameter | Description |
> |-----------|-------------|
> | args | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)[]<br>The arguments of the event |
> Returns [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### end(reason)

> Finishes the collector
> | Parameter | Description |
> |-----------|-------------|
> | reason | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)?<br>The reason to end the collector |
> Returns unknown

### clearTimeout()

> Removes the collector timeout

### resetTimeout()

> Reset the collector timeout

### reset()

> Reset all data of the collector

### checkEnd()

> Check that the collector has not finished<br>
> Returns [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
