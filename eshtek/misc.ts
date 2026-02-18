export interface IP {
    ip: string;
    ipv6?: string;
}

export interface ConnectionState {
    isMainConnected: boolean;
    mode: "local" | "main" | "both";
    mainDeckUrl: string;
    ip: IP;
}