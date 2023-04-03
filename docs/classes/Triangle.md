[lib-figure-implementation](../README.md) / [Exports](../modules.md) / Triangle

# Class: Triangle

This class describes the internal structure and behavior of the triangle object

## Hierarchy

- [`Shape`](Shape.md)

  ↳ **`Triangle`**

## Table of contents

### Constructors

- [constructor](Triangle.md#constructor)

### Properties

- [a](Triangle.md#a)
- [b](Triangle.md#b)
- [c](Triangle.md#c)
- [color](Triangle.md#color)
- [initialPoints](Triangle.md#initialpoints)

### Accessors

- [changeA](Triangle.md#changea)
- [changeB](Triangle.md#changeb)
- [changeC](Triangle.md#changec)
- [changeColor](Triangle.md#changecolor)
- [getA](Triangle.md#geta)
- [getB](Triangle.md#getb)
- [getC](Triangle.md#getc)
- [getColor](Triangle.md#getcolor)

### Methods

- [area](Triangle.md#area)
- [draw](Triangle.md#draw)
- [existTriangleWithNewSide](Triangle.md#existtrianglewithnewside)
- [height](Triangle.md#height)
- [perimeter](Triangle.md#perimeter)
- [createTriangle](Triangle.md#createtriangle)
- [existTriangle](Triangle.md#existtriangle)
- [getSidesOfTriangle](Triangle.md#getsidesoftriangle)

## Constructors

### constructor

• **new Triangle**(`initialPoint`, `color`, `sides`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialPoint` | [`InitialPointType`](../modules.md#initialpointtype)[] |
| `color` | `string` |
| `sides` | `number`[] |

#### Overrides

[Shape](Shape.md).[constructor](Shape.md#constructor)

#### Defined in

features/triangle/triangle.ts:13

## Properties

### a

• `Private` **a**: `number`

#### Defined in

features/triangle/triangle.ts:9

___

### b

• `Private` **b**: `number`

#### Defined in

features/triangle/triangle.ts:10

___

### c

• `Private` **c**: `number`

#### Defined in

features/triangle/triangle.ts:11

___

### color

• `Protected` **color**: `string`

#### Inherited from

[Shape](Shape.md).[color](Shape.md#color)

#### Defined in

features/shape/shape.ts:7

___

### initialPoints

• `Protected` **initialPoints**: [`InitialPointType`](../modules.md#initialpointtype)[]

#### Inherited from

[Shape](Shape.md).[initialPoints](Shape.md#initialpoints)

#### Defined in

features/shape/shape.ts:7

## Accessors

### changeA

• `set` **changeA**(`newA`): `void`

This accessor change side length "a" of triangle

#### Parameters

| Name | Type |
| :------ | :------ |
| `newA` | `number` |

#### Returns

`void`

#### Defined in

features/triangle/triangle.ts:150

___

### changeB

• `set` **changeB**(`newB`): `void`

This accessor change side length "b" of triangle

#### Parameters

| Name | Type |
| :------ | :------ |
| `newB` | `number` |

#### Returns

`void`

#### Defined in

features/triangle/triangle.ts:161

___

### changeC

• `set` **changeC**(`newC`): `void`

This accessor change side length "c" of triangle

#### Parameters

| Name | Type |
| :------ | :------ |
| `newC` | `number` |

#### Returns

`void`

#### Defined in

features/triangle/triangle.ts:172

___

### changeColor

• `set` **changeColor**(`newColor`): `void`

This accessor change line color of triangle for drawing figure in canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `newColor` | `string` |

#### Returns

`void`

#### Overrides

Shape.changeColor

#### Defined in

features/triangle/triangle.ts:197

___

### getA

• `get` **getA**(): `number`

This accessor return side length "a" of triangle

#### Returns

`number`

side length "a" of triangle

#### Defined in

features/triangle/triangle.ts:124

___

### getB

• `get` **getB**(): `number`

This accessor return side length "b" of triangle

#### Returns

`number`

side length "b" of triangle

#### Defined in

features/triangle/triangle.ts:133

___

### getC

• `get` **getC**(): `number`

This accessor return side length "c" of triangle

#### Returns

`number`

side length "c" of triangle

#### Defined in

features/triangle/triangle.ts:142

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

features/triangle/triangle.ts:206

## Methods

### area

▸ **area**(): `number`

This method return the area of triangle

#### Returns

`number`

area of triangle

#### Overrides

[Shape](Shape.md).[area](Shape.md#area)

#### Defined in

features/triangle/triangle.ts:77

___

### draw

▸ **draw**(`ctx`): `void`

This method draws triangle in canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Overrides

[Shape](Shape.md).[draw](Shape.md#draw)

#### Defined in

features/triangle/triangle.ts:95

___

### existTriangleWithNewSide

▸ **existTriangleWithNewSide**(`a`, `b`, `c`): `boolean`

this accessor checks the possibility of the existence of a triangle
when the value of the length of its sides changes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | side length "a" |
| `b` | `number` | side length "b" |
| `c` | `number` | side length "c" |

#### Returns

`boolean`

true or false

#### Defined in

features/triangle/triangle.ts:188

___

### height

▸ **height**(): `number`

This method return the height of triangle

#### Returns

`number`

height of triangle

#### Defined in

features/triangle/triangle.ts:115

___

### perimeter

▸ **perimeter**(): `number`

This method return the perimeter of triangle

#### Returns

`number`

perimeter of triangle

#### Overrides

[Shape](Shape.md).[perimeter](Shape.md#perimeter)

#### Defined in

features/triangle/triangle.ts:87

___

### createTriangle

▸ `Static` **createTriangle**(`initialPoints`, `color`): [`Triangle`](Triangle.md)

This static method return instance of class Triangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialPoints` | [`InitialPointType`](../modules.md#initialpointtype)[] | triangle vertices |
| `color` | `string` | line color |

#### Returns

[`Triangle`](Triangle.md)

the instance of class Triangle

#### Defined in

features/triangle/triangle.ts:27

___

### existTriangle

▸ `Static` **existTriangle**(`a`, `b`, `c`): `boolean`

This static method checks the possibility of the existence of a triangle

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |

#### Returns

`boolean`

true or false

#### Defined in

features/triangle/triangle.ts:44

___

### getSidesOfTriangle

▸ `Static` `Private` **getSidesOfTriangle**(`initialPoints`): `number`[]

This static method returns an array of the lengths of the sides of the triangle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialPoints` | [`InitialPointType`](../modules.md#initialpointtype)[] | triangle vertices array of the lengths of the sides of the triangle |

#### Returns

`number`[]

#### Defined in

features/triangle/triangle.ts:55
