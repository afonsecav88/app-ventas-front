export interface Usuario {
   id?: number;
   username?: string;
   email: string ;
   password: string ;
   password2?: string;
   role?: string;
   token?: string;
}
