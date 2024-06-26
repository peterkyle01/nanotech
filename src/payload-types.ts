/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    customer: Customer;
    'customer-orders': CustomerOrder;
    products: Product;
    'purchase-orders': PurchaseOrder;
    suppliers: Supplier;
    transactions: Transaction;
    media: Media;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customer".
 */
export interface Customer {
  id: number;
  Name?: string | null;
  'Phone Number'?: number | null;
  Email?: string | null;
  Address?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customer-orders".
 */
export interface CustomerOrder {
  id: number;
  Customer?: (number | null) | Customer;
  'Shipping Address'?: string | null;
  'Payment Method'?: ('mpesa' | 'bank') | null;
  Name?: (number | null) | Product;
  Quantity?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: number;
  'Product Image': number | Media;
  Name?: string | null;
  '1pcPrice'?: number | null;
  Category?: ('smartphone' | 'pc_and_laptop' | 'tablet' | 'smartwatch' | 'tv_and_flatscreen') | null;
  Quantity?: number | null;
  Description: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "purchase-orders".
 */
export interface PurchaseOrder {
  id: number;
  Supplier?: (number | null) | Supplier;
  Address?: string | null;
  'Delivery Status'?: ('pending' | 'delivered') | null;
  Product?: (number | null) | Product;
  Quantity?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "suppliers".
 */
export interface Supplier {
  id: number;
  Name?: string | null;
  'Phone Number'?: number | null;
  Email?: string | null;
  Address?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "transactions".
 */
export interface Transaction {
  id: number;
  User?:
    | ({
        relationTo: 'suppliers';
        value: number | Supplier;
      } | null)
    | ({
        relationTo: 'customer';
        value: number | Customer;
      } | null);
  'Transaction Type'?: ('sale' | 'restock') | null;
  Product?: (number | null) | Product;
  Quantity?: number | null;
  Total?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}