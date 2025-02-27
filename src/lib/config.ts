import { base32 } from "@scure/base";
export const SHARED_SECRET = "VXYLMUZAMMRWT5LFWBVDXCLYPJAMPZ5A";
export const SHARED_SECRET_BIN = [...base32.decode(SHARED_SECRET)];
