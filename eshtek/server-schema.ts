// AUTO-GENERATED FILE - DO NOT EDIT

// Generated by ts-to-zod
import { z } from "zod";
import {
  ServerUserType,
  ServerStorageIcon,
  ServerStatusSupported,
  ServerStatusIcons,
  ServerFolderIcons,
  ServerAccess,
  FileAccess,
  ServerDriveLabel,
  ServerStatusType,
} from "./server";

export const serverUserTypeSchema = z.nativeEnum(ServerUserType);

export const serverUserSchema = z.object({
  username: z.string(),
  type: serverUserTypeSchema.optional(),
});

export const serverStorageIconSchema = z.nativeEnum(ServerStorageIcon);

export const serverStatusSupportedSchema = z.nativeEnum(ServerStatusSupported);

export const serverStatusIconsSchema = z.nativeEnum(ServerStatusIcons);

export const serverFolderIconsSchema = z.nativeEnum(ServerFolderIcons);

export const serverRecordSchema = z.object({
  hostid: z.string(),
  email: z.string().optional(),
  ipsid: z.string().optional(),
  apikey: z.string().optional(),
  lanip: z.string().optional(),
  wanip: z.string().optional(),
  nodehost: z.string().optional(),
  connected: z.union([z.literal("N"), z.literal("Y")]).optional(),
  servername: z.string().optional(),
  wizardcompleted: z.union([z.date(), z.string()]).optional(),
  lastconnected: z.union([z.date(), z.string()]).optional(),
});

export const serverAccessSchema = z.nativeEnum(ServerAccess);

export const fileAccessSchema = z.nativeEnum(FileAccess);

export const serverFolderUserSchema = z.object({
  access: z.array(fileAccessSchema),
  user: serverUserSchema,
});

export const serverDriveLabelSchema = z.nativeEnum(ServerDriveLabel);

export const serverStatusTypeSchema = z.nativeEnum(ServerStatusType);

export const serverStatusBasicsSchema = z.object({
  type: serverStatusTypeSchema,
  details: z.string().optional(),
  status: serverStatusSupportedSchema.optional(),
  statusIcon: serverStatusIconsSchema.optional(),
});

export const serverSystemDataSystemSchema = serverStatusBasicsSchema.extend({
  type: z.literal(ServerStatusType.SYSTEM),
  data: z.object({
    processor: z.string().optional(),
    memory: z.string().optional(),
  }),
});

export const serverSystemDataEmptySchema = serverStatusBasicsSchema.extend({
  type: z.union([
    z.literal(ServerStatusType.VIRTUALIZATION),
    z.literal(ServerStatusType.APPLICATIONS),
  ]),
});

const diskTypeSchema = z.any();

export const serverDriveSchema = z.object({
  details: z.string(),
  label: serverDriveLabelSchema,
  type: diskTypeSchema,
  size: z.string(),
  realsize: z.number(),
  devname: z.string(),
  icon: serverStorageIconSchema,
  statusIcon: serverStatusIconsSchema.optional(),
  status: z.string().optional(),
  temperature: z.number().optional(),
});

export const serversSchema = z.object({
  claimed: z.array(serverRecordSchema),
  configured: z.array(serverRecordSchema),
});

export const serverSystemDataStorageSchema = serverStatusBasicsSchema.extend({
  type: z.literal(ServerStatusType.STORAGE),
  data: z.object({
    drives: z.array(serverDriveSchema).optional(),
  }),
});

export const serverSystemDataSchema = z.union([
  serverSystemDataSystemSchema,
  serverSystemDataStorageSchema,
  serverSystemDataEmptySchema,
]);

export const serverSystemSchema = serverStatusBasicsSchema.extend({
  type: z.literal(ServerStatusType.SYSTEM_OVERVIEW),
  data: z.array(serverSystemDataSchema).optional(),
});

export const serverPoolSchema = z.object({
  icon: serverStorageIconSchema,
  label: z.string(),
  description: z.string().optional(),
  status: z.string(),
  useable_storage: z.string().optional(),
  drives: z.array(serverDriveSchema),
});

export const serverStorageSchema = z.object({
  pools: z.array(serverPoolSchema),
  unassigned: serverPoolSchema,
});

export const serverFolderSchema = z.object({
  label: z.string(),
  access: serverAccessSchema,
  pool: serverPoolSchema.optional(),
  users: z.array(serverFolderUserSchema).optional(),
});

export const serverFoldersSchema = z.object({
  user: z.array(serverFolderSchema),
  system: z.array(serverFolderSchema),
});