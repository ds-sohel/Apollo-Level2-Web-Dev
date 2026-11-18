# Core differences between type aliases and interface in TypeScript

Type aliases and interfaces are used to define custom types in TypeScript. While they share many similarities, they differ in features such as declaration merging, type composition, and supported use cases.
Type Aliases allow defining types with a custom name (an alias), and are suitable for unions, tuples, primitive types, array types, function types, and object types.

Interfaces are similar to type aliases, except they only apply to object types and support extension and declaration merging.
Type Aliases allow defining types with a custom name (an Alias). It can be used for primitives like string or more complex types such as objects and arrays. Interfaces are similar to type aliases, except they only apply to object types.

***
## Type Aliases

> Declared using the type keyword.
> Can define primitives, objects, unions, intersections, tuples, and function types.
> Uses the & operator to combine multiple types.
> Does not support declaration merging.
> Can be implemented by classes if it represents an object type.
> Supports union types (|).
> Supports tuple types.
> Best suited for unions, tuples, function types, and complex type compositions.

---
## Interfaces Type

> Declared using the interface keyword.
> Primarily defines the structure of objects and callable types.
> Uses the extends keyword to inherit from other interfaces.
> Supports declaration merging.
> Can be implemented by classes using the implements keyword.
> Does not directly support union types.
> Does not directly support tuple types.
> Best suited for defining object structures, APIs, and class contracts.

[Reference to gfg](https://write.geeksforgeeks.org/).