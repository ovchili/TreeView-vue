type TId = string | number;

export interface TreeItem {
  id: TId;
  parent: TId | null;
  label: string;
  [key: string]: any;
}

export interface ITreeStore {
  getAll(): TreeItem[];
  getitem(id: TId): TreeItem | undefined;
  getChildren(id: TId): TreeItem[];
  getAllChildren(id: TId): TreeItem[];
  getAllParents(id: TId): TreeItem[];
  addItem(item: TreeItem): void;
  removeItem(id: TId): void;
  updateItem(item: TreeItem): void;
}
