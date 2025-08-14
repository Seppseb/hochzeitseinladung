// src/types.ts
export type SignupState = 'neu' | 'angenommen' | 'abgelehnt' | 'kommt nicht';

export interface Signup {
  id: string;
  firstName: string;
  lastName: string;
  partner: boolean;
  annotation?: string;
  attendance: boolean; // true = kommt, false = kommt nicht
  state: SignupState;
}
