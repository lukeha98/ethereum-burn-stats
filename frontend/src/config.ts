import {
  DefaultSettingValue,
  SettingConfig,
} from "./contexts/SettingsContext";

export const BooleanSetting: SettingConfig = {
  verify: (value: any): boolean => (value === "true" || value === "false" || value === true || value === false),
  convert: (value: string): boolean => (value === "true")
}

export const IntegerSetting: SettingConfig = {
  verify: (value: any): boolean => !isNaN(value),
  convert: (value: string): number => parseInt(value)
}

export interface EthereumNetwork {
  name: string
  key: string
  genesis: number
  chainId: number
}

export const EthereumNetworkOptions: {
  [key: string]: EthereumNetwork
} = {
  mainnet: { name: "Mainnet", key: "mainnet", genesis: 12965000, chainId: 1},
  staging: { name: "Staging", key: "staging", genesis: 12965000, chainId: 1},
};

export enum Setting {
  maxBlocksToRender = "maxBlocksToRender",
  doNotShowChart = "doNotShowChart"
}

export const defaultNetwork = EthereumNetworkOptions['mainnet']
export const defaultSettings: { [key: string]: DefaultSettingValue } =
  {
    [Setting.maxBlocksToRender]: {
      config: IntegerSetting,
      defaultValue: 50,
    },
    [Setting.doNotShowChart]: {
      config: BooleanSetting,
      defaultValue: false,
    },
  };

// Max WebSocket Reconnection Attempts.
export const maxReconnectionAttempts = 5;

// Sync version with server.
export const serverVersion = "1.0.0";
