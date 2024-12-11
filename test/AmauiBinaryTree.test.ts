/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import { OnesyBinaryTree, OnesyNode } from '../src';

group('OnesyBinaryTree', () => {

  to('OnesyNode', async () => {
    const value = new OnesyNode('a', new OnesyNode(1), new OnesyNode(4));

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.OnesyBinaryTree.OnesyNode('a', new window.OnesyBinaryTree.OnesyNode(1), new window.OnesyBinaryTree.OnesyNode(4));

      return [value.value, value.left.value, value.right.value];
    });
    const valueNode = [value.value, value.left.value, value.right.value];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql(['a', 1, 4]));
  });

  group('OnesyBinaryTree', async () => {

    to('make', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return value.array();
      });
      const valueNode = value.array();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1, 3, 7, 5]));
    });

    to('lowestCommonAncestor', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return [
          window.OnesyBinaryTree.OnesyBinaryTree.lowestCommonAncestor(1, 7, value.root).value,
          window.OnesyBinaryTree.OnesyBinaryTree.lowestCommonAncestor(1, 14, value.root),
        ];
      });
      const valueNode = [
        OnesyBinaryTree.lowestCommonAncestor(1, 7, value.root).value,
        OnesyBinaryTree.lowestCommonAncestor(1, 14, value.root),
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        4,
        undefined,
      ]));
    });

    to('maxDepth', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return [
          window.OnesyBinaryTree.OnesyBinaryTree.maxDepth(value.root),
          window.OnesyBinaryTree.OnesyBinaryTree.maxDepth(value.root.left.left),
          window.OnesyBinaryTree.OnesyBinaryTree.maxDepth(value.root.left.right),
        ];
      });
      const valueNode = [
        OnesyBinaryTree.maxDepth(value.root),
        OnesyBinaryTree.maxDepth(value.root.left.left),
        OnesyBinaryTree.maxDepth(value.root.left.right),
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        3,
        0,
        1,
      ]));
    });

    to('valid', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const value1 = new OnesyBinaryTree();

      value1.root = new OnesyNode(4);
      value1.root.left = new OnesyNode(14);
      value1.root.right = new OnesyNode(1);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const value1 = new window.OnesyBinaryTree.OnesyBinaryTree();

        value1.root = new window.OnesyBinaryTree.OnesyNode(4);
        value1.root.left = new window.OnesyBinaryTree.OnesyNode(14);
        value1.root.right = new window.OnesyBinaryTree.OnesyNode(1);

        return [
          window.OnesyBinaryTree.OnesyBinaryTree.valid(value),
          window.OnesyBinaryTree.OnesyBinaryTree.valid(value1),
        ];
      });
      const valueNode = [
        OnesyBinaryTree.valid(value),
        OnesyBinaryTree.valid(value1),
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        true,
        false,
      ]));
    });

    to('preorder', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const array = [];

      OnesyBinaryTree.preorder(value.root, item => array.push(item.value));

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const array = [];

        window.OnesyBinaryTree.OnesyBinaryTree.preorder(value.root, item => array.push(item.value));

        return array;
      });
      const valueNode = array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1, 3, 7, 5]));
    });

    to('inorder', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const array = [];

      OnesyBinaryTree.inorder(value.root, item => array.push(item.value));

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const array = [];

        window.OnesyBinaryTree.OnesyBinaryTree.inorder(value.root, item => array.push(item.value));

        return array;
      });
      const valueNode = array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([1, 3, 4, 5, 7]));
    });

    to('postorder', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const array = [];

      OnesyBinaryTree.postorder(value.root, item => array.push(item.value));

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const array = [];

        window.OnesyBinaryTree.OnesyBinaryTree.postorder(value.root, item => array.push(item.value));

        return array;
      });
      const valueNode = array;
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([3, 1, 5, 7, 4]));
    });

    to('min', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return [
          window.OnesyBinaryTree.OnesyBinaryTree.min(value.root).value,
          window.OnesyBinaryTree.OnesyBinaryTree.min(value.root.left).value,
          window.OnesyBinaryTree.OnesyBinaryTree.min(value.root.left.left),
          window.OnesyBinaryTree.OnesyBinaryTree.min(value.root.right).value,
        ];
      });
      const valueNode = [
        OnesyBinaryTree.min(value.root).value,
        OnesyBinaryTree.min(value.root.left).value,
        OnesyBinaryTree.min(value.root.left.left),
        OnesyBinaryTree.min(value.root.right).value,
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
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return [
          window.OnesyBinaryTree.OnesyBinaryTree.max(value.root).value,
          window.OnesyBinaryTree.OnesyBinaryTree.max(value.root.left).value,
          window.OnesyBinaryTree.OnesyBinaryTree.max(value.root.right.right),
          window.OnesyBinaryTree.OnesyBinaryTree.max(value.root.right).value,
        ];
      });
      const valueNode = [
        OnesyBinaryTree.max(value.root).value,
        OnesyBinaryTree.max(value.root.left).value,
        OnesyBinaryTree.max(value.root.right.right),
        OnesyBinaryTree.max(value.root.right).value,
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

  group('onesyBinaryTree', async () => {

    to('make', async () => {
      const value = new OnesyBinaryTree().make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = new window.OnesyBinaryTree.OnesyBinaryTree().make([4, 1, 7, 3, 5, 4, 7]);

        return value.array();
      });
      const valueNode = value.array();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1, 3, 7, 5]));
    });

    group('array', async () => {

      to('default', async () => {
        const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

          return value.array();
        });
        const valueNode = value.array();
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([4, 1, 3, 7, 5]));
      });

      to('preorder', async () => {
        const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

          return value.array('preorder');
        });
        const valueNode = value.array('preorder');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([4, 1, 3, 7, 5]));
      });

      to('inorder', async () => {
        const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

          return value.array('inorder');
        });
        const valueNode = value.array('inorder');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([1, 3, 4, 5, 7]));
      });

      to('postorder', async () => {
        const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        const valueBrowsers = await evaluate((window: any) => {
          const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

          return value.array('postorder');
        });
        const valueNode = value.array('postorder');
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([3, 1, 5, 7, 4]));
      });

    });

    to('add', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      value.add(4);
      value.add(14);
      value.add(new OnesyNode(40));

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        value.add(4);
        value.add(14);
        value.add(new window.OnesyBinaryTree.OnesyNode(40));

        return value.array();
      });
      const valueNode = value.array();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1, 3, 7, 5, 14, 40]));
    });

    to('find', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        return [value.find(4).value, value.find(1).value, value.find(14)];
      });
      const valueNode = [value.find(4).value, value.find(1).value, value.find(14)];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 1, undefined]));
    });

    to('remove', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      value.remove(1);
      value.remove(5);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

        value.remove(1);
        value.remove(5);

        return value.array();
      });
      const valueNode = value.array();
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([4, 3, 7]));
    });

    to('removeNode', async () => {
      const value = OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

      value.removeNode(value.root, 3);
      value.removeNode(value.root, 7);
      value.removeNode(value.root, 5);

      const valueBrowsers = await evaluate((window: any) => {
        const value = window.OnesyBinaryTree.OnesyBinaryTree.make([4, 1, 7, 3, 5, 4, 7]);

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
