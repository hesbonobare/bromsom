// src/utils/importImages.ts

// Define the type for the context function
type WebpackContext = {
    keys(): string[];
    (id: string): string;
    <T>(id: string): T;
    resolve(id: string): string;
    id: string;
};

function importAll(r: WebpackContext) {
    return r.keys().map(r);
}

// Explicitly type the context
const context: WebpackContext = require.context('../assets/images/architectural_renders', false, /\.(png|jpe?g|svg)$/);

export const images = importAll(context);