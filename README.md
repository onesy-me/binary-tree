
</br >
</br >

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='utils/images/logo.svg' alt='amaui logo' />
  </a>
</p>

<h1 align='center'>amaui Binary Tree</h1>

<p align='center'>
  Binary Tree
</p>

<br />

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>UMD 1.9kb gzipped&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Browser and Nodejs</sub>
</h3>

<p align='center'>
  <sub>Very simple code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Modern code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Junior friendly&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Typescript&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Made with :yellow_heart:</sub>
</p>

<br />

## Getting started

### Add

```sh
  yarn add @amaui/binary-tree
```

### Use cases
- Min/max heaps
- Huffman coding, data compression
- Machine learning, making decisions
- etc.

### Use

```javascript
  import { AmauiBinaryTree } from '@amaui/binary-tree';

  // Make a new binary tree instance
  const amauiBinaryTree = new AmauiBinaryTree();

  // Add a amaui node / value
  [4, 2, 7, 14, 1, 3, 5].map(value => amauiBinaryTree.add(value));

  // or use a make method or a static method
  amauiBinaryTree.make([4, 2, 7, 14, 1, 3, 5]);

  // Binary tree
         4
       /   \
      /     \
     2       7
    / \     / \
   1   3   5   14

  // Remove any value
  amauiBinaryTree.remove(2);

  // Binary tree
         4
       /   \
      /     \
     3       7
    /       / \
   1       5   14
```

### Dev

Install

```sh
  yarn
```

Test

```sh
  yarn test
```

### Prod

Build

```sh
  yarn build
```
