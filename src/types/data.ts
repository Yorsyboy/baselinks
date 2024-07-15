export enum UserAccountType {
    GUEST = "guest",
    ADMIN = "admin"
}

export interface User {
    id: string
    email: string
    password: string
    accountType: UserAccountType
}

  
export interface Review {
    id: string
    name: string
    date: string
    apartment: string
    star: number
    review: string
  }
