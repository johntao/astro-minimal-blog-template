---
title: Getting Started with Astro
description: A guide to help you start your Astro journey
pubDate: 2025-04-30
---

In this post, I'll walk you through the basics of setting up an Astro project and creating your first pages.

## Installation

To create a new Astro project, you can use the following command:

```bash
npm create astro@latest
```

## Project Structure

A typical Astro project has the following structure:

- `src/pages/` - Your page routes
- `src/layouts/` - Reusable page layouts
- `src/components/` - UI components
- `public/` - Static assets

## Creating Your First Page

All `.astro` files in the `src/pages/` directory automatically become pages on your site.


## Code Shiki

```typescript
// Using 'typeof' to infer types
const person = { name: "Alice", age: 30 };
type PersonType = typeof person;  // { name: string; age: number }

// 'satisfies' to ensure a type matches but allows more specific types
type Animal = { name: string };
const dog = { name: "Buddy", breed: "Golden Retriever" } satisfies Animal;

// Generics with 'extends' and default values
function identity<T extends number | string = string>(arg: T): T {
  return arg;
}

let str = identity();  // Default type is string
let num = identity(42);  // T inferred as number

// 'extends' with interface and class
interface HasLength {
  length: number;
}

function logLength<T extends HasLength = string>(arg: T): void {
  console.log(arg.length);
}

logLength("Hello");    // OK: string has length (default is string)
logLength([1, 2, 3]);  // OK: array has length
// logLength(123);      // Error: number doesn't have length

// 'typeof' with functions
function add(x: number, y: number): number {
  return x + y;
}

type AddFunctionType = typeof add;  // (x: number, y: number) => number

// Generic interfaces with 'extends' and default types
interface Box<T extends object = { message: string }> {
  content: T;
}

let defaultBox: Box = { content: { message: "Hello" } };  // Uses default type
let customBox: Box<{ status: number }> = { content: { status: 200 } };

// Complex example with 'satisfies' and default generics
type Task = {
  title: string;
  description?: string;
  completed: boolean;
};

const myTask = {
  title: "Learn TypeScript",
  completed: false,
  priority: "High",
} satisfies Task;  // Allows priority but ensures Task structure

// Generic function with default type
function wrapInArray<T = string>(value: T): T[] {
  return [value];
}

const stringArray = wrapInArray();  // Default to string
const numberArray = wrapInArray(42);  // T inferred as number

/**
 * Combines two generic types into a tuple.
 *
 * @template T - The first type.
 * @template U - The second type.
 * @param {T} first - The first value.
 * @param {U} second - The second value.
 * @returns {[T, U]} A tuple containing both values.
 */
function combine<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
```