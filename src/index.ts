import { DeviceEventEmitter } from 'react-native';
import { CryptoAccountComponentConfig } from './types';

export class CryptoAccountComponent {
  private static _instance: CryptoAccountComponent = new CryptoAccountComponent();

  private _configs?: CryptoAccountComponentConfig;

  constructor() {
    if (CryptoAccountComponent._instance) {
      throw new Error(
        'Error: Instantiation failed: Use CryptoAccountComponent.instance() instead of new.'
      );
    }
    CryptoAccountComponent._instance = this;
  }

  public static instance(): CryptoAccountComponent {
    return CryptoAccountComponent._instance;
  }

  public configure(configs: CryptoAccountComponentConfig) {
    return new Promise<void>((resolve) => {
      this._configs = configs;
      resolve();
    });
  }

  public getConfigs() {
    if (this._configs === undefined) {
      throw new Error('Error: CryptoAccountComponent must be configured before using');
    }
    return this._configs;
  }

  public addSessionListener(listener: (data: any) => void) {
    DeviceEventEmitter.addListener('cryptoAccountComponent.session.expired', listener);
  }

  public removeSessionListener(listener: (...args: any[]) => any) {
    DeviceEventEmitter.removeListener('cryptoAccountComponent.session.expired', listener);
  }
}
