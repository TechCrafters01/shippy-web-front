import Client, { Local, type auth } from "./encore.service";

const TOKEN_STORAGE_KEY = "shippy_token";
const USER_STORAGE_KEY = "shippy_user";
const API_TARGET = process.env.NEXT_PUBLIC_ENCORE_API_URL || Local;

export type LoginUser = NonNullable<auth.LoginResponse["user"]>;

function getClient() {
  return new Client(API_TARGET);
}

export async function loginWithPassword(identifier: string, password: string) {
  const response = await getClient().auth.login({ identifier, password });

  if (response.success && response.token && response.user && typeof window !== "undefined") {
    localStorage.setItem(TOKEN_STORAGE_KEY, response.token);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.user));
  }

  return response;
}

export function getStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function getStoredUser(): LoginUser | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(USER_STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as LoginUser;
  } catch {
    return null;
  }
}

export function clearAuthSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(USER_STORAGE_KEY);
}
