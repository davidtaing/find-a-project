import { Session } from "./types";

export const isAdmin = ({ session }: { session: Session }) =>
  session?.data.isAdmin;

export const canReadUsers = ({ session }: { session: Session }) => {
  if (!session) return false;

  if (session?.data.isAdmin) return true;

  return { id: { equals: session.itemId } };
};

export const canReadProfiles = ({ session }: { session: Session }) => {
  if (!session) return false;

  if (session?.data.isAdmin) return true;

  return { id: { equals: session.itemId } };
};

export const canUpdateProjects = ({ session }: { session: Session }) => {
  if (!session) return false;

  if (session?.data.isAdmin) return true;

  return { id: { equals: session.itemId } };
};

export const canDeleteProjects = ({ session }: { session: Session }) => {
  if (!session) return false;

  if (session?.data.isAdmin) return true;

  return { id: { equals: session.itemId } };
};
