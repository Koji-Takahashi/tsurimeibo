/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScanRecordCreateFormInputValues = {
    userId?: string;
    timestamp?: string;
    memo?: string;
    userName?: string;
    email?: string;
};
export declare type ScanRecordCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    memo?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScanRecordCreateFormOverridesProps = {
    ScanRecordCreateFormGrid?: FormProps<GridProps>;
    userId?: FormProps<TextFieldProps>;
    timestamp?: FormProps<TextFieldProps>;
    memo?: FormProps<TextFieldProps>;
    userName?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScanRecordCreateFormProps = React.PropsWithChildren<{
    overrides?: ScanRecordCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScanRecordCreateFormInputValues) => ScanRecordCreateFormInputValues;
    onSuccess?: (fields: ScanRecordCreateFormInputValues) => void;
    onError?: (fields: ScanRecordCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ScanRecordCreateFormInputValues) => ScanRecordCreateFormInputValues;
    onValidate?: ScanRecordCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScanRecordCreateForm(props: ScanRecordCreateFormProps): React.ReactElement;
