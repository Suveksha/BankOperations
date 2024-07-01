
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

export interface Bank {
    id: number;
    name?: Nullable<string>;
    branch?: Nullable<string>;
}

export interface IQuery {
    initialized(): string | Promise<string>;
    banks(): Bank[] | Promise<Bank[]>;
    getBankById(bankId: number): Nullable<Bank> | Promise<Nullable<Bank>>;
}

export interface IMutation {
    deleteBankById(bankId: number): string | Promise<string>;
    addBankDetails(addBankArgs: BankDetailsArgs): string | Promise<string>;
    updateBankDetails(bankId: number, addBankArgs: BankDetailsArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
