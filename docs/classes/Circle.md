[lib-figure-implementation](../DOCUMENTATION.md) / [Exports](../modules.md) / Circle

# Class: Circle

This class describes the internal structure and behavior of the circle object

## Hierarchy

- [`Shape`](Shape.md)

  ↳ **`Circle`**

## Table of contents

### Constructors

- [constructor](Circle.md#constructor)

### Properties

- [color](Circle.md#color)
- [initialPoints](Circle.md#initialpoints)
- [radius](Circle.md#radius)

### Accessors

- [changeColor](Circle.md#changecolor)
- [changeRadius](Circle.md#changeradius)
- [getColor](Circle.md#getcolor)
- [getRadius](Circle.md#getradius)

### Methods

- [area](Circle.md#area)
- [draw](Circle.md#draw)
- [perimeter](Circle.md#perimeter)
- [createCircle](Circle.md#createcircle)

## Constructors

### constructor

• **new Circle**(`center`, `radius`, `color`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `center` | [`InitialPointType`](../modules.md#initialpointtype) |
| `radius` | `number` |
| `color` | `string` |

#### Overrides

[Shape](Shape.md).[constructor](Shape.md#constructor)

#### Defined in

[features/circle/circle.ts:9](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/circle/circle.ts#L9)

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

### radius

• `Private` **radius**: `number`

#### Defined in

[features/circle/circle.ts:9](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/circle/circle.ts#L9)

## Accessors

### changeColor

• `set` **changeColor**(`newColor`): `void`

This accessor change line color of circle for drawing figure in canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newColor` | `string` | new line color |

#### Returns

`void`

#### Overrides

Shape.changeColor

#### Defined in

[features/circle/circle.ts:83](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/circle/circle.ts#L83)

___

### changeRadius

• `set` **changeRadius**(`newRadius`): `void`

This accessor change radius of circle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRadius` | `number` | new radius |

#### Returns

`void`

#### Defined in

[features/circle/circle.ts:74](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/circle/circle.ts#L74)

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

[features/circle/circle.ts:92](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/circle/circle.ts#L92)

___

### getRadius

• `get` **getRadius**(): `number`

This accessor return radius of circle

#### Returns

`number`

radius of circle

#### Defined in

[features/circle/circle.ts:65](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/circle/circle.ts#L65)

## Methods

### area

▸ **area**(): `number`

This method return the area of circle

#### Returns

`number`

area of circle

#### Overrides

[Shape](Shape.md).[area](Shape.md#area)

#### Defined in

[features/circle/circle.ts:33](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/circle/circle.ts#L33)

___

### draw

▸ **draw**(`ctx`): `void`

This method draws circle in canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Overrides

[Shape](Shape.md).[draw](Shape.md#draw)

#### Defined in

[features/circle/circle.ts:50](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/circle/circle.ts#L50)

___

### perimeter

▸ **perimeter**(): `number`

This method return the perimeter of circle

#### Returns

`number`

perimeter of circle

#### Overrides

[Shape](Shape.md).[perimeter](Shape.md#perimeter)

#### Defined in

[features/circle/circle.ts:42](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/circle/circle.ts#L42)

___

### createCircle

▸ `Static` **createCircle**(`center`, `radius`, `color`): [`Circle`](Circle.md)

This static method return instance of class Circle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`InitialPointType`](../modules.md#initialpointtype) | center coordinate of circle |
| `radius` | `number` | circle radius |
| `color` | `string` | line color |

#### Returns

[`Circle`](Circle.md)

the instance of class Circle

#### Defined in

[features/circle/circle.ts:21](https://github.com/antonnik15/figures-library/blob/e700ee6/src/features/circle/circle.ts#L21)
