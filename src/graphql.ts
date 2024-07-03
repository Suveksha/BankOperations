
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface BankDetailsArgs {
    id: number;
    name: string;
    branch: string;
}

export interface BankDTO {
    id: number;
    name: string;
    branch: string;
}

export interface IQuery {
    initialized(): string | Promise<string>;
    banks(): BankDTO[] | Promise<BankDTO[]>;
    getBankById(bankId: number): BankDTO[] | Promise<BankDTO[]>;
}

export interface IMutation {
    deleteBankById(bankId: number): string | Promise<string>;
    addBankDetails(addBankArgs: BankDetailsArgs): string | Promise<string>;
    updateBankDetails(bankId: number, addBankArgs: BankDetailsArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
