import { ImageSource } from '../Image.types';
import { ImageWrapperEvents } from './ImageWrapper.types';
export declare function getImageWrapperEventHandler(events: ImageWrapperEvents | undefined, source: ImageSource): {
    onLoad: (event: any) => void;
    onTransitionEnd: () => void | undefined;
    onError: () => void | undefined;
};
//# sourceMappingURL=getImageWrapperEventHandler.d.ts.map