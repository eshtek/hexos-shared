import type { App } from '../../interfaces/app.interface';
import type { ContainerImage } from '../../interfaces/container-image.interface';
import type { Group } from '../../interfaces/group.interface';
import type { Pool } from '../../interfaces/pool.interface';
import type { User } from '../../interfaces/user.interface';
import type { VirtualMachine } from '../../interfaces/virtual-machine.interface';

/**
 * Directory of compatible API call and subscribe methods.
 */
export interface ApiCallAndSubscribeEventDirectory {
    'vm.query': { response: VirtualMachine };
    'user.query': { response: User };
    'pool.query': { response: Pool };
    'group.query': { response: Group };
    'app.image.query': { response: ContainerImage };
    'app.query': { response: App };
}

export type ApiCallAndSubscribeMethod = keyof ApiCallAndSubscribeEventDirectory;
export type ApiCallAndSubscribeResponse<T extends ApiCallAndSubscribeMethod> = ApiCallAndSubscribeEventDirectory[T]['response'];
