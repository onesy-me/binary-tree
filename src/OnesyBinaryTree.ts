import is from '@onesy/utils/is';
import { TMethod } from '@onesy/models';

export type TArrayVariant = 'inorder' | 'preorder' | 'postorder';

export interface IOnesyNode {
  value: any;
  left?: OnesyNode;
  right?: OnesyNode;

  [p: string]: any;
}

export class OnesyNode implements IOnesyNode {
  [p: string]: any;

  public constructor(
    public value: any,
    public left?: OnesyNode,
    public right?: OnesyNode
  ) { }
}

export interface IOnesyBinaryTree {
  root?: OnesyNode;
}

export class OnesyBinaryTree implements IOnesyBinaryTree {
  public root: OnesyNode;

  public static make(value: any[]): OnesyBinaryTree { return new OnesyBinaryTree().make(value); }

  public static lowestCommonAncestor(value: OnesyNode | any, value1: OnesyNode | any, root: OnesyNode): OnesyNode | undefined {
    let lca: OnesyNode;

    const lowestCommonAncestorMethod = (onesyNode: OnesyNode) => {
      if (!onesyNode) return;

      const mid = onesyNode.value === (value instanceof OnesyNode ? value.value : value) || onesyNode.value === (value1 instanceof OnesyNode ? value1.value : value1);

      const left = lowestCommonAncestorMethod(onesyNode.left);
      const right = lowestCommonAncestorMethod(onesyNode.right);

      if (mid && left || mid && right || left && right) lca = onesyNode;

      return left || right || mid;
    };

    lowestCommonAncestorMethod(root);

    return lca;
  }

  public static maxDepth(onesyNode: OnesyNode): number {
    const maxDepthMethod = (value: OnesyNode): number => {
      if (value === undefined) return 0;

      return Math.max(1 + maxDepthMethod(value.left), 1 + maxDepthMethod(value.right));
    };

    return maxDepthMethod(onesyNode);
  }

  public static valid(value: OnesyBinaryTree): boolean {
    const isValid = (onesyNode: OnesyNode): boolean => {
      if (onesyNode === undefined) return true;
      if (onesyNode.left?.value >= onesyNode.value) return false;
      if (onesyNode.right?.value <= onesyNode.value) return false;

      return isValid(onesyNode.left) && isValid(onesyNode.right);
    };

    return isValid(value.root);
  }

  public static preorder(value: OnesyNode, method: TMethod): void {
    if (value !== undefined && is('function', method)) {
      method(value, value.left, value.right);

      this.preorder(value.left, method);
      this.preorder(value.right, method);
    }
  }

  public static inorder(value: OnesyNode, method: TMethod): void {
    if (value !== undefined && is('function', method)) {
      this.inorder(value.left, method);

      method(value, value.left, value.right);

      this.inorder(value.right, method);
    }
  }

  public static postorder(value: OnesyNode, method: TMethod): void {
    if (value !== undefined && is('function', method)) {
      this.postorder(value.left, method);
      this.postorder(value.right, method);

      method(value, value.left, value.right);
    }
  }

  public static min(value: OnesyNode): OnesyNode {
    let onesyNode: OnesyNode = value;

    while (onesyNode?.left !== undefined) onesyNode = onesyNode.left;

    return onesyNode;
  }

  public static max(value: OnesyNode): OnesyNode {
    let onesyNode: OnesyNode = value;

    while (onesyNode?.right !== undefined) onesyNode = onesyNode.right;

    return onesyNode;
  }

  public array(variant: TArrayVariant = 'preorder'): Array<any> {
    const value = [];

    if (OnesyBinaryTree[variant]) OnesyBinaryTree[variant](this.root, (onesyNode: OnesyNode) => value.push(onesyNode.value));

    return value;
  }

  public make(value: any[]): OnesyBinaryTree {
    if (is('array', value)) value.forEach(item => this.add(item));

    return this;
  }

  public add(value: OnesyNode | any): OnesyBinaryTree {
    const onesyNode = value instanceof OnesyNode ? value : new OnesyNode(value);

    if (!this.root) {
      this.root = onesyNode;

      return this;
    }

    let atmNode = this.root;

    while (atmNode) {
      if (onesyNode.value === atmNode.value) return this;

      // Left
      if (onesyNode.value < atmNode.value) {
        if (atmNode.left === undefined) {
          atmNode.left = onesyNode;

          return this;
        }

        atmNode = atmNode.left;
      }

      // Right
      if (onesyNode.value > atmNode.value) {
        if (atmNode.right === undefined) {
          atmNode.right = onesyNode;

          return this;
        }

        atmNode = atmNode.right;
      }
    }
  }

  public find(value: any): OnesyNode | undefined {
    if (!this.root) return;

    let atmNode = this.root;
    let onesyNode: OnesyNode;

    while (atmNode && !onesyNode) {
      if (value < atmNode.value) atmNode = atmNode.left;
      else if (value > atmNode.value) atmNode = atmNode.right;
      else onesyNode = atmNode;
    }

    return onesyNode;
  }

  public remove(value: any): void {
    this.root = this.removeNode(this.root, value);
  }

  public removeNode(onesyNode: OnesyNode, value: any): OnesyNode | undefined {
    if (onesyNode === undefined) return;

    if (value === onesyNode.value) {
      if (onesyNode.left === undefined && onesyNode.right === undefined) return;

      if (onesyNode.left === undefined) return onesyNode.right;

      if (onesyNode.right === undefined) return onesyNode.left;

      const atmNode = OnesyBinaryTree.min(onesyNode.right);

      onesyNode.value = atmNode.value;

      onesyNode.right = this.removeNode(onesyNode.right, atmNode.value);

      return onesyNode;
    }

    if (value < onesyNode.value) {
      onesyNode.left = this.removeNode(onesyNode.left, value);

      return onesyNode;
    }

    onesyNode.right = this.removeNode(onesyNode.right, value);

    return onesyNode;
  }

}
