[lib-figure-implementation](../README.md) / [Exports](../modules.md) / Rectangle

# Class: Rectangle

This class describes the internal structure and behavior of the rectangle object

## Hierarchy

- [`Shape`](Shape.md)

  ↳ **`Rectangle`**

## Table of contents

### Constructors

- [constructor](Rectangle.md#constructor)

### Properties

- [color](Rectangle.md#color)
- [height](Rectangle.md#height)
- [initialPoints](Rectangle.md#initialpoints)
- [width](Rectangle.md#width)

### Accessors

- [changeColor](Rectangle.md#changecolor)
- [changeLength](Rectangle.md#changelength)
- [changeWidth](Rectangle.md#changewidth)
- [getColor](Rectangle.md#getcolor)
- [getLength](Rectangle.md#getlength)
- [getWidth](Rectangle.md#getwidth)

### Methods

- [area](Rectangle.md#area)
- [diagonal](Rectangle.md#diagonal)
- [draw](Rectangle.md#draw)
- [perimeter](Rectangle.md#perimeter)
- [createRectangle](Rectangle.md#createrectangle)

## Constructors

### constructor

• **new Rectangle**(`startPoint`, `width`, `height`, `color`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startPoint` | [`InitialPointType`](../modules.md#initialpointtype) |
| `width` | `number` |
| `height` | `number` |
| `color` | `string` |

#### Overrides

[Shape](Shape.md).[constructor](Shape.md#constructor)

#### Defined in

features/rectangle/rectangle.ts:9

## Properties

### color

• `Protected` **color**: `string`

#### Inherited from

[Shape](Shape.md).[color](Shape.md#color)

#### Defined in

features/shape/shape.ts:7

___

### height

• `Private` **height**: `number`

#### Defined in

features/rectangle/rectangle.ts:9

___

### initialPoints

• `Protected` **initialPoints**: [`InitialPointType`](../modules.md#initialpointtype)[]

#### Inherited from

[Shape](Shape.md).[initialPoints](Shape.md#initialpoints)

#### Defined in

features/shape/shape.ts:7

___

### width

• `Private` **width**: `number`

#### Defined in

features/rectangle/rectangle.ts:9

## Accessors

### changeColor

• `set` **changeColor**(`newColor`): `void`

This accessor change line color of rectangle for drawing figure in canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `newColor` | `string` |

#### Returns

`void`

#### Overrides

Shape.changeColor

#### Defined in

features/rectangle/rectangle.ts:110

___

### changeLength

• `set` **changeLength**(`newLength`): `void`

This accessor change length of rectangle

#### Parameters

| Name | Type |
| :------ | :------ |
| `newLength` | `number` |

#### Returns

`void`

#### Defined in

features/rectangle/rectangle.ts:84

___

### changeWidth

• `set` **changeWidth**(`newWidth`): `void`

This accessor change width of rectangle

#### Parameters

| Name | Type |
| :------ | :------ |
| `newWidth` | `number` |

#### Returns

`void`

#### Defined in

features/rectangle/rectangle.ts:76

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

features/rectangle/rectangle.ts:119

___

### getLength

• `get` **getLength**(): `number`

This accessor return length of rectangle

#### Returns

`number`

length of rectangle

#### Defined in

features/rectangle/rectangle.ts:102

___

### getWidth

• `get` **getWidth**(): `number`

This accessor return width of rectangle

#### Returns

`number`

width of rectangle

#### Defined in

features/rectangle/rectangle.ts:93

## Methods

### area

▸ **area**(): `number`

This method return the area of rectangle

#### Returns

`number`

area of rectangle

#### Overrides

[Shape](Shape.md).[area](Shape.md#area)

#### Defined in

features/rectangle/rectangle.ts:36

___

### diagonal

▸ **diagonal**(): `number`

This method return the diagonal of rectangle

#### Returns

`number`

diagonal of rectangle

#### Defined in

features/rectangle/rectangle.ts:45

___

### draw

▸ **draw**(`ctx`): `void`

This method draws rectangle in canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Overrides

[Shape](Shape.md).[draw](Shape.md#draw)

#### Defined in

features/rectangle/rectangle.ts:62

___

### perimeter

▸ **perimeter**(): `number`

This method return the perimeter of rectangle

#### Returns

`number`

perimeter of rectangle

#### Overrides

[Shape](Shape.md).[perimeter](Shape.md#perimeter)

#### Defined in

features/rectangle/rectangle.ts:54

___

### createRectangle

▸ `Static` **createRectangle**(`startPoint`, `width`, `length`, `color`): [`Rectangle`](Rectangle.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startPoint` | [`InitialPointType`](../modules.md#initialpointtype) | starting coordinate of rectangle |
| `width` | `number` | width of rectangle |
| `length` | `number` | length of rectangle |
| `color` | `string` | line color |

#### Returns

[`Rectangle`](Rectangle.md)

the instance of class Rectangle

#### Defined in

features/rectangle/rectangle.ts:21