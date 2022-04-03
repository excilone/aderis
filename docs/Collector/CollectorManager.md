# CollectorManager

Collector manager for messages and components.

---

## Properties

`.list`

> The list of collectors in the CollectorManager <br> **type** [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)<[Collector](./Collector.md)>

`.client`

> The client of the CollectorManager <br> **type** [Client](https://abal.moe/Eris/docs/Client)

## Constructor

`new CollectorManager(client)`

> | Parameter | Default | Description                                                                                              |
> | --------- | ------- | -------------------------------------------------------------------------------------------------------- |
> | client    |         | [Client](https://abal.moe/Eris/docs/Client)<br>The client on which the CollectorManager will be deployed |

## Methods

### addCollector(collector)

> Add a collector to the list
> | Parameter | Description |
> |-----------|-------------|
> | collector | [Collector](./Collector.md)|

> Returns [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)<[Collector](./Collector.md)>

### removeCollector(collector)

> Remove a collector from the list
> | Parameter | Description |
> |-----------|-------------|
> | collector | [Collector](./Collector.md)|

> Returns [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
