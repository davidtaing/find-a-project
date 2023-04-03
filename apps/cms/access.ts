import { Session } from "./types";

export const isAdmin = ({ session }: { session: Session }) =>
  session?.data.isAdmin;
