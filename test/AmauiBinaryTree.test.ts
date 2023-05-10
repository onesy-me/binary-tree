/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { evaluate } from '../utils/js/test/utils';

import { AmauiBinaryTree, AmauiNode } from '../src';

group('AmauiBinaryTree', () => {

  to('AmauiNode', async () => {
    const value = new AmauiNode('a', new AmauiNode(1), new AmauiNode(4));

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.AmauiBinaryTree.AmauiNode('a', new window.AmauiBinaryTree.AmauiNode(1), new window.AmauiBinaryTree.AmauiNode(4));

      return [value.value, value.left.value, value.right.value];
    });
    const valueNode = [value.value, value.left.value, value.right.value];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql(['a', 1, 4]));
  });

  group('AmauiBinaryTree', async () => {

    to('make', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return value.array();
      });
      const valueNode = value.array();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1, 3, 7, 5]));
    });

    to('lowestCommonAncestor', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return [
          window.AmauiBinaryTree.AmauiBinaryTree.lowestCommonAncestor(1, 7, value.root).value,
          window.AmauiBinaryTree.AmauiBinaryTree.lowestCommonAncestor(1, 14, value.root),
        ];
      });
      const valueNode = [
        AmauiBinaryTree.lowestCommonAncestor(1, 7, value.root).value,
        AmauiBinaryTree.lowestCommonAncestor(1, 14, value.root),
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        4,
        undefined,
      ]));
    });

    to('maxDepth', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return [
          window.AmauiBinaryTree.AmauiBinaryTree.maxDepth(value.root),
          window.AmauiBinaryTree.AmauiBinaryTree.maxDepth(value.root.left.left),
          window.AmauiBinaryTree.AmauiBinaryTree.maxDepth(value.root.left.right),
        ];
      });
      const valueNode = [
        AmauiBinaryTree.maxDepth(value.root),
        AmauiBinaryTree.maxDepth(value.root.left.left),
        AmauiBinaryTree.maxDepth(value.root.left.right),
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        3,
        0,
        1,
      ]));
    });

    to('valid', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const value1 = new AmauiBinaryTree();

      value1.root = new AmauiNode(4);
      value1.root.left = new AmauiNode(14);
      value1.root.right = new AmauiNode(1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const value1 = new window.AmauiBinaryTree.AmauiBinaryTree();

        value1.root = new window.AmauiBinaryTree.AmauiNode(4);
        value1.root.left = new window.AmauiBinaryTree.AmauiNode(14);
        value1.root.right = new window.AmauiBinaryTree.AmauiNode(1);

        return [
          window.AmauiBinaryTree.AmauiBinaryTree.valid(value),
          window.AmauiBinaryTree.AmauiBinaryTree.valid(value1),
        ];
      });
      const valueNode = [
        AmauiBinaryTree.valid(value),
        AmauiBinaryTree.valid(value1),
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        true,
        false,
      ]));
    });

    to('preorder', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const array = [];

      AmauiBinaryTree.preorder(value.root, item => array.push(item.value));

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const array = [];

        window.AmauiBinaryTree.AmauiBinaryTree.preorder(value.root, item => array.push(item.value));

        return array;
      });
      const valueNode = array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1, 3, 7, 5]));
    });

    to('inorder', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const array = [];

      AmauiBinaryTree.inorder(value.root, item => array.push(item.value));

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const array = [];

        window.AmauiBinaryTree.AmauiBinaryTree.inorder(value.root, item => array.push(item.value));

        return array;
      });
      const valueNode = array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 3, 4, 5, 7]));
    });

    to('postorder', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const array = [];

      AmauiBinaryTree.postorder(value.root, item => array.push(item.value));

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const array = [];

        window.AmauiBinaryTree.AmauiBinaryTree.postorder(value.root, item => array.push(item.value));

        return array;
      });
      const valueNode = array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([3, 1, 5, 7, 4]));
    });

    to('min', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return [
          window.AmauiBinaryTree.AmauiBinaryTree.min(value.root).value,
          window.AmauiBinaryTree.AmauiBinaryTree.min(value.root.left).value,
          window.AmauiBinaryTree.AmauiBinaryTree.min(value.root.left.left),
          window.AmauiBinaryTree.AmauiBinaryTree.min(value.root.right).value,
        ];
      });
      const valueNode = [
        AmauiBinaryTree.min(value.root).value,
        AmauiBinaryTree.min(value.root.left).value,
        AmauiBinaryTree.min(value.root.left.left),
        AmauiBinaryTree.min(value.root.right).value,
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        1,
        1,
        undefined,
        5,
      ]));
    });

    to('max', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return [
          window.AmauiBinaryTree.AmauiBinaryTree.max(value.root).value,
          window.AmauiBinaryTree.AmauiBinaryTree.max(value.root.left).value,
          window.AmauiBinaryTree.AmauiBinaryTree.max(value.root.right.right),
          window.AmauiBinaryTree.AmauiBinaryTree.max(value.root.right).value,
        ];
      });
      const valueNode = [
        AmauiBinaryTree.max(value.root).value,
        AmauiBinaryTree.max(value.root.left).value,
        AmauiBinaryTree.max(value.root.right.right),
        AmauiBinaryTree.max(value.root.right).value,
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        7,
        3,
        undefined,
        7,
      ]));
    });

  });

  group('amauiBinaryTree', async () => {

    to('make', async () => {
      const value = new AmauiBinaryTree().make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.AmauiBinaryTree.AmauiBinaryTree().make([4, 1, 7, 3, 5, 4, 7]);

        return value.array();
      });
      const valueNode = value.array();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1, 3, 7, 5]));
    });

    group('array', async () => {

      to('default', async () => {
        const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

          return value.array();
        });
        const valueNode = value.array();
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([4, 1, 3, 7, 5]));
      });

      to('preorder', async () => {
        const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

          return value.array('preorder');
        });
        const valueNode = value.array('preorder');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([4, 1, 3, 7, 5]));
      });

      to('inorder', async () => {
        const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

          return value.array('inorder');
        });
        const valueNode = value.array('inorder');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([1, 3, 4, 5, 7]));
      });

      to('postorder', async () => {
        const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

          return value.array('postorder');
        });
        const valueNode = value.array('postorder');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([3, 1, 5, 7, 4]));
      });

    });

    to('add', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      value.add(4);
      value.add(14);
      value.add(new AmauiNode(40));

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        value.add(4);
        value.add(14);
        value.add(new window.AmauiBinaryTree.AmauiNode(40));

        return value.array();
      });
      const valueNode = value.array();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1, 3, 7, 5, 14, 40]));
    });

    to('find', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return [value.find(4).value, value.find(1).value, value.find(14)];
      });
      const valueNode = [value.find(4).value, value.find(1).value, value.find(14)];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1, undefined]));
    });

    to('remove', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      value.remove(1);
      value.remove(5);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        value.remove(1);
        value.remove(5);

        return value.array();
      });
      const valueNode = value.array();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 3, 7]));
    });

    to('removeNode', async () => {
      const value = AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      value.removeNode(value.root, 3);
      value.removeNode(value.root, 7);
      value.removeNode(value.root, 5);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.AmauiBinaryTree.AmauiBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        value.removeNode(value.root, 3);
        value.removeNode(value.root, 7);
        value.removeNode(value.root, 5);

        return value.array();
      });
      const valueNode = value.array();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1]));
    });

  });

});
