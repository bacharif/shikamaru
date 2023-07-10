import { FC, ReactElement, ReactNode } from "react";
declare type Option = {
    icon?: ReactElement;
    label: string | ReactNode;
    labelSelected: string;
    value: string;
};
interface SelectProps {
    disabled?: boolean;
    emptyMessage?: string;
    isInvalid?: boolean;
    maxH?: string;
    name: string;
    onChange: (e: string) => void;
    placeholder: string;
    options: Option[];
    value: string;
}
declare const Select: FC<SelectProps>;
export { Select };
