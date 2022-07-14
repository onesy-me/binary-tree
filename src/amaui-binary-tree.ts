import is from '@amaui/utils/is';
import { TMethod } from '@amaui/models';

export type TArrayVariant = 'inorder' | 'preorder' | 'postorder';

export interface IAmauiNode {
  value: any;
  left?: AmauiNode;
  right?: AmauiNode;

  [p: string]: any;
}

export class AmauiNode implements IAmauiNode {
  [p: string]: any;

  public constructor(
    public value: any,
    public left?: AmauiNode,
    public right?: AmauiNode
  ) { }
}

export interface IAmauiBinaryTree {
  root?: AmauiNode;
}

export class AmauiBinaryTree implements IAmauiBinaryTree {
  public root: AmauiNode;

  public static make(value: any[]): AmauiBinaryTree { return new AmauiBinaryTree().make(value); }

  public static lowestCommonAncestor(value: AmauiNode | any, value1: AmauiNode | any, root: AmauiNode): AmauiNode | undefined {
    let lca: AmauiNode;

    const lowestCommonAncestorMethod = (amauiNode: AmauiNode) => {
      if (!amauiNode) return;

      const mid = amauiNode.value === (value instanceof AmauiNode ? value.value : value) || amauiNode.value === (value1 instanceof AmauiNode ? value1.value : value1);

      const left = lowestCommonAncestorMethod(amauiNode.left);
      const right = lowestCommonAncestorMethod(amauiNode.right);

      if (mid && left || mid && right || left && right) lca = amauiNode;

      return left || right || mid;
    };

    lowestCommonAncestorMethod(root);

    return lca;
  }

  public static maxDepth(amauiNode: AmauiNode): number {
    const maxDepthMethod = (value: AmauiNode): number => {
      if (value === undefined) return 0;

      return Math.max(1 + maxDepthMethod(value.left), 1 + maxDepthMethod(value.right));
    };

    return maxDepthMethod(amauiNode);
  }

  public static valid(value: AmauiBinaryTree): boolean {
    const isValid = (amauiNode: AmauiNode): boolean => {
      if (amauiNode === undefined) return true;
      if (amauiNode.left?.value >= amauiNode.value) return false;
      if (amauiNode.right?.value <= amauiNode.value) return false;

      return isValid(amauiNode.left) && isValid(amauiNode.right);
    };

    return isValid(value.root);
  }

  public static preorder(value: AmauiNode, method: TMethod): void {
    if (value !== undefined && is('function', method)) {
      method(value, value.left, value.right);

      this.preorder(value.left, method);
      this.preorder(value.right, method);
    }
  }

  public static inorder(value: AmauiNode, method: TMethod): void {
    if (value !== undefined && is('function', method)) {
      this.inorder(value.left, method);

      method(value, value.left, value.right);

      this.inorder(value.right, method);
    }
  }

  public static postorder(value: AmauiNode, method: TMethod): void {
    if (value !== undefined && is('function', method)) {
      this.postorder(value.left, method);
      this.postorder(value.right, method);

      method(value, value.left, value.right);
    }
  }

  public static min(value: AmauiNode): AmauiNode {
    let amauiNode: AmauiNode = value;

    while (amauiNode?.left !== undefined) amauiNode = amauiNode.left;

    return amauiNode;
  }

  public static max(value: AmauiNode): AmauiNode {
    let amauiNode: AmauiNode = value;

    while (amauiNode?.right !== undefined) amauiNode = amauiNode.right;

    return amauiNode;
  }

  public array(variant: TArrayVariant = 'preorder'): Array<any> {
    const value = [];

    if (AmauiBinaryTree[variant]) AmauiBinaryTree[variant](this.root, (amauiNode: AmauiNode) => value.push(amauiNode.value));

    return value;
  }

  public make(value: any[]): AmauiBinaryTree {
    if (is('array', value)) value.forEach(item => this.add(item));

    return this;
  }

  public add(value: AmauiNode | any): AmauiBinaryTree {
    const amauiNode = value instanceof AmauiNode ? value : new AmauiNode(value);

    if (!this.root) {
      this.root = amauiNode;

      return this;
    }

    let atmNode = this.root;

    while (atmNode) {
      if (amauiNode.value === atmNode.value) return this;

      // Left
      if (amauiNode.value < atmNode.value) {
        if (atmNode.left === undefined) {
          atmNode.left = amauiNode;

          return this;
        }

        atmNode = atmNode.left;
      }

      // Right
      if (amauiNode.value > atmNode.value) {
        if (atmNode.right === undefined) {
          atmNode.right = amauiNode;

          return this;
        }

        atmNode = atmNode.right;
      }
    }
  }

  public find(value: any): AmauiNode | undefined {
    if (!this.root) return;

    let atmNode = this.root;
    let amauiNode: AmauiNode;

    while (atmNode && !amauiNode) {
      if (value < atmNode.value) atmNode = atmNode.left;
      else if (value > atmNode.value) atmNode = atmNode.right;
      else amauiNode = atmNode;
    }

    return amauiNode;
  }

  public remove(value: any): void {
    this.root = this.removeNode(this.root, value);
  }

  public removeNode(amauiNode: AmauiNode, value: any): AmauiNode | undefined {
    if (amauiNode === undefined) return;

    if (value === amauiNode.value) {
      if (amauiNode.left === undefined && amauiNode.right === undefined) return;

      if (amauiNode.left === undefined) return amauiNode.right;

      if (amauiNode.right === undefined) return amauiNode.left;

      const atmNode = AmauiBinaryTree.min(amauiNode.right);

      amauiNode.value = atmNode.value;

      amauiNode.right = this.removeNode(amauiNode.right, atmNode.value);

      return amauiNode;
    }

    if (value < amauiNode.value) {
      amauiNode.left = this.removeNode(amauiNode.left, value);

      return amauiNode;
    }

    amauiNode.right = this.removeNode(amauiNode.right, value);

    return amauiNode;
  }

}
