/**
 * Server Status
 *
 * Three columns encode server state:
 *   status          - "Is the main server connected to TrueNAS and/or the local node?" (4 values below)
 *   userId          - "Who owns this server?"                                          (null = unclaimed, string = claimed)
 *   provisionStatus - "Has provisioning started, failed, completed?"                   (4 values below)
 *
 * Everything else is derived:
 *   Unclaimed (Offline)         → OFFLINE && userId == null
 *   Unclaimed (Online)          → (TN_ONLY || ONLINE) && userId == null
 *   Claimed (Offline, not prov) → OFFLINE && userId != null && provisionStatus == NOT_STARTED
 *   Claimed (Online, not prov)  → (TN_ONLY || ONLINE) && userId != null && provisionStatus == NOT_STARTED
 *   Provisioning                → (TN_ONLY || ONLINE) && userId != null && provisionStatus == IN_PROGRESS
 *   Provisioned (Online)        → ONLINE
 *   Provisioned (Offline)       → OFFLINE && userId != null && provisionStatus == SUCCESS
 *   Provisioning progress?      → Read from main tasks (PROVISION_* children of PROVISIONING)
 *
 * Transitions:
 *   TN → Main Connect
 *      If no DB server, create with userId == null & return early
 *      If no API key, return early
 *      If auth fails, Clear userId & return early
 *      Call syncServerStatus()
 *   TN → Main Disconnect   → Call syncServerStatus()
 *   Claim                  → Set userId & apiKey
 *   Configure Setup        → Set provisionStatus to IN_PROGRESS
 *   Provision Finish       → Set provisionStatus to SUCCESS/FAILED & Call syncServerStatus()
 *   Hex → Main Connect     → Call syncServerStatus()
 *   Hex → Main Disconnect  → Call syncServerStatus()
 *   Reset/Unclaim          → Clear userId & apiKey & Set provisionStatus to NOT_STARTED
 *
 * syncServerStatus
 *   Updates status based on TN connection and/or Hex connection
 *   If provisionStatus == SUCCESS && TN_ONLY
 *     if docker is running
 *       Put them back into setup
 *     else
 *       Attempt to reinstall/restart/start HexOS app
 */

export enum ServerProvisionStatus {
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export enum ServerStatus {
  OFFLINE = "OFFLINE",
  TN_ONLY = "TN_ONLY",
  LOCAL_ONLY = "LOCAL_ONLY",
  ONLINE = "ONLINE",
}

export function isServerConnected(status: ServerStatus): boolean {
  return status === ServerStatus.ONLINE;
}

export function isServerInSetup(status: ServerProvisionStatus): boolean {
  return status !== ServerProvisionStatus.SUCCESS;
}
