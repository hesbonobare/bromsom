declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

interface ImportMeta {
    webpackContext: (
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp
    ) => {
        keys(): string[];
        (id: string): any;
        <T>(id: string): T;
        resolve(id: string): string;
        id: string;
    };
}



interface RequireContext {
    keys(): string[];
    (id: string): any;
    <T>(id: string): T;
    resolve(id: string): string;
    id: string;
}

interface NodeRequire {
    context(
        directory: string,
        useSubdirectories?: boolean,
        regExp?: RegExp
    ): RequireContext;
}