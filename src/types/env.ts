export { }
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            FIREBASE_PRIVATE_KEY: string;
            COOKIE_SECRET_CURRENT: string;
            COOKIE_SECRET_PREVIOUS: string;
            API_KEY: string;
            AUTH_DOMAIN: string;
            PROJECT_ID: string;
            STORAGE_BUCKET: string;
            MESSAGING_SENDER_ID: string;
            APP_ID: string;
        }
    }
}
