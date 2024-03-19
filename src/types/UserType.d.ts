export type UserType = {
  id: string;
  email: string;
  emailVerified: boolean;
  email_verified: boolean;
  name?: string | null;
  username?: string | null;
  hashedPassword: string;
  image?: string | null;
  user: string;
};
