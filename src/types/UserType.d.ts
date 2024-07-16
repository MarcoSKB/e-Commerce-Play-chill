export type UserType = {
  id: string;
  email: string;
  emailVerified: boolean;
  email_verified: boolean;
  name?: string | null;
  lastName?: string | null;
  username?: string | null;
  birthday?: string | null;
  hashedPassword: string;
  image?: string | null;
  user: string;
};
