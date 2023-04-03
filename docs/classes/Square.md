[lib-figure-implementation](../DOCUMENTATION.md) / [Exports](../modules.md) / Square

# Class: Square

This class describes the internal structure and behavior of the square object

## Hierarchy

- [`Shape`](Shape.md)

  ↳ **`Square`**

## Table of contents

### Constructors

- [constructor](Square.md#constructor)

### Properties

- [color](Square.md#color)
- [initialPoints](Square.md#initialpoints)
- [sideOfSquare](Square.md#sideofsquare)

### Accessors

- [changeColor](Square.md#changecolor)
- [changeSide](Square.md#changeside)
- [getColor](Square.md#getcolor)
- [getSide](Square.md#getside)

### Methods

- [area](Square.md#area)
- [diagonal](Square.md#diagonal)
- [draw](Square.md#draw)
- [perimeter](Square.md#perimeter)
- [createSquare](Square.md#createsquare)

## Constructors

### constructor

• `Private` **new Square**(`initialPoint`, `sideOfSquare`, `color`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialPoint` | [`InitialPointType`](../modules.md#initialpointtype) |
| `sideOfSquare` | `number` |
| `color` | `string` |

#### Overrides

[Shape](Shape.md).[constructor](Shape.md#constructor)

#### Defined in

[features/square/square.ts:9](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L9)

## Properties

### color

• `Protected` **color**: `string`

#### Inherited from

[Shape](Shape.md).[color](Shape.md#color)

#### Defined in

[features/shape/shape.ts:7](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/shape/shape.ts#L7)

___

### initialPoints

• `Protected` **initialPoints**: [`InitialPointType`](../modules.md#initialpointtype)[]

#### Inherited from

[Shape](Shape.md).[initialPoints](Shape.md#initialpoints)

#### Defined in

[features/shape/shape.ts:7](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/shape/shape.ts#L7)

___

### sideOfSquare

• `Private` **sideOfSquare**: `number`

#### Defined in

[features/square/square.ts:9](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L9)

## Accessors

### changeColor

• `set` **changeColor**(`newColor`): `void`

This accessor change line color of square for drawing figure in canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newColor` | `string` | new line color |

#### Returns

`void`

#### Overrides

Shape.changeColor

#### Defined in

[features/square/square.ts:92](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L92)

___

### changeSide

• `set` **changeSide**(`newSide`): `void`

This accessor change side length of square

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newSide` | `number` | new side |

#### Returns

`void`

#### Defined in

[features/square/square.ts:74](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L74)

___

### getColor

• `get` **getColor**(): `string`

This accessor return line color

#### Returns

`string`

line color

#### Overrides

Shape.getColor

#### Defined in

[features/square/square.ts:101](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L101)

___

### getSide

• `get` **getSide**(): `number`

This accessor return side length of square

#### Returns

`number`

side length of square

#### Defined in

[features/square/square.ts:83](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L83)

## Methods

### area

▸ **area**(): `number`

This method return the area of square

#### Returns

`number`

area of square

#### Overrides

[Shape](Shape.md).[area](Shape.md#area)

#### Defined in

[features/square/square.ts:33](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L33)

___

### diagonal

▸ **diagonal**(): `number`

This method return the diagonal of square

#### Returns

`number`

diagonal of square

#### Defined in

[features/square/square.ts:42](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L42)

___

### draw

▸ **draw**(`ctx`): `void`

This method draws square in canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Overrides

[Shape](Shape.md).[draw](Shape.md#draw)

#### Defined in

[features/square/square.ts:59](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L59)

___

### perimeter

▸ **perimeter**(): `number`

This method return the perimeter of square

#### Returns

`number`

perimeter of square

#### Overrides

[Shape](Shape.md).[perimeter](Shape.md#perimeter)

#### Defined in

[features/square/square.ts:51](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L51)

___

### createSquare

▸ `Static` **createSquare**(`startPoint`, `side`, `color`): [`Square`](Square.md)

This static method return instance of class Square

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startPoint` | [`InitialPointType`](../modules.md#initialpointtype) | starting coordinate of square |
| `side` | `number` | length of side Square |
| `color` | `string` | line color |

#### Returns

[`Square`](Square.md)

the instance of class Square

#### Defined in

[features/square/square.ts:21](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/square/square.ts#L21)
