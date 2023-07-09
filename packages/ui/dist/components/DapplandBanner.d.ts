import { FC } from "react";
interface DapplandBannerProps {
    href: string;
    backgroundImageUrl: string;
    title?: string;
    subTitle?: string;
    onClose?: () => void;
}
export declare const DapplandBanner: FC<DapplandBannerProps>;
export {};
