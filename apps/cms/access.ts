import { Session } from "./types";

export const isAdmin = ({ session }: { session: Session }) =>
  session?.data.isAdmin;

export const canReadUsers = ({ session }: { session: Session }) => {
  if (!session) return false;

  if (session?.data.isAdmin) return true;

  return { id: { equals: session.itemId } };
};
