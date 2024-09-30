import { createId } from "@paralleldrive/cuid2";

export type Child = {
  type: "child";
  id: string;
  component: React.ReactNode;
};

export type Root = {
  type: "root";
  id: string;
  leaves: Array<Child | Root>;
};

export const getConfig = (components: React.ReactNode[]): Root => {
  if (components.length === 1 || components.length === 2) {
    return {
      type: "root",
      id: createId(),
      leaves: components.map((component) => ({
        type: "child",
        id: createId(),
        component,
      })),
    };
  }

  return {
    type: "root",
    id: createId(),
    leaves: [
      { type: "child", id: createId(), component: components[0] },
      getConfig(components.slice(1)),
    ],
  };
};

export function addComponent(
  config: Root,
  newComponent: React.ReactNode,
): Root {
  const newChild = {
    type: "child",
    id: createId(),
    component: newComponent,
  } as Child;

  if (config.leaves.length === 0) {
    return {
      type: "root",
      id: createId(),
      leaves: [newChild],
    };
  }

  if (config.leaves.length === 1) {
    return {
      ...config,
      leaves: [...config.leaves, newChild],
    };
  }

  if (
    config.leaves.length === 2 &&
    config.leaves.every((leaf) => leaf.type === "child")
  ) {
    const [firstChild, secondChild] = config.leaves;

    const newRoot: Root = {
      type: "root",
      id: createId(),
      leaves: [secondChild, newChild],
    };

    return {
      ...config,
      leaves: [firstChild, newRoot],
    };
  }

  return {
    ...config,
    leaves: config.leaves.map((leaf) => {
      if (leaf.type === "root") {
        return addComponent(leaf, newComponent);
      } else {
        return leaf;
      }
    }),
  };
}

export const removeComponent = (config: Root, id: string): Root | null => {
  if (config.leaves.length === 0) {
    return null;
  }

  if (config.leaves.length === 1) {
    const leaf = config.leaves[0];
    if (leaf.type === "child") {
      if (leaf.id === id) {
        return { ...config, leaves: [] };
      }
      return config;
    }
    if (leaf.type === "root") {
      const result = removeComponent(leaf, id);
      if (result === null) {
        return null;
      }
      if (result.leaves.length === 1) {
        return { ...config, leaves: result.leaves };
      }
      return { ...config, leaves: [result] };
    }
  }

  const newLeaves = config.leaves
    .map((leaf) => {
      if (leaf.type === "child") {
        return leaf.id === id ? null : leaf;
      }
      const result = removeComponent(leaf, id);
      if (result === null) {
        return null;
      }
      if (result.leaves.length === 1) {
        return result.leaves[0];
      }
      return result;
    })
    .filter((leaf) => leaf !== null);

  if (newLeaves.length === 0) {
    return null;
  }

  if (newLeaves.length === 1 && newLeaves[0].type === "root") {
    return newLeaves[0];
  }

  return { ...config, leaves: newLeaves };
};
