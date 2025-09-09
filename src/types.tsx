// src/types.ts
export type SignupStatus = 'new' | 'accepted' | 'declined' | 'outdated';

export interface Signup {
  id: string;
  firstName: string;
  lastName: string;
  annotation?: string;
  attendance: boolean; // true = kommt, false = kommt nicht
  status: SignupStatus;
  createdAt: string;
  lastChangedAt: string;
}
