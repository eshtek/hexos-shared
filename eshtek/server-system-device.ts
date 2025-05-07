import { VmPassthroughDeviceChoice, VmUsbPassthroughDeviceChoice } from "../truenas/webui/interfaces/vm-device.interface";

export interface ServerSystemDevice {
    name: string;
    guid: string;
    data: VmPassthroughDeviceChoice | VmUsbPassthroughDeviceChoice;
}

export interface ServerSystemGPU extends ServerSystemDevice {}
export interface ServerSystemAudio extends ServerSystemDevice {}
export interface ServerSystemUSB extends ServerSystemDevice {}
export interface ServerSystemPCI extends ServerSystemDevice {}

export interface ServerSystemDevices {
    gpu?: ServerSystemGPU[];
    audio?: ServerSystemAudio[];
    usb?: ServerSystemUSB[];
    pci?: ServerSystemPCI[];
}