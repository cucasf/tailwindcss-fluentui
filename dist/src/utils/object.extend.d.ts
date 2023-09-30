export {};
declare global {
    interface ObjectConstructor {
        byString(o: any, s: string, d?: any): any | undefined;
    }
}
