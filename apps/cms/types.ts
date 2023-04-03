export type Session = {
  itemId: string;
  listKey: string;
  data: {
    id: string;
    isAdmin: boolean;
    name: string;
  };
};
