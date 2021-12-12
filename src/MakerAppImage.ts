import MakerBase, { MakerOptions } from '@electron-forge/maker-base';
import { AppImageOptions, buildForge } from "app-builder-lib";
import { ForgePlatform } from '@electron-forge/shared-types';

export default class MakerAppImage extends MakerBase<AppImageOptions> {
  public name: string = 'appimage';
  public defaultPlatforms: ForgePlatform[] = ['linux'];

  isSupportedOnCurrentPlatform(): boolean {
    return process.platform === 'linux';
  }

  async make(options: MakerOptions): Promise<string[]> {
    return buildForge(options, { linux: [`appimage:${options.targetArch}`] });
  }
}
