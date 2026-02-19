/**
 * Server Status — 6 values representing what phase the server is in.
 *
 * Two columns encode server state:
 *   status  — "What phase is this server in?"  (6 values below)
 *   userId  — "Who owns this server?"          (null = unclaimed, string = claimed)
 *
 * Everything else is derived:
 *   Unclaimed?              → userId === null
 *   In setup?               → isServerInSetup(status)
 *   Operational?            → isServerConnected(status)
 *   Provisioning progress?  → Read from main tasks (PROVISION_* children of PROVISIONING)
 *
 * Status transitions:
 *   Server discovered    → OFFLINE (userId null)
 *   Claim                → SETUP
 *   Start provisioning   → PROVISIONING
 *   Provisioning done    → OFFLINE → syncServerStatus → ONLINE / WAIT_FOR_LOCAL_NODE / etc.
 *   Reset / disconnect   → OFFLINE (userId cleared)
 *
 * syncServerStatus (post-setup only, guarded by isServerInSetup + userId):
 *   No TN connection     → OFFLINE
 *   Docker not running   → WAIT_FOR_LOCAL_NODE
 *   HexOS app missing    → REINSTALL_HEXOS (auto-recovery)
 *   No hex connection    → WAIT_FOR_LOCAL_NODE
 *   All good             → ONLINE
 */
export enum ServerStatus {
  OFFLINE = "OFFLINE",
  CLAIMED = "CLAIMED",
  PROVISIONING = "PROVISIONING",
  ONLINE = "ONLINE",
  WAIT_FOR_LOCAL_NODE = "WAIT_FOR_LOCAL_NODE",
  REINSTALL_HEXOS = "REINSTALL_HEXOS",
}

export function isServerConnected(status?: string): boolean {
  // CLAIMED and PROVISIONING have a TrueNAS connection but no local node —
  // the frontend should NOT connect WebSocket or enable dashboard features.
  return status === ServerStatus.ONLINE || status === ServerStatus.WAIT_FOR_LOCAL_NODE || status === ServerStatus.REINSTALL_HEXOS;
}

export function isServerInSetup(status?: string): boolean {
  return status === ServerStatus.CLAIMED || status === ServerStatus.PROVISIONING;
}