[lib-figure-implementation](../DOCUMENTATION.md) / [Exports](../modules.md) / Shape

# Class: Shape

This class is abstract class for describing behavior of different figures

## Hierarchy

- **`Shape`**

  ↳ [`Circle`](Circle.md)

  ↳ [`Square`](Square.md)

  ↳ [`Rectangle`](Rectangle.md)

  ↳ [`Triangle`](Triangle.md)

## Table of contents

### Constructors

- [constructor](Shape.md#constructor)

### Properties

- [color](Shape.md#color)
- [initialPoints](Shape.md#initialpoints)

### Accessors

- [changeColor](Shape.md#changecolor)
- [getColor](Shape.md#getcolor)

### Methods

- [area](Shape.md#area)
- [draw](Shape.md#draw)
- [perimeter](Shape.md#perimeter)

## Constructors

### constructor

• `Protected` **new Shape**(`initialPoints`, `color`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialPoints` | [`InitialPointType`](../modules.md#initialpointtype)[] |
| `color` | `string` |

#### Defined in

[features/shape/shape.ts:7](https://github.com/antonnik15/figures-library/blob/6be00a5/src/features/shape/shape.ts#L7)

## Properties

### color

• `Protected` **color**: `string`

#### Defined in

[features/shape/shape.ts:7](https://github.com/antonnik15/figures-library/blob/6be00a5/src/features/shape/shape.ts#L7)

___

### initialPoints

• `Protected` **initialPoints**: [`InitialPointType`](../modules.md#initialpointtype)[]

#### Defined in

[features/shape/shape.ts:7](https://github.com/antonnik15/figures-library/blob/6be00a5/src/features/shape/shape.ts#L7)

## Accessors

### changeColor

• `Abstract` `set` **changeColor**(`newColor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newColor` | `string` |

#### Returns

`void`

#### Defined in

[features/shape/shape.ts:11](https://github.com/antonnik15/figures-library/blob/6be00a5/src/features/shape/shape.ts#L11)

___

### getColor

• `Abstract` `get` **getColor**(): `string`

#### Returns

`string`

#### Defined in

[features/shape/shape.ts:12](https://github.com/antonnik15/figures-library/blob/6be00a5/src/features/shape/shape.ts#L12)

## Methods

### area

▸ `Abstract` **area**(): `number`

#### Returns

`number`

#### Defined in

[features/shape/shape.ts:9](https://github.com/antonnik15/figures-library/blob/6be00a5/src/features/shape/shape.ts#L9)

___

### draw

▸ `Abstract` **draw**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Defined in

[features/shape/shape.ts:13](https://github.com/antonnik15/figures-library/blob/6be00a5/src/features/shape/shape.ts#L13)

___

### perimeter

▸ `Abstract` **perimeter**(): `number`

#### Returns

`number`

#### Defined in

[features/shape/shape.ts:10](https://github.com/antonnik15/figures-library/blob/6be00a5/src/features/shape/shape.ts#L10)
