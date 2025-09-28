
</br>
</br>

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img width='auto' height='84' src='https://raw.githubusercontent.com/onesy-me/onesy/refs/heads/main/utils/images/logo.png' alt='onesy logo' />
  </a>
</p>

<h1 align='center'>onesy Binary Tree</h1>

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

### Add

```sh
yarn add @onesy/binary-tree
```

### Use cases
- Min/max heaps
- Huffman coding, data compression
- Machine learning, making decisions
- etc.

### Use

```javascript
  import { OnesyBinaryTree } from '@onesy/binary-tree';

  // Make a new binary tree instance
  const onesyBinaryTree = new OnesyBinaryTree();

  // Add a onesy node / value
  [4, 2, 7, 14, 1, 3, 5].map(value => onesyBinaryTree.add(value));

  // or use a make method or a static method
  onesyBinaryTree.make([4, 2, 7, 14, 1, 3, 5]);

  // Binary tree
         4
       /   \
      /     \
     2       7
    / \     / \
   1   3   5   14

  // Remove any value
  onesyBinaryTree.remove(2);

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
